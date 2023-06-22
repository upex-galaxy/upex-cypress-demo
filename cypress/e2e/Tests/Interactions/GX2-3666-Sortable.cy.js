/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { removeLogs } from '@helper/RemoveLogs';
import { toolsqasortable } from '@pages/Interactions/GX2-3666-sortablePage';

describe('GX2-3666| ToolsQA | Interactions | Sortable', () => {
	beforeEach('Preconditions', () => {
		cy.visit('https://demoqa.com/sortable');
		//cy.url().should('contain', 'sortable');
	});
	let array1 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
	let array2 = ['One', 'Two,', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

	it('GX1-3667|TC01 Las pestañas "List" y "Gird" deben mostrarse por defecto.', () => {
		//cy.log('hola');
		//cy.get('#demo-tab-list').should('exist').and('be.visible');
		toolsqasortable.getTabList().should('exist').and('be.visible');
		toolsqasortable
			.getListItems()
			.should('exist')
			.and('be.visible')
			.each((item, index) => {
				expect(item.text()).to.be.equal(array1[index]);
				expect(item.text()).to.be.oneOf(array1);
			});
	});

	it.only('GX2-3667|TC02: En tab LIST Arrastre un elemento aleatorio a una posición aleatoria', () => {
		let arrayListTarget = [];
		let randomListTarget = Cypress.env('randomListTarget');

		let randomList = Cypress.env('randomList');
		cy.log(randomList);
		cy.log(randomListTarget);

		if (randomListTarget === randomList) {
			toolsqasortable.getRandomListTarget();
		} else {
			toolsqasortable.getRandomListItem(randomList).trigger('mousedown', { which: 1 });
			toolsqasortable.getRandomListTarget(randomListTarget).trigger('mousemove').click({ force: true });
		}
	});
});

it('GX3-3667|TC03: En tab GRID Arrastre un elemento aleatorio a una posición aleatoria', () => {});

removeLogs();
