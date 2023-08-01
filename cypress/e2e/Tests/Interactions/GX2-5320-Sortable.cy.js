import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { Sortable } from '@pages/Interactions/GX2-5320-Sortable.Page';
import the from '@data/GX2-5320-Sortable.json';

describe('GX2-5320-✅-tools-qa-interactions-sortable', () => {
	beforeEach('Usuario se encuentra en la sección de Sortable', () => {
		cy.visit('sortable');
		cy.url().should('contain', 'sortable');
	});
	it('5321 | TC1: Validar la existencia de la pestaña “List” y que esté ordenada por default', () => {
		Sortable.get.tabList().should('exist').and('be.visible').and('contain.class', the.StatusClass);
		Sortable.ItemList()
			.should('be.visible')
			.each((item, index) => {
				expect(item.text()).to.equal(the.itemList[index]);
			});
	});
	it.only('5321 | TC2: Validar mover un objecto aleatoriamente entre los otros objectos de la pestaña “List” y que permanezca en su nueva posición', () => {
		var NewList = [];
		Sortable.selectItemRandomList();
		Sortable.moveSelectItemList();
		Sortable.ItemList()
			.each(item => {
				cy.log(item.text());
				NewList.push(item.text());
			})
			.then(() => {
				expect(NewList[Cypress.env('moveItemList')]).to.be.equal(the.itemList[Cypress.env('RandomItemList')]);
			});
	});
});
