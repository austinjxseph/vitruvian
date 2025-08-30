<script>
  export let rootPath = "/";

  // Get current year dynamically
  const currentYear = new Date().getFullYear();
</script>

<footer class="u-layout-vflex component">
  <div class="u-layout-vflex inner">
    <div class="u-layout-hflex row copyright">
      <div class="u-layout-vflex u-text-secondary">
        <div class="text-sm">
          ©
          <span data-nav-footer="year">{currentYear}</span> Austin Joseph.
        </div>
      </div>
    </div>
    <ul role="list" class="row">
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img
            src="{rootPath}images/icons/mail.png"
            width="24"
            height="24"
            alt="Email"
          />
          <div class="u-border"></div>
        </a>
      </li>
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img
            src="{rootPath}images/icons/linkedin.png"
            width="24"
            height="24"
            alt="LinkedIn"
          />
          <div class="u-border"></div>
        </a>
      </li>
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img
            src="{rootPath}images/icons/readcv.png"
            width="24"
            height="24"
            alt="Read CV"
          />
          <div class="u-border"></div>
        </a>
      </li>
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img
            src="{rootPath}images/icons/bluesky.png"
            width="24"
            height="24"
            alt="Bluesky"
          />
          <div class="u-border"></div>
        </a>
      </li>
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img
            src="{rootPath}images/icons/github.png"
            width="24"
            height="24"
            alt="GitHub"
          />
          <div class="u-border"></div>
        </a>
      </li>
    </ul>
  </div>
</footer>

<style>
  .component {
    padding: 1.2rem var(--global--margin);
    flex-flow: column;
    justify-content: center;
    align-self: stretch;
    align-items: flex-start;
    display: flex;
    position: relative;
  }

  .inner {
    max-width: var(--max-width--xl);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    flex-flow: row;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .row {
    grid-column-gap: 0.75rem;
    grid-row-gap: 0.75rem;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }

  .copyright {
    align-self: stretch;
  }

  .link {
    position: relative;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mobile Responsive */
  @media screen and (max-width: 991px) {
    .inner {
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
