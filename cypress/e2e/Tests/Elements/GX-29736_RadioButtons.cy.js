import { removeLogs } from '@helper/RemoveLogs';

//test set:
describe('GX-29736 ToolsQA | Elements | Radio Buttons', () => {
	//todo: precondiciones
	beforeEach('Precondición', () => {
		const endpoint = '/radio-button';
		cy.visit(`/${endpoint}`);
	});

	// afterEach('', () => {

	// })

	it('TC1: Validar visualizar el label', () => {
		//tags
		cy.get('#yesRadio').click({ force: true });
		cy.contains('You have selected').children().should('have.text', 'Yes');
		//cy.contains('You have selected').children().should.equal('yes');
		//
	});

	it('TC2: Validar visualizar el label Impressive cuando se selecciona el radio button Impressive', () => {
		//tags
		cy.get('#impressiveRadio').click({ force: true });
		cy.contains('You have selected').children().should('have.text', 'impressive');
		//cy.contains('You have selected').children().should.equal('yes');

		//
	});

	it('TC3: Validar que el radio button con label "NO" este deshabilitado y no se pueda seleccionar', () => {
		//tags
		cy.get('#noRadio').should('be.disabled');
		cy.contains('You have selected').should('not.exist');
		//cy.contains('You have selected').children().should.equal('yes');

		//
	});
});

//ES module imports/exports
removeLogs();
