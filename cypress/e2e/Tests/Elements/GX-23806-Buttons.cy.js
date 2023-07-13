describe('23806 | TS: | Elements | Buttons', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	

	it('23806| TC1: Validar al hacer doble click en el boton "Double click me" se debe mostrar un mensaje "You have done a double click"', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
		cy.get('#doubleClickMessage').should('contain', 'double click');
	});
	
	it('23806| TC2: Validar al hacer click derecho en el boton "Right Click Me"se debe mostrar un mensaje "You have done a right click"', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	
	it('23806| TC3: Validar al hacer click sobre el boton "Click me" se debe mostrar el mensaje "You have done a dynamic click"', () => {
		cy.get('button').eq(3).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');

	});
	












	
});

import { removeLogs } from '@helper/RemoveLogs';
import { eq } from 'cypress/types/lodash';
removeLogs();