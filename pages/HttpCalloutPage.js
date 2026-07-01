class HttpCalloutPage {
    constructor(page) {
        this.page = page;

        this.mockRules = page.locator('a').filter({ hasText: 'Mock Rules (2)' });

        this.newRuleDropdown = page.getByRole('button', {
            name: 'Toggle Dropdown'
        });

        this.newCalloutRule = page.getByRole('link', {
            name: ' New Callout Rule'
        });

        this.method = page.getByRole('combobox').first();

        this.requestPath = page.getByRole('textbox', {
            name: 'e.g. /api/path'
        });

        this.responseType = page.locator('#v2CollapseOne').getByRole('combobox');

        this.calloutUrl = page.getByRole('textbox', {
            name: 'https://your-webhook-endpoint'
        });

        this.saveButton = page.getByRole('button', {
            name: /Save/i
        });
    }

    async openCalloutPage() {
        await this.mockRules.click();
        await this.newRuleDropdown.click();
        await this.newCalloutRule.click();
    }

    async createCalloutRule() {
        await this.method.selectOption("POST");

        await this.requestPath.fill("/create");

        await this.responseType.selectOption("async");

        await this.calloutUrl.fill("https://webhook.site/YOUR-ID");

        await this.saveButton.click();
    }
}

module.exports = HttpCalloutPage;