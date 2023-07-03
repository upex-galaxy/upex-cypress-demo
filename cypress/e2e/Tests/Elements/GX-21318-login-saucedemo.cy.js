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
	it('GX-21319 | TC5: Validate log in with username and password that is not on database.', () => {
		cy.fixture('GX-21318/ToolsQA-LogIn-saucedemo').then(the => {
			cy.get(the.userone.input).type(the.userone.data.invalid);
			cy.get(the.password.input).type(the.password.data.invalid);
			cy.get(the.loginbutton).click();
			cy.get('.error').eq('2').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
		});
	});
	it('GX-21319 | TC6: Validate log in with empty field on username and valid password.', () => {
		cy.fixture('GX-21318/ToolsQA-LogIn-saucedemo').then(the => {
			cy.get(the.userone.input).should('be.empty');
			cy.get(the.password.input).type(the.password.data.valid);
			cy.get(the.loginbutton).click();
			cy.get('.error').eq('2').should('have.text', 'Epic sadface: Username is required');
		});
	});
	it('GX-21319 | TC7: Validate log in with empty field on password and valid username.', () => {
		cy.fixture('GX-21318/ToolsQA-LogIn-saucedemo').then(the => {
			cy.get(the.userone.input).type(the.userone.data.valid);
			cy.get(the.password.input).should('be.empty');
			cy.get(the.loginbutton).click();
			cy.get('.error').eq('2').should('have.text', 'Epic sadface: Password is required');
		});
	});
	it('GX-21319 | TC8: Validate log in with empty field on username and password.', () => {
		cy.fixture('GX-21318/ToolsQA-LogIn-saucedemo').then(the => {
			cy.get(the.userone.input).should('be.empty');
			cy.get(the.password.input).should('be.empty');
			cy.get(the.loginbutton).click();
			cy.get('.error').eq('2').should('have.text', 'Epic sadface: Username is required');
		});
	});
	it.only('GX-21319 | TC9: Validate user can’t access endpoint “/inventory.html” without being logged in.', () => {
		cy.visit('/inventory.html'); //, { failOnStatusCode: false });
		//cy.get('[data-test="error"] button').should('exist');
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
