<script lang="ts">
    type HeaderItem = {
        id: string;
        type: "b-margin-header";
        title: string;
        description: string;
        layout: string;
    };

    type TextItem = {
        id: string;
        type: "b-margin-text";
        columns: string;
        items: Array<{ heading?: string; content: string }>;
    };

    type AboutItem = HeaderItem | TextItem;

    let {
        images = [],
        items = [],
    }: {
        images?: Array<{ url: string; alt?: string }>;
        items?: AboutItem[];
    } = $props();
</script>

<section class="section ab">
    <div class="container-xl py-lg pb-0">
        <div class="l-inner">
            <div class="col-img"></div>

            <div class="col-body">
                {#each items as item}
                    {@const blockId = `ab-${item.id}`}
                    {#if item.type === "b-margin-header"}
                        <b-margin-header id={blockId}></b-margin-header>
                        {@html `<script type="application/json" data-for="${blockId}">${JSON.stringify({ title: item.title, description: item.description, layout: item.layout })}<\/script>`}
                    {:else if item.type === "b-margin-text"}
                        <b-margin-text id={blockId}></b-margin-text>
                        {@html `<script type="application/json" data-for="${blockId}">${JSON.stringify({ columns: item.columns, items: item.items })}<\/script>`}
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    :global(l-about) {
        display: block;
        align-self: stretch;
    }

    .ab {
        min-height: calc(100vh - 64px);
    }

    .l-inner {
        width: 100%;
        gap: var(--gap--xxl);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    /* Left column - sticky star wheel */
    .col-img {
        min-height: 1px;
        min-width: 1px;
        position: sticky;
        top: var(--padding--lg, 2rem);
        height: fit-content;
        aspect-ratio: 1;
        overflow: clip;
    }

    .col-body :global(.text-md p strong) {
        color: var(--_themes---site--text--text-secondary);
    }

    .col-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 1px;
        min-width: 1px;
    }

    @media screen and (min-width: 1729px) {
        .l-inner {
            grid-template-columns: repeat(3, 1fr);
        }

        .col-img {
            grid-column: span 2;
            max-width: 40vw;
        }
    }

    @media screen and (max-width: 991px) {
        .ab {
            padding-left: 0px;
            padding-right: 0px;
        }

        .l-inner {
            grid-template-columns: 1fr;
        }

        .col-img {
            display: none;
        }

        .col-body :global(text-md) {
            text-align: left;
        }
    }
</style>
