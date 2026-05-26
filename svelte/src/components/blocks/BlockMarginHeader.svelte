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
    <div class="detail">
        {#if description}
            <div class="text">
                <div class="text-md" data-motion-stagger>
                    {@html strippedDescription}
                </div>
            </div>
        {/if}
        <div class="label" data-motion-stagger>
            <span>About Me</span>
        </div>
    </div>
</header>

<style>
    :global(b-margin-header) {
        display: block;
        align-self: stretch;
    }

    .header {
        display: flex;
        flex-direction: column;
        gap: var(--padding--sm);
        align-self: stretch;
        padding: var(--padding--md) var(--global--margin);
    }

    h2 {
        font-family: var(--typeface--primary);
        font-size: var(--h2--font-size);
        line-height: var(--h2--line-height);
        letter-spacing: var(--h2--letter-spacing);
        color: var(--_themes---site--text--text-primary);
        font-weight: 400;
        margin: 0;
    }

    .heading {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: var(--gap--md);
    }

    .heading h2 {
        grid-column: span 2;
    }

    h2 :global(em) {
        font-family: var(--typeface--secondary);
        font-style: normal;
    }

    .detail {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: var(--gap--md);
        padding-top: var(--_units---abs--6);
        border-top: 1px solid rgb(255 255 255 / 12%);
    }

    .text {
        grid-column: span 2;
        display: flex;
        flex-direction: column;
        gap: var(--gap--md);
        min-width: 0;
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

    .label {
        grid-column: 3;
        justify-self: end;
        min-width: 0;
        color: var(--_themes---site--text--text-secondary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: 0;
        text-align: right;
        text-transform: uppercase;
    }

    @media screen and (max-width: 991px) {
        .header {
            gap: var(--gap--xxl);
        }

        .heading {
            grid-template-columns: 1fr;
        }

        .heading h2 {
            grid-column: 1;
        }

        .detail {
            grid-template-columns: 1fr;
            row-gap: var(--gap--sm);
            padding-top: var(--_units---abs--3);
        }

        .text,
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
