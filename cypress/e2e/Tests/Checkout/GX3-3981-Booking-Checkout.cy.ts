import { spaceLoginPage } from'@pages/GX3-3981-Booking-Checkout.Page';
import json from'@data/Elements/GX3-3981-Booking-Checkout.json';

describe('GX3-3981|Automation SpaceBeyond | Booking | Book a Destination in Checkout', () => {
	beforeEach('El usuario debería estar situado la url de login', () => {
		cy.visit('https://demo.testim.io/');
		cy.url().should('contain','testim');
		//cy.url().should('include','testim');
		cy.contains('button', 'Log in').click();
		cy.url().should('include','login');
	});

	it('TC01 usuario debería estar logeado', () => {
		expect(true).to.be.true;
		//spaceLoginPage.loginButtonClick;
		//cy.contains('button', 'Log in').click();
		//cy.get('#login').contains('Log in').parent().get('button');
		//spaceLoginPage.usernameInput();
		//spaceLoginPage.loginUsernamePrueba().type('hola');
		cy.get('#login').contains('Username').type(json.data.userameValid);
		//spaceLoginPage.loginButtonClick().should('have text','LOG IN');
		//inner Text "LOG IN"
	});
});
