<script lang="ts">
    let {
        columns = "4",
        items = [],
    }: {
        columns?: string;
        items?: Array<{ heading?: string; content: string }>;
    } = $props();

    // Kirbytext renders each paragraph as <p>…</p>. SplitText (data-motion-stagger)
    // breaks on inline lines, so we collapse paragraph boundaries into <br><br>
    // then strip the outer wrap. Without this, multi-paragraph content leaves
    // stray <p> blocks that get nested inside .a-stagger lines and inherit
    // different styles.
    const normalizeContent = (content = "") =>
        content
            .replace(/<\/p>\s*<p>/g, "<br><br>")
            .replace(/^<p>([\s\S]*)<\/p>$/, "$1");
</script>

<section class="section">
    <div class="items">
        {#each items as item}
            <div class="item">
                <div class="content text-md" data-motion-stagger>
                    {@html normalizeContent(item.content)}
                </div>
                {#if item.heading}
                    <p class="label" data-motion-stagger>{item.heading}</p>
                {/if}
            </div>
        {/each}
    </div>
</section>

<style>
    :global(b-margin-text) {
        display: block;
        align-self: stretch;
    }

    .section {
        padding: 0 var(--global--margin) var(--padding--md);
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xl);
        row-gap: var(--gap--xl);
        width: 100%;
    }

    .item + .item {
        margin-top: var(--gap--xl);
    }

    .item {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: var(--gap--md);
        padding-top: var(--_units---abs--6);
        border-top: 1px solid rgb(255 255 255 / 12%);
    }

    .content {
        grid-column: span 2;
        min-width: 0;
    }

    .label {
        grid-column: 3;
        justify-self: end;
        margin: 0;
        color: var(--_themes---site--text--text-secondary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: 0;
        text-align: right;
        text-transform: uppercase;
    }

    .content :global(p) {
        margin: 0;
    }

    /* Group-hover dim, mirroring the header overlay links: hovering a link
       fades the rest of the block's copy so the link stays prominent.
       Uses color (not opacity) since links sit inline within the text. */
    .content {
        transition: color 0.2s;
    }

    .content :global(a) {
        color: inherit;
        text-decoration: underline;
        transition: color 0.2s;
    }

    .content:has(:global(a:hover)) {
        color: color-mix(
            in srgb,
            var(--_themes---site--text--text-primary) 20%,
            transparent
        );
    }

    .content:has(:global(a:hover)) :global(a:hover) {
        color: var(--_themes---site--text--text-primary);
    }

    @media screen and (max-width: 991px) {
        .section {
            padding-bottom: var(--padding--sm);
        }

        .item {
            grid-template-columns: 1fr;
            row-gap: var(--gap--sm);
            padding-top: var(--_units---abs--3);
        }

        .content,
        .label {
            grid-column: 1;
        }

        .label {
            justify-self: start;
            text-align: left;
            order: -1;
        }
    }
</style>
