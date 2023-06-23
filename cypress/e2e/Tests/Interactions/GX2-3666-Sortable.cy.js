/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { removeLogs } from '@helper/RemoveLogs';
import { toolsqasortable } from '@pages/Interactions/GX2-3666-sortablePage';
removeLogs();

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
		toolsqasortable.getRandomListTarget().then(() => {
			//toolsqasortable.getRandomListItem().then(() => {
			if (Cypress.env('randomListTarget') !== Cypress.env('randomList')) {
				//toolsqasortable.getRandomListItem().trigger('mousedown', { which: 1 });
				//toolsqasortable.getRandomListTarget().trigger('mousemove').click({ force: true });
				cy.log(Cypress.env('randomListTarget'));
				cy.log(Cypress.env('randomList'));
			} else {
				cy.log('volver a ingresar a la funcion llemando a getRandomListTarget');
			}
			//});
		});
	});
});

it('GX3-3667|TC03: En tab GRID Arrastre un elemento aleatorio a una posición aleatoria', () => {});
