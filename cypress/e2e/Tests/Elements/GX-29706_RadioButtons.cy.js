import { removeLogs } from '@helper/RemoveLogs';
//* Test Set:
describe('GX-29706: ToolsQA | Elements | Radio Buttons', () => {
	//todo: Precondiciones
	beforeEach('Precondición', () => {
		const endpoint = '/radio-button';
		cy.visit(`/${endpoint}`);
	});

	//todo: Test Cases
	it('GX-29711 | TC1: Validar visualizar el label YES cuando se selecciona el radio button Yes', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.contains('You have selected ').children().should('have.text', 'Yes');
	});
	it('GX-29711 | TC2: Validar visualizar el label Impressive cuando se selecciona el radio button Impresive', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.contains('You have selected ').children().should('have.text', 'Impressive');
	});
	it('GX-29711 | TC3: Validar que el radio button con label "NO" esté deshabilitado y no se pueda seleccionar', () => {
		cy.get('#noRadio').should('be.disabled');
		cy.contains('You have selected ').should('not.exist');
	});
});

//ES Module imports/exports
removeLogs();
