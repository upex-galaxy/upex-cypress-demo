describe('19291 | TS: ✅ToolsQA | Elements | Buttons', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('19292 | TC1', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('19292 | TC2', () => {
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage').should('not.exist');
	});
	it('19292 | TC3', () => {
		cy.get('#doubleClickBtn').rightclick();
		cy.get('#doubleClickMessage').should('not.exist');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
