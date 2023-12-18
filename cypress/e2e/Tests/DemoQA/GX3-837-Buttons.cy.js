describe('US GX3-837 | ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC: User must be at button section page', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('US GX3-837 | TC1: Validate Double Click button functionality', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('US GX3-837 | TC2: Validate Double Click button functionality when clicked just one time', () => {
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage').should('not.exist');
	});
	it('US GX3-837 | TC3: Validate Right Click button functionality ', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('US GX3-837 | TC4: Validate Click Me button functionality ', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
