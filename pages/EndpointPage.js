class EndpointPage {
    constructor(page) {
        this.page = page;

        this.endpoint = page.getByText("demo-test");
    }

    async openEndpoint() {
        await this.endpoint.click();
    }
}

module.exports = EndpointPage;