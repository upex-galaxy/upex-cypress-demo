class Login {
	get = {
		usernameInput: () => cy.get('#userName'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login'),
	};

	login({ username: username, password: password }) {
		this.get.usernameInput().type(username);
		this.get.passwordInput().type(password);
		this.get.loginButton().click();
	}
}

export const loginPage = new Login();
