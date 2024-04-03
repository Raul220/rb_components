import { LitElement, css, html } from "lit";

export class RBCheckbox extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = "World";
  }

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define("rb-checkbox", RBCheckbox);
