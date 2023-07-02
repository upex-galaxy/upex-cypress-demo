import { removeLogs } from '@helper/RemoveLogs';
import { toolsqasortable } from '@pages/Interactions/GX2-3666-sortablePage';
removeLogs();
import data from '../../../fixtures/data/GX2-3666-Sortable.json';

describe('GX2-3666| ToolsQA | Interactions | Sortable', () => {
	beforeEach('Preconditions', () => {
		cy.visit('https://demoqa.com/sortable');
		cy.url().should('contain', 'sortable');
	});

	it('GX1-3667|TC01 Validate elements in "List" tab', () => {
		toolsqasortable.getTabList().should('exist').and('be.visible');
		toolsqasortable
			.getListItems()
			.should('exist')
			.and('be.visible')
			.each((item, index) => {
				expect(item.text()).to.be.equal(data.array1[index]);
				expect(item.text()).to.be.oneOf(data.array1);
			});
	});

	it('GX2-3667|TC02: Validate in LIST tab Drag a random element to a random position', () => {
		let arrayListTarget = [];
		cy.then(() => {
			if (toolsqasortable.getRandomItemL() === toolsqasortable.getRandomTargetL()) {
				toolsqasortable.getRandomTargetL();
			}
			toolsqasortable.getRandomListItem().trigger('mousedown', { which: 1 });
			toolsqasortable.getRandomListTarget().trigger('mousemove').click({ force: true });

			toolsqasortable
				.getListItems()
				.each(item => {
					arrayListTarget.push(item.text());
				})
				.then(() => {
					expect(data.array1).to.not.deep.equal(arrayListTarget);
					expect(data.array1[Cypress.env('randomListItem')]).to.be.equal(arrayListTarget[Cypress.env('randomListTarget')]);
				});
		});
	});

	it('GX3-3667|TC03: Validate in Grid tab Drag a random element to a random position', () => {
		toolsqasortable.selectGritdTab();
		cy.then(() => {
			if (toolsqasortable.getRandomItemG() === toolsqasortable.getRandomTargetG()) {
				toolsqasortable.getRandomItemG();
			}

			toolsqasortable.getRandomItemGrid().trigger('mousedown', { which: 1 });
			toolsqasortable.getRandomTargetGrid().trigger('mousemove').click({ force: true });

			let arrayGridTarget = [];
			toolsqasortable
				.getGridItems()
				.each(item => {
					arrayGridTarget.push(item.text());
				})
				.then(() => {
					expect(data.array2).to.not.equal(arrayGridTarget);
					expect(data.array2[Cypress.env('randomGridItem')]).to.be.equal(arrayGridTarget[Cypress.env('randomGridTarget')]);
				});
		});
	});
});
