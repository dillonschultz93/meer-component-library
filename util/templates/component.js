module.exports = componentName => ({
  location: 'src/components/',
  content: `import { html, css, LitElement } from 'lit-element'

export class ${
  componentName.charAt(0).toUpperCase() + componentName.slice(1)
  } extends LitElement {
 static get styles() {
    return css\`
      :host {
        display: block;
      }
    \`;
  }

  static get properties() {}

  constructor() {
    super();
  }

  render() {
    return html\`\`;
  }
}
`,
  extension: '.js',
});
