class simple {
	get = {
		dragMe: () => cy.get('#dragBox'),
		dragTab: () => cy.get('#draggableExample-tab-simple'),
		dragSection: () => cy.get('#tab-content'),
	};

	CheckTab() {
		return this.elements.dragTab();
	}

	simpleDrag() {
		let left = Cypress._.random(-300, 600); //Coord was taken from Content Box only
		let top = Cypress._.random(-300, 300); //Coord was taken from Content Box only
		cy.log(left, top);

		this.get.dragMe(); // obtener el elemento a arrastrar
		this.get.dragMe().move({ deltaX: left, deltaY: top });
	}
}

class AxisRestricted {
	get = {
		AxisTab: () => cy.get('#draggableExample-tab-axisRestriction'),
		OnlyX: () => cy.get('#restrictedX'),
		OnlyY: () => cy.get('#restrictedY'),
	};

	GetAxisTab() {
		this.get.AxisTab().click();
	}

	moveOnlyX() {
		let left = Cypress._.random(0, 100);
		this.get
			.OnlyX()
			.trigger('mousedown', { which: 1, pageX: left, pageY: 0 })
			.trigger('mousemove', { which: 1, clientX: left, ClientY: 0 })
			.trigger('mouseup', { force: true });
	}
	moveOnlyY() {
		let top = Cypress._.random(0, 40);
		this.get
			.OnlyY()
			.trigger('mousedown', { which: 1, pageX: 0, pageY: top })
			.trigger('mousemove', { which: 1, clientX: 0, ClientY: top })
			.trigger('mouseup', { force: true });
	}
}

class containerRestricted {
	get = {
		containerTab: () => cy.get('#draggableExample-tab-containerRestriction'),
		withinTheBox: () => cy.get('.ui-widget-content.ui-draggable.ui-draggable-handle'),
		containmentWrapper: () => cy.get('#containmentWrapper'),
		withinTheParent: () => cy.get('span.ui-draggable.ui-draggable-handle'),
		containmentParent: () => cy.get('draggable ui-widget-content m-3'),
	};
	getContainerRestricted() {
		this.get.containerTab().click();
	}
	moveOnlyWithinTheBox() {
		const randomX = Cypress._.random(-1.015625, 389.75); //limites dentro del box
		const randomY = Cypress._.random(-0.261719, 107.738); //Limite dentro del box
		cy.log(randomX);
		cy.log(randomY);
		this.get.withinTheBox().move({ deltaX: randomX, deltaY: randomY });
	}

	moveOutsideTheBox() {
		const randomX = Cypress._.random(-200, -1.8 || 390, 400); //limite fuera del box
		const randomY = Cypress._.random(-200, -0.3 || 108, 200); //Limite fuera del box
		cy.log(randomX);
		cy.log(randomY);
		this.get.withinTheBox().move({ deltaX: randomX, deltaY: randomY });
	}
	moveWithinTheParent() {
		const randomX = Cypress._.random(0, 13); //Limite dentro del parent
		const randomY = Cypress._.random(-1, 86); //Limite dentro del parent
		cy.log(randomX);
		cy.log(randomY);
		this.get.withinTheParent().move({ deltaX: randomX, deltaY: randomY });
		expect(randomX).to.equal(randomX);
	}
	moveOutsideTheParent() {
		const randomX = Cypress._.random(10, 0 || 14, 25); //Limite fuera del parent
		const randomY = Cypress._.random(-10, -2 || 87, 100); //Limite fuera del parent
		cy.log(randomX);
		cy.log(randomY);
		this.get.withinTheParent().move({ deltaX: randomX, deltaY: randomY });
	}
}

class cursorStyle {
	get = {
		cursorStyleTab: () => cy.get('#draggableExample-tab-cursorStyle'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorBottom: () => cy.get('#cursorBottom'),
		moveArea: () => cy.get('cursor-style-container.mt-4'),
	};
	getCursorStyleTab() {
		this.get.cursorStyleTab().click();
	}
	CenterStyle() {
		let left = Cypress._.random(-45, 682); //Coord was taken from Content Box only
		let top = Cypress._.random(-243, 0); //Coord was taken from Content Box only
		cy.log(left, top);

		this.get.cursorCenter().move({ deltaX: left, deltaY: top });
	}
	LeftStyle() {
		let left = Cypress._.random(-45, 682); //Coord was taken from Content Box only
		let top = Cypress._.random(-243, 0); //Coord was taken from Content Box only
		cy.log(left, top);

		this.get.cursorTopLeft().move({ deltaX: left, deltaY: top });
	}
	BottomStyle() {
		let left = Cypress._.random(-45, 682); //Coord was taken from Content Box only
		let top = Cypress._.random(-243, 0); //Coord was taken from Content Box only
		cy.log(left, top);

		this.get.cursorBottom().move({ deltaX: left, deltaY: top });
	}
}

export const dragMeSimple = new simple();
export const dragAxisRestricted = new AxisRestricted();
export const dragContainerRestricted = new containerRestricted();
export const dragCursorStyle = new cursorStyle();
