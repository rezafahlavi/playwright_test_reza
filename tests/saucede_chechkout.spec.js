import {test, expect} from '@playwright/test';

test.use({ storageState: 'auth.json' });

test ('checkout', async ({page}) => {

    await page.goto('https://www.saucedemo.com/inventory.html');
    
    const buttonAddCart = page.locator('#add-to-cart-sauce-labs-backpack');
    await buttonAddCart.click();

    const buttonAddCart2 = page.locator('#add-to-cart-sauce-labs-bike-light');
    await buttonAddCart2.click();    

    const buttonCart = page.locator('[data-test="shopping-cart-link"]');
    await buttonCart.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    const buttonCheckout = page.locator('#checkout');
    await buttonCheckout.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    const inputFirstName = page.locator('#first-name');
    await inputFirstName.fill('budi');

    const inputLastName = page.locator('#last-name');
    await inputLastName.fill('jayadi');
    
    const inputPostalCode = page.locator('#postal-code');
    await inputPostalCode.fill('jalan indonesia emas no 2024');

    const buttonContinue = page.locator('#continue');
    await buttonContinue.click();
    
    const buttonFinish = page.locator('#finish');
    await buttonFinish.click();

    const buttonBack = page.locator('#back-to-products');
    await buttonBack.click();
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});