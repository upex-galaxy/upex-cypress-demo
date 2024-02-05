export class SpaceLoginPage {
	loginForm: () => Cypress.Chainable<JQuery<HTMLElement>>;
	usernameInput: () => Cypress.Chainable<JQuery<HTMLInputElement>>;
	passwordInput: () => Cypress.Chainable<JQuery<HTMLInputElement>>;
	loginButton: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;

	constructor() {
		this.loginForm = () => cy.get('#login');
		this.usernameInput = () => this.loginForm().find(':contains("Username")').find('input');
		this.passwordInput = () => this.loginForm().find(':contains("Password")').find('input');
		this.loginButton = () => cy.get('[form=login]').contains('button', 'Log in');
	}

	enterUsername(value: string) {
		this.usernameInput().type(value);
	}

	enterPassword(value: string) {
		this.passwordInput().type(value);
	}

	submitLogin() {
		this.loginButton().click({ force: true });
	}
}
