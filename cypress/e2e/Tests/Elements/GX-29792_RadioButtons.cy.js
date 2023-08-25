import { removeLogs } from '@helper/RemoveLogs';
//* Test Set:
describe('GX-29792: ToolsQA| Elements | Radio Buttons', () => {
	//todo: Precondiciones
	beforeEach('Precondición', () => {
		const endpoint = '/radio-button';
		cy.visit(`/${endpoint}`);
	});

	//todo: Test Cases
	it('GX-29973 | TC1: Validar visualizar el label YES cuando se selecciona el radio button Yes', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.contains('You have selected ').children().should('have.text', 'Yes');
	});
	//todo: Test Cases
	it('GX-29973 | TC2: Validar visualizar el label YES cuando se selecciona el radio button Impressive', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.contains('You have selected ').children().should('have.text', 'Impressive');
	});
	//todo: Test Cases
	it('GX-29973 | TC3: Validar que el radio button con label "NO" esté deshabilitado y no se pueda seleccionar', () => {
		cy.get('#noRadio').click({ force: true });
		cy.contains('You have selected ').should('not.exist');
	});
});

//ES Module imports/exports
removeLogs();
