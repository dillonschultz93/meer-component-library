```js script
import { html } from '@open-wc/demoing-storybook';
import { Button } from '../src/components/button.js';

window.customElements.define('meer-button', Button);

export default {
  title: 'Button',
  component: 'meer-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Component Name

Lorem Ipsum

## Features

- a
- b
- c

## How to use

### Installation

```bash
npm install meer
```

```js
import { Button } from 'meer';

window.customElements.define('meer-button', Button);
```

```js preview-story
export const Primary = () => html`
  <meer-button></meer-button>
`;
```