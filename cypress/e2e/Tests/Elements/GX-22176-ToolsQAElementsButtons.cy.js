describe('ToolsQA | Elements | Buttons', () => {
	beforeEach('Precondition: El usuario debe estar ubicado en el PLP Demoqa', () => {
		cy.visit('https://demoqa.com/buttons');
	});
	it('22177 | TC1: Validar  hacer click en botón Doble click y se visualice el mensaje (“You have done a double click”) ', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('22177 | TC2: Validar hacer click en botón click derecho y se visualice el mensaje (“You have done a right click”)', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('22177 | TC3: Validar hacer click en botón  click y se visualice el mensaje (“You have done a dynamic click”)', () => {
		cy.get('[type="button"]').eq(3).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
