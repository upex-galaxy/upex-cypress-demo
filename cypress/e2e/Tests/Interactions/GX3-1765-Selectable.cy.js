import {selectablePage} from '@pages/Interactions/GX3-1766-Selectable.page'; 
describe('ToolsQA | Interactions | Selectable', () => { 
	beforeEach('Go to Demo QA Web, Selectable section', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('1766 | TC1:Check that the "List" and "Grid" tabs are visible by default', () => {
		selectablePage.get.linkTab().should('be.visible').and('have.attr', 'aria-selected', 'true');
		selectablePage.get.gridTab().should('be.visible').and('have.attr', 'aria-selected', 'false');
	});
});