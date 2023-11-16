describe('GX3-432 | TS: ToolsQA | Elements | Buttons', () => {
	beforeEach('Precondición: Usuario debe estar en la página DEMOQA', () => {
		cy.visit('https://demoqa.com/buttons');
	});

	it('433 | TC1: Validar hacer doble click en el botón "Double Click Me" y que se muestre el siguiente mensaje: “You have done a double click"', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage');
	});

	it('433 | TC2: Validar hacer click derecho en el botón "Right Click Me" y que se muestre el siguiente mensaje: “You have done a right click"', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('contain.text', 'You have done a right click');
	});

	it('433 | TC3: Validar hacer click en el botón "Click Me" y que se muestre el siguiente mensaje: “You have done a dynamic click"', () => {
		cy.get('button').last().click();
		cy.get('#dynamicClickMessage');
	});
});

//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores
removeLogs();
