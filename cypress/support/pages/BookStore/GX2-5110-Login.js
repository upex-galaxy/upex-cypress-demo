class Login {
	get = {
		fullLoginForm: () => cy.get('[id="userForm"]'),
		title: () => cy.get('[style="margin-bottom: 50px;"]'),
		userNameLabel: () => cy.get('[id="userName-label"]'),
		userNameForm: () => cy.get('[id="userName"]'),
		passwordLabel: () => cy.get('[id="password-label"]'),
		passwordForm: () => cy.get('[id="password"]'),
		loginButton: () => cy.get('[id="login"]'),
		outputWrapper: () => cy.get('[id ="output"]'),
		output: () => cy.get('[id="name"]'),
	};
	logIn(username, password) {
		this.get.fullLoginForm().within(() => {
			this.get.userNameLabel().should('have.text', 'UserName : ').and('exist');
			this.get.userNameForm().type(username);
			this.get.passwordLabel().should('have.text', 'Password : ').and('exist');
			this.get.passwordForm().type(password);
		});
	}
	clickLoginButton() {
		this.get.loginButton().click();
	}
}
export const login = new Login();
