import { html, fixture, expect } from '@open-wc/testing';
import '../src/index.js';

describe('TextInput', () => {
  it('Exists', async () => {
    const component = await fixture(html`
      <meer-text-input></meer-text-input>
    `);

    expect(component).to.exist;
  });

  it('should render with required properties', async () => {
    await fixture(html`<meer-text-input id="test" name="unit-test" placeholder="Test Placeholder">Label</meer-text-input>`);

    const component = document.querySelector('meer-text-input');
    const labelEl = component.shadowRoot.querySelector('label');
    const inputEl = component.shadowRoot.querySelector('input');

    expect(inputEl.id).to.equal('test');
    expect(inputEl.name).to.equal('unit-test');
    expect(inputEl.placeholder).to.equal('Test Placeholder');
    expect(labelEl.htmlFor).to.equal('test');
    expect(component.textContent).to.equal('Label');
  });

  it('should render disabled if the disabled property is passed', async () => {
    await fixture(html`<meer-text-input id="test" name="unit-test" placeholder="Test Placeholder" disabled>Label</meer-text-input>`);

    const component = document.querySelector('meer-text-input');
    const labelEl = component.shadowRoot.querySelector('label');
    const inputEl = component.shadowRoot.querySelector('input');

    expect(labelEl.classList.contains('disabled')).to.be.true;
    expect(inputEl.disabled).to.be.true;
  });

  it('should render required if the required property is passed', async () => {
    await fixture(html`<meer-text-input id="test" name="unit-test" placeholder="Test Placeholder" required>Label</meer-text-input>`);

    const component = document.querySelector('meer-text-input');
    const requiredIndicator = component.shadowRoot.querySelector('.required');

    expect(requiredIndicator).to.exist;
    expect(requiredIndicator.textContent).to.equal('*');
  });

  it('should render with an icon if the icon property is passed a valid icon', async () => {
    await fixture(html`<meer-text-input id="test" name="unit-test" placeholder="Test Placeholder" icon="person">Label</meer-text-input>`);

    const component = document.querySelector('meer-text-input');
    const icon = component.shadowRoot.querySelector('meer-icon');

    expect(icon).to.exist;
  });

  it('should two-way bind the value of the native input element and the value property of the component', async () => {
    await fixture(html`<meer-text-input id="test" name="unit-test" placeholder="Test Placeholder">Label</meer-text-input>`);

    const component = document.querySelector('meer-text-input');
    const inputEl = component.shadowRoot.querySelector('input');
    const inputEvent = new InputEvent('input');

    inputEl.value = 'new value';
    inputEl.dispatchEvent(inputEvent);

    expect(component.value).to.equal('new value');
  });
});
