class Draggable {
	elements = {
		dragBox: () => cy.get('#dragBox'),
		restrictedX: () => cy.get('#restrictedX'),
		restrictedY: () => cy.get('#restrictedY'),
		draggableAxisRestriction: () => cy.get('#draggableExample-tab-axisRestriction'),
		draggableRestriction: () => cy.get('#draggableExample-tab-containerRestriction'),
		draggableCursorStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		draggableExampleSimple: () => cy.get('#draggableExampleSimple'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorBottom: () => cy.get('#cursorBottom'),
		moverContenedor: () => cy.get('[class="ui-widget-header ui-draggable ui-draggable-handle"]'),
	};

	visit() {
		cy.visit('https://demoqa.com/dragabble');
	}
	cursorCenter() {
		return cy.get('#cursorCenter');
	}
	cursorTopLeft() {
		return cy.get('#cursorTopLeft');
	}
	cursorBottom() {
		return cy.get('#cursorBottom');
	}

	dragBox() {
		return cy.get('#dragBox');
	}
	restrictedY() {
		return cy.get('#restrictedY');
	}
	contenedorEstático() {
		return cy.get('[class="ui-widget-header ui-draggable ui-draggable-handle"]').parent('#containmentWrapper');
	}
	restrictedX() {
		return cy.get('#restrictedX');
	}
	moverContenedor() {
		return cy.get('[class="draggable ui-widget-content ui-draggable ui-draggable-handle"]').parent('#containmentWrapper');
	}

	getRandomNumber(min, max) {
		return Cypress._.random(min, max);
	}

	moveElement(elementSelector, x, y) {
		cy.get(elementSelector).move({ deltaX: x, deltaY: y });
	}

	SeleccionarPestaña() {
		this.elements.pestaña().click();
	}
	draggableRestriction() {
		this.elements.draggableRestriction().click();
	}
	draggableCursorStyle() {
		this.elements.draggableCursorStyle().click();
	}
	draggableAxisRestriction() {
		this.elements.draggableAxisRestriction().click();
	}
	draggableExampleSimple() {
		this.elements.draggableExampleSimple().click();
	}
}

export const draggable = new Draggable();
