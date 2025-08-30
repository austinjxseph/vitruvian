class FooterElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const rootPath = this.getAttribute("root-path") || "/";
    this.innerHTML = `
      <footer class="u-layout-vflex c-footer_component">
          <div class="u-layout-vflex c-footer_inner">
              <div class="u-layout-hflex c-footer_row copyright">
                  <div class="u-layout-vflex u-text-secondary">
                      <div class="text-sm">
                          ©
                          <span data-nav-footer="year">2025</span> Austin
                          Joseph.
                      </div>
                  </div>
              </div>
              <ul role="list" class="c-footer_row">
                  <li>
                      <a href="${rootPath}#" class="c-footer_link u-inline-block">
                          <img
                              src="${rootPath}images/icons/mail.png"
                              width="24"
                              height="24"
                          />
                          <div class="c-element_border"></div>
                      </a>
                  </li>
                  <li>
                      <a href="${rootPath}#" class="c-footer_link u-inline-block">
                          <img
                              src="${rootPath}images/icons/linkedin.png"
                              width="24"
                              height="24"
                          />
                          <div class="c-element_border"></div>
                      </a>
                  </li>
                  <li>
                      <a href="${rootPath}#" class="c-footer_link u-inline-block">
                          <img
                              src="${rootPath}images/icons/readcv.png"
                              width="24"
                              height="24"
                          />
                          <div class="c-element_border"></div>
                      </a>
                  </li>
                  <li>
                      <a href="${rootPath}#" class="c-footer_link u-inline-block">
                          <img
                              src="${rootPath}images/icons/bluesky.png"
                              width="24"
                              height="24"
                          />
                          <div class="c-element_border"></div>
                      </a>
                  </li>
                  <li>
                      <a href="${rootPath}#" class="c-footer_link u-inline-block">
                          <img
                              src="${rootPath}images/icons/github.png"
                              width="24"
                              height="24"
                          />
                          <div class="c-element_border"></div>
                      </a>
                  </li>
              </ul>
          </div>
      </footer>
    `;
  }
}
customElements.define("el-footer", FooterElement);
