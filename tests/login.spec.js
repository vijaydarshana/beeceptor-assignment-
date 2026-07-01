require("dotenv").config();

const { test } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

test("Debug", async ({ page }) => {

    const login = new LoginPage(page);

    await login.open();

    await login.login(
        process.env.EMAIL,
        process.env.PASSWORD
    );

    // Open the endpoint directly
    await page.goto("https://app.beeceptor.com/console/demo-test");

    console.log("Current URL:", page.url());

    await page.waitForTimeout(2 * 1000);

    await page.goto('https://app.apidog.com/user/login?redirect=https%3A%2F%2Fapp.apidog.com%2Fmain');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('darshanavijaykumar@gmail.com');
    await page.locator('form').click();
    await page.locator('form').click();
    await page.getByRole('button', { name: 'Continue with Email' }).click();
    await page.getByRole('button', { name: 'Continue with password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Vijay@16');
    await page.getByRole('button', { name: 'Continue with password' }).click();
    await page.getByText('testHTTP').click();
    await page.locator('.appicon.app_icon.AddChoicePanel__icon-bprRl1 > svg').first().click();
    await page.locator('div').filter({ hasText: /^GET$/ }).nth(5).click();
    await page.locator('div').filter({ hasText: /^POST$/ }).first().click();
    await page.getByRole('textbox', { name: 'Endpoint path - suggest' }).click({
        modifiers: ['ControlOrMeta']
    });
    await page.getByRole('textbox', { name: 'Endpoint path - suggest' }).fill('https://demo-test.free.beeceptor.com/create');
    await page.getByRole('button', { name: 'Send' }).click();
    await page.pause();
});