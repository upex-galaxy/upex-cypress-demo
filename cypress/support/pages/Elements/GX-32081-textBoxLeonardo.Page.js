class textboxPage {
	get = {
		inputUserName: () => cy.get('#userName'),
		inputEmail: () => cy.get('#userEmail'),
		inputCurrentAddress: () => cy.get('#currentAddress'),
		inputPermanentAddress: () => cy.get('#permanentAddress'),
		submitButton: () => cy.get('#submit'),
		nameResult: () => cy.get('#name'),
		emailResult: () => cy.get('#email'),
		currentAddressResult: () => cy.get('#currentAddress'),
		permanentAddressResult: () => cy.get('#permanentAddress'),
	};
	fillInputUserName(val) {
		this.get.inputUserName().type(val);
	}
	fillInputEmail(val) {
		this.get.inputEmail().type(val);
	}
	fillInputCurrentAddress(val) {
		this.get.inputCurrentAddress().type(val);
	}
	fillInputPermanentAddress(val) {
		this.get.inputPermanentAddress().type(val);
	}
	clickOnSubmitButton() {
		this.get.submitButton().click();
	}
	completeForm({ userName: val, email: val2, currentAddress: val3, permanentAddress: val4 }) {
		this.get.inputUserName().type(val);
		this.get.inputEmail().type(val2);
		this.get.inputCurrentAddress().type(val3);
		this.get.inputPermanentAddress().type(val4);
		this.get.submitButton().click();
	}
}
export const textBoxPage = new textboxPage();
