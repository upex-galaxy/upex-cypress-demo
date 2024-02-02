class DragabblePage {
	get = {
		tabSimple: () => cy.get('#draggableExample-tab-simple'),
		tabList: () => cy.get('.nav-item'),
		tabActive: () => cy.get('.nav-item.nav-link.active'),
		draBox: () => cy.get('#dragBox'),
		tabAxisRestriction: () => cy.get('#draggableExample-tab-axisRestriction'),
		restrictedX: () => cy.get('#restrictedX'),
		restrictedY: () => cy.get('#restrictedY'),
		tabcontainerRestriction: () => cy.get('#draggableExample-tab-containerRestriction'),
		textcontainedBox: () => cy.get('.draggable.ui-widget-content.ui-draggable'),
		textcontainedParent: () => cy.get('.ui-widget-header.ui-draggable.ui-draggable-handle'),
		tabCursorStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorBottom: () => cy.get('#cursorBottom'),
	};
	clickSimpleTab() {
		return this.get.tabSimple().click();
	}
	tswitchToTab() {
		return this.get.tabActive().click();
	}
	moveRandomBox(deltaX, deltaY) {
		return this.get.draBox().move({ deltaX, deltaY, force: true });
	}
	clicktabaxisRestriction() {
		this.get.tabAxisRestriction().click();
	}
	moveRamdomOnlyX(deltaX, deltaY) {
		this.get.restrictedX().move({ deltaX, deltaY, force: true });
	}
	moveRamdomOnlyY(deltaY, deltaX) {
		this.get.restrictedY().move({ deltaY, deltaX, force: true });
	}
	clicktabcontainerRestriction() {
		this.get.tabcontainerRestriction().click();
	}
	moveTextBox(deltaX, deltaY) {
		this.get.textcontainedBox().move({ deltaX, deltaY, force: true });
	}
	moveTextParent(deltaX, deltaY) {
		this.get.textcontainedParent().move({ deltaX, deltaY, force: true });
	}
	clickCursorStyle() {
		this.get.tabCursorStyle().click();
	}
	dragCursorCenter(deltaX, deltaY) {
		this.get.cursorCenter().move({ deltaX, deltaY, force: true });
	}
	dragCursorTopLeft(deltaX, deltaY) {
		this.get.cursorTopLeft().move({ deltaX, deltaY, force: true });
	}
	dragCursorBottom(deltaX, deltaY) {
		this.get.cursorBottom().move({ deltaX, deltaY, force: true });
	}
}
export const dragabblePage = new DragabblePage();
