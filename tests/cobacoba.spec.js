import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  // 1. Buka halaman login
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // 2. input username
  const inputUsername = page.locator('#username');
  await inputUsername.fill('student');
  // await expect(inputUsername).toHaveValue( 'student');
  
  // 2. input password
  const inputPassword = page.locator('#password');
  await inputPassword.fill('Password123');
  // await expect(inputPassword).toHaveValue( 'Password123');

  // 3. klik login
  const buttonLogin = page.locator('#submit.btn');
  await buttonLogin.click();

  // 4. verify
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  await page.context().storageState({ path: 'auth.json' });

});
