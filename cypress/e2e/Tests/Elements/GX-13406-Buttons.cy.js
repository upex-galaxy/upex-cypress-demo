describe('GX-13406 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Usuario debe visitar la página', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});

	it('13407 | TC1 : Validar que al hacer “click” en botón “Doble click” se muestre el mensaje “Ha hecho un doble click”.', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});

	it('13407 | TC2 : Validar que al hacer “click” en botón “Click Derecho” se muestre el mensaje “Ha hecho un click derecho”.', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});

	it('13407 | TC3 : Validar que al hacer “click” en botón “Click” se muestre el mensaje “Ha hecho un click dinámico”.', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
