class Dragabble {
	get = {
		simpleTab: () => cy.get('#draggableExample-tab-simple'),
		axisRestrictedTab: () => cy.get('#draggableExample-tab-axisRestriction'),
		containerRestrictedTab: () => cy.get('#draggableExample-tab-containerRestriction'),
		cursorStyleTab: () => cy.get('#draggableExample-tab-cursorStyle'),
		simpleTabVisible: () => cy.get('.nav-item.active'),
		buttonDragBox: () => cy.get('#dragBox'),
		buttonOnlyX: () => cy.get('#restrictedX'),
		buttonOnlyY: () => cy.get('#restrictedY'),
		textContainedBox: () => cy.get('div.draggable.ui-widget-content.ui-draggable.ui-draggable-handle'),
		textContainedParent: () => cy.get('span.ui-widget-header.ui-draggable.ui-draggable-handle'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorBottom: () => cy.get('#cursorBottom'),
	};

	moveRandom(deltaX, deltaY) {
		this.get.buttonDragBox().move({ deltaX, deltaY, force: true });
	}
	moveRandomX(deltaX, deltaY) {
		this.get.buttonOnlyX().move({ deltaX, deltaY, force: true });
	}
	moveRandomY(deltaX, deltaY) {
		this.get.buttonOnlyY().move({ deltaX, deltaY, force: true });
	}

	moveRandomDelimitedBox(deltaX, deltaY) {
		this.get.textContainedBox().move({ deltaX, deltaY, force: true });
	}
	moveRandomDelimitedParent(deltaX, deltaY) {
		this.get.textContainedParent().move({ deltaX, deltaY, force: true });
	}
}
export const draggable = new Dragabble();
