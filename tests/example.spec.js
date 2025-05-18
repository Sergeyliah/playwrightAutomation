// test/example.spec.js
const { test, expect } = require('@playwright/test');

test('getTitle', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});
