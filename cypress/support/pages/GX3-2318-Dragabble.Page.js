class Dragabble {

	get = {
		boxSimple: () => cy.get('#draggableExample-tab-simple'),
		tabs: () => cy.get('[class="nav nav-tabs"]'),
		tabsSimple: () => cy.get('#draggableExample-tab-simple'),
		tabAxis: () => cy.get('[id="draggableExample-tab-axisRestriction"]'),
		tabContainer: () => cy.get('#draggableExample-tab-containerRestriction'),
		tabCursorStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		dragBox: () => cy.get('#dragBox'),
		onlyX: () => cy.get('#restrictedX'),
		onlyY: () => cy.get('#restrictedY'),
		containedBox: () => cy.get('.draggable ui-widget-content ui-draggable ui-draggable-handle'),
		containedMyParent: () => cy.get('.ui-widget-header ui-draggable ui-draggable-handle'),
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
	selectTabContianer() {
		this.get.tabContainer().click();
	}
	selectTabCursorStyle() {
		this.get.tabCursorStyle().click();
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	moveDragBox(X, Y) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.get.dragBox().trigger('mousedown', { which: 1 });
  		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  		this.get.dragBox().trigger('mousemove', { clientX: X, clientY: Y });
  		this.get.dragBox().trigger('mouseup');
	}

}

export const dragabblePage = new Dragabble();