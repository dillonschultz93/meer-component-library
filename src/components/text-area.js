import { html, css, LitElement } from 'lit-element';
import baseStyles from '../assets/styles/component-base-styles.js';

export class TextArea extends LitElement {
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
        border-color: var(--color-danger-3) !important;
      }

      .warning {
        border-color: var(--color-warning-3) !important;
      }

      .error:active,
      .error:focus {
        box-shadow: 0 0 0 2px var(--color-danger-0) !important;
      }

      .warning:active,
      .warning:focus {
        box-shadow: 0 0 0 2px var(--color-warning-0) !important;
      }

      .validation-message {
        font-family: var(--font);
        font-size: var(--font-size-small);
        line-height: 1.2rem;
        margin: 0;
        padding: var(--spacing-inset-0) 0;
        height: var(--spacing-outset-3);
        text-align: right;
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
      id: { type: String },
      name: { type: String },
      placeholder: { type: String },
      width: { type: Number },
      rows: { type: Number },
      required: { type: Boolean },
      disabled: { type: Boolean },
      limitChar: { type: Boolean },
      charLimit: { type: Number },
      resize: { type: String },
      value: { type: String },
      errorType: {
        type: String,
        hasChanged(newVal, oldVal) {
          if (newVal !== oldVal) {
            return true;
          }
          return false;
        },
      },
    };
  }

  onChangeHandler(e) {
    e.preventDefault();

    this.value = this.inputElement.value;

    if (this.limitChar) {
      const percentageLeft = this.value.length / this.charLimit;
      parseFloat(percentageLeft.toFixed(2));

      if (percentageLeft >= 0.9) {
        this.errorType = 'error';
      } else if (percentageLeft <= 0.9 && percentageLeft > 0.69) {
        this.errorType = 'warning';
      } else {
        this.errorType = undefined;
      }

      this.requestUpdate();
    }
  }

  characterLimitHandler() {
    const currentValueLength = this.value.length;

    return this.charLimit - currentValueLength;
  }

  get inputElement() {
    return this.shadowRoot.querySelector(`#${this.id}`);
  }

  constructor() {
    super();
    this.width = 100;
    this.placeholder = '';
    this.rows = 4;
    this.value = '';
  }

  render() {
    return html`
      <div class="component-container" style=${`width: ${this.width}%;`}>
        <label class=${`label ${this.disabled ? 'disabled' : ''}`} for=${this.id}>
          <slot></slot>${this.required ? html`<span class="required">*</span>` : ''}
        </label>
        <textarea
          class=${`textbox ${(this.required && this.errorType !== undefined) || (this.limitChar && this.errorType !== undefined) ? this.errorType : ''}`} 
          style=${this.resize ? `resize: ${this.resize};` : 'resize: both;'}
          id=${this.id}
          name=${this.name}
          placeholder=${this.placeholder}
          rows=${this.rows}
          maxlength=${this.limitChar && this.charLimit ? this.charLimit : ''}
          ?disabled=${this.disabled}
          .value=${this.value} 
          @input=${e => this.onChangeHandler(e)}>
        </textarea>
        <span class=${`validation-message ${this.limitChar && !this.disabled ? `validation-message--${this.errorType}` : ''}`}>
          ${this.limitChar && !this.disabled ? `${this.characterLimitHandler()} Characters Remaining` : ''}
        </span>
      </div>
    `;
  }
}
