```js script
import { html } from '@open-wc/demoing-storybook';
import { Icon } from '../src/index.js';
import { iconDefs } from '../src/assets/icons/icon-def.js';

export default {
  title: 'Icon',
  component: 'meer-icon',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Icon

The `<meer-icon>` component dynamically injects `svg` paths based on the value of the `name` property.

## How to use

### Installation

First, install the `meer` package.

```bash
npm install meer
```

Then, import the `meer` package and call the `<meer-icon></meer-icon>` element.

```html
<body>
  <script type="module">
    import 'meer';
  </script>

  <meer-icon></meer-icon>
</body>
```

## Name

The `name` property defines the paths that will be injected. A list of valid icon names can be found in the property definitions table below. If no name, or an invalid name is passed, the component is simply inject a circle shape.

### Valid name
```js preview-story
export const ValidName = () => html`
  <meer-icon name="person"></meer-icon>
`;
```

### Invalid name
```js preview-story
export const InvalidName = () => html`
  <meer-icon name="not-real-icon"></meer-icon>
`;
```

## Size

The `size` property determines the height and with of the icon as a pixel value. If no size value is passed, then the icon will be defaulted to a size of 18px.

### Default size
```js preview-story
export const DefaultSize = () => html`
  <meer-icon name="heart-fill"></meer-icon>
`;
```

### Specified size
```js preview-story
export const SpecifiedSize = () => html`
  <meer-icon name="heart-outline" size="32"></meer-icon>
`;
```

## Color

The `color` property sets the fill color of the svg. The color of the icon is limited to a predetermined list of colors. For easy of use the colors have been enumerated by a set of numbers 0-9; 0 being the branded white, and 9 being the branded black. If no color value is set, then the default will be `9`, or black.

### Default color
```js preview-story
export const DefaultColor = () => html`
  <meer-icon name="chat"></meer-icon>
`;
```

### Specified color
```js preview-story
export const SpecifiedColor = () => html`
  <meer-icon name="delete" color="5"></meer-icon>
`;
```

## Interactive
The `interactive` property can be set if you plan on making the icon interactive (ex: using it as a pseudo button). All this does is add some styling, nothing more.

```js preview-story
export const Interactive = () => html`
  <meer-icon name="thumb-up-fill" color="8" interactive></meer-icon>
`;
```

## Property Definitions
| Name           | Type      | Value(s)                                                                                                                                  | Optional |
|----------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|----------|
| `name`         | `String`  | [ A list of names can be found here ]( https://github.com/dillonschultz93/meer-component-library/blob/dev/src/assets/icons/icon-def.js )  | false    |
| `size`         | `Number`  | 18   \|   24   \|   32   \|   40   \|   48   \|   64                                                                                      | true     |
| `color`        | `Number`  | 0   \|   1   \|   2   \|   3   \|   4   \|   5 \|   6   \|   7   \|   8   \|   9                                                          | true     |
| `interactive`  | `Boolean` | true  \|  false                                                                                                                           | true     |