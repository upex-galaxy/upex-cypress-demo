class account {
	get = {
		url2: () => cy.visit('/inventory.html'),
		url3: () => cy.visit('/cart.html'),
		url4: () => cy.visit('/checkout-step-one.html'),
		url5: () => cy.visit('/checkout-step-two.html'),
		url6: () => cy.visit('/checkout-complete.html'),
		getUsernameInput: () => cy.get('[data-test="username"]'),
		getPasswordInput: () => cy.get('[data-test="password"]'),
		dataTex: () => cy.get('[data-test="error"]'),
		getSubmitButton: () => cy.get('#login-button'),
	};
	getUserName() {
		return cy.get('[data-test="username"]');
	}
	getPassword() {
		return cy.get('[data-test="password"]');
	}
	clickSubmitButton() {
		this.get.getSubmitButton().click();
	}
}
export const Account = new account();
