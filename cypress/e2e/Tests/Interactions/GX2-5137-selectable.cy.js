import { selectable } from '@pages/Interactions/GX2-5137-selectable.page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
const randomElementInList = Cypress._.random(0, 3);
const randomElementInGrid = Cypress._.random(0, 8);

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
		//this is a second click for unselect the option
		selectable.selectList(1);
		selectable.get.listContainer().eq(1).should('not.have.class', 'active');
	});

	it('TC3 | Validate selecting elements in list random', () => {
		selectable.selectListTab();
		selectable.selectList(randomElementInList);
		selectable.get.listContainer().eq(randomElementInList).should('have.class', 'active');
	});

	it('TC4 | Validate selecting one option in grid list', () => {
		selectable.selectGridTab();
		selectable.selectGrid(2);
		selectable.get.gridContainer().eq(2).should('have.class', 'active');
	});

	it('TC5 | Validate selecting random elements in grid list', () => {
		selectable.selectGridTab();
		selectable.selectGrid(randomElementInGrid);
		selectable.get.gridContainer().eq(randomElementInGrid).should('have.class', 'active');
	});

	it('TC6 | Validate selecting the last element in grid list', () => {
		selectable.selectGridTab();
		selectable.get.gridContainer().then(Element => {
			const lastElement = Element.length - 1;
			selectable.selectGrid(lastElement);
		});
	});
	it('TC7 | Validate selecting random elements grid list with length', () => {
		selectable.selectGridTab();
		selectable.get.gridContainer().then(selectGrid => {
			const randomIndex = Cypress._.random(0, selectGrid.length - 1);
			selectable.selectGrid(randomIndex);
		});
	});
});
