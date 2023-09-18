class textBox {
	get = {
		fullName: () => cy.get('#userName'),
		nameResult: () => cy.get('#name'),
		email: () => cy.get('#userEmail'),
		emailResult: () => cy.get('#email'),
		emailRedBorder: () => cy.get('.field-error'),
		currentAddress: () => cy.get('#currentAddress'),
		currentAddressResult: () => cy.get('p[id=currentAddress]'),
		permanentAddress: () => cy.get('#permanentAddress'),
		permanentAddressResult: () => cy.get('p[id=permanentAddress]'),
		submitBtn: () => cy.get('#submit'),
	};

	fillForm({ name: val1, email: val2, currentAddress: val3, permanentAddress: val4 }) {
		this.get.fullName().clear().type(val1);
		this.get.email().clear().type(val2);
		this.get.currentAddress().clear().type(val3);
		this.get.permanentAddress().clear().type(val4);
		this.get.submitBtn().click();
	}

	fillEmail(email) {
		this.get.email().type(email);
		this.get.submitBtn().click();
	}
}

export const TextBox = new textBox();
