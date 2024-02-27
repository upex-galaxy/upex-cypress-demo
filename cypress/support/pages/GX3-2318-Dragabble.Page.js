class Dragabble {

	get = {
		body: () => cy.get('body'),
		boxSimple: () => cy.get('#draggableExample-tab-simple'),
		tabs: () => cy.get('[class="nav nav-tabs"]'),
		tabsSimple: () => cy.get('#draggableExample-tab-simple'),
		tabAxis: () => cy.get('[id="draggableExample-tab-axisRestriction"]'),
		tabContainer: () => cy.get('#draggableExample-tab-containerRestriction'),
		tabCursorStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		dragBox: () => cy.get('#dragBox'),
		onlyX: () => cy.get('#restrictedX'),
		onlyY: () => cy.get('#restrictedY'),
		containedBox: () => cy.get('[class="draggable ui-widget-content ui-draggable ui-draggable-handle"]').eq(0),
		containedMyParent: () => cy.get('[class="ui-widget-header ui-draggable ui-draggable-handle"]').eq(0),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorLeft: () => cy.get('#cursorTopLeft'),
		cursorBottom: () => cy.get('#cursorBottom'),

	};

	selectTabsSimple() {
		this.get.tabsSimple().click();
	}
	selectTabAxis() {
		this.get.tabAxis().click();
	}
	selectTabContainer() {
		this.get.tabContainer().click();
	}
	selectTabCursorStyle() {
		this.get.tabCursorStyle().click();
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveDragBox(X, Y) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.dragBox().move({ deltaX: X, deltaY: Y });
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveOnlyX(X) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.onlyX().move({ deltaX: X, deltaY: 0 });
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveOnlyY(Y) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.onlyY().move({ deltaX: 0, deltaY: Y });
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveContainedBox(X, Y) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.containedBox().move({ deltaX: X, deltaY: Y });
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveContainedMyParent(X, Y) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.containedMyParent().move({ deltaX: X, deltaY: Y });
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveCursorCenter(X, Y) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.cursorCenter().move({ deltaX: X, deltaY: Y, position: 'center' });
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveCursorLeft(X, Y) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.cursorLeft().move({ deltaX: X, deltaY: Y, position: 'topLeft' });
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveCursorBottom(X, Y) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.cursorBottom().move({ deltaX: X, deltaY: Y, position: 'bottom' });
	}
}

export const dragabblePage = new Dragabble();