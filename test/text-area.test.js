import { html, fixture, expect } from '@open-wc/testing';
import '../src/index.js';

describe('TextArea', () => {
  it('Exists', async () => {
    const component = await fixture(html`
      <meer-text-area></meer-text-area>
    `);

    expect(component).to.exist;
  });

  it('should render with required properties', async () => {
    await fixture(html`
      <meer-text-area id="test" name="test">Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const labelEl = component.shadowRoot.querySelector('label');

    expect(component.id).to.equal('test');
    expect(component.name).to.equal('test');
    expect(labelEl.htmlFor).to.equal('test');
    expect(component.textContent).to.equal('Test');
  });

  it('should render as disabled if the disabled property is passed', async () => {
    await fixture(html`
      <meer-text-area id="disabled" name="disabled" disabled>Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const labelEl = component.shadowRoot.querySelector('label');
    const nativeEl = component.shadowRoot.querySelector('textarea');

    expect(labelEl.classList.contains('disabled')).to.be.true;
    expect(nativeEl.disabled).to.be.true;
  });

  it('should render as required if the required property is passed', async () => {
    await fixture(html`
      <meer-text-area id="required" name="required" required>Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const requiredIndicator = component.shadowRoot.querySelector('.required');

    expect(requiredIndicator).to.exist;
    expect(requiredIndicator.textContent).to.equal('*');
  });

  it('should resize both directions if the resize property is not passed', async () => {
    await fixture(html`
      <meer-text-area id="resize" name="resize">Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const nativeEl = component.shadowRoot.querySelector('textarea');

    expect(nativeEl.style.resize).to.equal('both');
  });

  it('should resize in the horizontal directions if the resize property is passed with the value of "vertical"', async () => {
    await fixture(html`
      <meer-text-area id="resize" name="resize" resize="vertical">Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const nativeEl = component.shadowRoot.querySelector('textarea');

    expect(nativeEl.style.resize).to.equal('vertical');
  });

  it('should not resize if the resize property is passed with the value of "none"', async () => {
    await fixture(html`
      <meer-text-area id="resize" name="resize" resize="none">Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const nativeEl = component.shadowRoot.querySelector('textarea');

    expect(nativeEl.style.resize).to.equal('none');
  });

  it('should two-way bind the value of the native input element', async () => {
    await fixture(html`
      <meer-text-area id="test" name="test">Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const nativeEl = component.shadowRoot.querySelector('textarea');
    const inputEvent = new InputEvent('input');

    nativeEl.value = 'This is a test';
    nativeEl.dispatchEvent(inputEvent);

    expect(component.value).to.equal('This is a test');
  });

  it('should set the errorType property to undefined if the length of the value is not 70% of the remaining characters', async () => {
    await fixture(html`
      <meer-text-area id="test" name="test" limitChar charLimit="10">Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const nativeEl = component.shadowRoot.querySelector('textarea');
    const inputEvent = new InputEvent('input');

    nativeEl.value = '123';
    nativeEl.dispatchEvent(inputEvent);

    expect(component.value).to.equal('123');
    expect(component.errorType).to.be.undefined;
  });

  it('should set the errorType property to "warning" if the length of the value is 70% of the remaining characters', async () => {
    await fixture(html`
      <meer-text-area id="test" name="test" limitChar charLimit="10">Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const nativeEl = component.shadowRoot.querySelector('textarea');
    const inputEvent = new InputEvent('input');

    nativeEl.value = '1234567';
    nativeEl.dispatchEvent(inputEvent);

    expect(component.value).to.equal('1234567');
    expect(component.errorType).to.equal('warning');
  });

  it('should set the errorType property to "error" if the length of the value is 90% of the remaining characters', async () => {
    await fixture(html`
      <meer-text-area id="test" name="test" limitChar charLimit="10">Test</meer-text-area>
    `);

    const component = document.querySelector('meer-text-area');
    const nativeEl = component.shadowRoot.querySelector('textarea');
    const inputEvent = new InputEvent('input');

    nativeEl.value = '123456789';
    nativeEl.dispatchEvent(inputEvent);

    expect(component.value).to.equal('123456789');
    expect(component.errorType).to.equal('error');
  });
});
