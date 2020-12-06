import { css } from 'lit-element';

export default css`
  * {
    font-family: var(--font);
    color: var(--color-grey-9);
    font-weight: var(--font-weight-regular);
    font-style: normal;
  }

  .heading {
    font-weight: var(--font-weight-bold);
  }

  .heading--jumbo {
    font-size: var(--font-size-jumbo);
    line-height: 3rem;
  }

  .heading--large {
    font-size: var(--font-size-large);
    line-height: 3rem;
  }

  h1 {
    font-size: var(--font-size-h1);
    font-weight: var(--font-weight-bold);
    line-height: 3rem;
    margin-bottom: var(--spacing-outset-5);
  }

  h2 {
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-bold);
    line-height: 1.5rem;
    margin-bottom: var(--spacing-outset-2);
  }

  h3 {
    font-size: var(--font-size-h3);
    font-weight: var(--font-weight-semi-bold);
    line-height: 1.5rem;
  }

  h4 {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-semi-bold);
    line-height: 1.5rem;
  }

  h5 {
    font-size: var(--font-size-h5);
    font-weight: var(--font-weight-semi-bold);
    line-height: 1.5rem;
    font-variant: small-caps;
    text-transform: lowercase;
    letter-spacing: 1.5px;
  }

  p {
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
    line-height: 1.5rem;
    margin-bottom: var(--spacing-outset-2);
  }

  .p--small {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-regular);
    line-height: 1.7rem;
    margin-bottom: var(--spacing-outset-2);
  }

  .p--lead {
    padding: var(--spacing-inset-1);
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-h4);
    line-height: 1.5rem;
    background-color: var(--color-grey-1);
    border-radius: var(--spacing-corner-1);
    margin-bottom: var(--spacing-outset-5);
  }

  blockquote {
    background-color: var(--color-indigo-0);
    border-radius: var(--spacing-corner-1);
    border-left: var(--spacing-outset-0) solid var(--color-indigo-5);
    margin: var(--spacing-outset-0) 0;
    padding: var(--spacing-inset-1);
    display: flex;
    flex-direction: column;
    quotes: initial;
  }

  blockquote .quote {
    font-size: var(--font-size-default);
    font-weight: var(--font-weight-semi-bold);
    font-style: italic;
    color: var(--color-grey-9);
    line-height: 1.5rem;
  }

  blockquote .quote::before {
    color: var(--color-indigo-3);
    content: open-quote;
    font-size: var(--font-size-large);
    margin-right: var(--font-outset-1);
    vertical-align: -0.5rem;
  }

  blockquote .author {
    color: var(--color-grey-7);
    font-size: var(--font-size-default);
    font-weight: var(--font-weight-regular);
    text-align: right;
  }

  blockquote .author::before {
    content: '— ';
  }

  ul {
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-default);
    line-height: 1.5rem;
    margin-bottom: var(--spacing-outset-2);
  }

  ul:not(:last-child) {
    margin-bottom: var(--spacing-outset-0)
  }

  li {
    padding-left: var(--spacing-inset-1);
    text-indent: var(--spacing-inset-1) * -1;
  }

  li::before {
    content: '•';
    font-weight: var(--font-weight-bold);
    padding-right: var(--spacing-inset-0);
  }
`;
