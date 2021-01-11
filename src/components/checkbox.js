import { html, css, LitElement } from 'lit-element';
import baseStyles from '../assets/styles/component-base-styles.js';

export class Checkbox extends LitElement {
  static get styles() {
    return [
      baseStyles,
      css`
      :host {
        display: block;
      }

      .component-container {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
      }

      .label slot {
        font-size: var(--font-size-small);
        line-height: 100%;
        font-weight: var(--font-weight-semi-bold);
      }

      .label {
        margin: 0;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        cursor: pointer;
      }

      .required {
        color: var(--color-danger-0);
      }

      .disabled {
        cursor: not-allowed;
      }

      .disabled slot {
        color: var(--color-grey-2);
      }

      .checkbox {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        margin: 0 var(--spacing-outset-0) 0 0;
        width: var(--font-size-default);
        height: var(--font-size-default);
        background-color: transparent;
        border: 1px solid var(--color-grey-7);
        border-radius: var(--spacing-corner-0);
        transition: all 150ms ease-in-out;
        cursor: pointer;
        position: relative;
      }

      .checkbox:hover {
        border-color: var(--color-indigo-5);
      }

      .checkbox:active:not(:disabled) {
        background-color: var(--color-indigo-0);
        border-color: var(--color-indigo-6);
        transform: scale(0.9);
      }

      .checkbox:focus:not(:disabled) {
        outline: none;
        box-shadow: 0 0 0 2px var(--color-indigo-2);
      }

      .checkbox:checked {
        border-color: var(--color-indigo-5);
        background-color: var(--color-indigo-5);
      }

      .checkbox:checked:after {
        content: url("data:image/svg+xml, %3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2714%27%20height%3D%2714%27%20fill%3D%27none%27%3E%3Cpath%20fill%3D%27%23F9F9F9%27%20fill-rule%3D%27evenodd%27%20d%3D%27M11.825%202.517a.583.583%200%2001.85.8l-.425-.4-.425-.4zM1.75%208.284l.435-.39.107.12a133.034%20133.034%200%20001.163%201.273%2044.628%2044.628%200%2000.962%201.011c.219-.218.52-.526.877-.896.738-.764%201.71-1.783%202.677-2.803a1280.092%201280.092%200%20003.524-3.731l.33-.35.425.399.425.4-.33.35a1745.77%201745.77%200%2001-3.527%203.735%20458.64%20458.64%200%2001-2.685%202.81c-.37.384-.685.706-.913.933-.113.113-.208.207-.28.273a2.33%202.33%200%2001-.103.092.878.878%200%2001-.146.097h-.002c-.02.01-.121.06-.258.06a.63.63%200%2001-.3-.078l-.002-.001a.87.87%200%2001-.103-.067%202.055%202.055%200%2001-.15-.125%208.897%208.897%200%2001-.35-.34c-.267-.27-.601-.625-.927-.976a123.01%20123.01%200%2001-1.174-1.285l-.109-.122.434-.39zm0%200l.435-.39a.583.583%200%2010-.869.78l.434-.39z%27%20clip-rule%3D%27evenodd%27%2F%3E%3C%2Fsvg%3E");
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .checkbox:checked:active {
        background-color: var(--color-indigo-7);
        border-color: var(--color-indigo-7);
      }

      .checkbox:disabled {
        border-color: var(--color-grey-2);
        background: var(--color-grey-1);
        cursor: not-allowed;
      }
    `,
    ];
  }

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      disabled: { type: Boolean },
      required: { type: Boolean },
      checked: { type: Boolean },
      value: { type: String },
    };
  }

  onChangeHandler() {
    this.checked = this.inputElement.checked;
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: this.checked }));
  }

  get inputElement() {
    return this.shadowRoot.querySelector(`#${this.id}`);
  }

  constructor() {
    super();
    this.checked = false;
  }

  render() {
    return html`
      <div class="component-container">
        <input
        class="checkbox"
        id=${this.id}
        name=${this.name} 
        type="checkbox"
        @input=${this.onChangeHandler}
        .value=${this.value}
        .checked=${this.checked}
        .disabled=${this.disabled} />
        <label class=${`label ${this.disabled ? 'disabled' : ''}`} for=${this.id}>
          <slot></slot>${this.required ? html`<span class="required">*</span>` : ''}
        </label>
      </div>
    `;
  }
}
