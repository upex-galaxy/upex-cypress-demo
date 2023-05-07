class Draggabble {
	get = {
		//tabs:
		simpleTab: () => cy.get('#draggableExample-tab-simple'),
		axisTab: () => cy.get('#draggableExample-tab-axisRestriction'),
		containerRestricted: () => cy.get('#draggableExample-tab-containerRestriction'),
		cursorStyleTab: () => cy.get('[data-rb-event-key="cursorStyle"]'),

		//buttonSimple:
		dragMe: () => cy.get('[id="dragBox"]'),

		//Buttons Axis:
		OnlyX: () => cy.get('#restrictedX'),
		OnlyY: () => cy.get('#restrictedY'),

		//Buttons container restricted
		containerBox: () => cy.get('#containmentWrapper').children(),
		containerText: () => cy.get('span[class*="ui-widget-header"]'),

		//Buttons Cursor Style
		center: () => cy.get('#cursorCenter'),
		left: () => cy.get('#cursorTopLeft'),
		bottom: () => cy.get('#cursorBottom'),
	};

	moveDragMe(deltaX, deltaY) {
		this.get.dragMe().move({ deltaX, deltaY });
	}
	//axisTab
	goToAxisTab() {
		this.get.axisTab().click();
	}
	moveOnlyX(deltaX, deltaY) {
		this.get.OnlyX().move({ deltaX, deltaY });
	}

	moveOnlyY(deltaX, deltaY) {
		this.get.OnlyY().move({ deltaX, deltaY });
	}

	//containerRestricted
	goToContainTab() {
		this.get.containerRestricted().click();
	}
	moveContainedBox(deltaX, deltaY) {
		this.get.containerBox().move({ deltaX, deltaY });
	}
	moveContainerTex(deltaX, deltaY) {
		this.get.containerText().move({ deltaX, deltaY });
	}

	//cursor style
	goToCursorStyle() {
		this.get.cursorStyleTab().click();
	}
	//moveCenterBox(deltaX, deltaY) {
	//	this.get.center().move({ deltaX, deltaY });
	//}

	moveCenterBox(deltaX, deltaY) {
		this.get
			.center()
			.invoke('attr', 'style')
			.then(initialStyle => {
				this.get.center().move({ deltaX, deltaY });
				this.get.center('attr', 'style').should('not.be.equal', initialStyle);
			});
	}

	moveLeftBox(deltaX, deltaY) {
		this.get
			.left()
			.invoke('attr', 'style')
			.then(initialStyle => {
				this.get.left().move({ deltaX, deltaY });
				this.get.left().invoke('attr', 'style').should('not.be.equal', initialStyle);
			});
	}

	moveBottomBox(deltaX, deltaY) {
		this.get
			.left()
			.invoke('attr', 'style')
			.then(initialStyle => {
				this.get.bottom().move({ deltaX, deltaY });
				this.get.bottom().invoke('attr', 'style').should('not.be.equal', initialStyle);
			});
	}

	//MoveBottom() {
	//	this.get.bottom().move({ 90, 0 });
	//}
}

export const draggabble = new Draggabble();
