/* eslint-disable lit/no-invalid-html */
import { svg, css, LitElement } from 'lit-element';
import baseStyles from '../assets/styles/component-base-styles.js';
import { iconDefs } from '../assets/icons/icon-def.js';

export class Icon extends LitElement {
  static get styles() {
    return [
      baseStyles,
      css`
      :host {
        display: inline-block;
      }

      svg {
        display: inline;
      }

      .interactive {
        cursor: pointer;
        transition: filter 150ms ease-in-out;
      }

      .interactive:hover {
        filter: brightness(75%);
      }

      .interactive:active {
        filter: brightness(60%);
      }
    `,
    ];
  }

  static get properties() {
    return {
      name: { type: String },
      size: { type: Number },
      color: { type: Number },
      interactive: { type: Boolean },
    };
  }

  get innerPath() {
    // If there is no icon definition, return a simple circle.
    if (iconDefs[this.name] === undefined) {
      return svg`<circle cx="9" cy="9" r="9" fill="inherit"/>`;
    }

    // If the icon is a single path, inject the path shape from the definition.
    if (iconDefs[this.name].format === 'data') {
      return svg`<path fillRule="evenodd" clipRule="evenodd" d=${iconDefs[this.name].path} fill="inherit"/>`;
    }
    // If the icon is multiple paths, get the whole markup from the definition.
    return iconDefs[this.name].markup;
  }

  constructor() {
    super();
    this.color = 9;
    this.size = 18;
  }

  render() {
    return svg`
      <svg class=${this.interactive ? 'interactive' : ''} width=${`${this.size}px`} height=${`${this.size}px`} viewBox=${`0 0 ${this.size} ${this.size}`} fill=${`var(--color-grey-${this.color})`} xmlns="http://www.w3.org/2000/svg">
        <title>${this.name}</title>
        <g transform=${`scale(${this.size / 24})`}>
          ${this.innerPath}
        </g>
      </svg>
    `;
  }
}
