describe('✅ToolsQA | Elements | Radio Buttons', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/radio-button');
	});
	it('11550 | TC1: Validar que al dar click en el Button Yes, parezca en la leyenda la palabra Yes.', () => {
		cy.get('[name="like"]').eq(0).click({ force: true });
		cy.get('.text-success').should('have.text', 'Yes');
	});
	it('11550 | TC2: Validar que al dar click en el Button impressive, aparezca en la leyenda la palabra Impressive.', () => {
		cy.get('[name="like"').eq(1).click({ force: true });
		cy.get('.text-success').should('have.text', 'Impressive');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
