import { removeLogs } from '@helper/RemoveLogs';
//* Test Set:
describe('GX30846: ToolsQA | Elements | Radio Buttons', () => {
	//todo: Precondiciones
	beforeEach('Precondición', () => {
		const endpoint = '/radio-button';
		cy.visit(`/${endpoint}`);
	});

	it('TC1:  Validar visualizar el label YES cuando selecciona el radio button Yes', () => {
		//* CSS Selectors in Cypress
		cy.get('#yesRadio').click({ force: true }).should('be.checked');
		cy.get('[class=text-success]').should('have.text', 'Yes');
		cy.contains('You have selected ').children().should('have.text', 'Yes');
	});

	it('TC2:  Validar visualizar el label Impressive cuando selecciona el radio button impresive', () => {
		//* CSS Selectors in Cypress
		cy.get('#impressiveRadio').click({ force: true }).should('be.checked');
		cy.contains('You have selected ').children().should('have.text', 'Impressive');
	});

	it('TC3:  Validar visualizar el label "NO" este deshabilitado y no se pueda seleccionar', () => {
		//* CSS Selectors in Cypress
		cy.get('#noRadio').should('be.disabled');
		cy.get('you have selected').should('not.exist');
	});
});

//ES Module import/exports
removeLogs();
