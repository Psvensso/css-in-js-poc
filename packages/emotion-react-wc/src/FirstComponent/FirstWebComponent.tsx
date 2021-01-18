import { LitElement, property, customElement } from "lit-element";
import React from "react";
import { render } from "react-dom";
import { FirstComponent } from "./FirstComponent";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

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
    const emotionCache = createCache({
      key: "nb-first-web-component",
      container: this.shadowRoot as any,
    });

    const Root = () => (
      <CacheProvider value={emotionCache}>
        <FirstComponent name={this.name} />
      </CacheProvider>
    );

    render(<Root />, reactContainer);
  }
}
