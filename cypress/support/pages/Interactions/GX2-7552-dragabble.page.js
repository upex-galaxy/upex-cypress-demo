class dgb {
	get = {
		simple: () => cy.get('#draggableExample-tab-simple'),
		dragBox: () => cy.get('#dragBox'),
		axisRestricted: () => cy.get('#draggableExample-tab-axisRestriction'),
		OnlyX: () => cy.get('#restrictedX'),
		OnlyY: () => cy.get('#restrictedY'),
		containeRestricted: () => cy.get('#draggableExample-tab-containerRestriction'),
		contenedorBox: () => cy.get('.draggable ui-widget-content ui-draggable ui-draggable-handle'),
		contenedorParent: () => cy.get('span.ui-widget-header.ui-draggable.ui-draggable-handle'),
		cursoStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursortopLeft'),
		cursorBottom: () => cy.get('#cursorBottom'),
	};
	clickSimple() {
		this.get.simple().click();
    }
    clickDragbox() {
        this.get.dragBox().click()
    }
}

export const dragMove = new dgb();
