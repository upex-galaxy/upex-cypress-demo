import { removeLogs } from '@helper/RemoveLogs';

// * Test Set
describe('ToolsQA | Elements | Radio Buttons', () => {
	// Precondiciones se ejecuta cada tc
	beforeEach('Precondiciones', () => {
		const endpoint = '/radio-button';
		cy.visit('/' + endpoint);
	});
	it('TC1:Validar visualizar el label YES cuando se seleciona el radio button YES  ', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.contains('You have selected').children().should('have.text', 'Yes');
	});
	it('TC2:Validar visualizar el label impressive cuando se seleciona el radio button impresivve ', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.contains('You have selected').children().should('have.text', 'Impressive');
	});

	it('Validar que el radio button con label no este deshabilitado y no se puede seleccionar ', () => {
		cy.get('#noRadio').should('be.disabled');
		cy.contains('You have selected').should('not.exist');
	});
});
removeLogs();
