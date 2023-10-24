import { selectable } from '@pages/Interactions/GX2-5129-Selectable.page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
describe('✅ToolsQA | Interactions | Selectable', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('GX2-8537 | TC1 Validar poder seleccionar los elementos de la pestaña “List“', () => {
		selectable.clickBttnList();
		selectable.get.bttnList().should('have.class', 'active');
		selectable.SelectAllElementsList();
		selectable.get.allElementsList().should('have.class', 'active');
	});
	it('GX2-8537 | TC2 Validar poder des-seleccionar los elementos de la pestaña “List“', () => {
		selectable.clickBttnList();
		selectable.get.bttnList().should('have.class', 'active');
		selectable.deselectAllElementsList();
		selectable.get.allElementsList().should('have.class', 'active');
		selectable.deselectAllElementsList(); //Aca tengo dudas: no encontre la forma de hacer que lo deseleccione sin llamar de vuelta
		selectable.get.allElementsList().should('not.have.class', 'active');
	});
	it('GX2-8537 | TC3 Validar poder seleccionar los elementos de la pestaña “Grid“', () => {
		selectable.clickBttnGrid();
		selectable.get.bttnGrid().should('have.class', 'active');
		selectable.SelectAllElementsGrid();
		selectable.get.allElementsGrid().should('have.class', 'active');
	});
	it('GX2-8537 | TC4 Validar poder des-seleccionar los elementos de la pestaña “Grid“', () => {
		selectable.clickBttnGrid();
		selectable.get.bttnGrid().should('have.class', 'active');
		selectable.SelectAllElementsGrid();
		selectable.get.allElementsGrid().should('have.class', 'active');
		selectable.SelectAllElementsGrid();
		selectable.get.gridContainer().should('not.be.checked');
	});
});
