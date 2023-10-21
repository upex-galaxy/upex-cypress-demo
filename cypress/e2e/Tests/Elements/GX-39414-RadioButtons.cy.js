describe('GX-39414 | TS: ✅ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Visitar la pagina de DemoQA', () => {
		cy.visit('/radio-button');
		cy.wait(3000);
	});
	it('39414| TC1: Validar  hacer click en el botón opcional “Yes”', () => {
		cy.get('label[for="yesRadio"]').click();
		cy.get('[class="mt-3"]').click().should('contain.text', 'You have selected Yes');
	});
	it('39414| TC2: Validar hacer click en el botón opcional “improvise”', () => {
		cy.get('label[for="impressiveRadio"]').click();
		cy.get('[class="mt-3"]').should('contain.text', 'You have selected Impressive');
	});
	it('39414| TC3: Validar que no se pueda seleccionar la opción “NO”', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
