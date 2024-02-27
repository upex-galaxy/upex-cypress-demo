class Dragabble {
	elements = {
		tabNameSelect: tabNameSelect => cy.get(`#draggableExample-tab-${tabNameSelect}`),
		simpleTabClick: () => cy.get ('#draggableExample-tab-simple'),
		axisRestrictedTabClick: () => cy.get('#draggableExample-tab-axisRestriction'),
		containerRestrictedTabClick: () => cy.get('#draggableExample-tab-containerRestriction'),
		cursorStyleTabClick: () => cy.get('#draggableExample-tab-cursorStyle'),
		statusActive: () => cy.get('.nav-item nav-link active'),

		dragmeBoxClick: () => cy.get('#dragBox'),
		axisBox:name => cy.get(`#restricted${name}`),
		dragabbleAreaSelect: () => cy.get('#draggableExample-tabpane-axisRestriction'),
		restrictedXBox: () => cy.get('#restrictedX'),
		restrictedYBox: () => cy.get('#restrictedY'),

		containmentBox: () => cy.get('#containmentWrapper'),
		dragContainedBox: () => cy.get('#containmentWrapper .draggable'),
		textContainedBox: () => cy.get('[class="draggable ui-widget-content m-3"]'),
		dragContainedParent: () => cy.get('.ui-widget-header.ui-draggable.ui-draggable-handle'),
		cursorCenterSelect: () => cy.get('#cursorCenter'),
		cursorTopLeftSelect: () => cy.get('#cursorTopLeft'),
		cursorBottomSelect: () => cy.get ('#cursorBottom'),
	};

	MIN = -30;
	MAX = 300;
	randomValue() {
		const randomX = Cypress._.random(this.MIN,this.MAX);
		const randomY = Cypress._.random(this.MIN,this.MAX);
		return{
			valueX: randomX,
			valueY: randomY
		};
	}

	selectTab(tabNameSelect) {
		this.elements.tabNameSelect(tabNameSelect).click();
	}

	dragBoxInRandomDirection(elementSelector) {
		const randomData= this.randomValue;
		this.elements[elementSelector]().then(($box) => {
			const initialCoords = $box[0].getBoundingClientRect();
			this.elements[elementSelector]().move({ deltaX: randomData.valueX, deltaY: randomData.valueY },{ force: true });
			const endCoords = $box[0].getBoundingClientRect();
			//expect(initialCoords).not.equal(endCoords);
			return cy.wrap({ initialCoords,endCoords } );
		});
	}

	dragabbleBoxRestrictedToAxis(elementSelector, axis) {
		// Selecciona el elemento y obtiene coordenadas iniciales
		this.elements[elementSelector]().then(($box) => {
			const randomData = this.randomValue();
			const initialCoords = $box[0].getBoundingClientRect();
			let moveCoords;
			if (axis === 'X') {
				moveCoords = { deltaX: randomData.valueX, deltaY: initialCoords.top };
			} else if (axis === 'Y') {
				moveCoords = { deltaX: initialCoords.left, deltaY: randomData.valueY };
			} else {
				cy.log('El eje especificado no es válido.');
				return;
			}
			// Mueve el elemento con las coordenadas determinadas
			this.elements[elementSelector]().move(moveCoords, { force: true });
		});
	}

	dragElementRestricted(elementSelector) {
		this.elements[elementSelector]().then(($wrapper) => {
			const containerCoords = $wrapper[0].getBoundingClientRect();
			const minX = containerCoords.left;
			const maxX = containerCoords.width;
			const minY = containerCoords.top;
			const maxY = containerCoords.height;

			const randomX = Cypress._.random(minX, maxX);
			const randomY = Cypress._.random(minY, maxY);
			if (elementSelector === 'containmentBox') {
				this.elements.dragContainedBox().move({ deltaX: randomX, deltaY: randomY }, { force: true });
			} else {
				this.elements.dragContainedParent().move({ deltaX: randomX, deltaY: randomY }, { force: true });
			}
		});
	}

	centerCursorStyle() {
		this.elements.cursorCenterSelect().then(($wrapper) => {
			const randomData = this.randomValue();
			//obtengo la ubicación inicial del mouse
			const coordsInicial = $wrapper[ 0 ].getBoundingClientRect();
			const mousePos = { x: coordsInicial .left + (coordsInicial .width / 2), y: coordsInicial .top + (coordsInicial .height / 2) };
			//muevo elemento
			this.elements.cursorCenterSelect().move({ deltaX: randomData.valueX, deltaY: randomData.valueY },{ force:true });
			//obtengo coordFinal y valido que el mouse este ubicado en el centro
			const coordsFinal = $wrapper[ 0 ].getBoundingClientRect();
			const mousePos2 = { x: coordsFinal.left + (coordsFinal.width / 2), y: coordsFinal.top + (coordsFinal.height / 2) };
			expect(mousePos).to.deep.equal(mousePos2);
		});
	}
}
export const dragabble= new Dragabble();