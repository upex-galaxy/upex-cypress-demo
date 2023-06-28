class Droppable {
	elements = {
		draggable: () => cy.get('#draggable'),
		droppable: () => cy.get('#droppable'),
		tabSimple: () => cy.get('#droppableExample-tabpane-simple'),
		tabAccept: () => cy.get('#droppableExample-tabpane-accept'),
		acceptable: () => cy.get('#acceptable'),
		notAcceptable: () => cy.get('#notAcceptable'),
		dragBox: () => cy.get('#dragBox'),
		tabPropagation: () => cy.get('#droppableExample-tabpane-preventPropogation'),
		notGreedyDropBox: () => cy.get('#notGreedyDropBox'),
		notGreedyInnerDropBox: () => cy.get('#notGreedyInnerDropBox'),
		greedyDropBox: () => cy.get('#greedyDropBox'),
		greedyDropBoxInner: () => cy.get('#greedyDropBoxInner'),
		tabPaneRevertable: () => cy.get('#droppableExample-tabpane-revertable'),
		revertable: () => cy.get('#revertable'),
		notRevertable: () => cy.get('#notRevertable'),
	};

	visit() {
		cy.visit('https://demoqa.com/droppable');
	}
	draggable() {
		return cy.get('#draggable');
	}
	droppable() {
		return cy.get('#droppable');
	}
	acceptable() {
		return cy.get('#acceptable');
	}
	notAcceptable() {
		return cy.get('#notAcceptable');
	}
	dragBox() {
		return cy.get('#dragBox');
	}
	notGreedyDropBox() {
		return cy.get('#notGreedyDropBox');
	}
	notGreedyInnerDropBox() {
		return cy.get('#notGreedyInnerDropBox');
	}
	greedyDropBox() {
		return cy.get('#greedyDropBox');
	}
	greedyDropBoxInner() {
		return cy.get('#greedyDropBoxInner');
	}
	revertable() {
		return cy.get('#revertable');
	}
	notRevertable() {
		return cy.get('#notRevertable');
	}
	getRandomNumber(min, max) {
		return Cypress._.random(min, max);
	}

	moveElement(elementSelector, x, y) {
		cy.get(elementSelector).move({ deltaX: x, deltaY: y });
	}

	SeleccionarSimple() {
		this.elements.tabSimple().click();
	}
	SeleccionarAccept() {
		this.elements.tabAccept().click();
	}
	SeleccionarPropagation() {
		this.elements.tabPropagation().click();
	}
	SeleccionarRevertable() {
		this.elements.tabPaneRevertable().click();
	}
}

export const droppable = new Droppable();
