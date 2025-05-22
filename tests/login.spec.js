import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('user1', 'password1');

  await expect(page).toHaveURL(/.*dashboard.*/);
});
