import { selectableNew } from '../../../support/pages/GX3-2236-Selectable.Page.js';



describe('GX3-1169| ToolsQA | Interactions | Selectable', () => {
	beforeEach('Visitar la pagina Demo QA', () => {
		cy.visit('https://demoqa.com/selectable');
	});

	it('1169|TC1: Validar la sección de un elemento de la Lista', () => {
		selectableNew.seleccionarLista();
		selectableNew.seleccionarUnoLista();
		selectableNew.get.seleccionarUnoLista.eq(1).should('have.class', 'active');
	});

	it('1169|TC2: Validar la selección de un elemento de la cuadricula', () => {
		selectableNew.seleccionarGrid();
		selectableNew.seleccionarUnoGrid();
		selectableNew.get.seleccionarUnoGrid(5).should('have.class', 'active');
	});

	it('1169|TC3: Validar la selección de varios elementos de la lista', () => {
		selectableNew.seleccionarLista();
		selectableNew.seleccionarMultipleLista();
		selectableNew.get.seleccionarUnoLista(1).should('have.class', 'active');
	});

	it('1169|TC4: Validar la selección de varios elementos de la cuadricula', () => {
		selectableNew.seleccionarGrid();
		selectableNew.seleccionarMultiplesGrid();
		selectableNew.get.seleccionarUnoGrid(5).should('have.class', 'active');
	});

	it('1169|TC5: Validar que se destilda un elemento de la Lista', () => {
		selectableNew.seleccionarLista();
		selectableNew.seleccionarUnoLista();
		selectableNew.destildarUnoLista();
	});

	it('1169|TC6: Validar que se destilda un elemento de la cuadricula', () => {
		selectableNew.seleccionarGrid();
		selectableNew.seleccionarGrid();
		selectableNew.destildarUnoGrid();
	});

	it('1169|TC7: Validar que se destilda varios elementos de la lista', () => {
		selectableNew.seleccionarLista();
		selectableNew.seleccionarMultipleLista();
		selectableNew.destildarMultipleLista();
	});

	it('1169|TC8: Validar que se destilda varios elementos de la cuadricula', () => {
		selectableNew.seleccionarGrid();
		selectableNew.seleccionarMultipleGrid();
		selectableNew.destildarMultipleGrid();
	});
});