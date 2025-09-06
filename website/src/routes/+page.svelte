<script>
  import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
  <title>Austin Joseph, a Design Engineer based in London</title>
  <meta
    name="description"
    content="Design Engineer focused on brand and web, obsessed with building experiences bridging engineering and design."
  />
  <script
    src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67a7f3d67329e4f8c06e55ab"
    type="text/javascript"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
  ></script>
  <script src="https://unpkg.com/split-type@0.3.4/umd/index.min.js"></script>
  <script src="/js/script.js"></script>
  <script src="/js/ix.js"></script>
  <script src="/js/motion.js"></script>
</svelte:head>

<main class="u-layout-vflex main">
  <section class="u-layout-vflex section-hr">
    <div class="u-layout-vflex container-xl">
      <div class="u-layout-hflex s-hm_inner">
        <div class="u-layout-vflex s-hm_wrap">
          <div class="u-layout-hflex s-hm_text">
            <div class="u-layout-vflex s-hm_heading gap-md">
              <div class="u-layout-hflex s-hm_eyebrow">
                <div class="s-hm_marker"></div>
                <div class="text-lg">Available for freelance work</div>
              </div>
              <h1>
                Digital Designer and Creative Developer,
                <span class="u-font-accent">obsessed</span>
                with building products bridging engineering and design. Avid
                <span class="u-font-accent">Garamond</span>
                lover and passionate Times New Roman hater.
              </h1>
              <Button active={true} buttonText="View Resume" />
            </div>
          </div>
        </div>
        <div class="u-layout-vflex s-hm_track">
          <a href="/work/nuro" class="s-hm_card u-inline-block"
            ><img
              src="/images/overlay-01.webp"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="s-hm_card-overlay"
            /><img
              src="/images/hm-01.webp"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="s-hm_card-bg"
            />
            <div class="u-layout-hflex s-hm_card-text">
              <div class="u-layout-vflex s-hm_card-heading">
                <h4>
                  Designing an app for language therapy of children with Autism
                  Spectrum Disorder.
                </h4>
              </div>
            </div>
          </a>
          <a href="/work/copacabana" class="s-hm_card u-inline-block"
            ><img
              src="/images/overlay-02.webp"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="s-hm_card-overlay"
            /><img
              src="/images/hm-02.webp"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="s-hm_card-bg"
            />
            <div class="u-layout-hflex s-hm_card-text">
              <div class="u-layout-vflex s-hm_card-heading">
                <h4>
                  Conceptualising an app for an outdoor cafe chain with live
                  events in Dubai.
                </h4>
              </div>
            </div>
          </a>
          <a href="/work/circle" class="s-hm_card u-inline-block"
            ><img
              src="/images/overlay-03.webp"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="s-hm_card-overlay"
            /><img
              src="/images/hm-03.webp"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="s-hm_card-bg"
            />
            <div class="u-layout-hflex s-hm_card-text">
              <div class="u-layout-vflex s-hm_card-heading">
                <h4>
                  Redesigning the interface of a purpose-led social network.
                </h4>
              </div>
            </div>
          </a>
          <a href="/work/petrichor" class="s-hm_card u-inline-block"
            ><img
              src="/images/overlay-04.webp"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="s-hm_card-overlay"
            /><img
              src="/images/hm-04.webp"
              loading="lazy"
              sizes="100vw"
              alt=""
              class="s-hm_card-bg"
            />
            <div class="u-layout-hflex s-hm_card-text">
              <div class="u-layout-vflex s-hm_card-heading">
                <h4>
                  Designing the brand and website for an educational consultancy
                  startup.
                </h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .s-hm_inner {
    flex: 1;
    align-self: stretch;
  }

  @media screen and (max-width: 991px) {
    .s-hm_inner {
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      flex-flow: column;
      max-height: none;
    }
  }

  .s-hm_wrap {
    position: sticky;
    flex: 1;
    top: 0px;
    height: 100dvh;
  }

  @media screen and (max-width: 991px) {
    .s-hm_wrap {
      position: relative;
      height: auto;
    }
  }

  .s-hm_text {
    padding-right: var(--global--margin);
    padding-left: var(--global--margin);
    padding-top: var(--_units---abs--32);
    padding-bottom: var(--_units---abs--24);
    flex: 1;
    position: relative;
    justify-content: start;
    align-self: stretch;
    align-items: flex-start;
  }

  @media screen and (max-width: 991px) {
    .s-hm_text {
      padding-top: 8rem;
      padding-bottom: 4rem;
      grid-column-gap: 3rem;
      grid-row-gap: 3rem;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .s-hm_track {
    padding-right: var(--global--margin);
    padding-left: var(--global--margin);
    padding-top: var(--_units---abs--32);
    padding-bottom: var(--_units---abs--16);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    flex: 1;
    align-self: stretch;
    max-width: calc(100vh - 2 * (var(--padding--lg)));
    height: fit-content;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media screen and (max-width: 991px) {
    .s-hm_track {
      grid-column-gap: var(--global--margin);
      grid-row-gap: var(--global--margin);
      flex: 1;
      max-width: none;
      padding-top: 0;
      overflow: hidden;
    }
  }

  .s-hm_eyebrow {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    color: var(--_themes---site--text--text-secondary);
    justify-content: flex-start;
    align-items: center;
  }

  .s-hm_marker {
    background-color: var(--_themes---site--bg--bg-active);
    border-radius: 4px;
    width: 8px;
    height: 4px;
  }

  .s-hm_heading {
    align-self: flex-end;
    max-width: 40rem;
    justify-content: flex-start;
  }

  .s-hm_list {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    padding: 0;
    margin: 0;
  }

  @media screen and (max-width: 991px) {
    .s-hm_list {
      display: none;
    }
  }

  .s-hm_link {
    height: var(--paragraph--line-height-m);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    opacity: 0.4;
    font-size: var(--paragraph--font-size-m);
    line-height: var(--paragraph--line-height-m);
    cursor: pointer;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    transition: opacity 0.4s;
    display: flex;
    overflow: clip;
  }

  .s-hm_link:hover {
    opacity: 1;
  }

  .s-hm_mask {
    height: var(--paragraph--line-height-m);
  }

  .s-hm_card {
    aspect-ratio: 1;
    object-fit: cover;
    flex-flow: column;
    flex: 1;
    justify-content: flex-end;
    align-self: stretch;
    align-items: flex-start;
    width: 100%;
    display: flex;
    position: relative;
    overflow: clip;
  }

  @media screen and (max-width: 991px) {
    .s-hm_card {
      min-height: 100vw;
      overflow: clip;
    }
  }

  .s-hm_card-bg {
    height: 120%;
    position: absolute;
    inset: 0%;
  }

  .s-hm_card-overlay {
    z-index: 2;
    aspect-ratio: 1;
    height: 100%;
    position: absolute;
  }

  .s-hm_card-text {
    z-index: 2;
    aspect-ratio: 1;
    justify-content: space-between;
    align-self: stretch;
    align-items: flex-end;
    padding: 1.5rem;
    position: relative;
  }

  @media screen and (max-width: 991px) {
    .s-hm_card-text {
      padding: 0.5rem;
    }
  }

  .s-hm_card-heading {
    max-width: 20rem;
  }

  @media screen and (max-width: 991px) {
    .s-hm_card-heading {
      max-width: none;
    }
  }
</style>
