import { SelectablePage } from '@pages/GX3-4288-selectable.Page';
describe('GX3 4288|ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRD: Usuario Deberia Visitar la Pagina Demo QA',() => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain','selectable');
	});
	it ('GX3-4289 | TC1: Validar que se pueda seleccionar un elemento de la lista',() => {//	SelectablePage.clickRandomsItemsList();
		cy.get('@indexrandoms').then(indexrandoms => {
			cy.log(indexrandoms);
			SelectablePage.get.itemsList().eq(indexrandoms).should('have.class','active');
		});
	});
	it ('GX3-4289 | TC2: Validar que deseleccionar un elemento de la lista',() => {
		SelectablePage.desSeleccionarItemsList();
		cy.get('@indexrandomsD').then(indexrandomsD => {
			cy.log(indexrandomsD);
			SelectablePage.get.itemsList().eq(indexrandomsD).should('not.have.class','active');
		});
	});
	it('GX3-4289 | TC3: Validar que se pueda seleccionar un elemento del Grid',() => {
		SelectablePage.clickTabGrid();
		SelectablePage.clickRandomsItemsGrid();
		cy.get('@randomsIndexGrid').then(randomsIndexGrid => {
			cy.log(randomsIndexGrid);
			SelectablePage.get.itemsGrid().eq(randomsIndexGrid).should('have.class','active');
		});
	});
	it.only('GX3-4289 | TC4: Validar que deseleccionar un elemento del Grid',() => {
		SelectablePage.clickTabGrid();
		SelectablePage.desSeleccionarItemsGrid();
		cy.get('@randomsGridD').then(randomsGridD => {
			cy.log(randomsGridD);
			SelectablePage.get.itemsGrid().eq(randomsGridD).should('not.have.class','active');
		});
	});

});