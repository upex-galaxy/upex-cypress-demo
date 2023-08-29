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
});

//ES Module import/exports
removeLogs();
