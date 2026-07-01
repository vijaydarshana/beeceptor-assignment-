require("dotenv").config();

const { test, expect } = require("@playwright/test");

test("Trigger Beeceptor endpoint using Apidog", async ({ page }) => {

    await page.goto(
        "https://app.apidog.com/user/login?redirect=https%3A%2F%2Fapp.apidog.com"
    );

    // Login
    await page.getByRole("textbox", { name: "Email" }).fill(
        process.env.APIDOG_EMAIL
    );

    await page.getByRole("button", {
        name: "Continue with Email",
    }).click();

    await page.getByRole("button", {
        name: "Continue with password",
    }).click();

    await page.getByRole("textbox", {
        name: "Password",
    }).fill(process.env.APIDOG_PASSWORD);

    await page.getByRole("button", {
        name: "Continue with password",
    }).click();

    // Create HTTP Request
    await page.locator(".AddChoicePanel__actionCard--content-JGTaXd").first().click();

    // Select POST
    await page.getByLabel("GETNew HTTP Endpoint")
        .locator("span")
        .filter({ hasText: /^GET$/ })
        .click();

    await page.getByText("POST", { exact: true }).click();

    // Enter Beeceptor URL
    await page.getByRole("textbox", {
        name: /Endpoint path/i,
    }).fill(
        "https://demo-test.free.beeceptor.com/create"
    );

    // Send Request
    await page.getByRole("button", {
        name: "Send",
    }).click();

    // Wait for response
    await page.waitForTimeout(3000);

});