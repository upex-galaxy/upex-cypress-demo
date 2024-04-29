import { selectablePage } from '../../../support/pages/GX3-3192-Selectable.Page';
import data from '.././../../fixtures/data/Interactions/GX3-3192-selectable.json';

describe('⚡️ToolsQA | Interactions | Selectable', () => {

	beforeEach('Precondición:', () => {
		cy.visit('/selectable');
		cy.url().should('contain', 'selectable');
	});

	it('TC01. Validar que la pestaña  <List> esté seleccionada por defecto, sus listas NO están seleccionadas y sus valores sean correctos. ',() => {
		selectablePage.get.tabList().should('have.class','active');
		selectablePage.get.verticalListContainer().should('not.have.class','active');

		selectablePage.get.verticalListContainer().should('contain','Cras justo odio');
		selectablePage.get.verticalListContainer().should('contain','Dapibus ac facilisis in');
		selectablePage.get.verticalListContainer().should('contain','Morbi leo risus');
		selectablePage.get.verticalListContainer().should('contain','Porta ac consectetur ac');

	});

	it('TC02: Validar que un o varios elementos de la pestaña  <List>  puedan ser seleccionados correctamente.',() => {
		//const RandomList = Math.floor(Math.random() * 3);
		const RandomList = Cypress._.random(0,3);

		selectablePage.get.verticalListContainer().should('not.have.class','active');
		selectablePage.clickOnListedItems(RandomList);
		selectablePage.get.verticalListContainer().should('have.class','active');

	});
	it('TC03: Validar que un o varios elementos de la pestaña  <List>  puedan ser des seleccionados correctamente.',() => {
		const randomList = Cypress._.random(0,3);

		selectablePage.clickOnListedItems(randomList);
		selectablePage.get.verticalListContainer().should('have.class','active');
		selectablePage.clickOnListedItems(randomList);
		selectablePage.get.verticalListContainer().should('not.have.class','active');
	});

	it('TC04. Validar poder seleccionar la pestaña  <Grid>  y sus valores sean correctos.',() => {
		selectablePage.get.tabGrid().should('not.have.class','active');
		selectablePage.clickOnGridTab();
		selectablePage.get.tabGrid().should('have.class','active');

		selectablePage.get.HorizontalDiv().should('have.text','OneTwoThreeFourFiveSixSevenEightNine');
	});

	it('TC05. Validar que un elementos de la pestaña  <Grid>  pueda ser seleccionado correctamente.',() => {
		const randomClick = Cypress._.random(0,8);

		selectablePage.clickOnGridTab();
		selectablePage.get.HorizontalDiv().should('not.have.class','active');
		selectablePage.clickOnGridItems(randomClick);
		selectablePage.get.HorizontalDiv().should('have.class','active');
	});
	it('TC06. Validar que un o varios elementos de la pestaña  <Grid>  puedan ser des-seleccionados correctamente.',() => {
		const randomClick = Cypress._.random(0,8);
		selectablePage.clickOnGridTab();
		selectablePage.clickOnGridItems(randomClick);
		selectablePage.get.HorizontalDiv().should('have.class','active');
		selectablePage.clickOnGridItems(randomClick);
		selectablePage.get.HorizontalDiv().should('not.have.class','active');

	});
});