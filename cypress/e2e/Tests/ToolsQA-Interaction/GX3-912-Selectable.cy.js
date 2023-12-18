import { selectablePage } from '../../../support/pages/Selectable/selectable.Page';

describe('GX3-912 | ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRC: User must be at Selectable section on the web page', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('GX3-913 | TC1: Validate select item from “List” tab', () => {
		selectablePage.clickList();
		selectablePage.selectListItem();
		selectablePage.get.ListItems().should('have.class', 'active');
	});
	it('GX3-913 | TC2: Validate unselect item from “List” tab', () => {
		selectablePage.clickList();
		selectablePage.selectListItem();
		selectablePage.UnselectListItem();
	});
	it('GX3-913 | TC3: Validate select multiples items from “List” tab', () => {
		selectablePage.clickList();
		selectablePage.selectMultipleListItems();
		selectablePage.get.ListItems().should('have.class', 'active');
	});
	it('GX3-913 | TC4: Validate unselect multiples items from “List” tab', () => {
		selectablePage.clickList();
		selectablePage.selectMultipleListItems();
		selectablePage.unselectMultipleListItems();
	});
	it('GX3-913 | TC5: Validate select item from “Grid” tab', () => {
		selectablePage.clickGrid();
		selectablePage.selectGridItem();
		selectablePage.get.GridItems().should('have.class', 'active');
	});
	it('GX3-913 | TC6: Validate unselect item from “Grid” tab', () => {
		selectablePage.clickGrid();
		selectablePage.selectGridItem();
		selectablePage.UnselectGridItem();
	});
	it('GX3-913 | TC7: Validate select multiples items from “Grid” tab', () => {
		selectablePage.clickGrid();
		selectablePage.selectMultipleGridItems();
		selectablePage.get.GridItems().should('have.class', 'active');
	});
	it('GX3-913 | TC8: Validate unselect multiples items from “Grid” tab', () => {
		selectablePage.clickGrid();
		selectablePage.selectMultipleGridItems();
		selectablePage.unselectMultipleGridItems();
	});
});
