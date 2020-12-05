import { html, css, LitElement } from 'lit-element';

export class Button extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.type = 'primary';
  }

  render() {
    return html` <button .type=${this.type}>Button</button> `;
  }
}
