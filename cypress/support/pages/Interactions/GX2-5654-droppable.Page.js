class droppable {
	elements = {
		panelInteractions: () => cy.get('div.element-group:nth-child(5) > div.element-list.collapse'),
		elementDroppable: () => cy.get('div.element-group:nth-child(5) li#item-3'),
		tabs: () => cy.get('[role=tab]'),
		tabSimple: () => cy.get('#droppableExample-tab-simple'),
		tabAccept: () => cy.get('#droppableExample-tab-accept'),
		tabPreventPropogation: () => cy.get('#droppableExample-tab-preventPropogation'),
		tabRevertDraggable: () => cy.get('#droppableExample-tab-revertable'),
		draggableSimple: () => cy.get('[id=draggable]'),
		draggablePrevent: () => cy.get('[id=dragBox]'),
		dropContainerSimple: () => cy.get('[class="simple-drop-container"]'),
		dropContainerAccept: () => cy.get('[class="accept-drop-container"]'),
		dropContainerRevertable: () => cy.get('[class="revertable-drop-container"]'),
		droppable: () => cy.get('[id=droppable]'),
		acceptable: () => cy.get('#acceptable'),
		notAcceptable: () => cy.get('#notAcceptable'),
		notGreedyOuterDroppable: () => cy.get('#notGreedyDropBox'),
		notGreedyInnerDroppable: () => cy.get('#notGreedyInnerDropBox'),
		greedyOuterDroppable: () => cy.get('#greedyDropBox'),
		greedyInnerDroppable: () => cy.get('#greedyDropBoxInner'),
		revertable: () => cy.get('#revertable'),
		notRevertable: () => cy.get('#notRevertable'),
	};

	trueName(value) {
		return this.elements.tabs().then($el => {
			cy.wrap($el)
				.eq(value)
				.then($text => {
					let textElemTrue = { name: $text.text(), attrAriaSelected: $text.attr('aria-selected') };
					Cypress.env('elemT', textElemTrue);
					return textElemTrue;
				});
		});
	}

	falseName(value) {
		return this.elements.tabs().then($el => {
			$el.splice(value, 1);
			const textElemFalse = [];
			for (let i = 0; i < $el.length; i++) {
				cy.wrap($el)
					.eq(i)
					.then($text => {
						textElemFalse.push({
							name: $text.text(),
							attrAriaSelected: $text.attr('aria-selected'),
						});
						Cypress.env('elemF', textElemFalse);
						return textElemFalse;
					});
			}
		});
	}

	selectTabs() {
		return this.elements.tabs().then($el => {
			const textElements = [];
			for (let i = 0; i < $el.length; i++) {
				cy.wrap($el)
					.eq(i)
					.then($text => {
						textElements.push({
							name: $text.text(),
							attrAriaSelected: $text.attr('aria-selected'),
						});
						return textElements;
					});
			}
		});
	}

	selectTabAccept() {
		this.elements.tabAccept().click();
	}

	selectTabPreventPropogation() {
		this.elements.tabPreventPropogation().click();
	}
	selectTabRevertDraggable() {
		this.elements.tabRevertDraggable().click();
	}

	winScrollY() {
		return cy
			.window()
			.its('scrollY')
			.then(win => {
				//cy.log(scrollY);
				const scrollY = win;
				Cypress.env('scrollY', scrollY);
				return scrollY;
			});
	}

	winScrollX() {
		return cy
			.window()
			.its('scrollX')
			.then(win => {
				//cy.log(scrollY);
				const scrollX = win;
				Cypress.env('scrollX', scrollX);
				return scrollX;
			});
	}
	//posición desde el centro del elemento con respecto al viewport
	position(value) {
		return cy.get(value).then($elemento => {
			this.winScrollX();
			this.winScrollY();
			cy.wrap($elemento).then(() => {
				const rect = $elemento[0].getBoundingClientRect();
				const coordenadas = {
					x: rect.left + rect.width / 2 + Cypress.env('scrollX'),
					y: rect.top + rect.height / 2 + Cypress.env('scrollY'),
				};
				return coordenadas;
			});
		});
	}

	dragElement(element, x, y) {
		cy.get(element).trigger('mousedown', { which: 1 }).trigger('mousemove', { which: 1, pageX: x, pageY: y });
	}

	//arrastre y soltar elemento sin requerir coordenadas de otro elemento para ser soltado
	dragElementDrop(element, x, y) {
		cy.get(element).trigger('mousedown', { which: 1 }).trigger('mousemove', { which: 1, pageX: x, pageY: y }).trigger('mouseup');
	}

	coordsNotGreedy() {
		return this.elements.notGreedyOuterDroppable().then(outerRect => {
			this.elements.notGreedyInnerDroppable().then(innerRect => {
				const outerRectCoords = outerRect[0].getBoundingClientRect();
				const innerRectCoords = innerRect[0].getBoundingClientRect();
				return [outerRectCoords, innerRectCoords];
			});
		});
	}

	coordsGreedy() {
		return this.elements.greedyOuterDroppable().then(outerRect => {
			this.elements.greedyInnerDroppable().then(innerRect => {
				const outerRectCoords = outerRect[0].getBoundingClientRect();
				const innerRectCoords = innerRect[0].getBoundingClientRect();
				return [outerRectCoords, innerRectCoords];
			});
		});
	}

	//coordenadas en el tope central del elemento con respecto al viewport
	coordsTope(value) {
		return cy.get(value).then($elemento => {
			this.winScrollX();
			this.winScrollY();
			cy.wrap($elemento).then(() => {
				const rect = $elemento[0].getBoundingClientRect();
				const coordenadas = {
					x: rect.left + rect.width / 2 + Cypress.env('scrollX'),
					y: rect.top + Cypress.env('scrollY'),
				};
				return coordenadas;
			});
		});
	}

	dragAndDropOuter(valueDrag, valueDropHere) {
		cy.get(valueDrag).then($elemento => {
			const rect = $elemento[0].getBoundingClientRect();
			const coord = {
				x: rect.width / 2,
				y: rect.height / 3,
			};

			cy.wrap($elemento).drag(`${valueDropHere}`, {
				source: { x: coord.x, y: -coord.y }, // applies to the element being dragged
				target: { position: 'top' }, // applies to the drop target
				force: true, // applied to both the source and target element});
			});
		});
	}

	cssPosition(value) {
		return cy
			.get(value)
			.invoke('css', 'position')
			.then($position => {
				const position = $position;
				cy.get(value)
					.invoke('css', 'left')
					.then($left => {
						cy.get(value)
							.invoke('css', 'top')
							.then($top => {
								let left = parseFloat($left);
								let top = parseFloat($top);

								left = (left < 0 ? Math.ceil(left) : Math.floor(left)) + 'px';
								top = (top < 0 ? Math.ceil(top) : Math.floor(top)) + 'px';

								return [position, left, top];
							});
					});
			});
	}
}

export const droppables = new droppable();
