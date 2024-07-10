
class SpaceLoginPage {
	loginForm: () => Cypress.Chainable<JQuery<HTMLElement>>;
	usernameInput: () => Cypress.Chainable<JQuery<HTMLInputElement>>;
	passwordInput: () => Cypress.Chainable<JQuery<HTMLInputElement>>;
	loginUsername: () => Cypress.Chainable<JQuery<HTMLInputElement>>;
	loginButtonClick: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
	//loginButton: () => cy.get('button').eq(10).click();

	constructor() {
		this.loginForm = () => cy.get('#login');
		this.loginUsername = () => cy.get('#login').contains('Username').parent().get('input');
		this.usernameInput = () => this.loginForm().contains('Username').parent().get('input');
		this.passwordInput = () => this.loginForm().contains('Password').parent().get('input');
	//	this.loginButtonClick = () => cy.get('button').eq(10).click();
	}
}

export const spaceLoginPage = new SpaceLoginPage();