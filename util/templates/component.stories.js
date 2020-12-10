/* eslint-disable import/no-extraneous-dependencies */
const changeCase = require('change-case');

module.exports = componentName => ({
  location: 'stories/',
  content: `\`\`\`js script
import { html } from '@open-wc/demoing-storybook';
import '../src/index.js';

export default {
  title: '${changeCase.pascalCase(componentName)}',
  component: 'meer-${componentName}',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
\`\`\`

# ${changeCase.capitalCase(componentName)}

Lorem Ipsum

## How to use

### Installation

First, install the \`meer\` package.

\`\`\`bash
npm install meer
\`\`\`

Then, import the \`meer\` package and call the \`<meer-${componentName}></meer-${componentName}>\` element.

\`\`\`html
<body>
  <script>
    import 'meer';
  </script>

  <meer-${componentName}></meer-${componentName}>
</body>
\`\`\`

\`\`\`js preview-story
export const Default = () => html\`
  <meer-${componentName}></meer-${componentName}>
\`;
\`\`\`

## Property Definitions
`,
  extension: '.stories.md',
});
