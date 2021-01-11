import {
  html, fixture, expect, oneEvent,
} from '@open-wc/testing';
import '../src/index.js';

describe('Checkbox', () => {
  it('Exists', async () => {
    const component = await fixture(html`
      <meer-checkbox></meer-checkbox>
    `);

    expect(component).to.exist;
  });

  it('should render with the required properties', async () => {
    await fixture(html`<meer-checkbox id="test" name="test" value="test">Test</meer-checkbox>`);

    const component = document.querySelector('meer-checkbox');
    const labelEl = component.shadowRoot.querySelector('label');
    const nativeEl = component.shadowRoot.querySelector('input');

    expect(nativeEl.id).to.equal('test');
    expect(nativeEl.name).to.equal('test');
    expect(nativeEl.value).to.equal('test');
    expect(labelEl.htmlFor).to.equal('test');
    expect(component.textContent).to.equal('Test');
  });

  it('should render as disabled if the disabled property is passed', async () => {
    await fixture(html`<meer-checkbox id="test" name="test" value="test" disabled>Test</meer-checkbox>`);

    const component = document.querySelector('meer-checkbox');
    const labelEl = component.shadowRoot.querySelector('label');
    const nativeEl = component.shadowRoot.querySelector('input');

    expect(labelEl.classList.contains('disabled')).to.be.true;
    expect(nativeEl.disabled).to.be.true;
  });

  it('should render required if the required property is passed', async () => {
    await fixture(html`<meer-checkbox id="test" name="test" value="test" required>Test</meer-checkbox>`);

    const component = document.querySelector('meer-checkbox');
    const requiredIndicator = component.shadowRoot.querySelector('.required');

    expect(requiredIndicator).to.exist;
    expect(requiredIndicator.textContent).to.equal('*');
  });

  it('should fire the onChange handler method when the input is changed', async () => {
    await fixture(html`<meer-checkbox id="test" name="test" value="test">Test</meer-checkbox>`);

    const component = document.querySelector('meer-checkbox');
    const nativeEl = component.shadowRoot.querySelector('input');

    setTimeout(() => nativeEl.click());

    const { detail } = await oneEvent(component, 'change');

    expect(detail).to.be.true;
  });
});
