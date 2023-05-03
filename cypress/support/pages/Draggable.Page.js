class simple {
	get = {
		dragMe: () => cy.get('#dragBox'),
		dragSection: () => cy.get('[class="col-12 mt-4 col-md-6"]'),
	};

	simpleDrag() {
		let left = Cypress._.random(1, 460);
		let top = Cypress._.random(1, 460);
		cy.log(left, top);

		this.get.dragSection();
		this.get
			.dragMe()
			.trigger('mousedown', 'center', { which: 1, pageX: left, pageY: top })
			.trigger('mousemove', { which: 1, clientX: left, clientY: top })
			.trigger('mouseup', { force: true });
	}
}

export const dragMeSimple = new simple();
