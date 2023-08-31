class textboxPage {
	get = {
		inputUserName: () => cy.get('#userName'),
		inputEmail: () => cy.get('#userEmail'),
		inputCurrentAddress: () => cy.get('#currentAddress'),
		inputPermanentAddress: () => cy.get('#permanentAddress'),
		submitButton: () => cy.get('#submit'),
		nameResult: () => cy.get('#name'),
		emailResult: () => cy.get('#email'),
		currentAddressResult: () => cy.get('p[id=currentAddress]'),
		permanentAddressResult: () => cy.get('p[id=permanentAddress]'),
	};
	fillUserNameInput(val) {
		this.get.inputUserName().type(val);
	}
	fillEmailInput(val) {
		this.get.inputEmail().type(val);
	}
	fillCurrentAddressInput(val) {
		this.get.inputCurrentAddress().type(val);
	}
	fillPermanentAddressInput(val) {
		this.get.inputPermanentAddress().type(val);
	}
	clickOnSubmitButton() {
		this.get.submitButton().click();
	}
	clearEmailInput() {
		this.get.inputEmail().clear();
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
