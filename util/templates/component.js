module.exports = componentName => ({
  location: 'src/components/',
  content: `import { html, css, LitElement } from 'lit-element';
import baseStyles from '../styles/component-base-styles.js';

export class ${
  componentName.charAt(0).toUpperCase() + componentName.slice(1)
  } extends LitElement {
 static get styles() {
    return [
      baseStyles,
      css\`
      div {
        display: block;
      }
    \`,
    ];
  }

  static get properties() {}

  constructor() {
    super();
  }

  render() {
    return html\`
      <div>${componentName}</div>
    \`;
  }
}
`,
  extension: '.js',
});
