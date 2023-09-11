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
	validationRandomPosition() {
		return this.get
			.dragMe()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	clickAxisRestricted() {
		this.get.tabAxisRestricted().click();
	}
	moveX() {
		cy.get('#restrictedX').move({ deltaX: 500, deltaY: 200 }, { force: true });
	}
	validationMoveX() {
		return this.get
			.onlyX()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	moveY() {
		cy.get('#restrictedY').move({ deltaX: 300, deltaY: 500 }, { force: true });
	}
	validationMoveY() {
		return this.get
			.onlyY()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	//movimiento dentro de estructura
	clickContainerRestricted() {
		this.get.tabContainerRestricted().click();
	}
	moveInTheBox() {
		cy.get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle').move({ deltaX: 300, deltaY: 500 }, { force: true });
	}
	validationMoveInTheBox() {
		return this.get
			.theBox()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	moveInTheParents() {
		cy.get('.draggable.ui-widget-content.m-3').move({ deltaX: 20, deltaY: 90 });
	}
	validationMoveInTheParents() {
		return this.get
			.theParents()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	//movimiento de cursor//
	clickCursorStyle() {
		this.get.tabCursorStyle().click();
	}
	moveBoxCenter(ejeX, ejeY) {
		this.get.cursorCenter().move({ deltaX: ejeX, deltaY: ejeY });
	}
	validationMoveCenter() {
		return this.get
			.cursorCenter()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	moveBoxTopLeft(ejeX, ejeY) {
		this.get.cursorTopLeft().move({ deltaX: ejeX, deltaY: ejeY });
	}
	validationMoveTopLeft() {
		return this.get
			.cursorTopLeft()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	moveBoxBottom(ejeX, ejeY) {
		this.get.cursorBotton().move({ deltaX: ejeX, deltaY: ejeY });
	}
	validationMoveBoxBottom() {
		return this.get
			.cursorBotton()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
}

export const Dragabble = new dragabble();