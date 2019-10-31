customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Copyright © 2019 Reyes Vicencio Joel.";
  }
}, { extends: "footer" });