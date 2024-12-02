/* eslint-disable chai-friendly/no-unused-expressions */
export class OrangeLoginPage {
	usernameInput: () => Cypress.Chainable<JQuery<HTMLElement>>;
	passwordInput: () => Cypress.Chainable<JQuery<HTMLElement>>;
	submitButton: () => Cypress.Chainable<JQuery<HTMLElement>>;

	constructor() {
		this.usernameInput = () => cy.get('input[name=username]');
		this.passwordInput = () => cy.get('input[type=password]');
		this.submitButton = () => cy.get('button[type=submit]');
	}

	login(username?: string, password?: string) {
		username ? this.usernameInput().type(username) : console.log('Username field is Empty');
		password ? this.passwordInput().type(password) : console.log('Password field is Empty');
		this.submitButton().click();
	}

	loginSuccess() {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
		const username = Cypress.env('orangeUsername');
		const password = Cypress.env('orangePassword');
		this.login(username, password);
	}
}
