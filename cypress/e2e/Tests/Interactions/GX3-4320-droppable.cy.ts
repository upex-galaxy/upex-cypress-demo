import { droppablePage } from '@pages/GX3-4320-droppable.Page';
describe('GX3 4320 | ToolsQA | Interactions | Droppable', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/droppable');
		cy.url().should('contain', 'droppable');
	});

	it('4321 | TC1: Validar que "Drag me" se arraste "Drog Me" y muestre el texto ""Dropped!"', () => {
		droppablePage.movDragmeBox();
		droppablePage.get.dropBoxContainerSimpleTap().find('p').should('have.text', 'Dropped!');
	});
	it('4321 | TC2  Validar que "Acceptable" se arraaste a "Drog Me" y muestre el texto ""Dropped!', () => {
		droppablePage.clickAcceptTab();
		droppablePage.movAcceptableBox();
		droppablePage.get.acceptDropContainer().should('have.text', 'Dropped!');
	});
	it('4321 | TC3 Validar que " Not Acceptable" se arrastre a "Drog Me" y no se visualice ningun cambio', () => {
		droppablePage.clickAcceptTab();
		droppablePage.movNotAcceptableBox();
		droppablePage.get.acceptDropContainer().should('not.have.text', 'Dropped!');
	});

	it('4321  | TC4: Validar que "Will Revert" se arrastre a "Drop here" entonces el área "Will revert" regresa a su posicion inicial y se muestra el text "Dropped!"', () => {
		droppablePage.clickRevertableTab();
		droppablePage.movWillRevertableBox();
		droppablePage.get.revertableDropContainer().should('have.text', 'Dropped!');
	});

	it('4321 | TC5: Validar que "Not Revert" se arrastre a "Drop here" entonces el área "Not revert" no se puede eliminar del area "Drop here" y  se muestra el text "Dropped"', () => {
		droppablePage.clickRevertableTab();
		droppablePage.movNotRevertableBox();
		droppablePage.get.revertableDropContainer().should('have.text', 'Dropped!');
	});
	it('4321  | TC6: Validar que "Drag me" se arrastre a "Outer Droppable', () => {
		droppablePage.clickPreventTab();
		droppablePage.movDragBoxOuterDroppable();
		droppablePage.get.dropBoxOuter().should('have.text', 'Dropped!');
	});
	it('4321  | TC7: Validar que "Drag me" se arrastre a "Inner Droppable (not greedy)', () => {
		droppablePage.clickPreventTab();
		droppablePage.movDragBoxInnerDroppableNg();
		droppablePage.get.innerDroppableNoGreedy().should('have.text', 'Dropped!');
	});
	it('4321  | TC8: Validar que "Drag me" se arrastre a "Inner Droppable (greedy)"', () => {
		droppablePage.clickPreventTab();
		droppablePage.movDragBoxInnerDroppableG();
		droppablePage.get.innerDroppableGreedy().should('have.text', 'Dropped!');
	});
});
