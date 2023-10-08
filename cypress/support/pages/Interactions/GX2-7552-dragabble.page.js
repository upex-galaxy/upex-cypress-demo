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
		dragMove.get.OnlyX().move({ deltaX: 250 });
	}
	clickOnlyY() {
		this.get.OnlyY().click();
		dragMove.get.OnlyY().move({ deltaX: 150, deltaY: 150 });
	}
	clickContenedor() {
		this.get.restricted().click();
		dragMove.get.contenedorBox().move({ deltaX: 350, deltaY: 100 });
	}
	clickContenedorBox() {
		this.get.contenedorBox().click();
		dragMove.get.contenedorParent().move({ deltaX: 86, deltaY: 150 });
	}
	clickContenedorParent() {
		this.get.contenedorParent().click();
	}
	clickCursoStyle() {
		this.get.cursoStyle().click();
	}

	clickCursorCenter() {
		this.get.cursorCenter().click();
		dragMove.get.cursorCenter().move({ deltaX: 250, deltaY: 100 });
	}
	resetCursorCenter() {
		dragMove.get.cursorCenter().move({ deltaX: -150, deltaY: 0 });
	}
	clickCursorTopLeft() {
		this.get.cursorTopLeft().click();
		dragMove.get.cursorTopLeft().move({ deltaX: 350, deltaY: 0 });
	}
	resetCursorTopLeft() {
		dragMove.get.cursorTopLeft().move({ deltaX: -350, deltaY: 0 });
	}
	clickCursorBottom() {
		this.get.cursorBottom().click();
		dragMove.get.cursorBottom().move({ deltaX: 100, deltaY: 200 });
	}
	resetCursorbottom() {
		dragMove.get.cursorBottom().move({ deltaX: -100, deltaY: 150 });
	}
}

export const dragMove = new dgb();
