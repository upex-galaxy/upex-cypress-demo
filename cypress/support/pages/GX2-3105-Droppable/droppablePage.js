class Droppable {
	get = {
		simpleTab: () => cy.get('#droppableExample-tab-simple'),
		acceptTab: () => cy.get('#droppableExample-tab-accept'),
		preventPropogationTab: () => cy.get('#droppableExample-tab-preventPropogation'),
		revertableTab: () => cy.get('#droppableExample-tab-revertable'),
		tabList: () => cy.get('[role="tablist"]'),
		dragArea: () => cy.get('#draggable'),
		dropArea: () => cy.get('#droppable'),
		acceptableArea: () => cy.get('#acceptable'),
		notAcceptableArea: () => cy.get('#notAcceptable'),
		acceptContainer: () => cy.get('.accept-drop-container'),
		simpleContainer: () => cy.get('#simpleDropContainer'),
		preventContainer: () => cy.get('#ppDropContainer'),
		dragBox: () => cy.get('#dragBox'),
		outerArea1: () => cy.get('#notGreedyDropBox'),
		outerArea2: () => cy.get('#greedyDropBox'),
		notGreedyArea: () => cy.get('#notGreedyInnerDropBox'),
		greedyArea: () => cy.get('#greedyDropBoxInner'),
		revertableContainer: () => cy.get('#revertableDropContainer'),
		revertableArea: () => cy.get('#revertable'),
		notRevertableArea: () => cy.get('#notRevertable'),
	};

	moveAcceptableArea() {
		return droppable.get
			.acceptableArea()
			.trigger('mousedown', { which: 1, pageX: 50, pageY: 30 })
			.trigger('mousemove', { which: 1, pageX: 200, pageY: 30 });
	}
	clickAcceptTab() {
		this.get.acceptTab().click();
	}
	clickPreventTab() {
		this.get.preventPropogationTab().click();
	}
	clickRevertableTab() {
		this.get.revertableTab().click();
	}
	moveDragBoxToOuterArea() {
		return droppable.get
			.dragBox()
			.trigger('mousedown', { which: 1, pageX: 50, pageY: 30 })
			.trigger('mousemove', { which: 1, pageX: 100, pageY: 30 });
	}
	moveDragBoxToGreedyArea() {
		return droppable.get
			.dragBox()
			.trigger('mousedown', { which: 1, pageX: 50, pageY: 30 })
			.trigger('mousemove', { which: 1, pageX: 273, pageY: 374 });
	}
	moveRevertableArea() {
		return droppable.get
			.revertableArea()
			.trigger('mousedown', { which: 1, pageX: 50, pageY: 30 })
			.trigger('mousemove', { which: 1, pageX: 100, pageY: 30 });
	}
	moveNotRevertableArea() {
		return droppable.get
			.notRevertableArea()
			.trigger('mousedown', { which: 1, pageX: 50, pageY: 30 })
			.trigger('mousemove', { which: 1, pageX: 100, pageY: 30 });
    }
    
}
export const droppable = new Droppable();
