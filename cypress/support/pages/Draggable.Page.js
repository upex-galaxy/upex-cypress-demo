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
		let left = Cypress._.random(1, 100); //Coord was taken from Content Box only
		let top = Cypress._.random(1, 40); //Coord was taken from Content Box only
		cy.log(left, top);

		// this.get.dragSection();
		this.get
			.dragMe()
			.trigger('mousedown', 'center', { which: 1, pageX: left, pageY: top })
			.trigger('mousemove', { which: 1, clientX: left, clientY: top })
			.trigger('mouseup', { force: true });
	}
}

class AxisRestricted {
	get = {
		AxisTab: () => cy.get('#draggableExample-tab-axisRestriction'),
		RestrictedX: () => cy.get('#restrictedX'),
		RestrictedY: () => cy.get('#RestrictedY'),
	};

	GetAxisTab() {
		this.get.AxisTab().click();
	}
}

export const dragMeSimple = new simple();
export const dragAxisRestricted = new AxisRestricted();
