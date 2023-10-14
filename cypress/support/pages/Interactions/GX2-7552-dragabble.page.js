class dgb {
	get = {
		tabSimple: () => cy.get('#draggableExample-tab-simple'),
		dragBox: () => cy.get('#dragBox'),
		axisTabRestricted: () => cy.get('#draggableExample-tab-axisRestriction'),
		OnlyX: () => cy.get('#restrictedX'),
		OnlyY: () => cy.get('#restrictedY'),
		tabRestricted: () => cy.get('#draggableExample-tab-containerRestriction'),
		containedBox: () => cy.get('#containmentWrapper div'),
		containedParent: () => cy.get('span[class="ui-widget-header ui-draggable ui-draggable-handle"]'),
		tabCursoStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorBottom: () => cy.get('#cursorBottom'),
	};

	clickTabSimple() {
		this.get.tabSimple().click().should('contain.text', 'Simple');
	}
	clickDragbox() {
		this.get.dragBox().click().should('have.css', 'left', `${0}px`).and('have.css', 'top', `${0}px`);
	}
	clickTabAxis() {
		this.get.axisTabRestricted().click().should('have.text', 'Axis Restricted');
	}
	clickOnlyX() {
		this.get.OnlyX().click().should('have.css', 'left', `${0}px`).and('have.css', 'top', `${0}px`);
	}
	clickOnlyY() {
		this.get.OnlyY().click().should('have.css', 'left', `${0}px`).and('have.css', 'top', `${0}px`);
	}
	clickContenedor() {
		this.get.tabRestricted().click().should('have.text', 'Container Restricted');
	}
	clickContenedorBox() {
		this.get.containedBox().click().should('have.css', 'left', `${0}px`).and('have.css', 'top', `${0}px`);
	}
	clickContenedorParent() {
		this.get.containedParent().click().should('have.css', 'left', `${0}px`).and('have.css', 'top', `${0}px`);
	}
	clickCursoStyle() {
		this.get.tabCursoStyle().click().should('have.text', 'Cursor Style');
	}

	clickCursorCenter() {
		this.get.cursorCenter().click().should('have.css', 'left', `${0}px`).and('have.css', 'top', `${0}px`);
	}
	clickCursorTopLeft() {
		this.get.cursorTopLeft().click().should('have.css', 'left', `${0}px`).and('have.css', 'top', `${0}px`);
	}
	clickCursorBottom() {
		this.get.cursorBottom().click().should('have.css', 'left', `${0}px`).and('have.css', 'top', `${0}px`);
	}
}

export const dragMovePage = new dgb();
