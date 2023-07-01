describe('✅ToolsQA | Elements | Buttons', () => {
	beforeEach('Precondition', () => {
		cy.visit('/buttons');
	});
	it('21997 | TC1 : Validar el funcionamiento del botón del Doble Click Me', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('21997 | TC2 : Validar el funcionamiento del botón del Right Click Me', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('21997 | TC3 : Validar el funcionamiento del botón del Click Me', () => {
		cy.get('[type="button"]').eq(3).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
