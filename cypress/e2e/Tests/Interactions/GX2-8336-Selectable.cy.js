import { selectable } from '@pages/Interactions/GX2-8336-Selectable.page';
describe(' GX2-8336-✅ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRC:visit toolQA', () => {
		selectable.get.endpoint();
	});
	it('TC1:The tabs “List” and “Gird” must be showing by default. ', () => {
		selectable.get.list().should('exist').and('have.attr', 'aria-selected', 'true');
		selectable.get.grid().should('exist').and('have.attr', 'aria-selected', 'false');
	});
	it('TC2: Validate that the “List” tab is displayed and working as expected', () => {
		//hacer clic en tab "List"
		selectable.listTabClick();
		// evaluar que los elementos de la lista estan por defecto NO seleccionados
		selectable.defaultElemListContainer();
		// evaluar que los elementos de la lista al ser clickeados se colorean de color azul
		selectable.elemListContainer();
		// evaluar que el texto de los elementos de la lista coinciden con el texto dado
		const expectedTexts = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac'];
		selectable.get.listContainer().each(($item, index) => {
			cy.wrap($item).invoke('text').should('eq', expectedTexts[index]);
		});
		// evaluar que los elementos de la lista al ser clickeados nuevamente se colorean de blanco(default)
		selectable.elemDefListContainer();
	});
	it.only('TC3: Validate that the “Grid” tab is displayed and working as expected', () => {
		//hacer clic en tab "Grid"
		selectable.gridTabClick();
		// evaluar que los elementos de la lista estan por defecto seleccionados
		selectable.defaultElemGridContainer();
		// evaluar que los elementos de la lista al ser clickeados se colorean de color azul
		selectable.elemGridContainer();
		// evaluar que el texto de los elementos de la lista coinciden con el texto dado
		const expectedTexts = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
		selectable.get.gridContainer().each(($item, index) => {
			cy.wrap($item).invoke('text').should('eq', expectedTexts[index]);
		});
		// evaluar que los elementos de la lista al ser clickeados nuevamente se colorean de blanco(default)
		selectable.elemDefGridContainer();
		// validar que el grid esta compuesto de una matriz 3x3
		cy.get('#row1 > li, #row2 > li, #row3 > li').should('have.length', 9);
	});
});
