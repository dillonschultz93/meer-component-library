import { html, fixture, expect } from '@open-wc/testing';
import { Button } from '../src/components/button.js';

window.customElements.define('ds-button', Button);

describe('Button', () => {
  it('Exists', async () => {
    const button = await fixture(html` <ds-button></ds-button> `);

    expect(button).to.exist;
  });
});
