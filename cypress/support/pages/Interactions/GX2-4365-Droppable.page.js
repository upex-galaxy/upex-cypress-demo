class Droppable {
	elements = {
		draggable: () => cy.get('#draggable'),
		droppable: () => cy.get('#droppable'),
		droppable1: () => cy.get('#droppable')[1],
		tabSimple: () => cy.get('#droppableExample-tab-simple'),
		tabAccept: () => cy.get('#droppableExample-tab-accept'),
		acceptable: () => cy.get('#acceptable'),
		notAcceptable: () => cy.get('#notAcceptable'),
		dragBox: () => cy.get('#dragBox'),
		tabPropogation: () => cy.get('#droppableExample-tab-preventPropogation'),
		notGreedyDropBox: () => cy.get('#notGreedyDropBox'),
		notGreedyInnerDropBox: () => cy.get('#notGreedyInnerDropBox'),
		greedyDropBox: () => cy.get('#greedyDropBox'),
		greedyDropBoxInner: () => cy.get('#greedyDropBoxInner'),
		tabRevert: () => cy.get('#droppableExample-tab-revertable'),
		revert: () => cy.get('#revertable'),
		notRevert: () => cy.get('#notRevertable'),
		contenedorDropSimple: () => cy.get('#simpleDropContainer'),
		accept: () => cy.get('[id=acceptDropContainer] [class*=drop-box]'),
		revertDrop: () => cy.get('[id=revertableDropContainer] [class*=drop-box]'),
	};
	notgreedy() {
		return this.elements.notgreedy();
	}
	revertDrop() {
		return this.elements.revertDrop();
	}
	accept() {
		return this.elements.accept();
	}
	visit() {
		cy.visit('https://demoqa.com/droppable');
	}
	draggable() {
		return this.elements.draggable();
	}
	droppable() {
		return this.elements.droppable();
	}
	droppable1() {
		return this.elements.droppable1();
	}
	tabSimple() {
		return this.elements.tabSimple();
	}
	tabAccept() {
		return this.elements.tabAccept();
	}
	tabRevert() {
		return this.elements.tabRevert();
	}
	tabPropogation() {
		return this.elements.tabPropogation();
	}

	acceptable() {
		return this.elements.acceptable();
	}
	notAcceptable() {
		return this.elements.notAcceptable();
	}
	dragBox() {
		return this.dragBox();
	}
	contenedorDropSimple() {
		return this.elements.contenedorDropSimple();
	}

	notGreedyDropBox() {
		return this.elements.notGreedyDropBox();
	}
	notGreedyInnerDropBox() {
		return this.elements.notGreedyInnerDropBox();
	}
	greedyDropBox() {
		return this.elements.greedyDropBox();
	}
	greedyDropBoxInner() {
		return this.elements.greedyDropBoxInner();
	}
	revert() {
		return this.elements.revert();
	}
	notRevert() {
		return this.elements.notRevert();
	}
	getRandomNumber(min, max) {
		return Cypress._.random(min, max);
	}

	SeleccionarSimple() {
		this.elements.tabSimple().click();
	}
	SeleccionarAccept() {
		this.elements.tabAccept().click();
	}
	SeleccionarPropogation() {
		this.elements.tabPropogation().click();
	}
	SeleccionarRevert() {
		this.elements.tabRevert().click();
	}
}

export const droppable = new Droppable();
