import { Selectable } from '@pages/selectable.page';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅ToolsQA | Interactions | Selectable', () => {
	beforeEach(() => {
		cy.visit('selectable');
	});
	it('1973 | TC1: Validar todos los objetos.', () => {
		Selectable.clickOne();
		Selectable.get.bttnList();
		Selectable.clickAll;
	});
	it('1973 | TC2: Validar seleccionar y deseleccionar la opción "Cras justo odio".', () => {
		Selectable.clickOne();
		//cy.contains('Cras justo odio').click();
		Selectable.get.bttnOne().should('have.attr', 'class', 'mt-2 list-group-item active list-group-item-action');
		Selectable.get.bttnOne().click();
	});
	it('1973 | TC3: Validar seleccionar y deseleccionar la opción "Dapibus ac facilisis in".', () => {
		Selectable.clickTwo();
		Selectable.get.bttnTwo().should('have.attr', 'class', 'mt-2 list-group-item active list-group-item-action');
		Selectable.clickTwo();
		Selectable.get.bttnTwo().should('have.attr', 'class', 'mt-2 list-group-item list-group-item-action');
	});
	it('1973 | TC4: Validar seleccionar y deseleccionar la opción "Morbi leo risus"', () => {
		Selectable.clickThree();
		Selectable.get.bttnThree().should('have.attr', 'class', 'mt-2 list-group-item active list-group-item-action');
		Selectable.clickThree();
		Selectable.get.bttnThree().should('have.attr', 'class', 'mt-2 list-group-item list-group-item-action');
	});
	it('1973 | TC5: Validar seleccionar y deseleccionar la opción "Porta ac consectetur ac"', () => {
		Selectable.clickFour();
		Selectable.get.bttnFour().should('have.attr', 'class', 'mt-2 list-group-item active list-group-item-action');
		Selectable.clickFour();
		Selectable.get.bttnFour().should('have.attr', 'class', 'mt-2 list-group-item list-group-item-action');
	});
	it('1973 | TC6: Validar seleccionar el botón "Grid"', () => {
		Selectable.clickGrid();
		Selectable.get.bttnGrid().should('have.attr', 'class', 'nav-item nav-link active');
	});
	it('1973 | TC7: Validar seleccionar y deseleccionar todos los números.', () => {
		Selectable.clickGrid();
		Selectable.get.bttnGrid().should('have.attr', 'class', 'nav-item nav-link active');
		Selectable.clickTodo();
		Selectable.clickTodo();
	});
});
removeLogs();
