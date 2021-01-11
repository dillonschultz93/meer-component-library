import { css } from 'lit-element';

export default css`
:host {
  /* # Colors */

  /* ## Neutral Palette */
  --color-grey-0: rgba(249, 249, 249, 1);
  --color-grey-1: rgba(236, 237, 238, 1);
  --color-grey-2: rgba(223, 224, 226, 1);
  --color-grey-3: rgba(209, 211, 212, 1);
  --color-grey-4: rgba(193, 195, 198, 1);
  --color-grey-5: rgba(176, 179, 182, 1);
  --color-grey-6: rgba(156, 160, 164, 1);
  --color-grey-7: rgba(133, 137, 142, 1);
  --color-grey-8: rgba(103, 108, 114, 1);
  --color-grey-9: rgba(57, 63, 71, 1);

  /* ## Primary Palette */
  --color-indigo-0: rgba(237, 236, 255, 1);
  --color-indigo-1: rgba(218,215,255,1);
  --color-indigo-2: rgba(195,191,255,1);
  --color-indigo-3: rgba(169,163,255,1);
  --color-indigo-4: rgba(135,126,255,1);
  --color-indigo-5: rgba(80,68,255,1);
  --color-indigo-6: rgba(72,61,229,1);
  --color-indigo-7: rgba(62,53,200,1);
  --color-indigo-8: rgba(51,43,164,1);
  --color-indigo-9: rgba(36,30,115,1);

  --color-teal-0: rgba(235,255,246,1);
  --color-teal-1: rgba(213,255,237,1);
  --color-teal-2: rgba(189,255,226,1);
  --color-teal-3: rgba(160,255,213,1);
  --color-teal-4: rgba(123,255,197,1);
  --color-teal-5: rgba(68,255,174,1);
  --color-teal-6: rgba(61,231,157,1);
  --color-teal-7: rgba(54,203,138,1);
  --color-teal-8: rgba(45,169,115,1);
  --color-teal-9: rgba(32,123,84,1);

  /* ## Semantic Palette */
  --color-success-0: rgba(68,255,80,1);
  --color-success-1: rgba(61,231,72,1);
  --color-success-2: rgba(54,203,63,1);
  --color-success-3: rgba(45,169,53,1);
  --color-success-4: rgba(32,123,38,1);

  --color-warning-0: rgba(255,207,144,1);
  --color-warning-1: rgba(255,191,109,1);
  --color-warning-2: rgba(255,174,68,1);
  --color-warning-3: rgba(230,157,61,1);
  --color-warning-4: rgba(202,138,54,1);

  --color-danger-0: rgba(255,167,161,1);
  --color-danger-1: rgba(255,133,124,1);
  --color-danger-2: rgba(255,80,68,1);
  --color-danger-3: rgba(230,72,61,1);
  --color-danger-4: rgba(202,63,53,1);
  --color-danger-5: rgba(167,52,44,1);

  --color-info-0: rgba(150,196,255,1);
  --color-info-1: rgba(114,175,255,1);
  --color-info-2: rgba(68,149,255,1);
  --color-info-3: rgba(61,134,230,1);
  --color-info-4: rgba(53,117,201,1);

  /* # Typography */

  /* ## Font */
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  sans-serif;

  /* ## Hierarchy */
  --font-size-jumbo: 3rem;
  --font-size-large: 2.5rem;
  --font-size-h1: 2rem;
  --font-size-h2: 1.5rem;
  --font-size-h3: 1.25rem;
  --font-size-h4: 1.125rem;
  --font-size-h5: 1rem;
  --font-size-default: 1rem;
  --font-size-small: 0.875rem;

  /* ## Weight */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;

  /* # Spacing */

  /* ## Outset/Margin */
  --spacing-outset-0: 0.5rem;
  --spacing-outset-1: 1rem;
  --spacing-outset-2: 1.5rem;
  --spacing-outset-3: 2rem;
  --spacing-outset-4: 2.5rem;
  --spacing-outset-5: 3rem;
  --spacing-outset-6: 3.5rem;
  --spacing-outset-7: 4rem;
  --spacing-outset-8: 4.5rem;
  --spacing-outset-9: 5rem;

  /* ## Inset/Padding */
  --spacing-inset-0: 0.5rem;
  --spacing-inset-1: 1rem;
  --spacing-inset-2: 1.5rem;
  --spacing-inset-3: 2rem;
  --spacing-inset-4: 2.5rem;
  --spacing-inset-5: 3rem;
  --spacing-inset-6: 3.5rem;
  --spacing-inset-7: 4rem;
  --spacing-inset-8: 4.5rem;
  --spacing-inset-9: 5rem;

  /* ## Corner Radius */
  --spacing-corner-0: 0.125rem;
  --spacing-corner-1: 0.25rem;
  --spacing-corner-2: 0.5rem; 

  /* # Misc. */

  /* ## Drop Shadows */
  --drop-shadow-initial: 0rem 0.25rem 0.5rem rgba(57, 63, 71, 0.2);
  --drop-shadow-hover: 0rem 0.375rem 1rem rgba(57, 63, 71, 0.2);
  --drop-shadow-active: 0rem 0.25rem 0.5rem rgba(57, 63, 71, 0.2);
}
`;
