import { droppaBlePage } from '@pages/GX3-4005-DroppaBle.Page';
describe('GX3 4006 | ToolsQA | Interactions | Droppable', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/droppable');
		cy.url().should('contain', 'droppable');
	});
	it('4006 | TC1: Validar que las pestañas "Simple", "Accept", "Prevent Propogation" y "Revert Draggable" sean visibles , donde “Simple” se muestra de forma predeterminada', () => {
		droppaBlePage.get.simpleTab().should('be.visible');
		droppaBlePage.get.accceptTab().should('be.visible');
		droppaBlePage.get.preventPropogationTab().should('be.visible');
		droppaBlePage.get.revertableTab().should('be.visible');
		droppaBlePage.get.simpleTab().should('have.attr', 'aria-selected', 'true');
		droppaBlePage.get.accceptTab().should('have.attr', 'aria-selected', 'false');
		droppaBlePage.get.preventPropogationTab().should('have.attr', 'aria-selected', 'false');
		droppaBlePage.get.revertableTab().should('have.attr', 'aria-selected', 'false');
	});
	it('4006 | TC2: Validar que solo se muestra una pestaña a la vez', () => {
		droppaBlePage.clickAcceptTab();
		droppaBlePage.get.accceptTab().should('have.class', 'active');
		droppaBlePage.clickPreventPropogationTab();
		droppaBlePage.get.preventPropogationTab().should('have.class', 'active');
		droppaBlePage.clickRevertableTab();
		droppaBlePage.get.revertableTab().should('have.class', 'active');
	});
	it('4006 | TC3: Validar que "Drag me" es arrastrado a "Drop Here" y se muestra el texto "Dropped!"', () => {
		droppaBlePage.simpleDrop();
		cy.get('@simpleDropBox').should('have.text', 'Dropped!');
		cy.get('@simpleDropBox').should('have.class', 'ui-state-highlight');
	});
	it('4006 | TC4: Validar que "Acepptable"  es arrastrado a "Drop Here" y se visualiza el Text “Dropped!” ', () => {
		droppaBlePage.clickAcceptTab();
		droppaBlePage.acceptableDrop();
		cy.get('@acceptDropBox').should('have.class', 'ui-state-highlight');
		cy.get('@acceptDropBox').should('have.text', 'Dropped!');
		//droppaBlePage.get.droppableAction().eq(1).should('have.text', 'Dropped!');
		//droppaBlePage.get.containerDrop()
	});

	it('4006 | TC5: Validar "Not Acepptable" es arrastrado a "Drop Here" y no se visualice ningun cambio', () => {
		droppaBlePage.clickAcceptTab();
		droppaBlePage.notAcceptableDrop();
		cy.get('@notAcceptableDropBox').should('have.text', 'Drop here');
	});

	it('4006 | TC6: Validar que "Drag me" se arrastre a "Outer Droppable" ', () => {
		droppaBlePage.clickPreventPropogationTab();
		droppaBlePage.preventPropogationOuterDrop();
		cy.get('@ppOuterDropBox').should('have.class', 'ui-state-highlight');
		cy.get('@pLabelInNotGredyDrop').should('have.text', 'Dropped!');
	});

	it('4006 | TC7: Validar que "Drag me" se arrastre a "Inner Droppable (not greedy)" ', () => {
		droppaBlePage.clickPreventPropogationTab();
		droppaBlePage.preventPropogationDrop();
		cy.get('@pLabelInnerNotGredyDrop').should('have.text', 'Dropped!');
		cy.get('@ppDropBox').should('have.class', 'ui-state-highlight');

	});

	it('4006 | TC8: Validar que "Drag me" se arrastre a "Inner Droppable (greedy)"', () => {
		droppaBlePage.clickPreventPropogationTab();
		droppaBlePage.preventPropogationInnerDropGreddy();
		cy.get('@pLabelInnerGredyDrop').should('have.text', 'Dropped!');
		cy.get('@ppInnerGredyDropBox').should('have.class', 'ui-state-highlight');

	});

	it('4006 | TC9: Validar que "Will Revert" se arrastre a "Drop here" entonces el área "Will revert" regresa a su posicion inicial y se muestra el text "Dropped!"', () => {
		droppaBlePage.clickRevertableTab();
		droppaBlePage.revertableDrop();
		cy.get('@revertDropBox').should('have.text', 'Dropped!');
		cy.get('@revertDropBox').should('have.class', 'ui-state-highlight');

	});

	it.only('4006 | TC10: Validar que "Not Revert" se arrastre a "Drop here" entonces el área "Not revert" no se puede eliminar del area "Drop here" y  se muestra el text "Dropped"', () => {
		droppaBlePage.clickRevertableTab();
		droppaBlePage.notRevertDrop();
		cy.get('@notRevertDropBox').should('have.text', 'Dropped!');
		cy.get('@notRevertDropBox').should('have.class', 'ui-state-highlight');

	});
});
