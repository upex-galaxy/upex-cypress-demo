class dgb {
	get = {
		simple: () => cy.get('#draggableExample-tab-simple'),
		dragBox: () => cy.get('#dragBox'),
		axisRestricted: () => cy.get('#draggableExample-tab-axisRestriction'),
		OnlyX: () => cy.get('#restrictedX'),
		OnlyY: () => cy.get('#restrictedY'),
		restricted: () => cy.get('#draggableExample-tab-containerRestriction'),
		contenedorBox: () => cy.get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle'),
		contenedorParent: () => cy.get('span.ui-widget-header.ui-draggable.ui-draggable-handle'),
		cursoStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorBottom: () => cy.get('#cursorBottom'),
	};
	clickSimple() {
		this.get.simple().click();
	}
	clickDragbox() {
		this.get.dragBox().click();
	}
	clickAxis() {
		this.get.axisRestricted().click();
	}
	clickOnly() {
		this.get.OnlyX().click();
	}
	clickOnlyY() {
		this.get.OnlyY().click();
	}
	clickContenedor() {
		this.get.restricted().click();
	}
	clickContenedorBox() {
		this.get.contenedorBox().click();
	}
	clickContenedorParent() {
		this.get.contenedorParent().click();
	}
	clickCursoStyle() {
		this.get.cursoStyle().click();
	}
	clickCursorCenter() {
		this.get.cursorCenter().click();
	}
	clickCursorTopLeft() {
		this.get.cursorTopLeft().click();
	}
	clickCursorBottom() {
		this.get.cursorBottom().click();
	}
}

export const dragMove = new dgb();
