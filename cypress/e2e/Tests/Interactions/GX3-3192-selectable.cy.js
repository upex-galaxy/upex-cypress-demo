//import {selectablePage} from '../../../support/pages/GX3-3192-Selectable.Page';
//const  {selectablePage} '../../../support/pages/GX3-3192-Selectable.Page.js';

describe('⚡️ToolsQA | Interactions | Selectable', () => {

	beforeEach('Precondición:', () => {
		cy.visit('/selectable');
		cy.url().should('contain', 'selectable');
	});

	it('TC01. Validar que la pestaña  <List> esté seleccionada por defecto y sus valores sean correctos. ',() => {
		//cy.get('#demo-tab-list').should('have.css','aria-selected','true');
		cy.get('#demo-tab-list').should('have.text','List');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(0);
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(0).should('have.text','Cras justo odio');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(1).should('have.text','Dapibus ac facilisis in');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(2).should('have.text','Morbi leo risus');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(3).should('have.text','Porta ac consectetur ac');

		cy.get('#verticalListContainer li');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(3).should('have.css','background-color','#f8f9fa?');
	});

	it('TC02. TC02: Validar que un o varios elementos de la pestaña  <List>  puedan ser seleccionados correctamente.',() => {
		//const RandomList = Math.floor(Math.random() * 3);
		//cy.get('#demo-tab-list').should('have.css','aria-selected','true');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(0).click();
		//cy.get('.mt-2.list-group-item.list-group-item-action').eq(0).should('have.css','background-color','#f8f9fa?');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(1).should('have.text','Dapibus ac facilisis in');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(2).should('have.text','Morbi leo risus');
		cy.get('.mt-2.list-group-item.list-group-item-action').eq(3).should('have.css','Background-color','#f8f9fa?');

		cy.get('.mt-2.list-group-item.active.list-group-item-action').eq(0).click();
	});

	it.only('TC03. Validar poder seleccionar la pestaña  <Grid>  y sus valores sean correctos.',() => {
		cy.get('#demo-tab-grid').click();
		//cy.get('#gridContainer');
		cy.get('#gridContainer').should('have.text','OneTwoThreeFourFiveSixSevenEightNine');

		cy.get('.list-group-item.list-group-item-action').eq(1).should('have.css','Background-color','#f8f9fa?');
		cy.get('.list-group-item.list-group-item-action').eq(1).should('have.css','color','#495057');

		cy.get('.list-group-item.list-group-item-action').eq(1);
		// cy.get('.list-group-item.list-group-item-action').eq(0).click();
		// cy.get('.list-group-item.active.list-group-item-action').eq(0).should('exist');
	});

	it.only('TC04. Validar poder seleccionar la pestaña  <Grid>  y sus valores sean correctos.',() => {
		cy.get('#demo-tab-grid').click();
		//cy.get('#gridContainer');
		cy.get('#gridContainer').should('have.text','OneTwoThreeFourFiveSixSevenEightNine');

		cy.get('.list-group-item.list-group-item-action').eq(1).should('have.css','Background-color','#f8f9fa?');
		cy.get('.list-group-item.list-group-item-action').eq(1).should('have.css','color','#495057');

		cy.get('.list-group-item.list-group-item-action').eq(1);
		// cy.get('.list-group-item.list-group-item-action').eq(0).click();
		// cy.get('.list-group-item.active.list-group-item-action').eq(0).should('exist');
	});
});