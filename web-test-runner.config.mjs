/* eslint-disable import/no-extraneous-dependencies */
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: 'test/**/*.test.js',
  browser: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' }),
  ],
  concurrency: 10,
  nodeResolve: true,
};
