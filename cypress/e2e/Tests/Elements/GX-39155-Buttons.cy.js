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
	it('19292 | TC4: ', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('19292 | TC5: ', () => {
		cy.get('#rightClickBtn').click();
		cy.get('#rightClickMessage').should('not.exist');
	});
	it('19292 | TC6: ', () => {
		cy.get('[class$="btn-primary"]').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
	it('19292 | TC7:', () => {
		cy.get('[class$="btn-primary"]').eq(2).rightclick();
		cy.get('#dynamicClickMessage').should('not.exist');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
