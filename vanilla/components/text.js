class CaseStudyText extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.first = this.getAttribute("first") || "";
    this.second = this.getAttribute("second") || "";

    this.innerHTML = `
      <div class="u-layout-vflex c-cs_grid">
        <div class="u-layout-vflex c-cs_cell gap-xxs">
          <div class="text-md">${this.first}</div>
        </div>
        <div class="u-layout-vflex c-cs_cell gap-xxs">
          <div class="text-md">${this.second}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("cs-text", CaseStudyText);
