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
		ContainerText: () => cy.get('#draggableExample-tabpane-containerRestriction .draggable'),
		moveContainedText: () => cy.get('.ui-widget-header.ui-draggable.ui-draggable-handle'),
		cursorCenterSelect: () => cy.get('#cursorCenter'),
		cursorTopLeftSelect: () => cy.get('#cursorTopLeft'),
		cursorBottomSelect: () => cy.get ('#cursorBottom'),

	};
	MIN = -30;
	MAX = 300;	

	dragBoxInRandomDirection() {
		//permite generar varios movimientos aleatorio
		for (let i = 0; i < 2; i++) {
			const randomX = Cypress._.random(this.MIN,this.MAX);
			const randomY = Cypress._.random(this.MIN,this.MAX);
			this.elements.draggableBoxSelect().move({ deltaX: randomX, deltaY: randomY },{ force: true });
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
				this.elements.restrictedXBox().move({ deltaX: randomX, deltaY: initialCoords.top },{ force: true });
			}
		});
	}

	draggableBoxRestrictedToYAxi() {
		this.elements.restrictedYBox().then(($box) => {
			const initialCoords = $box[0].getBoundingClientRect();
			for (let i = 0; i < 3; i++) {
				const randomY = Cypress._.random(this.MIN, this.MAX);
				this.elements.restrictedYBox().move({ deltaX: initialCoords.left, deltaY: randomY,  },{ force: true });
			}
		});
	}

	selectContainerRestrictedTab() {
		this.elements.containerRestrictedTabClick().click();
	}

	containerBoxRestricted() {
		this.elements.containmentWrapper().then(($wrapper) => {
			const containerCoords = $wrapper[0].getBoundingClientRect();
			const minX = containerCoords.left;
			const maxX = containerCoords.width;
			const minY = containerCoords.top;
			const maxY = containerCoords.height;
			const randomX = Cypress._.random(minX, maxX);
			const randomY = Cypress._.random(minY, maxY);
			this.elements.moveContainedBox().move({ deltaX: randomX, deltaY: randomY },{ force: true });
		});
	}

	containerTextRestricted() {
		this.elements.ContainerText().then(($wrapper) => {
			const containerCoords = $wrapper[0].getBoundingClientRect();
			const minX = containerCoords.left;
			const maxX = containerCoords.width;
			const minY = containerCoords.top;
			const maxY = containerCoords.height;
			const randomX = Cypress._.random(minX, maxX);
			const randomY = Cypress._.random(minY, maxY);
			this.elements.moveContainedText().move({ deltaX: randomX, deltaY: randomY },{ force: true });
		});
	}

	centerCursorStyle() {
		this.elements.cursorCenterSelect().then(($wrapper) => {
			//obtengo la ubicación inicial del mouse
			const coordsInicial = $wrapper[ 0 ].getBoundingClientRect();
			const mousePos = { x: coordsInicial .left + (coordsInicial .width / 2), y: coordsInicial .top + (coordsInicial .height / 2) };
			//muevo elemento
			const randomX = Cypress._.random(this.MIN, this.MAX);
			const randomY = Cypress._.random(this.MIN, this.MAX);
			this.elements.cursorCenterSelect().move({ deltaX: randomX, deltaY: randomY },{ force:true });
			//obtengo coordFinal y valido que el mouse este ubicado en el centro
			const coordsFinal = $wrapper[ 0 ].getBoundingClientRect();
			const mousePos2 = { x: coordsFinal.left + (coordsFinal.width / 2), y: coordsFinal.top + (coordsFinal.height / 2) };
			expect(mousePos).to.deep.equal(mousePos2);
		});
	}

	topLeftCursorStyle() {
		const randomX = Cypress._.random(this.MIN, this.MAX);
		const randomY = Cypress._.random(this.MIN, this.MAX);
		this.elements.cursorTopLeftSelect().move({ deltaX: randomX, deltaY: randomY },{ force:true });
	}

	bottomCursorStyle() {
		const randomX = Cypress._.random(this.MIN, this.MAX);
		const randomY = Cypress._.random(this.MIN, this.MAX);
		this.elements.cursorBottomSelect().move({ deltaX: randomX, deltaY: randomY },{ force:true });
	}
}
export const dragabble = new Dragabble();