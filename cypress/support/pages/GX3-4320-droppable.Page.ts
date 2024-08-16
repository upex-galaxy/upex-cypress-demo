class Droppable {
	get = {
		dragMeBox :() => cy.get('#draggable'),
		dropBoxContainerSimpleTap :() => cy.get('#simpleDropContainer #droppable'),
		//Accept Tab
		acceptTab:() => cy.get('#droppableExample-tab-accept'),
		acceptableBox:() => cy.get('#acceptable'),
		notAcceptableBox: () => cy.get('#notAcceptable'),
		acceptDropContainer:() => cy.get('#acceptDropContainer #droppable'),
		//Prevent Tab
		preventTab:() => cy.get('#droppableExample-tab-preventPropogation'),
		dragBox1:() => cy.get('#dragBox'),
		dropBoxOuter:() => cy.get('#notGreedyDropBox p').eq(0),
		innerDroppableNoGreedy:() => cy.get('#notGreedyInnerDropBox p'),
		innerDroppableGreedy:() => cy.get ('#greedyDropBoxInner p'),
		//Revers Tab
		revertableTab:() => cy.get('#droppableExample-tab-revertable'),
		willRevertableBox:() => cy.get('#revertable'),
		notRevertableBox:() => cy.get('#notRevertable'),
		revertableDropContainer:() => cy.get('#droppableExample-tabpane-revertable #droppable p')
	};
	//Simple
 	movDragmeBox() {
		const randomsArea =Cypress._.random(360,390);
		const randomsTop =Cypress._.random(50,70);
		this.get.dragMeBox().move({ deltaX:randomsArea,deltaY:randomsTop });
	};
	//Accept Tab
	clickAcceptTab() {
		this.get.acceptTab().click();
	};
	movAcceptableBox() {
		this.get.acceptableBox().drag('#acceptDropContainer #droppable',{ force:true });
	};
	movNotAcceptableBox() {
		this.get.notAcceptableBox().drag('#acceptDropContainer #droppable',{ force:true });
	};
	//Prevent Tab
	clickPreventTab() {
		this.get.preventTab().click();
	};
	movDragBoxOuterDroppable() {
		const randomsX =Cypress._.random(290,400);
		const randomsY =Cypress._.random(6,10);
		this.get.dragBox1().move({ deltaX:randomsX,deltaY:randomsY });
	}
	movDragBoxInnerDroppableNg() {
		const randomsX =Cypress._.random(310,315);
		const randomsY =Cypress._.random(65,170);
		this.get.dragBox1().move({ deltaX:randomsX,deltaY:randomsY });
	}
	movDragBoxInnerDroppableG() {
		const randomsX =Cypress._.random(310,315);
		const randomsY =Cypress._.random(350,440);
		this.get.dragBox1().move({ deltaX:randomsX,deltaY:randomsY });
	}
	//Revers Tab
	clickRevertableTab() {
		this.get.revertableTab().click();
	};
	movWillRevertableBox() {
		this.get.willRevertableBox().drag('#droppableExample-tabpane-revertable #droppable',{ force:true });
	};
	movNotRevertableBox() {
		this.get.notRevertableBox().drag('#droppableExample-tabpane-revertable #droppable',{ force:true });
	};

}

export const droppablePage = new Droppable();