class Droppable {

	get = {
		dragBox: () => cy.get('#draggable'),
		dropHere: () => cy.get('#droppable'),
	};

	moverDragbox() {
		this.get.dragBox().trigger('mousedown', { which: 1 });
		this.get.dropHere().trigger('mousemove', { clientX: 240, clientY: 46 }).trigger('mouseup',{ force: true });
		this.get.dropHere().should('have.css', 'background-color', 'rgb(70, 130, 180)');
		this.get.dropHere().should('have.text', 'Dropped!');
	}
}

export const droppablePage = new Droppable();