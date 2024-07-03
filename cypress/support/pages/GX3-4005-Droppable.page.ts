class DroppableElement {
	get = {
		tabSimple: () => cy.get('#droppableExample-tab-simple'),

	};
}

export const droppablePage = new DroppableElement();