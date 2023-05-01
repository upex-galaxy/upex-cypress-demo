class Dragabble {
	elements = {
		simpleTabClick: () => cy.get('#draggableExample-tab-simple'),
		axisRestrictedTabClick: () => cy.get('#draggableExample-tab-axisRestriction'),
		containerRestrictedTabClick: () => cy.get('#draggableExample-tab-containerRestriction'),
		cursorStyleTabClick: () => cy.get('#draggableExample-tab-cursorStyle'),
		draggableBoxSelect: () => cy.get('#dragBox'),
		draggableElementSelect: () => cy.get('#draggableExample-tabpane-axisRestriction'),
		restrictedXBox: () => cy.get('#restrictedX'),
		restrictedYBox: () => cy.get('#restrictedY'),
		containmentWrapper: () => cy.get('#containmentWrapper'),
		moveContainedBox: () => cy.get('#containmentWrapper .draggable'),

		containedTextSelect: () => cy.get('.draggableExample-tabpane-containerRestriction'),
		cursorTopLeftSelect: () => cy.get('#cursorTopLeft'),
		cursorCenterSelect: () => cy.get('#cursorTopLeft'),
		cursorBottomSelect: () => cy.get ('#cursorBottom'),

	};
	MIN = -30;
	MAX = 400;	

	dragBoxInRandomDirection() {
		for (let i = 0; i < 2; i++) {
			const randomX = Cypress._.random(this.MIN,this.MAX);
			const randomY = Cypress._.random(this.MIN,this.MAX);
			this.elements.draggableBoxSelect().move({ deltaX: randomX, deltaY: randomY });
		}
	}

	selectAxisRestrictedTab() {
		this.elements.axisRestrictedTabClick().click();
	}
  
	draggableBoxRestrictedToXAxi() {
		this.elements.restrictedXBox().then(($box) => {
			const initialCoords = $box[0].getBoundingClientRect();
			
			for (let i = 0; i < 2; i++) {
				const randomX = Cypress._.random(this.MIN, this.MAX);
				this.elements.restrictedXBox().move({ deltaX: randomX, deltaY: initialCoords.top });
			}
		});

	}
	draggableBoxRestrictedToYAxi() {
		this.elements.restrictedYBox().then(($box) => {
			const initialCoords = $box[0].getBoundingClientRect();
			
			for (let i = 0; i < 3; i++) {
				const randomY = Cypress._.random(this.MIN, this.MAX);
				this.elements.restrictedYBox().move({ deltaX: initialCoords.left, deltaY: randomY,  });
			}
		});

	}
	selectContainerRestrictedTab() {
		this.elements.containerRestrictedTabClick().click();
	}
	containerBoxRestricted() {
		const wrapper = this.elements.containmentWrapper();
		this.elements.moveContainedBox().then(($box) => {
			const initialCoords = $box[0].getBoundingClientRect();
			const containerCoords = wrapper[0].getBoundingClientRect();

			const minX = containerCoords.left - initialCoords.left;
			const maxX = containerCoords.width - initialCoords.width + minX;
			const minY = containerCoords.top - initialCoords.top;
			const maxY = containerCoords.height - initialCoords.height + minY;

			const randomX = Cypress._.random(minX, maxX);
			const randomY = Cypress._.random(minY, maxY);

			this.elements.moveContainedBox().move({ x: randomX, y: randomY });

		});
	}
}
export const dragabble = new Dragabble();