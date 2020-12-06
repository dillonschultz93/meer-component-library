import { html, css, LitElement } from 'lit-element';
import baseStyles from '../styles/component-base-styles.js';

export class Button extends LitElement {
  static get styles() {
    return [
      baseStyles,
      css`
      button {
        color: red;
      }
    `,
    ];
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
    return html`<button .type=${this.type}>Button</button>`;
  }
}
