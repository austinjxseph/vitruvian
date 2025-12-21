/**
 * Prismic Slice ID Migration Script
 *
 * Migrates slice IDs in existing Prismic documents:
 * - full_width_image → article_full_bleed
 * - image_block → article_image_block
 * - numbered_grid → article_numbered_grid
 * - text_block → article_text_block
 * - bio_block → static_bio_block
 *
 * APPROACH: Export → Transform → Manual Import
 *
 * Usage:
 * 1. Run: npx ts-node scripts/migrate-slice-ids.ts
 * 2. This will fetch documents and create transformed JSON files
 * 3. Import the transformed JSON via Prismic dashboard (Settings → Import/Export)
 */

import * as prismic from '@prismicio/client';
import * as fs from 'fs';
import * as path from 'path';

// Configuration
const REPOSITORY_NAME = 'vitruvian';

// Slice ID mappings (old → new)
const SLICE_ID_MAP: Record<string, string> = {
  'full_width_image': 'article_full_bleed',
  'image_block': 'article_image_block',
  'numbered_grid': 'article_numbered_grid',
  'text_block': 'article_text_block',
  'bio_block': 'static_bio_block',
};

// Document types that contain slices
const DOCUMENT_TYPES = ['project', 'page'];

// Slice zone field names to check
const SLICE_ZONE_FIELDS = ['slices', 'slices1', 'slices2', 'body'];

function transformSliceIds(obj: unknown): unknown {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => transformSliceIds(item));
  }

  if (typeof obj === 'object') {
    const newObj: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      if (key === 'slice_type' && typeof value === 'string') {
        // Transform slice_type if it's in our mapping
        newObj[key] = SLICE_ID_MAP[value] || value;
        if (SLICE_ID_MAP[value]) {
          console.log(`    Transformed: ${value} → ${SLICE_ID_MAP[value]}`);
        }
      } else {
        newObj[key] = transformSliceIds(value);
      }
    }

    return newObj;
  }

  return obj;
}

async function fetchAllDocuments(client: prismic.Client): Promise<prismic.PrismicDocument[]> {
  const allDocs: prismic.PrismicDocument[] = [];

  for (const type of DOCUMENT_TYPES) {
    try {
      const docs = await client.getAllByType(type);
      console.log(`Found ${docs.length} documents of type "${type}"`);
      allDocs.push(...docs);
    } catch (error) {
      console.log(`No documents found for type "${type}" (or type doesn't exist)`);
    }
  }

  return allDocs;
}

async function main() {
  console.log('🚀 Prismic Slice ID Migration\n');
  console.log('Repository:', REPOSITORY_NAME);
  console.log('\nMappings:');
  for (const [oldId, newId] of Object.entries(SLICE_ID_MAP)) {
    console.log(`  ${oldId} → ${newId}`);
  }
  console.log('');

  // Create client
  const client = prismic.createClient(REPOSITORY_NAME);

  // Fetch all documents
  console.log('📥 Fetching documents...\n');
  const documents = await fetchAllDocuments(client);

  if (documents.length === 0) {
    console.log('No documents found.');
    return;
  }

  // Create output directory
  const outputDir = path.join(process.cwd(), 'scripts', 'migration-output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\n📝 Processing ${documents.length} documents...\n`);

  const transformedDocs: unknown[] = [];
  let totalTransformations = 0;

  for (const doc of documents) {
    console.log(`\nDocument: ${doc.type}/${doc.uid || doc.id}`);

    const beforeJson = JSON.stringify(doc);
    const transformed = transformSliceIds(doc);
    const afterJson = JSON.stringify(transformed);

    if (beforeJson !== afterJson) {
      totalTransformations++;
      transformedDocs.push(transformed);
      console.log('  ✓ Transformed');
    } else {
      transformedDocs.push(doc);
      console.log('  - No changes needed');
    }
  }

  // Write output files
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  // Original documents (backup)
  const backupFile = path.join(outputDir, `backup-${timestamp}.json`);
  fs.writeFileSync(backupFile, JSON.stringify(documents, null, 2));
  console.log(`\n💾 Backup saved: ${backupFile}`);

  // Transformed documents (for import)
  const transformedFile = path.join(outputDir, `transformed-${timestamp}.json`);
  fs.writeFileSync(transformedFile, JSON.stringify(transformedDocs, null, 2));
  console.log(`📄 Transformed saved: ${transformedFile}`);

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary:');
  console.log(`  Total documents: ${documents.length}`);
  console.log(`  Documents transformed: ${totalTransformations}`);
  console.log('='.repeat(50));

  if (totalTransformations > 0) {
    console.log('\n📋 Next Steps:');
    console.log('');
    console.log('Option A: Manual Import (Recommended)');
    console.log('  1. Go to Prismic Dashboard → Settings → Import/Export');
    console.log('  2. Export current content as backup');
    console.log(`  3. Import: ${transformedFile}`);
    console.log('');
    console.log('Option B: Use Prismic CLI');
    console.log('  1. Install: npm install -g prismic-cli');
    console.log('  2. Login: prismic login');
    console.log(`  3. Import: prismic documents import --source ${transformedFile}`);
    console.log('');
    console.log('After import, update local files:');
    console.log('  1. Update slice model.json files with new IDs');
    console.log('  2. Update slices/index.ts');
    console.log('  3. Push to Prismic via Slice Machine');
  } else {
    console.log('\n✅ No migrations needed - all slice IDs are already up to date!');
  }
}

main().catch(console.error);
