import { selectablePage } from '@pages/Interactions/GX3-1766-Selectable.page'; 
describe('ToolsQA | Interactions | Selectable', () => { 
	const listItems = ['Cras justo odio','Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac'];
	const gridItems = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

	beforeEach('Go to Demo QA Web, Selectable section', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('1766 | TC1:Check that the "List" and "Grid" tabs are visible by default', () => {
		selectablePage.get.listTab().should('be.visible').and('have.attr', 'aria-selected', 'true');
		selectablePage.get.gridTab().should('be.visible').and('have.attr', 'aria-selected', 'false');
	});
	it('1766 | TC2: “Check that the "List" tab is opened by default and its content is visible”.', () => {
		selectablePage.get.listContainer().each((li, index) => {
			cy.wrap(li).should('be.visible').and('have.text', listItems[index]);
		});
	});
	it('1766 | TC3: “Check that one item on the "List" tab can be selected and deselected”.', () => {
		// Randomly select an item from the listItems array
		const randomIndex = Math.floor(Math.random() * listItems.length);
		const randomItem = listItems[randomIndex];
		selectablePage.selectOneItem(randomItem, 'listContainer');
		selectablePage.deselectOneItem(randomItem, 'listContainer');
		
	});
	it('1766 | TC4: “Check that multiple items on "List" tab can be selected and deselected”.', () => {
		selectablePage.selectMultipleItems('listContainer');
		selectablePage.deselectMultipleItems('listContainer');
	});
	it('1766 | TC5: “Check that one item on the "Grid" tab can be selected and deselected”. ', () => {
		selectablePage.clickGridTab();
		// Randomly select an item from the listItems array
		const randomIndex = Math.floor(Math.random() * gridItems.length);
		const randomItem = gridItems[randomIndex];
		selectablePage.selectOneItem(randomItem, 'gridContainer');
		selectablePage.deselectOneItem(randomItem, 'gridContainer');
	});
	it('1766 | TC6: “Check that multiple items on ‘Grid’ tab can be selected and deselected”.', () => {
		selectablePage.clickGridTab();
		
		selectablePage.selectMultipleItems('gridContainer');
		selectablePage.deselectMultipleItems('gridContainer');
	});
});