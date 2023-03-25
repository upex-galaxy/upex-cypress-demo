class Form {
	get = {
		inputName: () => cy.get('#userName'),
		inputEmail: () => cy.get('#userEmail'),
		inputCaddress: () => cy.get('#currentAddress'),
		inputPaddress: () => cy.get('#permanentAddress'),
		assertConfirm: () => cy.get('[class*="border"]'),
	};

	visit() {
		cy.visit('text-box');
	}

	fillForm(userName, userEmail, currentAddress, permanentAddress) {
		this.get.inputName().type(userName);
		this.get.inputEmail().type(userEmail);
		this.get.inputCaddress().type(currentAddress);
		this.get.inputPaddress().type(permanentAddress);
	}

	submitForm() {
		cy.contains('Submit').click();
	}
}
export const form = new Form();
