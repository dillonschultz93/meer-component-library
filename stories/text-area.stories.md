```js script
import { html } from '@open-wc/demoing-storybook';
import '../src/index.js';

export default {
  title: 'TextArea',
  component: 'meer-text-area',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Text Area

The `<meer-text-area>` component is a typical `<textarea>` element. It should be used to collect long forms of data, such as a comment or feedback.

## How to use

### Installation

First, install the `meer` package.

```bash
npm install meer
```

Then, import the `meer` package and call the `<meer-text-area></meer-text-area>` element.

```html
<body>
  <script>
    import 'meer';
  </script>

  <meer-text-area></meer-text-area>
</body>
```

## Default

The `<meer-text-area>` component takes a few required props to be properly setup. The `id` prop sets the `id` and `for` attributes on the native `<input>`
and `<label>` elements. The `name` prop sets the `name` attribute on the native `<input>` element. The label content is set by passing a string to the main slot.

```js preview-story
export const Default = () => html`
  <meer-text-area id="default" name="default" width="50" placeholder="Please provide your feedback">Feedback</meer-text-area>
`;
```

## Max Length

To set a character limit on the component the `limitChar` and `charLimit` properties must be passed. The `charLimit` property sets the `maxlength` attribute on 
the native `<textarea>` element.

```js preview-story
export const maxLength = () => html`
  <meer-text-area id="max-length" name="max-lenght" width="50" placeholder="Please provide your feedback" limitChar charLimit="140">Feedback</meer-text-area>
`;
```

## Resize

To dynamically set the CSS property `resize` to `none` or `vertical` simply pass the `resize` property with either of those values.

### None

```js preview-story
export const resizeNone = () => html`
  <meer-text-area id="resize-none" name="resize-none" width="50" placeholder="Please provide your feedback" resize="none">Feedback</meer-text-area>
`;
```

### Vertical

```js preview-story
export const resizeVertical = () => html`
  <meer-text-area id="resize-vertical" name="resize-vertical" width="50" placeholder="Please provide your feedback" resize="vertical">Feedback</meer-text-area>
`;
```

## Property Definitions

| Name           | Type      | Value(s)             | Optional |
|----------------|-----------|----------------------|----------|
| `id`           | `String`  |                      | false    |
| `name`         | `String`  |                      | false    |
| `placeholder`  | `String`  |                      | true     |
| `width`        | `Number`  | [1-100]              | true     |
| `disabled`     | `Boolean` | true  \|  false      | true     |
| `required`     | `Boolean` | true  \|  false      | true     |
| `limitChar`    | `Boolean` | true  \|  false      | true     |
| `charLimit`    | `Number`  |                      | true     |
| `resize`       | `String`  | 'none' \| 'vertical' | true     |
