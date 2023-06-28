describe('✅ToolsQA | Elements | Buttons', () => {
	beforeEach('precondición: visitar página Demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});

	it.only('21734 | TC1: Validar funcionamiento del botón “double click me”', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('contain', 'You have done a double click');
		//cy.get('[class="btn btn-primary"]').eq(0).dblclick();
	});

	it('21734 | TC2: Validar funcionamiento del botón "right click me"', () => {
		cy.get('#rightClickBtn').rightClick();
		cy.get('#rightClickMessage').should('contain', 'You have done a double click');
	});

	it('21734 | TC3: Validar funcionamiento del botón “click me”', () => {
		cy.get('[class$="btn-primary"]').eq(2).click();
		cy.get('dynamicClickMessage').should('contain', 'You have done a right click');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
