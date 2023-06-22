describe('GX-21318-✅-swag-labs-account-iniciar-sesion-y-br-de-accesos', () => {
	beforeEach('Having access to the SUT', () => {
		cy.visit('https://www.saucedemo.com/');
	});

	it('GX-21319 | TC1: Validate user can log in with username “standard_user” successfully.', () => {
		cy.fixture('GX-21318/ToolsQA-LogIn-saucedemo').then(the => {
			cy.get(the.userone.input).type(the.userone.data.valid);
			cy.get(the.password.input).type(the.password.data.valid);
			cy.get(the.loginbutton).click();
			cy.get('#item_4_title_link').should('contain.text', 'Sauce Labs Backpack');
		});
	});
	it('GX-21319 | TC2: Validate user can log in with username “problem_user” successfully.', () => {
		cy.fixture('GX-21318/ToolsQA-LogIn-saucedemo').then(the => {
			cy.get(the.usertwo.input).type(the.usertwo.data.valid);
			cy.get(the.password.input).type(the.password.data.valid);
			cy.get(the.loginbutton).click();
			cy.get('#item_4_title_link').should('contain.text', 'Sauce Labs Backpack');
		});
	});
	it('GX-21319 | TC3: Validate user can log in with username “performance_glitch_user” successfully.', () => {
		cy.fixture('GX-21318/ToolsQA-LogIn-saucedemo').then(the => {
			cy.get(the.userthree.input).type(the.userthree.data.valid);
			cy.get(the.password.input).type(the.password.data.valid);
			cy.get(the.loginbutton).click();
			cy.get('#item_4_title_link').should('contain.text', 'Sauce Labs Backpack');
		});
	});
	it('GX-21319 | TC4: Validate user can’t log in with username “locked_out_user”.', () => {
		cy.fixture('GX-21318/ToolsQA-LogIn-saucedemo').then(the => {
			cy.get(the.userblocked.input).type(the.userblocked.data.valid);
			cy.get(the.password.input).type(the.password.data.valid);
			cy.get(the.loginbutton).click();
			cy.get('.error').eq('2').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
		});
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
