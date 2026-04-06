<script lang="ts">
    let loadedImages = $state<boolean[]>([]);

    let {
        images = [],
        spacing = "stack",
    }: {
        images?: Array<{
            url: string;
            alt?: string;
            caption?: string;
            width?: number;
            height?: number;
        }>;
        spacing?: "stack" | "trim";
    } = $props();

    function markLoaded(index: number) {
        loadedImages[index] = true;
        loadedImages = loadedImages;
    }
</script>

<section class="section">
    <div class="container-fw py-sm" class:pt-0={spacing === "trim"}>
        <div class="grid">
            {#each images as item, index}
                <figure class="figure">
                    <div class="img-wrap" class:loaded={loadedImages[index]}>
                        {#if item.url}
                            <img
                                src={item.url}
                                alt={item.alt || ""}
                                width={item.width}
                                height={item.height}
                                loading="eager"
                                decoding="async"
                                onload={() => markLoaded(index)}
                            />
                        {/if}
                    </div>
                    {#if item.caption}
                        <figcaption class="caption text-sm">
                            {item.caption}
                        </figcaption>
                    {/if}
                </figure>
            {/each}
        </div>
    </div>
</section>

<style>
    :global(b-img) {
        display: block;
        align-self: stretch;
    }

    :global(.page[data-barba-namespace="project"] b-img) {
        align-self: stretch;
    }

    .grid {
        display: grid;
        gap: var(--gap--md);
        grid-template-columns: 1fr;
        align-self: stretch;
    }

    .figure {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
        margin: 0;
    }

    .img-wrap {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background-color: color-mix(
            in srgb,
            var(--_themes---site--text--text-primary) 6%,
            var(--_themes---site--bg--bg-primary)
        );
    }

    .img-wrap img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.35s ease;
    }

    .img-wrap.loaded img {
        opacity: 1;
    }

    .caption {
        color: var(--_themes---site--text--text-secondary);
        padding-top: var(--gap--xxs);
    }
</style>
