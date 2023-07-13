describe('ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC: Ingresar a la página', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('23815 | TC1: Validar que al hacer click en el botón “dobleclick” se muestre el mensaje “Ha hecho doble click”.', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('contain', 'You have done a double click');
	});
	it('23815 | TC2: Validar que al hacer click en el botón “click derecho” se muestre el mensaje “Ha hecho click derecho”', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('contain', 'You have done a right click');
	});
	it('23815 | TC3: Validar que al hacer click en el botón “click” se muestre el mensaje “Ha hecho un click dinámico”', () => {
		cy.get('[type="button"]').eq(3).click();
		cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click');
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
