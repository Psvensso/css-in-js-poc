import { LitElement, property, customElement } from "lit-element";
import React from "react";
import { render } from "react-dom";
import { FirstComponent } from "./FirstComponent";
import { StyleSheetManager } from "styled-components";

@customElement("nb-first-web-component")
export class FirstWebComponent extends LitElement {
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
        <FirstComponent name={this.name} />
      </StyleSheetManager>
    );

    render(<Root />, reactContainer);
  }
}
