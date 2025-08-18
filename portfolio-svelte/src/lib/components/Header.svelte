<script>
    import { onMount } from "svelte";

    let navState = "closed";

    function toggleNavigation() {
        navState = navState === "open" ? "closed" : "open";

        if (typeof document !== "undefined") {
            document.body.style.overflow = navState === "open" ? "hidden" : "";
        }
    }

    onMount(() => {});
</script>

<header
    data-nav-state={navState}
    data-nav-element="navbar"
    class="u-layout-vflex navbar"
>
    <div class="u-layout-hflex inner">
        <button
            type="button"
            data-nav-element="overlay"
            aria-hidden={navState === "closed"}
            class="overlay"
            on:click={toggleNavigation}
            aria-label="Close navigation"
        ></button>

        <a href="/" aria-label="Go Back Home" class="logo u-inline-block">
            Austin Joseph
        </a>

        <ul role="list" class="drawer u-list-unstyled">
            <li class="links is-pr">
                <a href="/" class="link u-inline-block">
                    <div>Sandbox</div>
                    <img
                        src="/images/icons/arrow.png"
                        width="20"
                        height="20"
                        alt=""
                    />
                    <div class="c-element_border"></div>
                </a>
                <a href="/about" class="link u-inline-block">
                    <div>About</div>
                    <img
                        src="/images/icons/arrow.png"
                        width="20"
                        height="20"
                        alt=""
                    />
                    <div class="c-element_border"></div>
                </a>
                <a href="#" class="link u-inline-block">
                    <div>Resume</div>
                    <img
                        src="/images/icons/arrow.png"
                        width="20"
                        height="20"
                        alt=""
                    />
                    <div class="c-element_border"></div>
                </a>
            </li>
            <li class="links is-sec">
                <a href="#" class="link u-inline-block">
                    <div>Colophon</div>
                    <img
                        src="/images/icons/arrow.png"
                        width="20"
                        height="20"
                        alt=""
                    />
                    <div class="c-element_border"></div>
                </a>
                <a href="#" class="link u-inline-block">
                    <div>Uses</div>
                    <img
                        src="/images/icons/arrow.png"
                        width="20"
                        height="20"
                        alt=""
                    />
                    <div class="c-element_border"></div>
                </a>
                <a href="#" class="link u-inline-block">
                    <div>Thoughts</div>
                    <img
                        src="/images/icons/arrow.png"
                        width="20"
                        height="20"
                        alt=""
                    />
                    <div class="c-element_border"></div>
                </a>
            </li>
            <li class="links is-tert">
                <a href="#" class="link is-marker u-inline-block">
                    <div>London, England</div>
                    <div class="u-text-secondary">[00:00]</div>
                </a>
            </li>
        </ul>

        <button
            type="button"
            data-nav-element="menu"
            class="menu u-inline-block"
            on:click={toggleNavigation}
            on:keydown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleNavigation();
            }}
            aria-label="Toggle navigation"
        >
            <div class="marker"></div>
            <div>Menu</div>
        </button>
    </div>
</header>

<style>
    .navbar {
        z-index: 3;
        padding: 1rem var(--global--margin);
        color: var(--_themes---site--text--text-primary);
        font-size: var(--h4--font-size);
        line-height: var(--h4--line-height);
        border-bottom: 1px solid #0000;
        align-self: stretch;
        transition: all 0.3s;
        position: fixed;
        inset: 0% 0% auto;
    }

    @media screen and (max-width: 991px) {
        .navbar {
            font-size: var(--paragraph--font-size-s);
        }
    }

    .inner {
        max-width: var(--max-width--xl);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        flex: 1;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
        justify-content: space-between;
        align-self: stretch;
        align-items: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
    }

    @media screen and (max-width: 991px) {
        .inner {
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
            padding-left: 0;
            padding-right: 0;
            display: flex;
        }
    }

    .overlay {
        z-index: 3;
        opacity: 0;
        display: none;
        background-color: #0000001f;
        height: 100dvh;
        transition: opacity 0.15s;
        position: absolute;
        inset: 0%;
    }

    .logo {
        z-index: 5;
        position: relative;
    }

    .drawer {
        z-index: 4;
        padding: var(--_units---abs--6);
        background-color: var(--_themes---site--bg--bg-secondary);
        flex-flow: column;
        justify-content: flex-end;
        align-items: flex-start;
        width: 20vw;
        max-width: 300px;
        height: 100dvh;
        transition: transform 0.3s;
        display: flex;
        position: absolute;
        inset: 0% auto 0% 0%;
    }

    @media screen and (max-width: 991px) {
        .drawer {
            width: 60vw;
            max-width: none;
            padding-top: 3rem;
            padding-bottom: 3rem;
        }
    }

    .links {
        grid-column-gap: 12px;
        grid-row-gap: 12px;
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 96px;
        display: flex;
    }

    @media screen and (max-width: 991px) {
        .links.is-sec {
            display: none;
        }
    }

    .link {
        grid-column-gap: 4px;
        grid-row-gap: 4px;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 4px;
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .link.is-marker {
        grid-column-gap: 12px;
        grid-row-gap: 12px;
    }

    .menu {
        position: relative;
        grid-column-gap: 0.75rem;
        grid-row-gap: 0.75rem;
        flex-flow: row;
        justify-content: flex-end;
        align-items: center;
        display: flex;
        cursor: pointer;
    }

    .marker {
        background-color: #fff;
        border-radius: 24px;
        width: 18px;
        height: 4px;
        transition:
            width 0.3s,
            background-color 0.15s;
    }

    :global([data-nav-state="closed"]) .drawer {
        transform: translateX(-120%);
    }

    :global([data-nav-state="open"]) .drawer {
        transform: translateX(0%);
    }

    :global([data-nav-state="open"]) .overlay {
        opacity: 100%;
        display: block;
    }

    :global([data-nav-state="closed"]) .overlay {
        opacity: 0%;
        display: none;
    }

    .link:hover :global(.c-element_border) {
        transform: translateY(0%);
    }

    :global([data-nav-state="open"]) .marker {
        width: 6px;
        background-color: #e83452;
    }

    @media (min-width: 1920px) {
        .drawer {
            max-width: none;
        }
    }
</style>
