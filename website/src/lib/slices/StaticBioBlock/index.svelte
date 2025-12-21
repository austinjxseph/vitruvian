<!--
  Bio - Bio section with staggered images and content

  Two-column layout with staggered image gallery on left and
  scrollable content (intro, bio, and flexible item sections) on right.

  @component
-->

<script lang="ts">
  import { PrismicRichText, PrismicImage } from "@prismicio/svelte";

  export let slice;

  const primary = slice.primary;
  const images = primary.bio_images || [];
  const items = primary.bio_items || [];

  // Group items by section (header starts a new group)
  type ItemGroup = {
    heading: string;
    description: any;
    rows: typeof items;
  };

  function groupItems(items: typeof primary.bio_items): ItemGroup[] {
    const groups: ItemGroup[] = [];
    let currentGroup: ItemGroup | null = null;

    for (const item of items) {
      if (item.item_type === "header") {
        if (currentGroup) {
          groups.push(currentGroup);
        }
        currentGroup = {
          heading: item.item_heading || "",
          description: item.item_description || null,
          rows: []
        };
      } else if (item.item_type === "row" && currentGroup) {
        currentGroup.rows.push(item);
      }
    }

    if (currentGroup) {
      groups.push(currentGroup);
    }

    return groups;
  }

  const groupedItems = groupItems(items);
</script>

<section class="u-layout-vflex section">
  <div class="u-layout-vflex container-xl py-xl">
    <div class="u-layout-hflex inner">
      <!-- Left Panel: Staggered Images -->
      <div class="u-layout-vflex images-column">
        {#each images as item, i}
          <div class="u-layout-hflex slide slide-{i + 1}">
            <div class="image-wrapper">
              <PrismicImage field={item.image} loading="lazy" />
            </div>
          </div>
        {/each}
      </div>

      <!-- Right Panel: Content -->
      <div class="u-layout-vflex content-column">
        <!-- Bio Heading + Content -->
        <div class="u-layout-vflex text-blocks">
          {#if primary.bio_heading}
            <div class="intro-text">
              <PrismicRichText field={primary.bio_heading} />
            </div>
          {/if}

          {#if primary.bio_content}
            <div class="u-layout-vflex bio-text">
              <PrismicRichText field={primary.bio_content} />
            </div>
          {/if}
        </div>

        <!-- Dynamic Sections -->
        {#each groupedItems as group}
          <div class="u-layout-vflex section-block">
            <h3 class="u-font-accent section-heading">{group.heading}</h3>
            {#if group.description && group.description.length > 0}
              <div class="section-description">
                <PrismicRichText field={group.description} />
              </div>
            {/if}
            {#each group.rows as row}
              <div class="u-layout-vflex cell">
                <div class="u-layout-vflex cell-header">
                  {#if row.item_index}
                    <!-- Education-style: heading + index on same line -->
                    <div class="u-layout-hflex cell-row-between">
                      <p class="cell-title">{row.item_heading}</p>
                      <p class="cell-title">{row.item_index}</p>
                    </div>
                  {:else if row.item_heading}
                    <p class="cell-title">{row.item_heading}</p>
                  {/if}
                  {#if row.item_subtitle}
                    <p class="cell-subtitle">{row.item_subtitle}</p>
                  {/if}
                </div>
                {#if row.item_description && row.item_description.length > 0}
                  <div class="u-layout-hflex cell-row">
                    <div class="cell-description">
                      <PrismicRichText field={row.item_description} />
                    </div>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .inner {
    width: 100%;
    gap: var(--padding--xl);
    align-items: flex-start;
  }

  @media screen and (max-width: 991px) {
    .inner {
      flex-direction: column;
      gap: var(--gap--xxl);
    }
  }

  /* Left column - Images */
  .images-column {
    flex: 1;
    gap: var(--gap--md);
    max-width: 600px;
    max-height: 600px;
    min-height: 1px;
    min-width: 1px;
    align-self: stretch;
  }

  @media screen and (max-width: 991px) {
    .images-column {
      max-width: none;
      max-height: none;
      width: 100%;
    }
  }

  .slide {
    flex: 1;
    min-height: 1px;
    min-width: 1px;
    justify-content: flex-end;
    width: 100%;
  }

  .slide-1 {
    padding-right: 0;
  }

  .slide-2 {
    padding-right: 80px;
  }

  .slide-3 {
    padding-right: 160px;
  }

  @media screen and (max-width: 991px) {
    .slide-2,
    .slide-3 {
      padding-right: 0;
    }
  }

  .image-wrapper {
    flex: 1;
    height: 100%;
    min-height: 1px;
    min-width: 1px;
    background-color: var(--_themes---neutrals--100);
  }

  .image-wrapper :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Right column - Content */
  .content-column {
    flex: 1;
    max-width: 500px;
    min-height: 1px;
    min-width: 1px;
    gap: var(--padding--xl);
  }

  @media screen and (max-width: 991px) {
    .content-column {
      max-width: none;
      width: 100%;
    }
  }

  .text-blocks {
    gap: var(--gap--xxl);
    width: 100%;
  }

  .intro-text {
    max-width: 480px;
  }

  .intro-text :global(p) {
    font-family: var(--typeface--primary);
    font-size: var(--h3--font-size);
    line-height: var(--h3--line-height);
    letter-spacing: var(--h3--letter-spacing);
    color: var(--_themes---site--text--text-primary);
    text-shadow: 4px 4px 60px black;
  }

  .intro-text :global(em) {
    font-family: var(--typeface--secondary);
    font-style: normal;
  }

  .bio-text {
    gap: var(--gap--md);
  }

  .bio-text :global(p) {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: var(--paragraph--line-height-s);
    letter-spacing: var(--paragraph--letter-spacing);
    color: var(--_themes---site--text--text-primary);
  }

  .section-block {
    gap: var(--gap--lg);
    width: 100%;
  }

  .section-heading {
    font-family: var(--typeface--secondary);
    font-size: var(--h3--font-size);
    line-height: var(--h3--line-height);
    letter-spacing: var(--h3--letter-spacing);
    color: var(--_themes---site--text--text-primary);
    max-width: 480px;
    text-shadow: 4px 4px 60px black;
    font-weight: 400;
    font-style: normal;
  }

  .section-description :global(p) {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: var(--paragraph--line-height-s);
    letter-spacing: var(--paragraph--letter-spacing);
    color: var(--_themes---site--text--text-primary);
  }

  .cell {
    gap: var(--gap--md);
    width: 100%;
  }

  .cell-header {
    gap: var(--gap--xxs);
    width: 100%;
  }

  .cell-title {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: 1.2;
    color: var(--_themes---site--text--text-primary);
  }

  .cell-subtitle {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: var(--paragraph--line-height-s);
    letter-spacing: var(--paragraph--letter-spacing);
    color: var(--_themes---site--text--text-secondary);
  }

  .cell-row {
    width: 100%;
  }

  .cell-row-between {
    width: 100%;
    justify-content: space-between;
  }

  .cell-description {
    flex: 1;
  }

  .cell-description :global(p) {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: var(--paragraph--line-height-s);
    letter-spacing: var(--paragraph--letter-spacing);
    color: var(--_themes---site--text--text-primary);
  }
</style>
