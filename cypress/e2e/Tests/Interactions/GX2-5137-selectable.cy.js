import { selectable } from '@pages/Interactions/GX2-5137-selectable.page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
const randomList = Cypress._.random(0, 3);

describe('ToolsQA | Interactions | Selectable', () => {
	beforeEach('user must be in the website', () => {
		cy.visit('https://demoqa.com/selectable');
	});

	it('TC1 | Validate selecting elements in list', () => {
		selectable.clickButtonList();
		selectable.get.buttonList().should('have.class', 'active');
	});
});
