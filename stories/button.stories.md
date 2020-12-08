```js script
import { html } from '@open-wc/demoing-storybook';
import { Button } from '../src/index.js';

export default {
  title: 'Button',
  component: 'meer-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Button

The `<meer-button>` component is a typical `<button>` element. It should be used to submit forms or to behave as a link.

## How to use

### Installation

First, install the `meer` package.

```bash
npm install meer
```

Then, import the `meer` package and call the `<meer-button></meer-button>` element.

```html
<body>
  <script type="module">
    import 'meer';
  </script>

  <meer-button></meer-button>
</body>
```

## Style

The style of the component is based on the `type` property.

### Default

If a `type` property is not set the component will default to this style.

```js preview-story
export const Default = () => html`
  <meer-button>Default</meer-button>
`;
```

### Primary

Passing `"primary"` to the `type` property will style the component this way.

```js preview-story
export const Primary = () => html`
  <meer-button type="primary">Primary</meer-button>
`;
```

### Ghost

Passing `"ghost"` to the `type` property will style the component this way.

```js preview-story
export const Ghost = () => html`
  <meer-button type="ghost">Ghost</meer-button>
`;
```

### Danger

Passing `"danger"` to the `type` property will style the component this way.

```js preview-story
export const Danger = () => html`
  <meer-button type="danger">Danger</meer-button>
`;
```

## Disabled

To set the component in a disabled state simply pass the `disabled` property to it.

```js preview-story
export const Disabled = () => html`
  <meer-button disabled>Disabled</meer-button>
`;
```

## Link

To have the button behave like an anchor element pass a url string to the `href` property.

```js preview-story
export const Link = () => html`
  <meer-button type="ghost" href="https://dillonschultz.design">Link</meer-button>
`;
```

## With icon

To have the button behave like an anchor element pass a url string to the `href` property.

```js preview-story
export const WithIcon = () => html`
  <meer-button type="primary" icon="checkmark">Submit</meer-button>
`;
```

## Property Definitions

| Name       | Type                            | Value(s)                                                              | Optional |
|------------|---------------------------------|-----------------------------------------------------------------------|----------|
| `type`     | `String`                        | ' default '   \|   ' primary '   \|   ' ghost '   \|   ' danger '     | true     |
| `disabled` | `Boolean`                       | true  \|  false                                                       | true     |
| `href`     | `String`                        | Any valid url/path                                                    | true     |