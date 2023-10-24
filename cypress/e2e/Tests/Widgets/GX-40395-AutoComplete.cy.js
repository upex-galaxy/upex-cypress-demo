describe('GX-40395 | TS: ✅ToolsQA | Widgets | Auto-Complete', () => {
	beforeEach('Visitar la pagina de DemoQA', () => {
		cy.visit('/auto-complete');
		cy.wait(3000);
	});
	it('39414| TC1: Validar que se pueda seleccionar 2 o mas colores en el input “Type Multiple color name”', () => {
		cy.get('#autoCompleteMultipleInput').type('B');
		cy.contains('Black').click();
		cy.get('#autoCompleteMultipleInput').type('R');
		cy.get('.auto-complete__menu').children().children().contains('Red').click();
		cy.get('#autoCompleteMultipleContainer').should('contain', 'Black');
		cy.get('#autoCompleteMultipleContainer').should('contain', 'Red');
	});
	it('39414| TC2: Validar eliminar todos colores seleccionados en el imput “Type Multiple color name”', () => {
		cy.get('#autoCompleteMultipleInput').type('B');
		cy.contains('Black').click();
		cy.get('#autoCompleteMultipleInput').type('R');
		cy.get('.auto-complete__menu').children().children().contains('Red').click();
		cy.get('.auto-complete__multi-value__label').contains('Black');
		cy.get('.auto-complete__multi-value__remove').eq(0).click();
		cy.get('.auto-complete__multi-value__remove').click();
		cy.get('#autoCompleteMultipleContainer').should('not.contain', 'Black');
		cy.get('.auto-complete__multi-value__label').should('not.exist');
	});
	it('39414| TC3: Validar seleccionar 1 color en el imput “Type Single  color name”', () => {
		cy.get('#autoCompleteSingleInput').type('G');
		cy.get('.auto-complete__menu').contains('Green').click();
		cy.get('#autoCompleteSingleContainer').should('contain', 'Green');
	});
	it('39414| TC4: Validar remover el color seleccionado por otro color en el imput “Type Single color name”', () => {
		cy.get('#autoCompleteSingleInput').type('G');
		cy.get('.auto-complete__menu').contains('Green').click();
		cy.get('#autoCompleteSingleContainer').should('contain.text', 'Green');
		cy.get('#autoCompleteSingleInput').type('Y');
		cy.get('.auto-complete__menu').contains('Yellow').click();
		cy.get('#autoCompleteSingleInput').should('not.contain', 'Green');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
