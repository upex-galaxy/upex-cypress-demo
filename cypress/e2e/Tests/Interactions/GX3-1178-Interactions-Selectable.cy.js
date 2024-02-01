import { PageSelect } from '../../../support/pages/Selectable/GX3-1178-Selectable.Page';
describe('GX3-1178 ToolsQA | Interactions | Selectable', () => {
	beforeEach('Usuario deberá estar situado en la pagina de Selectable', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('GX3-1179 | TC1: Validar que se pueda seleccionar un item de “List”', () => {
		PageSelect.ClickList();
		PageSelect.OneClickList();
		PageSelect.get.ListIcon().should('have.class', 'active');
	});
	it('GX3-1179 | TC2: Validar que se pueda desmarcar el item previamente seleccionado de “List”', () => {
		PageSelect.ClickList();
		PageSelect.OneClickList();
		PageSelect.UnselectOneClickList;
	});
	it('GX3-1179 | TC3: Validar que se pueda seleccionar múltiples items de “List” ', () => {
		PageSelect.ClickList();
		PageSelect.MultipleSelectList();
		PageSelect.get.ListIcon().should('have.class', 'active');
	});
	it('GX3-1179 | TC4:  Validar que se pueda desmarcar los múltiples items previamente seleccionados de “List”', () => {
		PageSelect.ClickList();
		PageSelect.MultipleSelectList();
		PageSelect.MultipleUnselectList();
	});
	it('GX3-1179 | TC5: Validar que se pueda seleccionar un item de “Grid”', () => {
		PageSelect.ClickGrid();
		PageSelect.OneClickGrid();
		PageSelect.get.GridIcon().should('have.class', 'active');
	});
	it('GX3-1179 | TC6: Validar que se pueda desmarcar el item previamente seleccionado de “Grid”', () => {
		PageSelect.ClickGrid();
		PageSelect.OneClickGrid();
		PageSelect.UnselectOneClickGrip();
	});
	it('GX3-1179 | TC7: Validar que se pueda seleccionar múltiples items de “Grid”', () => {
		PageSelect.ClickGrid();
		PageSelect.MultipleSelectGrid();
		PageSelect.get.GridIcon().should('have.class', 'active');
	});
	it('GX3-1179 | TC8:  Validar que se pueda desmarcar los múltiples items previamente seleccionados de “Grid”', () => {
		PageSelect.ClickGrid();
		PageSelect.MultipleSelectGrid();
		PageSelect.MultipleUnselectGrid();
	});
});
