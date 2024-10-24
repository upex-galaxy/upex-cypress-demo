import { selectablePage } from '../../../support/pages/GX3-5376-Selectable.Page';

describe('GX3-5376 | TS: ToolsQA | Interactions | Selectable', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});

	it('GX3-5376 | TC1: Validar que la pestaña "List" se muestre por defecto', () => {
		selectablePage.openListTab();
		selectablePage.get.listButton().should('have.class', 'active');
	});

	it('GX3-5376 | TC2: Validar que se pueda seleccionar un ítem aleatorio en la pestaña "List"', () => {
		selectablePage.openListTab();
		selectablePage.selectRandomListItem().then($selectedItem => {
			cy.wrap($selectedItem).should('have.class', 'active');
		});
	});

	it('GX3-5376 | TC3: Validar que se pueda deseleccionar un ítem en la pestaña "List"', () => {
		selectablePage.openListTab();
		selectablePage.selectRandomListItem();
		selectablePage.deselectListItem().then($selectedItem => {
			cy.wrap($selectedItem).should('not.have.class', 'active');
		});
	});

	it('GX3-5376 | TC4: Validar que se pueda seleccionar un ítem aleatorio en la pestaña "Grid"', () => {
		selectablePage.openGridTab();
		selectablePage.selectRandomGridItem().then($selectedGridItem => {
			cy.wrap($selectedGridItem).should('have.class', 'active');
		});
	});

	it('GX3-5376 | TC5: Validar que se pueda deseleccionar un ítem en la pestaña "Grid"', () => {
		selectablePage.openGridTab();
		selectablePage.selectRandomGridItem();
		selectablePage.deselectGridItem().then($selectedGridItem => {
			cy.wrap($selectedGridItem).should('not.have.class', 'active');
		});
	});
});
