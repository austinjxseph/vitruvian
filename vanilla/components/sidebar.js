class Sidebar extends HTMLElement {
  constructor() {
    super();
    console.log("Sidebar constructor called");
    // Don't call render here
  }

  connectedCallback() {
    console.log("Sidebar connected to DOM");
    this.render(); // Call render when connected to DOM
  }

  static get observedAttributes() {
    return ["heading", "description", "row1", "row2", "row3", "row4"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    console.log("Render method called");
    const heading = this.getAttribute("heading") || "";
    const description = this.getAttribute("description") || "";
    const row1 = this.getAttribute("row1") || "";
    const row2 = this.getAttribute("row2") || "";
    const row3 = this.getAttribute("row3") || "";
    const row4 = this.getAttribute("row4") || "";

    // Create a template element to hold our content
    const template = document.createElement("template");
    template.innerHTML = `
      <aside class="u-layout-vflex c-cs_aside">
        <div class="u-layout-hflex c-cs_header">
          <div class="u-layout-vflex c-cs_heading">
            ${heading ? `<h2>${heading}</h2>` : ""}
          </div>
          <div class="u-layout-vflex c-cs_text gap-lg">
            <div class="u-layout-hflex c-cs_row">
              <div class="u-layout-vflex c-cs_col gap-xxs">
                ${description ? `<p class="text-md">${description}</p>` : ""}
              </div>
            </div>
          </div>
        </div>
        <div class="u-layout-vflex c-cs_grid">
          ${
            row1
              ? `
            <div class="u-layout-vflex c-cs_cell gap-xxs">
              <h5>(01)</h5>
              <div class="text-md">${row1}</div>
            </div>`
              : ""
          }
          ${
            row2
              ? `
            <div class="u-layout-vflex c-cs_cell gap-xxs">
              <h5>(02)</h5>
              <div class="text-md">${row2}</div>
            </div>`
              : ""
          }
          ${
            row3
              ? `
            <div class="u-layout-vflex c-cs_cell gap-xxs">
              <h5>(03)</h5>
              <div class="text-md">${row3}</div>
            </div>`
              : ""
          }
          ${
            row4
              ? `
            <div class="u-layout-vflex c-cs_cell gap-xxs">
              <h5>(04)</h5>
              <div class="text-md">${row4}</div>
            </div>`
              : ""
          }
        </div>
      </aside>
    `;

    // Clear any existing content
    this.innerHTML = "";

    // Append the new content
    this.appendChild(template.content.cloneNode(true));
    console.log("Content appended to component");
  }
}

console.log("About to define custom element");
customElements.define("el-sidebar", Sidebar);
console.log("Custom element defined");
