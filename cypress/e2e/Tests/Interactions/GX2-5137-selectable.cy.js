import { selectable } from '@pages/Interactions/GX2-5137-selectable.page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

const randomElementInList = Cypress._.random(0, 3);

describe('ToolsQA | Interactions | Selectable', () => {
	beforeEach('user must be in the website', () => {
		cy.visit('https://demoqa.com/selectable');
	});

	it('TC1 | Validate selecting elements in list', () => {
		// select List tab
		selectable.selectListTab();

		// click on first element in the list
		selectable.selectList(0);

		// assert that the element selected got active
		selectable.get.listContainer().eq(0).should('have.class', 'active');
		//assert that the element selected got blue
	});

	it('TC2 | Validate unselecting elements in list', () => {
		selectable.selectListTab();
		selectable.selectList(1);
		selectable.selectList(1);
		selectable.get.listContainer().eq(1).should('not.have.class', 'active');
	});

	it.only('Validate selecting elements in list random', () => {
		selectable.selectListTab();
		selectable.selectList(randomElementInList);
		selectable.get.listContainer().eq(randomElementInList).should('have.class', 'active');
	});
});
