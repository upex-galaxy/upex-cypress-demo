class Droppable {
	get = {
		simpleTab: () => cy.get('#droppableExample-tab-simple'),
		acceptTab: () => cy.get('#droppableExample-tab-accept'),
		preventPropogationTab: () => cy.get('#droppableExample-tab-preventPropogation'),
		revertableTab: () => cy.get('#droppableExample-tab-revertable'),
		tabList: () => cy.get('[role="tablist"]'),
	};
}

export const droppable = new Droppable();
