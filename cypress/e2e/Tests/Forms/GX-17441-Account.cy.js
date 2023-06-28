const credentials = require('../../../fixtures/data/AccountData.json');
import { Account } from '@pages/Forms/GX-17441-account.page';
import { removeLogs } from '@helper/RemoveLogs';

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('precondition', () => {
		cy.visit('https://www.saucedemo.com');
	});
	it('17442 | TC1: Validar el inicio de sesión de manera correcta (Happy path).', () => {
		Account.getUserName().type(credentials.userName1);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'standard_user');
		Account.getPassword().type(credentials.password1);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'secret_sauce');
		Account.clickSubmitButton();
		cy.url().should('contain', '/inventory.html');
	});
	it('17442 | TC2: Validar el inicio de sesión con la cuenta bloqueada.', () => {
		Account.getUserName().type(credentials.userName2);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'locked_out_user');
		Account.getPassword().type(credentials.password2);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'secret_sauce');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'Sorry, this user has been locked out.');
	});
	it.only('17442 | TC3: Validar el inicio de sesión con ingresando datos incorrectos.', () => {
		Account.getUserName().type(credentials.userName3);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'standard_User');
		Account.getPassword().type(credentials.password3);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'secret_sauce');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'Username and password do not match any user in this service');
	});
});
removeLogs();
