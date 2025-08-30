class ImageBlock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.src = this.getAttribute("src") || "";
    this.srcset = this.getAttribute("srcset") || "";
    this.sizes = this.getAttribute("sizes") || "100vw";
    this.alt = this.getAttribute("alt") || "";
    this.loading = this.getAttribute("loading") || "lazy";

    this.innerHTML = `
      <img
        src="${this.src}"
        srcset="${this.srcset}"
        sizes="${this.sizes}"
        alt="${this.alt}"
        loading="${this.loading}"
      />
    `;
  }
}

customElements.define("el-img", ImageBlock);
