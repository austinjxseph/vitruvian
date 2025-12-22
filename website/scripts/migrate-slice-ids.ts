/**
 * Prismic Slice ID Migration Script
 *
 * This script uses the @prismicio/client WriteClient to update slice IDs
 * within existing documents.
 *
 * It migrates the following slice IDs:
 * - full_width_image → article_full_bleed
 * - image_block      → article_image_block
 * - numbered_grid    → article_numbered_grid
 * - text_block       → article_text_block
 * - bio_block        → static_bio_block
 *
 * ---
 *
 * Pre-requisites:
 * 1. Push New Slice Models: Before running, ensure you have pushed the updated
 *    slice models (with the NEW IDs) to Prismic via Slice Machine. The API
 *    needs to know about the new slice types before documents can reference them.
 *
 * 2. Set Environment Variable: This script requires a Prismic Write Token.
 *    Create a `.env` file in the `/website` directory and add your token:
 *    PRISMIC_WRITE_TOKEN="your-prismic-write-token"
 *
 * ---
 *
 * Usage:
 * 1. Install dependencies: `npm install`
 * 2. Run the script: `npx tsx scripts/migrate-slice-ids.ts`
 *
 * ---
 *
 * What it does:
 * - Fetches all documents of the specified types ('project', 'page').
 * - Checks each document for slices with old IDs.
 * - If a document contains slices that need migration, it updates their `slice_type`.
 * - Changes are saved as drafts in a Migration Release and must be published manually.
 */

import * as prismic from "@prismicio/client";
import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from .env
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// --- Configuration ---
const REPOSITORY_NAME = "vitruvian";
const PRISMIC_WRITE_TOKEN = process.env.PRISMIC_WRITE_TOKEN;

// Slice ID mappings (old → new)
const SLICE_ID_MAP: Record<string, string> = {
  full_width_image: "article_full_bleed",
  image_block: "article_image_block",
  numbered_grid: "article_numbered_grid",
  text_block: "article_text_block",
  bio_block: "static_bio_block",
};

// Document types that may contain slices to be migrated
const DOCUMENT_TYPES = ["project", "page"];

// Rate limiting: 1 request per second as per Prismic docs
const RATE_LIMIT_MS = 1100;
// --- End Configuration ---

interface SliceItem {
  slice_type: string;
  [key: string]: any;
}

/**
 * Transforms the slice IDs within document data.
 * Also updates the slice `id` field which has format `slice_type$uuid`.
 * @param data - The document data to transform.
 * @param uid - Document UID for logging.
 * @returns The transformed data and a flag indicating if changes were made.
 */
function transformSliceData(
  data: Record<string, any>,
  uid: string
): { transformedData: Record<string, any>; hasChanged: boolean; changes: string[] } {
  let hasChanged = false;
  const changes: string[] = [];
  const transformedData = JSON.parse(JSON.stringify(data));

  for (const key in transformedData) {
    if (Array.isArray(transformedData[key])) {
      const sliceZone = transformedData[key] as SliceItem[];

      // Check if this looks like a slice zone (has slice_type in items)
      if (sliceZone.length > 0 && sliceZone.every((item) => "slice_type" in item)) {
        for (const slice of sliceZone) {
          if (slice.slice_type && SLICE_ID_MAP[slice.slice_type]) {
            const oldType = slice.slice_type;
            const newType = SLICE_ID_MAP[oldType];

            // Update slice_type
            slice.slice_type = newType;

            // Update slice id (format: slice_type$uuid)
            if (slice.id && typeof slice.id === 'string' && slice.id.includes('$')) {
              const [, uuid] = slice.id.split('$');
              slice.id = `${newType}$${uuid}`;
            }

            changes.push(`[${oldType}] → [${newType}]`);
            hasChanged = true;
          }
        }
      }
    }
  }

  return { transformedData, hasChanged, changes };
}

/**
 * Sleep for specified milliseconds.
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Main migration function.
 */
