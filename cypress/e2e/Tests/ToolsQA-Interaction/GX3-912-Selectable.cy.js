import { selectablePage } from '../../../support/pages/Selectable/selectable.Page';

describe('GX3-912 | ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRC: User must be at Selectable section on the web page', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('GX3-913 | TC1: Validate select item from “List” tab', () => {
		selectablePage.clickList();
		selectablePage.selectListItem();
	});
	it('GX3-913 | TC2: Validate unselect item from “List” tab', () => {
		selectablePage.clickList();
		selectablePage.selectListItem();
		selectablePage.UnselectListItem();
	});
});
