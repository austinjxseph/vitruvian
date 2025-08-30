class HeaderElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const rootPath = this.getAttribute("root-path") || "/";
    this.innerHTML = `
      <header
          data-nav-state="closed"
          data-nav-element="navbar"
          class="u-layout-vflex c-navbar"
      >
          <div class="u-layout-hflex c-navbar_inner">
              <div data-nav-element="overlay" aria-hidden="" class="c-navbar_overlay"></div>

              <a
                  href="${rootPath}index.html"
                  aria-label="Go Back Home"
                  class="c-navbar_logo u-inline-block"
              >
                  Austin Joseph
              </a>
              <ul role="list" class="c-navbar_drawer u-list-unstyled">
                  <li class="c-navbar_links is-pr">
                      <h3 class="c-navbar_link u-inline-block">
                          <div>Sandbox</div>
                          <div class="c-element_border"></div>
                      </h3>
                      <h3 class="c-navbar_link u-inline-block">
                          <div>Gallery</div>
                          <div class="c-element_border"></div>
                      </h3>
                      <h3 class="c-navbar_link u-inline-block">
                          <div>About</div>
                          <div class="c-element_border"></div>
                      </h3>
                      <h3 class="c-navbar_link u-inline-block">
                          <div>Resume</div>
                          <div class="c-element_border"></div>
                      </h3>
                  </li>
                  <li class="c-navbar_links is-sec">
                      <a href="${rootPath}#" class="c-navbar_link u-inline-block">
                          <div>Colophon</div>
                          <div class="c-element_border"></div>
                      </a>
                      <a href="${rootPath}#" class="c-navbar_link u-inline-block">
                          <div>Uses</div>
                          <div class="c-element_border"></div>
                      </a>
                      <a href="${rootPath}#" class="c-navbar_link u-inline-block">
                          <div>Thoughts</div>
                          <div class="c-element_border"></div>
                      </a>
                  </li>
              </ul>
              <div
                  data-nav-element="menu"
                  class="c-navbar_menu u-inline-block"
              >
                  <div class="c-navbar_marker"></div>
                  <div>Menu</div>
              </div>
          </div>
      </header>
    `;
  }
}

customElements.define("el-header", HeaderElement);
