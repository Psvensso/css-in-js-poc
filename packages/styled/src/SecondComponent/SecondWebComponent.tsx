import { LitElement, property, customElement } from "lit-element";
import React from "react";
import { render } from "react-dom";
import { SecondComponent } from "./SecondComponent";
import { StyleSheetManager } from "styled-components";
@customElement("nb-second-web-component")
export class SecondWebComponent extends LitElement {
  @property() name = "World";
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    const reactContainer = document.createElement("span");
    (this.shadowRoot as ShadowRoot).appendChild(reactContainer);

    const Root = () => (
      <StyleSheetManager target={this.shadowRoot as any}>
        <SecondComponent name={this.name} />
      </StyleSheetManager>
    );

    render(<Root />, reactContainer);
  }
}
