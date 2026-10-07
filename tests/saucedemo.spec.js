import { test, expect } from '@playwright/test';

test ('login', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    
    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');

    const inputPassword = page.locator('#password');
    await inputPassword.fill('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.context().storageState({ path: 'auth.json' });
});

