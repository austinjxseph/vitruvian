<!--
  IndexCard - Reusable project card component for homepage showcase

  Displays a project card with layered images (background + overlay)
  and text description. Used in the horizontal scrolling track on homepage.

  @component
  @example
  <IndexCard
    href="/work/nuro"
    title="Designing an app for language therapy of children with Autism Spectrum Disorder."
    backgroundImage={project.data.thumbnail_base}
    overlayImage={project.data.thumbnail_overlay}
  />
-->

<script lang="ts">
  import { PrismicImage } from "@prismicio/svelte";
  import type { ImageField } from "@prismicio/client";

  /**
   * Link destination for the project
   */
  export let href: string;

  /**
   * Project description text
   */
  export let title: string;

  /**
   * Main card background image field from Prismic
   */
  export let backgroundImage: ImageField;

  /**
   * Overlay image field from Prismic
   */
  export let overlayImage: ImageField;
</script>

<a {href} class="card u-inline-block">
  <div class="card-overlay">
    <PrismicImage
      field={overlayImage}
      loading="lazy"
      widths={[640, 750, 828, 1080, 1200, 1920, 2048]}
    />
  </div>
  <div class="card-bg">
    <PrismicImage
      field={backgroundImage}
      loading="lazy"
      widths={[640, 750, 828, 1080, 1200, 1920, 2048]}
    />
  </div>
  <div class="u-layout-hflex card-text">
    <div class="u-layout-vflex card-heading">
      <h4>{title}</h4>
    </div>
  </div>
</a>

<style>
  .card {
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
    .card {
      min-height: 100vw;
      overflow: clip;
    }
  }

  .card-bg {
    height: 120%;
    position: absolute;
    inset: 0%;
  }

  .card-bg :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-overlay {
    z-index: 2;
    aspect-ratio: 1;
    height: 100%;
    position: absolute;
  }

  .card-overlay :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-text {
    z-index: 2;
    aspect-ratio: 1;
    justify-content: space-between;
    align-self: stretch;
    align-items: flex-end;
    padding: 1.5rem;
    position: relative;
  }

  @media screen and (max-width: 991px) {
    .card-text {
      padding: 0.5rem;
    }
  }

  .card-heading {
    max-width: 20rem;
  }

  @media screen and (max-width: 991px) {
    .card-heading {
      max-width: none;
    }
  }
</style>
