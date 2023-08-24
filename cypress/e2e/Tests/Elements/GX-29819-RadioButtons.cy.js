import { removeLogs } from '@helper/RemoveLogs';

//* Test Set:
describe('🪶ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: Estar ubicado en Radio Button Page', () => {
		const endpoint = '/radio-button'; //variable para guardar el endpoint
		cy.visit(`/${endpoint}`); //navegar
	});

	//todo: Test Cases
	it('GX-29820 | TC01: Validar visualizar el label "Yes" cuando se selecciona el radio-button "Yes"', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.contains('You have selected').children().should('have.text', 'Yes');
	});

	it('GX-29820 | TC02: Validar visualizar el label “Impressive” cuando se selecciona el radio-button "Impressive"', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.contains('You have selected').children().should('have.text', 'Impressive');
	});

	it('GX-29820 | TC03: Validar que esté deshabilitado y no se pueda seleccionar el radio-button con label "No"', () => {
		cy.get('#noRadio').should('be.disabled');
		cy.contains('You have selected').should('not.exist');
	});
});

removeLogs();
