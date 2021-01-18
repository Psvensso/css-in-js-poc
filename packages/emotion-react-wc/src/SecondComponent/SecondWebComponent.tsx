import { LitElement, property, customElement } from "lit-element";
import React from "react";
import { render } from "react-dom";
import { SecondComponent } from "./SecondComponent";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

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
    const emotionCache = createCache({
      key: "nb-second-web-component",
      container: this.shadowRoot as any,
    });

    const Root = () => (
      <CacheProvider value={emotionCache}>
        <SecondComponent name={this.name} />
      </CacheProvider>
    );

    render(<Root />, reactContainer);
  }
}
