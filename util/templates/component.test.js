/* eslint-disable import/no-extraneous-dependencies */
const changeCase = require('change-case');

module.exports = componentName => ({
  location: 'test/',
  content: `import { html, fixture, expect } from '@open-wc/testing';
import '../src/index.js';

describe('${changeCase.pascalCase(componentName)}', () => {
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
