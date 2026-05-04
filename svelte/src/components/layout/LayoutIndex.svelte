<script lang="ts">
    import { onMount } from "svelte";

    let {
        eyebrow = "Available for freelance work",
        availabilitystatus = "available",
        title = "",
        buttonlabel = "Get in touch",
        buttonhref = "#",
        projects = [],
    }: {
        eyebrow?: string;
        availabilitystatus?:
            | "available"
            | "hold"
            | "blocked"
            | "on_hold"
            | "not_accepting";
        title?: string;
        buttonlabel?: string;
        buttonhref?: string;
        projects?: Array<{
            url: string;
            name?: string;
            title: string;
            thumbnail_base: string;
            thumbnail_overlay: string;
        }>;
    } = $props();

    let trackEl: HTMLDivElement;

    const stripId = "strip-" + Math.random().toString(36).slice(2, 8);

    let centerIndex = $state(0);
    let hoveredIndex = $state(-1);
    const activeIndex = $derived(
        hoveredIndex !== -1 ? hoveredIndex : centerIndex,
    );
    const normalizedAvailabilityStatus = $derived.by(() => {
        if (availabilitystatus === "hold" || availabilitystatus === "on_hold") {
            return "hold";
        }

        if (
            availabilitystatus === "blocked" ||
            availabilitystatus === "not_accepting"
        ) {
            return "blocked";
        }

        return "available";
    });

    onMount(() => {
        if (projects.length === 0) return;

        const onUpdate = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            if (detail?.index != null) centerIndex = detail.index;
        };
        const onHover = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            if (detail?.index != null) hoveredIndex = detail.index;
        };
        trackEl?.addEventListener("strip:update", onUpdate);
        trackEl?.addEventListener("strip:hover", onHover);
        return () => {
            trackEl?.removeEventListener("strip:update", onUpdate);
            trackEl?.removeEventListener("strip:hover", onHover);
        };
    });
</script>

