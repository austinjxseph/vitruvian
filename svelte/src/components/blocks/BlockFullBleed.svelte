<script lang="ts">
    let isLoaded = $state(false);

    let { image = "", alt = "", caption = "", width, height } = $props();
</script>

<section class="section-fw">
    <figure class="figure">
        <div class="img-wrap" class:loaded={isLoaded}>
            {#if image}
                <img
                    src={image}
                    {alt}
                    {width}
                    {height}
                    loading="eager"
                    decoding="async"
                    onload={() => {
                        isLoaded = true;
                    }}
                />
            {/if}
        </div>
        {#if caption}
            <figcaption class="caption text-sm">{caption}</figcaption>
        {/if}
    </figure>
</section>

<style>
    .figure {
        display: flex;
        flex-direction: column;
        width: 100%;
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
        padding: var(--gap--xs) var(--global--margin);
        text-align: center;
    }
</style>
