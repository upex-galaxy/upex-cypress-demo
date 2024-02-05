export class SpaceCheckoutPage {
	checkoutPrice: () => Cypress.Chainable<JQuery<HTMLElement>>;

	constructor() {
		this.checkoutPrice = () => cy.get('[class^=OrderSummary] strong');
	}
}
