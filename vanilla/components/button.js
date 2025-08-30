class ButtonElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const rootPath = this.getAttribute("root-path") || "/";
    const href = this.getAttribute("href") || "#";
    const buttonText = this.getAttribute("button-label") || "View Resume";
    const isActive = this.hasAttribute("active");

    this.innerHTML = `
      <div class="c-button ${isActive ? "c-button_active" : "c-button_active"}">
          <div class="c-button_motion">
              <div class="c-button_glow"></div>
              <div class="c-button_mask">
                  <div class="c-button_cone"></div>
              </div>
          </div>
          <div class="c-button_orb">
              <div class="c-button_border"></div>
          </div>
          <a
              href="${href.startsWith("/") ? href : rootPath + href}"
              class="c-button_wrapper u-inline-block"
          >
              <div class="button-text">
                  ${buttonText}
              </div>
          </a>
      </div>
    `;
  }
}
customElements.define("el-button", ButtonElement);
