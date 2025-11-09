<!--
  Bio - About page component with hero image and scrollable biography

  Full-viewport experience with left panel (image + heading) and
  right scrolling panel (biography text sections).

  @component
-->

<script lang="ts">
  // Hardcoded biography content (will be replaced with Prismic data in Phase 4)
  const bioContent = [
    "I'd always wanted to be a builder. With my teenage years spent obsessing over new interfaces and tinkering with code, it wasn't long before I kicked off an engineering degree. Somewhere down the line - I realised I loved building ideas a bit more when they were mine - and pivoted to design. Eventually, my journey came full circle, having connected the dots between my love for code, and passion for design.",
    "After a Master's Degree, I've fully segued into the design industry as a creative developer, bridging the worlds of binaries and hexes. And now, I've found my Ikigai - building aesthetic and functional experiences as a unicorn, one pixel at a time - while working with font nerds.",
    "I'd always wanted to be a builder. With my teenage years spent obsessing over new interfaces and tinkering with code, it wasn't long before I kicked off an engineering degree. Somewhere down the line - I realised I loved building ideas a bit more when they were mine - and pivoted to design. Eventually, my journey came full circle, having connected the dots between my love for code, and passion for design."
  ];
</script>

<main class="u-layout-vflex main">
  <section class="u-layout-vflex section-vh">
    <div class="u-layout-vflex container-xl">
      <div class="u-layout-hflex inner gap-xxl">
        <!-- Left Panel: Hero Image + Heading -->
        <div class="u-layout-vflex div">
          <div class="u-layout-vflex img">
            <img src="/images/splash.png" loading="lazy" alt="Austin Joseph" />
          </div>
          <div class="u-layout-vflex heading">
            <h1>
              I'm a
              <span class="u-font-accent">software designer &amp; creative developer</span>
              currently in London, with a strong focus on Visual &amp; Motion Design.
            </h1>
          </div>
        </div>

        <!-- Right Panel: Scrollable Biography -->
        <div class="u-layout-hflex scroll">
          <div class="u-layout-vflex track">
            <div class="u-layout-vflex section">
              {#each bioContent as paragraph}
                <div class="u-layout-hflex row gap-md">
                  <div class="u-layout-hflex block">
                    <div class="u-layout-vflex text">
                      <div class="text-md">{paragraph}</div>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .inner {
    flex: 1;
    align-self: stretch;
    max-height: 100vh;
  }

  @media screen and (max-width: 991px) {
    .inner {
      flex-direction: column;
      max-height: none;
      flex-grow: 0;
    }
  }

  .div {
    flex: 1;
    align-self: stretch;
    justify-content: space-between;
    padding-top: var(--_units---abs--32);
    padding-bottom: var(--_units---abs--36);
  }

  @media screen and (max-width: 991px) {
    .div {
      padding-top: var(--padding--xl);
      padding-bottom: 0px;
      gap: var(--gap--xl);
      flex-grow: 0;
    }
  }

  .img {
    aspect-ratio: 2;
    border: 1px solid var(--_themes---site--border--border-secondary);
    border-radius: 2px;
    align-self: stretch;
  }

  .heading {
    justify-content: flex-end;
    align-items: flex-start;
    max-width: 32rem;
  }

  .row {
    align-self: stretch;
    padding-left: 4rem;
  }

  @media screen and (max-width: 991px) {
    .row {
      padding-left: 0rem;
    }
  }

  .block {
    align-self: stretch;
    position: relative;
  }

  .text {
    max-width: 24rem;
    padding-bottom: 4.5rem;
    position: relative;
  }

  @media screen and (max-width: 991px) {
    .text {
      padding-bottom: var(--padding--xs);
      position: relative;
    }
  }

  .section {
    align-self: stretch;
  }

  .scroll {
    flex: 1;
    align-self: stretch;
    padding-top: 8rem;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 991px) {
    .scroll {
      padding-top: 0px;
      overflow: hidden;
      height: auto;
    }
  }

  .track {
    /* No specific styles needed, acts as container */
  }
</style>
