import { selectablePage } from '@pages/Interactions/GX2-8536-Selectable.page';
import data from '@data/GX2-8536-Selectable.json';

describe('✅ToolsQA | Interactions | Selectable', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});

	it('GX2-8537 | TC1 Validar que los elementos de la pestaña “List“ y "Grid" se muestren de forma predeterminada', () => {
		selectablePage.get.list().should('have.attr', data.attribute, data.valueTrue);
		selectablePage.defaultColorList();
		selectablePage.get.grid().should('have.attr', data.attribute, data.valueFalse);
	});
	it('GX2-8537 | TC2 Validar poder seleccionar y des-seleccionar los elementos de la pestaña “List“', () => {
		selectablePage.clickList();
		selectablePage.defaultColorList();
		selectablePage.clickColorList();
		selectablePage.textList();
		selectablePage.unClickColorList();
	});

	it('GX2-8537 | TC3 Validar poder seleccionar y des-seleccionar los elementos de la pestaña “Grid“', () => {
		selectablePage.clickGrid();
		selectablePage.defaultColorGrid();
		selectablePage.clickColorGrid();
		selectablePage.textGrid();
		selectablePage.unClickColorGrid();
	});
});
