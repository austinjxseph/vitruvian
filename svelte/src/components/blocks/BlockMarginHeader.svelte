<script lang="ts">
    let { title = "", description = "", layout = "column" } = $props();

    const strippedTitle = $derived(title.replace(/^<p>(.*)<\/p>$/s, "$1"));
    const strippedDescription = $derived(
        description.replace(/^<p>(.*)<\/p>$/s, "$1"),
    );
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
        padding: 0 var(--global--margin) var(--padding--md);
    }

    h2 {
        font-family: var(--typeface--primary);
        font-size: var(--h2--font-size);
        line-height: var(--h2--line-height);
        letter-spacing: var(--h2--letter-spacing);
        color: var(--_themes---site--text--text-primary);
        font-weight: 400;
        margin: 0;
        text-wrap: balance;
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
        .detail {
            grid-template-columns: 1fr;
            row-gap: var(--gap--sm);
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
