import { html, fixture, expect } from '@open-wc/testing';
import { Icon } from '../src/components/icon.js';

window.customElements.define('meer-icon', Icon);

describe('Icon', () => {
  it('Exists', async () => {
    const component = await fixture(html`
      <meer-icon></meer-icon>
    `);

    expect(component).to.exist;
  });

  it('should render a circle if no name is passed to the name property', async () => {
    await fixture(html`<meer-icon></meer-icon>`);

    const component = document.querySelector('meer-icon');
    const assertion = component.shadowRoot.querySelector('svg').children[1].children[0];

    expect(assertion.tagName).to.equal('circle');
  });

  it('should render an svg with the name of person', async () => {
    await fixture(html`<meer-icon name="person"></meer-icon>`);

    const component = document.querySelector('meer-icon');
    const assertion = component.shadowRoot.querySelector('svg').children[0];

    expect(assertion.textContent).to.equal('person');
  });

  it('should render an svg with one path', async () => {
    await fixture(html`<meer-icon name="checkmark"></meer-icon>`);

    const component = document.querySelector('meer-icon');
    const assertion = component.shadowRoot.querySelector('svg').children[1].children;

    expect(assertion.length).to.equal(1);
  });

  it('should render an svg with a default size of 18px if no size value is passed', async () => {
    await fixture(html`<meer-icon name="heart-outline"></meer-icon>`);

    const component = document.querySelector('meer-icon');
    const assertion = component.shadowRoot.querySelector('svg');

    expect(assertion.clientWidth).to.equal(18);
    expect(assertion.clientHeight).to.equal(18);
  });

  it('should render an svg with a size of 24px', async () => {
    await fixture(html`<meer-icon name="heart-outline" size="24"></meer-icon>`);

    const component = document.querySelector('meer-icon');
    const assertion = component.shadowRoot.querySelector('svg');

    expect(assertion.clientWidth).to.equal(24);
    expect(assertion.clientHeight).to.equal(24);
  });

  it('should render an svg with a default CSS variable as the fill value', async () => {
    await fixture(html`<meer-icon name="heart-fill" size="24"></meer-icon>`);

    const component = document.querySelector('meer-icon');
    const assertion = component.shadowRoot.querySelector('svg');

    expect(assertion.getAttribute('fill')).to.equal('var(--color-grey-9)');
  });

  it('should render an svg with a CSS variable of "var(--color-grey-5)" as the fill value', async () => {
    await fixture(html`<meer-icon name="heart-fill" size="24" color="5"></meer-icon>`);

    const component = document.querySelector('meer-icon');
    const assertion = component.shadowRoot.querySelector('svg');

    expect(assertion.getAttribute('fill')).to.equal('var(--color-grey-5)');
  });

  it('should apply the "interactive" class if the interactive property is passed', async () => {
    await fixture(html`<meer-icon name="close" size="24" color="8" interactive></meer-icon>`);

    const component = document.querySelector('meer-icon');
    const assertion = component.shadowRoot.querySelector('svg');

    expect(assertion.classList.contains('interactive')).to.be.true;
  });
});
