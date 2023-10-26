import { selectablePage } from '@pages/Interactions/GX2-8336-Selectable.page';
import data from '@data/GX2-8336-Selectable.json';

describe(' GX2-8336-✅ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRC:visit toolQA', () => {
		selectablePage.get.endpoint();
	});
	it('TC1:The tabs “List” and “Gird” must be showing by default. ', () => {
		selectablePage.get.list().should('exist').and('have.attr', data.attribute, data.positiveValue);
		selectablePage.get.grid().should('exist').and('have.attr', data.attribute, data.negativeValue);
	});
	it('TC2: Validate that the “List” tab is displayed and working as expected', () => {
		selectablePage.clickList();
		selectablePage.defaultColorList();
		selectablePage.colorClickList();
		selectablePage.get.listContainer().each(($item, index) => {
			cy.wrap($item).invoke('text').should('eq', data.List[index]);
		});
		selectablePage.colorNoClickList();
	});
	it('TC3: Validate that the “Grid” tab is displayed and working as expected', () => {
		selectablePage.clickGrid();
		selectablePage.defaultColorGrid();
		selectablePage.colorClickGrid();
		selectablePage.get.gridContainer().each(($item, index) => {
			cy.wrap($item).invoke('text').should('eq', data.Grid[index]);
		});
		selectablePage.colorNoClickGrid();
		selectablePage.getElementsByRow();
	});
});
