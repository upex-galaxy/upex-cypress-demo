import { selectablePage } from '../../../support/pages/GX3-3192-Selectable.Page';
import data from '.././../../fixtures/data/Interactions/GX3-3192-selectable.json';
//const {selectable} = Cypress.env('endpoint');

describe('⚡️ToolsQA | Interactions | Selectable', () => {

	beforeEach('Precondición:', () => {
		cy.visit('/selectable');
		cy.url().should('contain', 'selectable');
		//cy.url().should('contain',selectable);
	});

	it('TC01. Validar que la pestaña  <List> esté seleccionada por defecto y sus listas NO están seleccionados. ',() => {
		selectablePage.get.tabList;
		//selectablePage.get.tabList.should('have.text','List');

		cy.get(data.elements.ListTab).should('have.class','active');
		cy.get(data.elements.VerticalListDiv).should('not.have.class','active');

		cy.get(data.elements.VerticalListDiv).should('contain','Cras justo odio');
		cy.get(data.elements.VerticalListDiv).should('contain','Dapibus ac facilisis in');
		cy.get(data.elements.VerticalListDiv).should('contain','Morbi leo risus');
		cy.get(data.elements.VerticalListDiv).should('contain','Porta ac consectetur ac');

	});

	it.only('TC02: Validar que un o varios elementos de la pestaña  <List>  puedan ser seleccionados y desseleccionados correctamente.',() => {
		const RandomList = Math.floor(Math.random() * 3);

		selectablePage.clickOnListedItems();
		selectablePage.clickOnGridTab();
		//cy.get('.mt-2.list-group-item.list-group-item-action').eq(RandomList).click();

	});

	it('TC03. Validar poder seleccionar la pestaña  <Grid>  y sus valores sean correctos.',() => {
		cy.get('#demo-tab-grid').click();
		//cy.get('#gridContainer');
		cy.get('#gridContainer').should('have.text','OneTwoThreeFourFiveSixSevenEightNine');

		cy.get('.list-group-item.list-group-item-action').eq(1);
		// cy.get('.list-group-item.list-group-item-action').eq(0).click();
		// cy.get('.list-group-item.active.list-group-item-action').eq(0).should('exist');
	});

	it('TC04. Validar poder seleccionar la pestaña  <Grid>  y sus valores sean correctos.',() => {
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