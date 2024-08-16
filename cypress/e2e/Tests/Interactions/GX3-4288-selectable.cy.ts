import { selectablePage } from '@pages/GX3-4288-selectable.Page';
describe('GX3 4288|ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRD: Usuario Deberia Visitar la Pagina Demo QA',() => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain','selectable');
	});
	it('GX3-4289 | TC1: Validar que se pueda seleccionar un elemento de la lista',() => {//	SelectablePage.clickRandomsItemsList();
		selectablePage.clickRandomsItemsList();
		cy.get('@indexrandoms').then((indexrandoms: unknown) => {
			selectablePage.get.itemsList().eq(indexrandoms as number).should('have.class','active');
		});
	});
	it ('GX3-4289 | TC2: Validar que deseleccionar un elemento de la lista',() => {
		selectablePage.desSeleccionarItemsList();
		cy.get('@indexrandomsD').then((indexrandomsD: unknown) => {
			selectablePage.get.itemsList().eq(indexrandomsD as number).should('not.have.class','active');
		});
	});
	it('GX3-4289 | TC3: Validar que se pueda seleccionar un elemento del Grid',() => {
		selectablePage.clickTabGrid();
		selectablePage.clickRandomsItemsGrid();
		cy.get('@randomsIndexGrid').then((randomsIndexGrid: unknown) => {
			selectablePage.get.itemsGrid().eq(randomsIndexGrid as number).should('have.class','active');
		});
	});
	it('GX3-4289 | TC4: Validar que deseleccionar un elemento del Grid',() => {
		selectablePage.clickTabGrid();
		selectablePage.desSeleccionarItemsGrid();
		cy.get('@randomsGridD').then((randomsGridD: unknown) => {
			selectablePage.get.itemsGrid().eq(randomsGridD as number).should('not.have.class','active');
		});
	});

});