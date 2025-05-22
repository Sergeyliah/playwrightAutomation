import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { UserDetailsPage } from '../pages/userDetailsPage';

test('user can access details page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const userDetailsPage = new UserDetailsPage(page);

  await loginPage.goto();
  await loginPage.login('user1', 'password1');

  await page.goto('/user-details');
  expect(await userDetailsPage.isLoaded()).toBeTruthy();
});
