import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: El usuario debe estar situado en la página web.', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'radio-button');
	});

	it('29735 | TC1: Validar seleccionar el RB cuando la opción está habilitada (Yes).', () => {
		cy.get('label[for=yesRadio]').should('have.text', 'Yes');
		cy.get('div label').first().click();
		cy.get('.text-success').should('have.text', 'Yes');
	});

	it('29735 | TC2: Validar seleccionar el RB cuando la opción está habilitada (Impressive).', () => {
		cy.get('label[for=impressiveRadio]').should('have.text', 'Impressive');
		cy.get('div label').eq(1).click();
		cy.get('.text-success').should('have.text', 'Impressive');
	});

	it('29735 | TC3: Validar NO seleccionar el RB cuando la opción está deshabilitada (No).', () => {
		cy.get('label[for=noRadio]').should('have.text', 'No');
		cy.get('div label').last().should('have.class', 'disabled');
		cy.get('div label').last().click();
		cy.get('.text-success').should('not.exist');
	});
});
