class dragabble {
	get = {
		dragMe: () => cy.get('#dragBox'),
		tabAxisRestricted: () => cy.get('#draggableExample-tab-axisRestriction'),
		onlyX: () => cy.get('#restrictedX'),
		onlyY: () => cy.get('#restrictedY'),
		tabContainerRestricted: () => cy.get('#draggableExample-tab-containerRestriction'),
		theBox: () => cy.get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle'),
		theParents: () => cy.get('.draggable.ui-widget-content.m-3'),
		tabCursorStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorBotton: () => cy.get('#cursorBottom')
	};
	
	dragToRandomPosition() {
		cy.get('#dragBox').move({ deltaX: 200, deltaY: 125 });
		
	}
	clickAxisRestricted() {
		this.get.tabAxisRestricted().click();
	}
	moveX() {
		cy.get('#restrictedX').move({ deltaX: 500, deltaY: 200 }, { force: true });
	}
	moveY() {
		cy.get('#restrictedY').move({ deltaX: 300, deltaY: 500 }, { force: true });
	}
	clickContainerRestricted() {
		this.get.tabContainerRestricted().click();
	}
	moveInTheBox() {
		cy.get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle').move({ deltaX: 300, deltaY: 500 }, { force: true });
	}
	moveInTheParents() {
		cy.get('.draggable.ui-widget-content.m-3').move({ deltaX: 20, deltaY: 90 });
	}
}

export const Dragabble = new dragabble();