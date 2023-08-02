import { removeLogs } from '@helper/RemoveLogs';

describe('GX2-5371 | ✅ToolsQA | Interactions | Sortable', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/sortable');
	});

	it('5372 | TC1: Validate the tabs “List” and “Gird” must be showing by default.', () => {
		cy.get('#demo-tab-list').should('be.visible');
		cy.get('#demo-tab-list').should('be.visible');
	});

	it('5372 | TC2: Validate the tab “List” must be opened by default.', () => {});
	it('5372 | TC3: Validate only one tab can be displayed at once.', () => {
		// Write your test case one here
	});
	it('5372 | TC4: Validate “List” and “Grid” items have to be able to be ordered in any possible order.', () => {
		// Write your test case two here
	});
	it('5372 | TC5: Validate Default order and List items: One, Two, Three, Four, Five, Six.', () => {
		// Write your test case one here
	});
	it('5372 | TC6: Validate when any item in the list is dragged, it must stay in the selected order.', () => {
		// Write your test case two here
	});
	it('5372 | TC7: Validate Grid items have to be able to be stacked in any order.', () => {
		// Write your test case one here
	});
	it('5372 | TC8: Validate Default grid items One, Two, Three, Four, Five, Six, Seven, Eight, Nine.', () => {
		// Write your test case two here
	});
	it('5372 | TC9: Validate Expected display: 3 x 3 grid.', () => {
		// Write your test case one here
	});
	it('5372 | TC10: Validate when any item in the list is dragged, it must stay in the selected order.', () => {
		// Write your test case two here
	});
	it('5372 | TC11: Validate List items have to be able to be stacked in any order.', () => {
		// Write your test case two here
	});
});
removeLogs();
