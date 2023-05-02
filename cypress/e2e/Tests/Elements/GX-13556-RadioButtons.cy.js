import { removeLogs } from '@helper/RemoveLogs';

describe('GX-13556 | ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('El usuario debe estar en la página', () => {
		cy.visit('https://demoqa.com/radio-button'); //runs before every it() test block
		cy.url().should('contain', 'radio-button');
	});
	it('13557 | Validar Yes Button', () => {
		cy.get('#yesRadio').click({ force: true }).should('have.attr', 'type', 'radio');
		cy.contains('You have selected ').children().should('have.text', 'Yes');
	});
	it('13557 | Validar Impressive Button', () => {
		cy.get('#impressiveRadio').click({ force: true }).should('have.attr', 'type', 'radio');
		cy.contains('You have selected ').children().should('have.text', 'Impressive');
	});
});
removeLogs();
