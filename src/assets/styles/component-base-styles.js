import { css } from 'lit-element';
import reset from './vendor/css-reset.js';
import tokens from './abstract/tokens.js';
import typography from './abstract/typogrpahy.js';

export default css`
  ${reset}

  ${tokens}

  ${typography}
`;
