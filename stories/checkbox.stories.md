```js script
import { html } from '@open-wc/demoing-storybook';
import '../src/index.js';

export default {
  title: 'Checkbox',
  component: 'meer-checkbox',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Checkbox

The `<meer-checkbox>` component is an equivalent to the typical `<input type="checkbox">` element. It should be used to collect single values for submission in a form.

## How to use

### Installation

First, install the `meer` package.

```bash
npm install meer
```

Then, import the `meer` package and call the `<meer-checkbox></meer-checkbox>` element.

```html
<body>
  <script>
    import 'meer';
  </script>

  <meer-checkbox></meer-checkbox>
</body>
```

## Default

The `<meer-checkbox>` component takes a few required props to be properly setup. The `id` prop sets the `id` and `for` attributes on the native `<input>`
and `<label>` elements. The `name` property sets the `name` attribute on the native `<input>` element. The label content is set by passing a string to the main slot. The `value` property sets the `value` attribute on the native `<input>` element.

```js preview-story
export const Default = () => html`
  <meer-checkbox id="default" name="default" value="default">Default</meer-checkbox>
`;
```

## Property Definitions

| Name           | Type      | Value(s)                              | Optional |
|----------------|-----------|---------------------------------------|----------|
| `id`           | `String`  |                                       | false    |
| `name`         | `String`  |                                       | false    |
| `value`        | `String`  |                                       | false    |
| `checked`      | `Boolean` | true  \|  false                       | true     |
| `disabled`     | `Boolean` | true  \|  false                       | true     |
| `required`     | `Boolean` | true  \|  false                       | true     |