<main class="main">
    <section class="section-hr">
        <div class="container-xl">
            <div class="inner" data-canvas-map>
                <div class="wrap">
                    <div class="text">
                        <div class="heading">
                            <div class="heading-text">
                                <div class="eyebrow">
                                    <div
                                        class={`marker is-${normalizedAvailabilityStatus}`}
                                    ></div>
                                    <div class="eyebrow-text">{eyebrow}</div>
                                </div>
                                <h1>
                                    {@html title}
                                </h1>
                            </div>
                            <c-button
                                label={buttonlabel}
                                href={buttonhref}
                                active
                            ></c-button>
                        </div>
                    </div>
                </div>

                <div class="track" bind:this={trackEl}>
                    {#if projects.length}
                        <div class="info" aria-hidden="true">
                            <span class="u-text-secondary u-text-info"
                                >{projects[activeIndex]?.name}</span
                            >
                            <span class="u-text-info"
                                >{projects[activeIndex]?.title}</span
                            >
                        </div>
                    {/if}
                    <c-strip id={stripId}></c-strip>
                    {@html `<script type="application/json" data-for="${stripId}">${JSON.stringify({ projects }).replace(/<\//g, "<\\/")}<\/script>`}
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    /* Host element - make custom element stretch full width */
    :global(l-index) {
        display: block;
        width: 100%;
        flex: 1;
        align-self: stretch;
    }

    /* Main container */
    .main {
        flex-direction: column;
        align-items: center;
        width: 100%;
        display: flex;
    }

    /* Section */
    .section-hr {
        background-color: var(--_themes---site--bg--bg-primary);
        color: var(--_themes---site--text--text-primary);
        flex-direction: column;
        justify-content: center;
        align-self: stretch;
        align-items: center;
        display: flex;
        position: relative;
    }

    /* Container */
    .container-xl {
        max-width: var(--max-width--xl);
        flex-direction: column;
        flex: 1;
        align-items: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        display: flex;
    }

    /* Inner layout - horizontal flex, single viewport height */
    .inner {
        flex-direction: row;
        align-items: flex-start;
        display: flex;
        flex: 1;
        align-self: stretch;
        gap: var(--gap--xxl);
        height: 100dvh;
        overflow: hidden;
    }

    @media screen and (max-width: 991px) {
        .inner {
            gap: 0;
            flex-flow: column;
            max-height: none;
        }
    }

    /* Left panel - full viewport height */
    .wrap {
        flex-direction: column;
        align-items: flex-start;
        display: flex;
        flex: 1;
        height: 100dvh;
    }

    @media screen and (max-width: 991px) {
        .wrap {
            position: relative;
            height: auto;
        }
    }

    /* Text container */
    .text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding-left: var(--global--margin);
        padding-top: var(--_units---abs--32);
        padding-bottom: var(--_units---abs--24);
        flex: 1;
        position: relative;
        align-self: stretch;
    }

    @media screen and (max-width: 991px) {
        .text {
            padding-top: 8rem;
            padding-bottom: 4rem;
            gap: 3rem;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }

    /* Right panel - canvas track */
    .track {
        display: flex;
        flex: 1;
        align-self: stretch;
        justify-content: center;
        align-items: center;
        padding-right: 24px;
        position: relative;
        height: 100dvh;
    }

    /* Bottom-aligned label inside the canvas wrapper */
    .info {
        position: absolute;
        bottom: var(--_units---abs--24);
        left: 0;
        right: 0;
        padding-left: var(--global--margin);
        padding-right: var(--global--margin);
        z-index: 12;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        gap: var(--gap--xxs);
        font-size: var(--h4--font-size, 1.25rem);
        font-weight: 400;
        line-height: var(--h4--line-height, 1.4);
        color: var(--_themes---site--text--text-primary);
    }

    @media screen and (max-width: 991px) {
        .info {
            display: none;
        }
    }

    .track :global(c-strip) {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        max-width: calc(100dvh - 2 * var(--padding--lg));
    }

    .track::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        background:
            linear-gradient(
                to right,
                var(--_themes---site--bg--bg-primary) 0%,
                transparent 14%
            ),
            linear-gradient(
                to bottom,
                var(--_themes---site--bg--bg-primary) 0%,
                transparent 14%
            ),
            linear-gradient(
                to top,
                var(--_themes---site--bg--bg-primary) 0%,
                transparent 14%
            );
    }

    @media screen and (max-width: 991px) {
        .track {
            flex: 1;
            max-width: none;
            height: auto;
            padding-right: var(--global--margin);
            padding-left: var(--global--margin);
            overflow: hidden;
        }

        .track::after {
            display: none;
        }
    }

    /* Eyebrow */
    .eyebrow {
        flex-direction: row;
        align-items: center;
        display: flex;
        grid-column-gap: 8px;
        grid-row-gap: 8px;
        color: var(--_themes---site--text--text-secondary);
        justify-content: flex-start;
    }

    .eyebrow-text {
        font-size: var(--paragraph--font-size-l);
        line-height: var(--paragraph--line-height-l);
    }

    /* Green marker dot */
    .marker {
        background-color: var(--_themes---site--bg--bg-active);
        border-radius: 4px;
        width: 8px;
        height: 4px;
    }

    .marker.is-hold {
        background-color: #ff8a00;
    }

    .marker.is-blocked {
        background-color: #e83452;
    }

    /* Heading container - row 3, aligned to bottom */
    .heading {
        flex-direction: column;
        align-items: flex-start;
        display: flex;
        gap: var(--gap--md);
        align-self: start;
        max-width: 40rem;
        justify-content: flex-start;
    }

    /* Eyebrow + h1 group — tighter internal spacing */
    .heading-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--gap--sm);
    }

    /* H1 styling */
    h1 {
        font-family: var(--h1--font-family);
        font-size: var(--h1--font-size);
        line-height: var(--h1--line-height);
        letter-spacing: var(--h1--letter-spacing);
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 400;
    }

    /* Italic accent text within h1 */
    h1 :global(em),
    h1 :global(i),
    h1 :global(.u-font-accent),
    h1 :global(span) {
        font-size: calc(var(--h1--line-height) * 0.95);
        font-family: var(--typeface--tertiary);
        font-style: italic;
    }

    @media screen and (max-width: 479px) {
        h1 :global(em),
        h1 :global(i),
        h1 :global(.u-font-accent),
        h1 :global(span) {
            font-size: calc(var(--h1--line-height) * 0.95);
            font-family: var(--typeface--tertiary);
            font-style: italic;
        }

        .eyebrow-text {
            font-size: var(--paragraph--font-size-m);
            line-height: var(--paragraph--line-height-m);
        }
    }
</style>
