describe('GX-6424 | TC1: Validate that button “double click me', () => {
	beforeEach('Precondition: Having access to the SUT ', () => {
		cy.visit('/buttons');
		cy.viewport(1920, 1980);
	});
	it('GX-6424 | TC1: Validate that button “double click me” displays message.', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});

	//it('GX-6424 | TC2: Validate that button “right click me” works correctly.', () => {
	//cy.get('[href="/commands/querying"]').eq(2).click();
	//cy.get('#query-btn') // Sintaxis Comando Get de Selector de IDs
	//	.click(); // Esto es un método de Interacción (Acción)
	//});
	//it('GX-6424 | TC3: Validate that button “click me” works correctly.', () => {
	//	cy.get('[href="/commands/querying"]').eq(2).click();
	//	cy.get('#query-btn').click();
	//	cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
	//		.should('contain.text', 'Button'); // Assertion BDD para validar resultado esperado (de muchas formas)
	//});
});

//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
