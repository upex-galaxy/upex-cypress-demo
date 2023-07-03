class Droppable {
	elements = {
		draggable: () => cy.get('#draggable'),

		destino: () => cy.get('#droppable')[0],
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
		revert: () => cy.get('#revert'),
		notRevert: () => cy.get('#notRevert'),
		contenedorDropSimple: () => cy.get('#simpleDropContainer'),
	};

	visit() {
		cy.visit('https://demoqa.com/droppable');
	}
	drag() {
		return this.elements.drag().as('Origen');
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
	draggable() {
		return this.elements.draggable();
	}
	destino() {
		return this.elements.destino();
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
