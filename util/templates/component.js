/* eslint-disable import/no-extraneous-dependencies */
const changeCase = require('change-case');

module.exports = componentName => ({
  location: 'src/components/',
  content: `import { html, css, LitElement } from 'lit-element';
import baseStyles from '../assets/styles/component-base-styles.js';

export class ${changeCase.pascalCase(componentName)} extends LitElement {
 static get styles() {
    return [
      baseStyles,
      css\`
      :host {
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
      <div>${changeCase.paramCase(componentName)}</div>
    \`;
  }
}
`,
  extension: '.js',
});
