```js script
import { html } from '@open-wc/demoing-storybook';
import { TextInput } from '../src/index.js';

export default {
  title: 'TextInput',
  component: 'meer-text-input',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Text Input

The `<meer-text-input>` component is an equivalent to the typical `<input type="text">` element. It should be used to collect short forms of text data.

## How to use

### Installation

```bash
npm install meer
```

Then, import the `meer` package and call the `<meer-text-input></meer-text-input>` element.

```html
<body>
  <script type="module">
    import 'meer';
  </script>

  <meer-text-input></meer-text-input>
</body>
```

## Default

The `<meer-text-input>` component takes a few required props to be properly setup. The `id` prop sets the `id` and `for` attributes on the native `<input>`
and `<label>` elements. The `name` prop sets the `name` attribute on the native `<input>` element. The label content is set by passing a string to the main slot.

```js preview-story
export const Default = () => html`
  <meer-text-input id="name" name="full-name" placeholder="Full Name" width="33">Name</meer-text-input>
`;
```

## Validation

To set up validation on the component the `validation` or `required` properties are needed to initiate the conditional styling. The `required` prop will append a '*' 
character next to the label and will add the `required` attribute to the native `<input>` element. The `errorType` property is used to indicate what error state the 
component is in. The `errorMessage` property is used to set the content of the error message that will be display below the component.

### Error

```js preview-story
export const Error = () => html`
  <meer-text-input id="name" name="full-name" placeholder="Full Name" width="33" required errorType="error" errorMessage="This field is required.">Name</meer-text-input>
`;
```

### Warning

```js preview-story
export const Warning = () => html`
  <meer-text-input id="name" name="full-name" placeholder="Full Name" width="33" required errorType="warning" errorMessage="Name is short" value="D">Name</meer-text-input>
`;
```

### Success

```js preview-story
export const Success = () => html`
  <meer-text-input id="name" name="full-name" placeholder="Full Name" width="33" required errorType="success" value="Dillon Schultz">Name</meer-text-input>
`;
```

## With icon

To have the component prepend an icon to the beginning of the input element simply pass a valid icon name to the `icon` property.

```js preview-story
export const WithIcon = () => html`
  <meer-text-input id="name" name="full-name" placeholder="Full Name" width="33" icon="person">Name</meer-text-input>
`;
```

## Prop Definitions

| Name           | Type      | Value(s)                              | Optional |
|----------------|-----------|---------------------------------------|----------|
| `id`           | `String`  |                                       | false    |
| `name`         | `String`  |                                       | false    |
| `placeholder`  | `String`  |                                       | true     |
| `width`        | `Number`  | [1-100]                               | true     |
| `disabled`     | `Boolean` | true  \|  false                       | true     |
| `required`     | `Boolean` | true  \|  false                       | true     |
| `validation`   | `Boolean` | true  \|  false                       | true     |
| `errorType`    | `String`  | 'error'  \|  'warning'  \|  'success' | true     |
| `errorMessage` | `String`  |                                       | true     |
