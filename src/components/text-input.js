import { html, css, LitElement } from 'lit-element';
import baseStyles from '../assets/styles/component-base-styles.js';

export class TextInput extends LitElement {
  static get styles() {
    return [
      baseStyles,
      css`
      :host {
        display: block;
      }

      .component-container {
        display: inline-flex;
        flex-direction: column;
        position: relative;
      }

      .label slot {
        font-size: var(--font-size-small);
        line-height: 1.7rem;
        font-weight: var(--font-weight-semi-bold);
      }

      .label {
        margin: var(--spacing--outset-0);
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
      }

      .label .required {
        color: var(--color-danger-0);
      }

      .disabled {
        cursor: not-allowed;
      }

      .disabled slot {
        color: var(--color-grey-2);
      }

      .textbox {
        outline: none;
        font-family: var(--font);
        font-size: var(--font-size-small);
        padding: var(--spacing-inset-0);
        border: 1px solid var(--color-grey-7);
        border-radius: var(--spacing-corner-1);
        color: var(--color-grey-9);
        transition: all 150ms ease-in-out;
        background: var(--color-grey-0);
      }

      .with-icon {
        padding: var(--spacing-inset-0) var(--spacing-inset-0) var(--spacing-inset-0) var(--spacing-inset-3);
      }

      .textbox:active,
      .textbox:focus,
      .textbox:hover {
        border-color: var(--color-indigo-5);
      }

      .textbox:active,
      .textbox:focus {
        box-shadow: 0 0 0 2px var(--color-indigo-2);
      }

      .textbox:disabled {
        border-color: var(--color-grey-2);
        background: var(--color-grey-1);
        cursor: not-allowed;
      }

      .textbox::placeholder {
        color: var(--color-grey-5);
      }

      .error {
        border-color: var(--color-danger-3);
      }

      .warning {
        border-color: var(--color-warning-3);
      }

      .success {
        border-color: var(--color-success-3);
      }

      meer-icon {
        position: absolute;
        top: 36px;
        left: var(--spacing-outset-0);
      }

      .validation-message {
        font-family: var(--font);
        font-size: var(--font-size-small);
        line-height: 1.2rem;
        margin: 0;
        padding: var(--spacing-inset-0) 0;
        width: 75%;
        height: var(--spacing-outset-3);
      }

      .validation-message--error {
        color: var(--color-danger-3);
      }

      .validation-message--warning {
        color: var(--color-warning-3);
      }
    `,
    ];
  }

  static get properties() {
    return {
      width: { type: Number },
      id: { type: String },
      name: { type: String },
      placeholder: { type: String },
      disabled: { type: Boolean },
      required: { type: Boolean },
      validation: { type: Boolean },
      value: { type: String },
      errorMessage: {
        type: String,
        hasChanged(newVal, oldVal) {
          if (newVal !== oldVal) {
            return true;
          }
          return false;
        },
      },
      errorType: {
        type: String,
        hasChanged(newVal, oldVal) {
          if (newVal !== oldVal) {
            return true;
          }
          return false;
        },
      },
      icon: { type: String },
    };
  }

  onChangeHandler() {
    this.value = this.inputElement.value;
  }

  get inputElement() {
    return this.shadowRoot.querySelector(`#${this.id}`);
  }

  constructor() {
    super();
    this.width = 100;
    this.value = '';
  }

  render() {
    return html`
      <div class="component-container" style=${`width: ${this.width}%;`}>
        <label class=${`label ${this.disabled ? 'disabled' : ''}`} for=${this.id}>
          <slot></slot>${this.required ? html`<span class="required">*</span>` : ''}
        </label>
        <input 
          class=${`textbox ${(this.required && this.errorType !== undefined) || (this.validation && this.errorType !== undefined) ? this.errorType : ''} ${this.icon !== undefined ? 'with-icon' : ''}`} 
          id=${this.id} name=${this.name} 
          type="text" 
          placeholder=${this.placeholder} 
          @input=${this.onChangeHandler} 
          .value=${this.value} 
          ?disabled=${this.disabled} />
        ${this.icon ? html`<meer-icon name=${this.icon}></meer-icon>` : ''}
        <span class=${`validation-message ${this.required || this.validation ? `validation-message--${this.errorType}` : ''}`}>${this.required || this.validation ? this.errorMessage : ''}</span>
      </div>
    `;
  }
}
