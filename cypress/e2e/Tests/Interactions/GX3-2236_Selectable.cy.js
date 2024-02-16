import { selectableNew } from 'cypress/support/pages/GX3-2236-intereactions.Page.js';
import { selectablePage } from '../../../support/pages/GX3-2184-Selectable.Page';

cypress/support/pages/GX3-2236-intereactions.Page.js

describe('GX3-1169| ToolsQA | Interactions | Selectable', () => {
	beforeEach('Visitar la pagina Demo QA', () => {
		cy.visit('https://demoqa.com/selectable');
	});

	it('1169|TC1: Validar la selección de un elemento de la Lista', () => {
		selectableNew.ClickBloqueList();
		selectableNew.ClickItemList();
		selectableNew.get.itemsList().eq(1).should('have.class', 'active');
	});

	it('1169|TC2: Validar la selección de un elemento de la cuadricula', () => {
		selectableNew.clickBloqueGrid();
		selectableNew.selectGridItem();
		selectableNew.get.GridItems().should('have.class', 'active')
	});

	it('1169|TC3: Validar la selección de varios elementos de la lista', () => {});

	//it('1169|TC4: Validar la selección de varios elementos de la cuadricula', () => {});
	//it('1169|TC5: Validar que se destilda un elemento de la Lista', () => {});
	//it('1169|TC6: Validar que se destilda un elemento de la cuadricula', () => {});
	//it('1169|TC7: Validar que se destilda varios elementos de la lista', () => {});
	//it('1169|TC8: Validar que se destilda varios elementos de la cuadricula', () => {});
});