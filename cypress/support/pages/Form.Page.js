class FormPage {
	//* Propiedades => SELECTORES DE ELEMENTOS!!!!!
	constructor() {
		// lambda = ArrowFunction
		this.usernameInput = () => cy.get('#userName-wrapper input');
		this.userEmailInput = () => cy.get('#userEmail-wrapper input');
		this.currentAddressInput = () => cy.get('#currentAddress-wrapper textarea');
		this.permanentAddressInput = () => cy.get('#permanentAddress-wrapper textarea');
	}
}

export const formPage = new FormPage();
