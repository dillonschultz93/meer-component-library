import { html, fixture, expect } from '@open-wc/testing';
import { Button } from '../src/components/button.js';

window.customElements.define('meer-button', Button);

describe('Button', () => {
  it('Exists', async () => {
    const button = await fixture(html` <meer-button></meer-button> `);

    expect(button).to.exist;
  });

  it('should render as a button element if no href property passed', async () => {
    await fixture(html`<meer-button></meer-button>`);

    const button = document.querySelector('meer-button');
    const innerEl = button.shadowRoot.children[0].tagName;

    expect(innerEl).to.equal('BUTTON');
  });

  it('should render as an anchor element if an href property passed', async () => {
    await fixture(html`<meer-button href="https://google.com"></meer-button>`);

    const button = document.querySelector('meer-button');
    const innerEl = button.shadowRoot.children[0].tagName;

    expect(innerEl).to.equal('A');
  });

  it('should render as a default button if no type is passed', async () => {
    await fixture(html`<meer-button></meer-button>`);

    const button = document.querySelector('meer-button');
    const innerElStyles = button.shadowRoot.children[0].classList;

    expect(innerElStyles.contains('default')).to.be.true;
  });

  it('should render as a primary button', async () => {
    await fixture(html`<meer-button type="primary"></meer-button>`);

    const button = document.querySelector('meer-button');
    const innerElStyles = button.shadowRoot.children[0].classList;

    expect(innerElStyles.contains('primary')).to.be.true;
  });

  it('should render as a ghost button', async () => {
    await fixture(html`<meer-button type="ghost"></meer-button>`);

    const button = document.querySelector('meer-button');
    const innerElStyles = button.shadowRoot.children[0].classList;

    expect(innerElStyles.contains('ghost')).to.be.true;
  });

  it('should render as a danger button', async () => {
    await fixture(html`<meer-button type="danger"></meer-button>`);

    const button = document.querySelector('meer-button');
    const innerElStyles = button.shadowRoot.children[0].classList;

    expect(innerElStyles.contains('danger')).to.be.true;
  });

  it('should render as disabled if the disabled property is passed', async () => {
    await fixture(html`<meer-button disabled></meer-button>`);

    const button = document.querySelector('meer-button');
    const innerEl = button.shadowRoot.children[0];

    expect(innerEl.disabled).to.be.true;
  });

  it('should render text in the slot', async () => {
    await fixture(html`<meer-button>Button</meer-button>`);

    const button = document.querySelector('meer-button');
    const slotContent = button.textContent;

    expect(slotContent).to.equal('Button');
  });

  it('should append an icon component with a black fill if the icon property is set with a valid icon name', async () => {
    await fixture(html`<meer-button icon="checkmark">Button</meer-button>`);

    const button = document.querySelector('meer-button');
    const slotContent = button.shadowRoot.children[0].children[1];

    expect(slotContent.tagName).to.equal('MEER-ICON');
  });

  it('should append an icon component with a white fill if the icon property is set with a valid icon name', async () => {
    await fixture(html`<meer-button type="primary" icon="checkmark">Button</meer-button>`);

    const button = document.querySelector('meer-button');
    const slotContent = button.shadowRoot.children[0].children[1];

    expect(slotContent.tagName).to.equal('MEER-ICON');
  });
});
