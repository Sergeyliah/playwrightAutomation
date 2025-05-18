// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',               // Folder where your test files are located
  timeout: 30000,                   // Test timeout (30 seconds)
  retries: 1,                       // Retry failed tests once
  use: {
    headless: false,                 // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', // Take screenshots on failure
    video: 'retain-on-failure',    // Save video if test fails
    baseURL: 'https://google.com',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});
