# Prismic Slice ID Migration Strategy

Based on research into the Prismic Migration API as of late 2025, the old import/export method for updating Slice IDs in existing documents is deprecated. The correct and current approach is to use the Migration API.

## Key Findings

1.  **API-Driven**: The process is scriptable using the `@prismicio/client`. It involves fetching documents, modifying the `slice_type` property in the document's JSON, and pushing the changes back.
2.  **Order of Operations is Critical**:
    1.  **Push Slice Models First**: New or renamed slice models must be pushed to your Prismic repository via Slice Machine *before* running the migration script. Prismic needs to recognize the new slice IDs before documents can be updated to use them.
    2.  **Run Migration Script**: Execute the script to update the `slice_type` values in your existing documents.
    3.  **Review and Publish**: Changes are not made live immediately. They are sent to a new "Migration Release" in your Prismic repository. You must manually review and publish this release to make the changes public.
3.  **Technical Requirements**:
    *   A **Prismic Write Token** is required. This can be generated in your repository's settings under `Settings → API & Security`.
    *   The migration script will use methods like `writeClient.getByUID()` to fetch documents and `migration.updateDocument()` to push updated document data.
4.  **Limitations**: The API has a limit of 1,000 documents per migration batch.
5.  **Warning**: Manually changing a Slice's API ID in Slice Machine without migrating the content will result in data loss for that slice in all existing documents. The migration script is essential to prevent this.

## Revised Strategy

1.  **Push Slice Changes**: Use Slice Machine to push all local slice model changes to the Prismic repository. This creates the new, target slice types.
2.  **Generate Write Token**: Obtain a permanent or temporary write token from the Prismic dashboard.
3.  **Update and Run Migration Script**: Modify the existing `scripts/migrate-slice-ids.ts` to use the `@prismicio/client` and the Migration API. The script should:
    *   Fetch all documents of the relevant custom types.
    *   Iterate through each document's body.
    *   For each slice, check if its `slice_type` needs to be renamed based on our mapping.
    *   If a rename is needed, update the `slice_type` value.
    *   Use `migration.updateDocument()` to submit the updated document.
4.  **Publish in Prismic**: Go to the Prismic dashboard, find the automatically created "Migration Release", review the changes, and publish it.
