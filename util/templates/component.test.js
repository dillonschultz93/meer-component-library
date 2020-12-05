module.exports = componentName => ({
  location: 'test/',
  content: `import { html, fixture, expect } from '@open-wc/testing';
import { ${
  componentName.charAt(0).toUpperCase() + componentName.slice(1)
  } } from '../src/components/${componentName}.js';

window.customElements.define('meer-${componentName}', ${
    componentName.charAt(0).toUpperCase() + componentName.slice(1)
  });

describe('${
  componentName.charAt(0).toUpperCase() + componentName.slice(1)
  }', () => {
  it('Exists', async () => {
    const component = await fixture(html\`
      <meer-${componentName}></meer-${componentName}>
    \`);

    expect(component).to.exist;
  });
});
`,
  extension: '.test.js',
});
