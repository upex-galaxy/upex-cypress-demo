import { selectablePage } from '@pages/Interactions/GX3-1766-Selectable.page'; 
describe('ToolsQA | Interactions | Selectable', () => { 
	const listItems = ['Cras justo odio','Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac'];
	const gridItems = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	beforeEach('Go to Demo QA Web, Selectable section', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('1766 | TC1:Check that the "List" and "Grid" tabs are visible by default', () => {
		selectablePage.get.listTab().should('be.visible').and('have.attr', 'aria-selected', 'true');
		selectablePage.get.gridTab().should('be.visible').and('have.attr', 'aria-selected', 'false');
	});
	it('1766 | TC2: “Check that the "List" tab is opened by default and its content is visible”. ', () => {
		selectablePage.get.listContainer().each((li, index) => {
			cy.wrap(li).should('be.visible').and('have.text', listItems[index]);
		});
	});
});