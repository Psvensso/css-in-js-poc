import { LitElement, property, customElement } from "lit-element";
import React from "react";
import { render } from "react-dom";
import { Greeting } from "./ReactGreetingComponent";
import { jss } from "react-jss";
@customElement("nb-react-greeting")
export class SimpleReactGreeting extends LitElement {
  @property() name = "World";
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    const mountPoint = document.createElement("span");
    const reactRoot = this.shadowRoot?.appendChild(mountPoint);
    //Nope, not injecting into shadow or on the correct place in the dom
    jss.setup({ insertionPoint: reactRoot });

    render(<Greeting name={this.name} />, reactRoot || this);
  }
}
