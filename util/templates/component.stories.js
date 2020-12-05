module.exports = componentName => ({
  location: 'stories/',
  content: `\`\`\`js script
import { html } from '@open-wc/demoing-storybook';
import { ${
  componentName.charAt(0).toUpperCase() + componentName.slice(1)
  } } from '../src/components/${componentName}.js';

window.customElements.define('meer-${componentName}', ${
    componentName.charAt(0).toUpperCase() + componentName.slice(1)
  });

export default {
  title: '${componentName.charAt(0).toUpperCase() + componentName.slice(1)}',
  component: 'meer-${componentName}',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
\`\`\`

# Component Name

Lorem Ipsum

## Features

- a
- b
- c

## How to use

### Installation

\`\`\`bash
npm install meer
\`\`\`

\`\`\`js
import { ${
  componentName.charAt(0).toUpperCase() + componentName.slice(1)
  } } 'meer';

window.customElements.define('meer-${componentName}', ${
    componentName.charAt(0).toUpperCase() + componentName.slice(1)
  });
\`\`\`

\`\`\`js preview-story
export const Default = () => html\`
  <meer-${componentName}></meer-${componentName}>
\`;
\`\`\`
`,
  extension: '.stories.md',
});
