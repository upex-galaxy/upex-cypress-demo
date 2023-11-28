/* eslint-disable indent */
class Form {
	// Constructor
	get = {
		fullName: () => cy.get('[type = "text"]'),
		email: () => cy.get('[type = "email"]'),
		currentAddress: () => cy.get('#currentAddress'),
		permanentAddress: () => cy.get('#permanentAddress'),
		submitButton: () => cy.get('#submit'),
		logMessage: {
			fullname: () => cy.get('#name'),
			email: () => cy.get('#email'),
			errorEmail: () => cy.get('[type = "email"]'),
			currentAdd: () => cy.get('#currentAddress'),
			permanentAdd: () => cy.get('#permanentAddress'),
		},
	};

	//Methods
	enterFullName(name) {
		this.get.fullName().type(name);
	}
	enterEmail(email) {
		this.get.email().type(email);
	}
	enterCurrentAddress(cAdd) {
		this.get.currentAddress().type(cAdd);
	}
	enterPermanentAddress(pAdd) {
		this.get.permanentAddress().type(pAdd);
	}
	enterSubmitButton() {
		this.get.submitButton().click();
	}
}

export const form = new Form();