async function main() {
  console.log("🚀 Prismic Slice ID Migration\n");

  if (!PRISMIC_WRITE_TOKEN) {
    console.error(
      "❌ Error: Prismic Write Token not found.\n" +
        "Please create a `.env` file in the `/website` directory with your `PRISMIC_WRITE_TOKEN`."
    );
    return;
  }

  console.log(`Repository: ${REPOSITORY_NAME}`);
  console.log("Mappings:");
  for (const [oldId, newId] of Object.entries(SLICE_ID_MAP)) {
    console.log(`  - ${oldId} → ${newId}`);
  }
  console.log("");

  // Create clients
  const readClient = prismic.createClient(REPOSITORY_NAME);
  const writeClient = prismic.createWriteClient(REPOSITORY_NAME, {
    writeToken: PRISMIC_WRITE_TOKEN,
  });

  console.log("📥 Fetching all documents...");
  const allDocs = await readClient.dangerouslyGetAll();

  const relevantDocs = allDocs.filter((doc) => DOCUMENT_TYPES.includes(doc.type));
  console.log(`Found ${relevantDocs.length} relevant documents to check.\n`);

  const documentsToUpdate: Array<{
    doc: prismic.PrismicDocument;
    transformedData: Record<string, any>;
    changes: string[];
  }> = [];

  for (const doc of relevantDocs) {
    const { transformedData, hasChanged, changes } = transformSliceData(
      doc.data,
      doc.uid || doc.id
    );
    if (hasChanged) {
      documentsToUpdate.push({ doc, transformedData, changes });
      console.log(`  📄 ${doc.uid || doc.id} (${doc.type}):`);
      for (const change of changes) {
        console.log(`      - ${change}`);
      }
    }
  }

  if (documentsToUpdate.length === 0) {
    console.log("\n✅ All documents are already up-to-date. No migration needed.");
    return;
  }

  console.log(`\n📝 Found ${documentsToUpdate.length} documents to update.\n`);
  console.log("Creating migration with updated documents...\n");

  // Create a Migration instance
  const migration = prismic.createMigration();

  // Register each document update with the migration
  for (const { doc, transformedData } of documentsToUpdate) {
    // Create a modified copy of the document with the transformed data
    const modifiedDoc = {
      ...doc,
      data: transformedData,
    } as prismic.PrismicDocument;

    // Register the update in the migration
    migration.updateDocument(modifiedDoc, doc.uid || doc.id);
    console.log(`  📋 Registered: ${doc.uid || doc.id}`);
  }

  console.log("\n🚀 Executing migration...\n");

  try {
    await writeClient.migrate(migration, {
      reporter: (event) => {
        switch (event.type) {
          case "start":
            console.log(`  Starting: ${event.data.pending.documents} documents`);
            break;
          case "documents:updating":
            console.log(`  Updating: ${event.data.document.title} (${event.data.current}/${event.data.total})`);
            break;
          case "documents:updated":
            console.log(`  ✓ Updated ${event.data.updated} documents`);
            break;
          case "end":
            console.log(`  Completed: ${event.data.migrated.documents} documents migrated`);
            break;
        }
      },
    });
  } catch (error: any) {
    console.error("\n❌ Migration failed:");
    console.error(`  Error type: ${error.constructor?.name || 'Unknown'}`);
    console.error(`  Message: ${error.message || 'No message'}`);
    if (error.response) {
      console.error(`  Response: ${JSON.stringify(error.response)}`);
    }
    if (error.url) {
      console.error(`  URL: ${error.url}`);
    }
    return;
  }

  console.log("\n" + "=".repeat(60));
  console.log("✅ MIGRATION COMPLETE");
  console.log("=".repeat(60));

  console.log("\n📋 Next Steps:");
  console.log(`  1. Go to: https://${REPOSITORY_NAME}.prismic.io/`);
  console.log("  2. Navigate to 'Migration Releases' (rocket icon 🚀)");
  console.log("  3. Find and review the migration release");
  console.log("  4. Publish the release to make changes live");
  console.log("=".repeat(60));
}

main().catch((err) => {
  console.error("\nAn unexpected error occurred:");
  console.error(err);
});
