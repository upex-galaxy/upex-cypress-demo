//import { selectable } from '@pages/Interactions/GX2-5129-Selectable.page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
//const randomList = Cypress._.random(0, 3);
describe('✅ToolsQA | Interactions | Selectable', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('5130 | TC1: Validar que se puedan seleccionar los elementos de la pestaña “List“.', () => {
		//selectable.clickBttnList();
		//selectable.get.bttnList().should('have.class', 'active');
		//selectable.clickElementList(randomList);
		//selectable.get.listContainer().eq(randomList).should('have.class', 'active');
		cy.get('#demo-tab-list').click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(0).click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(1).click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(2).click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(3).click();
	});
	it('5130 | TC2: Validar que se puedan deseleccionar los elementos de la pestaña “List“.', () => {
		cy.get('#demo-tab-list').click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(0).click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(1).click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(2).click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(3).click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(3).should('not.be.checked').click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(2).should('not.be.checked').click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(1).should('not.be.checked').click();
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(0).should('not.be.checked').click();
	});
	it('5130 | TC3: Validar que se puedan seleccionar los elementos de la pestaña “Grid“.', () => {
		cy.get('#demo-tab-grid').click();
		cy.get('.list-group-item.list-group-item-action').eq(4).click();
		cy.get('.list-group-item.list-group-item-action').eq(5).click();
		cy.get('.list-group-item.list-group-item-action').eq(6).click();
		cy.get('.list-group-item.list-group-item-action').eq(7).click();
		cy.get('.list-group-item.list-group-item-action').eq(8).click();
		cy.get('.list-group-item.list-group-item-action').eq(9).click();
		cy.get('.list-group-item.list-group-item-action').eq(10).click();
		cy.get('.list-group-item.list-group-item-action').eq(11).click();
		cy.get('.list-group-item.list-group-item-action').eq(12).click();
	});
	it('5130 | TC4: Validar que se puedan deseleccionar los elementos de la pestaña “Grid“.', () => {
		cy.get('#demo-tab-grid').click();
		cy.get('.list-group-item.list-group-item-action').eq(4).click();
		cy.get('.list-group-item.list-group-item-action').eq(5).click();
		cy.get('.list-group-item.list-group-item-action').eq(6).click();
		cy.get('.list-group-item.list-group-item-action').eq(7).click();
		cy.get('.list-group-item.list-group-item-action').eq(8).click();
		cy.get('.list-group-item.list-group-item-action').eq(9).click();
		cy.get('.list-group-item.list-group-item-action').eq(10).click();
		cy.get('.list-group-item.list-group-item-action').eq(11).click();
		cy.get('.list-group-item.list-group-item-action').eq(12).click();
		cy.get('.list-group-item.list-group-item-action').eq(12).should('not.be.checked').click();
		cy.get('.list-group-item.list-group-item-action').eq(11).should('not.be.checked').click();
		cy.get('.list-group-item.list-group-item-action').eq(10).should('not.be.checked').click();
		cy.get('.list-group-item.list-group-item-action').eq(9).should('not.be.checked').click();
		cy.get('.list-group-item.list-group-item-action').eq(8).should('not.be.checked').click();
		cy.get('.list-group-item.list-group-item-action').eq(7).should('not.be.checked').click();
		cy.get('.list-group-item.list-group-item-action').eq(6).should('not.be.checked').click();
		cy.get('.list-group-item.list-group-item-action').eq(5).should('not.be.checked').click();
		cy.get('.list-group-item.list-group-item-action').eq(4).should('not.be.checked').click();
	});


});

