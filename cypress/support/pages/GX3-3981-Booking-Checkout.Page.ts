
class SpaceLoginPage {
	loginForm: () => Cypress.Chainable<JQuery<HTMLElement>>;
	usernameInput: () => Cypress.Chainable<JQuery<HTMLInputElement>>;

	constructor() {
		this.loginForm = () => cy.get('#login');
		this.usernameInput = () => this.loginForm().contains('Username').parent().get('input');
	}
}

export const spaceLoginPage = new SpaceLoginPage();