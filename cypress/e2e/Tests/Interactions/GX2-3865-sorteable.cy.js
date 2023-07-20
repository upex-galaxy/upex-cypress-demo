import { sortablePage } from '@pages/Interactions/GX3865-sortablePage';
import data from '@data/GX2-3865-sorteable.json';

describe('GX2-3865 | ToolsQA | Interactions | Sortable', () => {
	before(() => {
		// runs once before all tests
	});
	beforeEach(() => {
		cy.visit('/sortable');
	});
	afterEach(() => {
		// runs after every it() test block
	});
	after(() => {
		// runs once after all tests
	});
	// -- Start: Cypress Tests --
	it('3866 | TC1: Verify list order can be changed', () => {
		// Verify defaul order is expected
		sortablePage.getTextArrayItem().then(arrayItemsText => {
			cy.wrap(data.listItems).should('deep.equal', arrayItemsText);
		});

		// Move random element to random position
		sortablePage.triggerItem().then(({ startPosition, dropPosition, startTargetText, endTargetText }) => {
			expect(startPosition).to.not.equal(dropPosition);
			expect(startTargetText).to.not.equal(endTargetText);
		});
	});
	it('3866 | TC2: Verify in List Only one tab can be displayed at once. ', () => {
		sortablePage.getActiveTabs().then(activeTabs => {
			expect(activeTabs).to.have.lengthOf(1);
		});
	});

	it('3866 | TC3: Verify grid order can be changed', () => {
		cy.log('GRID--------------------------------------------');
		sortablePage.moveToGrid();
		sortablePage.getTextArrayGrid().then(arrayTextGrid => {
			// Verify defaul order is expected
			cy.wrap(data.gridItems).should('deep.equal', arrayTextGrid);
		});

		// Move random element to random position
		sortablePage.triggerGridItem().then(({ startPosition, dropPosition, startTargetText, endTargetText }) => {
			expect(startPosition).to.not.equal(dropPosition);
			expect(startTargetText).to.not.equal(endTargetText);
		});
	});
});
