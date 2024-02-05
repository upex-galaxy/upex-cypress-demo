class FormPage {
	//* Propiedades => SELECTORES DE ELEMENTOS!!!!!
	constructor() {
		// lambda = ArrowFunction
		this.usernameInput = () => cy.get('#userName-wrapper input');
		this.userEmailInput = () => cy.get('#userEmail-wrapper input');
		this.currentAddressInput = () => cy.get('#currentAddress-wrapper textarea');
		this.permanentAddressInput = () => cy.get('#permanentAddress-wrapper textarea');
		// outputs
		this.outputName = () => cy.get('#output #name');
		this.outputCurrentAddress = () => cy.get('#output #currentAddress');
		this.outputPermanentAddress = () => cy.get('#output #permanentAddress');
	}
}

export const formPage = new FormPage();
