describe('GX-15907 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Visitar pagina demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
		
	});

	it('15908 | TC1 Validar doble click en btn "Double Click Me"', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.contains('You have done a double click').should('exist');
		cy.wait(4000);
	});
	it('15908 | TC2 Validar  click en btn "Right Click"', () => {
		cy.get('#rightClickBtn').rightClick();
		cy.contains('You have done a right click').should('exist');
		cy.wait(4000);
	});
	it('15908 | TC3 Validar  click en btn "Click Me"', () => {
		cy.get('.btn.btn-primary').eq(3).click();

		cy.contains('You have done a dynamic click').should('be.visible');
		cy.wait(4000);
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
