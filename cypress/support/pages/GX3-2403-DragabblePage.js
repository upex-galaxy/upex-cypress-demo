class Dragabble {
	elements = {
		tabNameSelect: tabNameSelect => cy.get(`#draggableExample-tab-${tabNameSelect}`),
		simpleTabClick: () => cy.get ('#draggableExample-tab-simple'),
		axisRestrictedTabClick: () => cy.get('#draggableExample-tab-axisRestriction'),
		containerRestrictedTabClick: () => cy.get('#draggableExample-tab-containerRestriction'),
		cursorStyleTabClick: () => cy.get('#draggableExample-tab-cursorStyle'),
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
		const randomData= this.randomValue();
		return new Cypress.Promise((resolve) => {
			this.elements[elementSelector]().then(($box) => {
				const initialCoords = $box[0].getBoundingClientRect();
				this.elements[elementSelector]().move({ deltaX: randomData.valueX, deltaY: randomData.valueY },{ force: true }).then(() => {
					const finalCoords = $box[0].getBoundingClientRect();
					resolve({ initialCoords,finalCoords } );
				});
			});
		});
	}

	dragabbleBoxRestrictedToAxis(elementSelector, axis) {
		// Selecciona el elemento y obtiene coordenadas iniciales
		return new Cypress.Promise((resolve) => {
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
				this.elements[elementSelector]().move(moveCoords, { force: true }).then(() => {
					const finalCoords = $box[0].getBoundingClientRect();
					resolve({ initialCoords, finalCoords });
				});
			});
		});
	}

	dragElementRestricted(containerRestricted, elementSelector) {
		return new Cypress.Promise((resolve) => {
			// Obtiene el elemento contenedor y sus coordenadas
			this.elements[containerRestricted]().then(($container) => {
				const containerCoords = $container[0].getBoundingClientRect();
				// Calcular el rango de movimiento dentro del contenedor
				const minX = containerCoords.left;
				const maxX = containerCoords.left + containerCoords.width;
				const minY = containerCoords.top;
				const maxY = containerCoords.top + containerCoords.height;
				// Atrapo el elemento que se va a mover, sus coordenadas y genero valores random
				this.elements[elementSelector]().then(($element) => {
					const initialCoords = $element[0].getBoundingClientRect();
					const randomX = Cypress._.random(minX, maxX - initialCoords.width);
					const randomY = Cypress._.random(minY, maxY - initialCoords.height);
					// Definir las coordenadas de movimiento, muevo y obtengo las nuevas coordenadas
					const moveCoords = { deltaX: randomX - initialCoords.left, deltaY: randomY - initialCoords.top };
					this.elements[elementSelector]().move(moveCoords, { force: true }).then(() => {
						const finalCoords = $element[0].getBoundingClientRect();
						resolve({ initialCoords, finalCoords });
					});
				});
			});
		});
	}

	validateCursorPositionWhileMoving(elementSelector, cursorPosition) {
		return new Cypress.Promise((resolve) => {
			// Obtener el elemento a arrastrar
			this.elements[elementSelector]().then(($box) => {
				const initialCoords = $box[0].getBoundingClientRect();
				cy.wrap($box).trigger('mousemove');
				// Suscribirse al evento mousemove en el área de interés
				cy.document().then((doc) => {
					doc.addEventListener('mousedown', function handler(event) {
						const cursorX = event.clientX;
						const cursorY = event.clientY;
						let expectedX, expectedY;
						switch (cursorPosition) {
							case 'center':
								expectedX = initialCoords.left + initialCoords.width / 2;
								expectedY = initialCoords.top + initialCoords.height / 2;
								break;
							case 'bottom':
								expectedX = initialCoords.left + initialCoords.width / 2;
								expectedY = initialCoords.bottom;
								break;
							case 'topLeft':
								expectedX = initialCoords.left;
								expectedY = initialCoords.top;
								break;
						}
						resolve({ cursorX, cursorY, expectedX, expectedY });
					});
				});
				this.dragBoxInRandomDirection(elementSelector);
			});
		});
	}
}
export const dragabble= new Dragabble();