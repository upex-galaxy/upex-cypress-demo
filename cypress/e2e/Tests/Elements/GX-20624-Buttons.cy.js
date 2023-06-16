describe('GX-6424 | TC1: Validate that button “double click me', () => {
	beforeEach('Precondition: Having access to the SUT ', () => {
		cy.visit('/buttons');
		cy.viewport(1920, 1980);
	});
	it('GX-6424 | TC1: Validate that button “double click me” displays message.', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});

	it('GX-6424 | TC2: Validate that button “right click me” works correctly.', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});

	it('GX-6424 | TC3: Validate that button “click me” works correctly.', () => {
		cy.get('[type="button"]').eq('3').click();
		cy.get('#dynamicClickMessage').should('contain.text', 'You have done a dynamic click');
	});
});

//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
