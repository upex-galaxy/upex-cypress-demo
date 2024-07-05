class DroppableElement {
	get = {
		simpleTab: () => cy.get('#droppableExample-tab-simple'),
		accceptTab: () => cy.get('#droppableExample-tab-accept'),
		preventPropogationTab: () => cy.get('#droppableExample-tab-preventPropogation'),
		revertableTab:() => cy.get('#droppableExample-tab-revertable'),
		//TC3
		dragmeBox:() => cy.get('#draggable'),
		droppableAction:() => cy.get('#droppable:first'),
		dragcontainer: () => cy.get('#simpleDropContainer')
		//TC4
		//acceptableDropTc

	};
	clickAcceptTab() {
		this.get.accceptTab().click();
	}
	clickPreventPropogationTab() {
		this.get.preventPropogationTab().click();
	}
	clickRevertableTab() {
		this.get.revertableTab().click();
	}

	dragdropTc1() {
		const deltaOX = Cypress._.random(350,380);
		this.get.dragmeBox().move({ deltaX: deltaOX, deltaY: 57 });

		//this.get.dragmeBox().drag('#droppable:first',{ force:true });
	}

}
export const droppaBlePage = new DroppableElement();