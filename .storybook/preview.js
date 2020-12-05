import { addParameters, setCustomElements } from '@open-wc/demoing-storybook';

addParameters({
  docs: {
    iframeHeight: '200px',
  },
});

// TODO Generate this file with this package --> https://github.com/runem/web-component-analyzer

// async function run() {
//   const customElements = await (
//     await fetch(new URL('../custom-elements.json', import.meta.url))
//   ).json();

//   setCustomElements(customElements);
// }

// run();
