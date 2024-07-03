class DroppableElement {
	get = {
		simpleTab: () => cy.get('#droppableExample-tab-simple'),
		accceptTab: () => cy.get('#droppableExample-tab-accept'),
		preventPropogationTab: () => cy.get('#droppableExample-tab-preventPropogation'),
		revertableTab:() => cy.get('#droppableExample-tab-revertable')

	};
}

export const droppablePage = new DroppableElement();