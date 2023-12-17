import { selectable } from '../../../support/pages/Selectable/selectable.Page';

describe('GX3-912 | ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRC: User must be at Selectable section on the web page', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('GX3-913 | TC1: Validate that “List” tab items are displayed unselected', () => {
		selectable.clickList();
		selectable.selectListItem().should('have.class', 'active');
	});
});
