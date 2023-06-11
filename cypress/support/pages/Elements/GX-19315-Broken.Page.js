class Broken {
	elements = {
		validImage: () => cy.get('img[src="/images/Toolsqa.jpg"]'),
		validImageText: () => cy.get('p:contains("Valid image")'),
		invalidImage: () => cy.get('img[src="/images/Toolsqa_1.jpg"]'),
		brokenImageText: () => cy.get('p:contains("Broken image")'),
		validLink: () => cy.get('a[href="http://demoqa.com"]'),
		brokenLink: () => cy.get('a[href="http://the-internet.herokuapp.com/status_codes/500"]'),
		errorMessage: () => cy.contains('This page returned a 500 status code.'),
	};

	clickValidLinkAndVerifyRedirection() {
		this.elements.validLink().click();
	}

	clickBrokenLinkAndVerifyErrorMessage() {
		this.elements.brokenLink().click();
	}
}
export const broken = new Broken();
