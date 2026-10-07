import {test, expect} from '@playwright/test';

test.use({ storageState: 'auth.json' });

test ('add cart', async ({page}) => {

    await page.goto('https://www.saucedemo.com/inventory.html');
    
    const buttonAddCart = page.locator('#add-to-cart-sauce-labs-backpack');
    await buttonAddCart.click();

    const buttonAddCart2 = page.locator('#add-to-cart-sauce-labs-bike-light');
    await buttonAddCart2.click();    

    const buttonCart = page.locator('[data-test="shopping-cart-link"]');
    await buttonCart.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});