class Dragabble {
	elements = {
		tabSimple: () => cy.get('#draggableExample-tab-simple'),
		tabAxisRestricted: () => cy.get('#draggableExample-tab-axisRestriction'),
		tabContainerRestricted: () => cy.get('#draggableExample-tab-containerRestriction'),
		tabCursorStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		dragBox: () => cy.get('#dragBox'),
		restrictedX: () => cy.get('#restrictedX'),
		restrictedY: () => cy.get('#restrictedY'),
		containerBox: () => cy.get('#containmentWrapper'),
		containerText: () => cy.get('.draggableExample-tabpane-containerRestriction'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorCenter: () => cy.get('#cursorTopLeft'),
		cursorBottom: () => cy.get ('#cursorBottom'),

	};
}
export const dragable = new Dragabble();