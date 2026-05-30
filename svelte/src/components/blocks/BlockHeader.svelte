<script lang="ts">
    let { title = "", description = "", layout = "column" } = $props();

    // Strip wrapping <p> tags from Kirbytext output. For multi-paragraph
    // content we collapse inner paragraph breaks to <br><br> first, otherwise
    // a greedy outer strip leaves stray </p><p> in the middle — SplitText then
    // wraps half the lines in <p> and they pick up different styles.
    const normalizeKt = (s: string) =>
        s
            .replace(/<\/p>\s*<p>/g, "<br><br>")
            .replace(/^<p>([\s\S]*)<\/p>$/, "$1");

    const strippedTitle = $derived(normalizeKt(title));
    const strippedDescription = $derived(normalizeKt(description));
</script>

<header class="header" class:is-row={layout === "row"}>
    <div class="heading">
        <h2 data-motion-stagger>
            {@html strippedTitle}
        </h2>
    </div>
    {#if description}
        <div class="text">
            <div class="text-md" data-motion-stagger>
                {@html strippedDescription}
            </div>
        </div>
    {/if}
</header>

<style>
    /* Host element — ensure custom element stretches */
    :global(b-header) {
        display: block;
        align-self: stretch;
    }

    /* Column layout (default) */
    .header {
        display: flex;
        flex-direction: column;
        gap: var(--gap--lg);
        align-self: stretch;
        padding-left: var(--global--margin);
        padding-right: var(--global--margin);
        padding-top: var(--padding--md);
        padding-bottom: var(--padding--md);
    }

    /* Row layout */
    .header.is-row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: var(--gap--lg);
        padding-left: var(--global--margin);
        padding-right: var(--global--margin);
        padding-top: var(--padding--xl);
        padding-bottom: var(--padding--md);
        align-self: stretch;
    }

    @media screen and (max-width: 991px) {
        .header:not(.is-row) {
            padding-top: var(--padding--md);
        }

        .header.is-row {
            display: flex;
            flex-direction: column;
            gap: var(--gap--xl);
            padding-top: var(--padding--xl);
            padding-bottom: var(--padding--sm);
        }
    }

    .is-row .heading {
        grid-column: span 2;
        max-width: 36rem;
    }

    .is-row .text {
        grid-column: span 2;
    }

    @media screen and (min-width: 1729px) {
        .header.is-row {
            grid-template-columns: repeat(6, 1fr);
        }

        .is-row .heading {
            grid-column: span 3;
        }

        .is-row .text {
            grid-column: span 2;
        }
    }

    @media screen and (max-width: 991px) {
        .is-row .heading {
            max-width: none;
        }
    }

    /* Heading typography — h2 for both variants */
    h2 {
        font-family: var(--typeface--primary);
        font-size: var(--h2--font-size);
        line-height: var(--h2--line-height);
        letter-spacing: var(--h2--letter-spacing);
        color: var(--_themes---site--text--text-primary);
        font-weight: 400;
        margin: 0;
    }

    h2 :global(em) {
        font-family: var(--typeface--secondary);
        font-style: normal;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: var(--gap--md);
    }

    .text :global(p) {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-primary);
    }

    .text :global(a) {
        color: var(--_themes---site--text--text-primary);
        text-decoration: underline;
    }
</style>
