import { html, css, LitElement } from 'lit-element';
import baseStyles from '../styles/component-base-styles.js';

export class Button extends LitElement {
  static get styles() {
    return [
      baseStyles,
      css`
      :host {
        display: inline-block;
      }

      button {
        appearance: none;
        outline: none;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        font-size: var(--font-size-regular);
        border-radius: var(--spacing-corner-1);
        padding: var(--spacing-inset-0) var(--spacing-inset-1);
        transition: all 250ms ease-in-out;
        margin: var(--spacing-outset-0);
        box-sizing: border-box;
        height: 100%;
      }

      button slot {
        font-weight: var(--font-weight-semi-bold);
        text-decoration: none;
      }

      .default {
        background: var(--color-grey-1);
        border: 1px solid var(--color-grey-2);
        box-shadow: var(--drop-shadow-initial);
      }

      .default slot {
        color: var(--color-grey-9);
      }

      .default:focus {
        box-shadow: var(--drop-shadow-hover);
        border-color: var(--color-grey-4);
      }

      .default:hover {
        background: var(--color-grey-2);
        box-shadow: var(--drop-shadow-hover);
        border-color: var(--color-grey-4);
      }

      .default:active {
        background: var(--color-grey-4);
        box-shadow: var(--drop-shadow-active);
        transform: scale(0.99);
      }

      .default:disabled {
        border: none;
        background: var(--color-grey-2);
        box-shadow: none;
        cursor: not-allowed;
      }

      .default:disabled slot {
        color: var(--color-grey-5);
      }
    `,
    ];
  }

  static get properties() {
    return {
      type: { type: String },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.type = 'default';
  }

  render() {
    return html`
      <button class=${this.type} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
