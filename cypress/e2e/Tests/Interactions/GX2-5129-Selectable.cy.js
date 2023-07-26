import { selectable } from '@pages/Interactions/GX2-5129-Selectable.page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
describe('✅ToolsQA | Interactions | Selectable', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('5130 | TC1: Validar que se puedan seleccionar los elementos de la pestaña “List“.', () => {
		selectable.clickBttnList();
		cy.get('#verticalListContainer li').each((clickElementList) => {
			cy.wrap(clickElementList).click();
		});
	});
	it('5130 | TC2: Validar que se puedan deseleccionar los elementos de la pestaña “List“.', () => {
		selectable.clickBttnList();
		cy.get('#verticalListContainer li').each((clickElementList) => {
			cy.get(clickElementList).click();
			cy.wrap(clickElementList).click();

		});
	});
	it('5130 | TC3: Validar que se puedan seleccionar los elementos de la pestaña “Grid“.', () => {
		selectable.clickBttnGrid();
		cy.get('#gridContainer li').each((clickElementGrid) => {
			cy.wrap(clickElementGrid).click();
		});
	});
	it.only('5130 | TC4: Validar que se puedan deseleccionar los elementos de la pestaña “Grid“.', () => {
		selectable.clickBttnGrid();
		cy.get('#gridContainer li').each((clickElementGrid) => {
			cy.get(clickElementGrid).click();
			cy.wrap(clickElementGrid).click();
	
		});
	});
});