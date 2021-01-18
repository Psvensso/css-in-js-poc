import { LitElement, html, property, customElement } from "lit-element";

@customElement("nb-basic-web-component")
export class BasicWebComponent extends LitElement {
  @property() name = "World";

  render() {
    return html` <p>Hello basic, ${this.name}!</p> `;
  }
}
