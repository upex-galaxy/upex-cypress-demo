class loginSaucePage {
	elements = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		errorMessage: () => cy.get('h3[data-test=error]')
	};

	typeUsername(username: string) {
		this.elements.usernameInput().type(username);
	}

	typePassword(password: string) {
		this.elements.passwordInput().type(password);
	}

	clickLoginButton() {
		this.elements.loginButton().click();
	}
}

export default new loginSaucePage();
