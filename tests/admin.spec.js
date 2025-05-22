import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AdminPage } from '../pages/adminPage';

test('admin can access admin page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  await loginPage.goto();
  await loginPage.login('admin', 'adminpass');

  await page.goto('/admin');
  expect(await adminPage.isLoaded()).toBeTruthy();
});
