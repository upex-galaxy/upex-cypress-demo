import { sortable } from '@pages/Interactions/sortablePage';
import '@4tw/cypress-drag-drop';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX2-3452 | ToolsQA | Interactions | Sortable', () => {
	let data;

	beforeEach('User must be in the website ', () => {
		cy.fixture('/data/sortable.json').then(dato => {
			data = dato;
		});
		cy.visit('https://demoqa.com/sortable ');
	});

	it('GX2-3453 | TC1: Validate the order and list items.', () => {
		sortable.get.listTab().should('exist').and('be.visible');
		sortable
			.getListItems()
			.should('exist')
			.and('be.visible')
			.each((item, index) => {
				expect(item.text()).to.be.equal(data.listItems[index]);
				expect(item.text()).to.be.oneOf(data.listItems);
			});
	});
	it.skip('GX2-3453 | TC2: Validate drag a list item between other list items and stay in the selected order', () => {
		let arrayNewList = [];

		sortable.getRandomListItem().trigger('mousedown', { which: 1 });

		sortable.getRandomListTarget().trigger('mousemove').click({ force: true });
		cy.get('[class^="vertical-list-container"]')
			.children()
			.each(item => {
				cy.log(item.text());
				arrayNewList.push(item.text());
			})
			.then(() => {
				expect(arrayNewList[Cypress.env('randomListTarget')]).to.be.equal(data.listItems[Cypress.env('randomListItem')]);
			});
	});
	it('GX2-3453 | TC3: Validate the grid items and a 3X3 grid is displayed', () => {
		sortable.get.gridTab().should('exist').and('not.be.selected');
		sortable.clickGridTab();
		sortable.get
			.grid()
			.children()
			.each((item, index) => {
				expect(item.text()).to.be.equal(data.gridItems[index]);
			});
		sortable.get.grid().should('have.css', 'display', 'inline-grid').and('have.css', 'grid-template-columns', '108px 108px 108px');
	});
	it.skip('GX2-3453 | TC4: Validate drag a grid item between other grid items and stay in the selected order', () => {
		let arrayNewGrid = [];
		sortable.clickGridTab();
		sortable.getRandomGridItem().trigger('mousedown', { which: 1 });
		sortable.getRandomGridTarget().trigger('mousemove').click({ force: true });
		sortable
			.getGridItems()
			.each(item => {
				arrayNewGrid.push(item.text());
			})
			.then(() => {
				expect(arrayNewGrid[Cypress.env('randomGridTarget')]).to.be.equal(data.gridItems[Cypress.env('randomGridItem')]);
			});
	});
});
