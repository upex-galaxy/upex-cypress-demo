import { droppables } from '@pages/Interactions/GX2-5654-droppable.Page';
import values from '@data/GX2-5654-droppable';
import { removeLogs } from '@helper/RemoveLogs';

describe('ToolsQA | Interactions | Droppable', () => {
	beforeEach(
		'Precondicion: The user should select the "droppable" element from the Interactions module on the left panel of the DEMOQA application',
		() => {
			cy.visit('/droppable');
			droppables.elements.panelInteractions().should('have.class', 'show');
			droppables.elements.elementDroppable().should('have.class', 'active').and('have.text', values.moduleNameDroppable);
			cy.url().should('contain', 'droppable');
		}
	);

	//!-----For the “Simple” tab:-----

	it('5655 | TC1: Validate drag and drop the "Drag me" area over the "Drop here" area in the "Simple" tab', () => {
		const { tabs, tabSimple, draggableSimple, dropContainerSimple, droppable, idDroppable } = droppables.elements;

		//todo  Tab “Simple” is displayed by default.
		tabSimple().should('have.attr', 'aria-selected', 'true');

		//todo Only one tab is displayed at once.
		tabs().then($el => {
			tabSimple().then(tab => {
				const textoABuscar = tab.text();
				cy.log(textoABuscar);
				cy.wrap($el).each((elemento, i) => {
					if (Cypress.$(elemento).text() === textoABuscar) {
						droppables.trueName(i);
						droppables.falseName(i);
						droppables.selectTabs().then($tab => {
							expect($tab[i].name).to.equal(Cypress.env('elemT').name);
							expect($tab[i].attrAriaSelected).to.equal(Cypress.env('elemT').attrAriaSelected);
							$tab.splice(i, 1);
							$tab.map((elementFalse, index) => {
								expect(elementFalse.name).to.equal(Cypress.env('elemF')[index].name);
								expect(elementFalse.attrAriaSelected).to.equal(Cypress.env('elemF')[index].attrAriaSelected);
							});
						});
					}
				});
			});
		});

		//todo “Drag me” dashed area must be displayed.
		draggableSimple()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDragMe);

		dropContainerSimple().within(() => {
			//todo “Drop here” bordered area must be displayed.
			droppable()
				.should('be.visible')
				.and('have.css', 'border-style', 'solid')
				.and('have.css', 'background-color', values.transparent)
				.and('have.text', values.nameCardDropHere);

			//todo drag and drop the "Drag me" area
			draggableSimple().drag(idDroppable, { force: true });

			droppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
		});
	});

	//!-----For the “Accept” tab:-----

	it('5655 | TC2:   Validate dragging of the "Acceptable" area in the "Accept" tab', () => {
		const { tabs, tabSimple, tabAccept, dropContainerAccept, acceptable, notAcceptable, droppable, idDroppable, idAcceptable } =
			droppables.elements;

		// todo Tab “Simple” is displayed by default.
		tabSimple().should('have.attr', 'aria-selected', 'true');

		// todo  “Accept” tab is selected
		droppables.selectTabAccept();

		//todo Only one tab is displayed at once.
		tabs().then($el => {
			tabAccept().then(tab => {
				const textoABuscar = tab.text();
				cy.log(textoABuscar);
				cy.wrap($el).each((elemento, i) => {
					if (Cypress.$(elemento).text() === textoABuscar) {
						droppables.trueName(i);
						droppables.falseName(i);
						droppables.selectTabs().then($tab => {
							expect($tab[i].name).to.equal(Cypress.env('elemT').name);
							expect($tab[i].attrAriaSelected).to.equal(Cypress.env('elemT').attrAriaSelected);
							$tab.splice(i, 1);
							$tab.map((elementFalse, index) => {
								expect(elementFalse.name).to.equal(Cypress.env('elemF')[index].name);
								expect(elementFalse.attrAriaSelected).to.equal(Cypress.env('elemF')[index].attrAriaSelected);
							});
						});
					}
				});
			});
		});

		//todo “Acceptable” dashed area must be displayed.
		acceptable()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardAcceptable);

		//todo “Not Acceptable” dashed area must be displayed.
		notAcceptable()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardNotAcceptable);

		dropContainerAccept().within(() => {
			//todo “Drop here” bordered area must be displayed.
			droppable()
				.should('be.visible')
				.and('have.css', 'border-style', 'solid')
				.and('have.css', 'background-color', values.transparent)
				.and('have.text', values.nameCardDropHere);

			//todo "Acceptable" area is dragged
			droppables.position(idAcceptable).then(coordenadas => {
				droppables.dragElement(idAcceptable, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
			});

			droppable().should('have.css', 'background-color', values.mediumSeaGreen);
		});

		dropContainerAccept().within(() => {
			//todo "Acceptable" area is dragged over the “Drop here” area
			droppables.position(idDroppable).then(coordenadas => {
				droppables.dragElement(idAcceptable, coordenadas.x, coordenadas.y);
			});

			droppable().should('have.css', 'background-color', values.mediumSeaGreen);
		});
	});

	it('5655 | TC3:   Validate dragging of the "Not Acceptable" area in the "Accept" tab', () => {
		const { dropContainerAccept, droppable, idDroppable, idNotAcceptable } = droppables.elements;

		//todo  “Accept” tab is selected
		droppables.selectTabAccept();

		dropContainerAccept().within(() => {
			//todo "Not Acceptable" area is dragged
			droppables.position(idDroppable).then(coordenadas => {
				droppables.dragElement(idNotAcceptable, coordenadas.x, coordenadas.y);
			});

			droppable().should('not.have.css', 'background-color', values.mediumSeaGreen);
			droppable().should('have.css', 'background-color', values.transparent);
		});
	});

	it('5655 | TC4:  Validate drag and drop the "Acceptable" area over the "Drop here" area in the "Accept" tab', () => {
		const { dropContainerAccept, acceptable, droppable, idDroppable } = droppables.elements;

		//todo  “Accept” tab is selected
		droppables.selectTabAccept();

		dropContainerAccept().within(() => {
			// todo drag and drop the "Acceptable" area
			acceptable().drag(idDroppable, { force: true });

			droppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
		});
	});

	it('5655 | TC5: Validate drag and drop the "Not Acceptable" area over the "Drop here" area in the "Accept" tab', () => {
		const { dropContainerAccept, notAcceptable, droppable, idDroppable } = droppables.elements;

		//todo  “Accept” tab is selected
		droppables.selectTabAccept();

		dropContainerAccept().within(() => {
			//todo drag and drop the "Not Acceptable" area
			notAcceptable().drag(idDroppable, { force: true });

			droppable().should('not.have.css', 'background-color', values.steelBlue).and('not.have.text', values.textDropped);
			droppable().should('have.css', 'background-color', values.transparent);
		});
	});

	//!-----For the “Prevent Propogation” tab:-----

	it('5655 | TC6:  Validate dragging of the "Drag me" area in the "Prevent Propagation" tab', () => {
		const {
			tabs,
			tabSimple,
			tabPreventPropogation,
			draggablePrevent,
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idDraggablePrevent,
		} = droppables.elements;

		//todo Tab “Simple” is displayed by default.
		tabSimple().should('have.attr', 'aria-selected', 'true');

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo Prevent “*Propogation*” is accepted.
		tabPreventPropogation().should('contain.text', 'Propogation');

		//todo Only one tab is displayed at once.
		tabs().then($el => {
			tabPreventPropogation().then(tab => {
				const textoABuscar = tab.text();
				cy.log(textoABuscar);
				cy.wrap($el).each((elemento, i) => {
					if (Cypress.$(elemento).text() === textoABuscar) {
						droppables.trueName(i);
						droppables.falseName(i);
						droppables.selectTabs().then($tab => {
							expect($tab[i].name).to.equal(Cypress.env('elemT').name);
							expect($tab[i].attrAriaSelected).to.equal(Cypress.env('elemT').attrAriaSelected);
							$tab.splice(i, 1);
							$tab.map((elementFalse, index) => {
								expect(elementFalse.name).to.equal(Cypress.env('elemF')[index].name);
								expect(elementFalse.attrAriaSelected).to.equal(Cypress.env('elemF')[index].attrAriaSelected);
							});
						});
					}
				});
			});
		});

		//todo “Drag me” dashed area must be displayed.
		draggablePrevent()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDragMePrevent);

		//todo the first "Outer droppable" area must be displayed
		notGreedyOuterDroppable()
			.should('be.visible')
			.and('have.css', 'border-style', 'solid')
			.and('have.css', 'background-color', values.transparent)
			.and('have.contain', values.nameCardOuterDroppable);
		notGreedyInnerDroppable()
			.should('be.visible')
			.and('have.css', 'border-style', 'solid')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardInnerDroppableNotGreedy);

		//todo The first "Outer Droppable" bordered area must contain an "Inner Droppable (not greedy)" area inside it.
		notGreedyOuterDroppable().within(() => {
			notGreedyInnerDroppable().should('exist');
		});
		droppables.coordsNotGreedy().then(coords => {
			const [outerRectCoords, innerRectCoords] = coords;
			expect(innerRectCoords.top > outerRectCoords.top).to.be.true;
			expect(innerRectCoords.left > outerRectCoords.left).to.be.true;
			expect(innerRectCoords.right < outerRectCoords.right).to.be.true;
			expect(innerRectCoords.bottom < outerRectCoords.bottom).to.be.true;
		});

		//todo the second "Outer droppable" area must be displayed
		greedyOuterDroppable()
			.should('be.visible')
			.and('have.css', 'border-style', 'solid')
			.and('have.css', 'background-color', values.transparent)
			.and('have.contain', values.nameCardOuterDroppable);
		greedyInnerDroppable()
			.should('be.visible')
			.and('have.css', 'border-style', 'solid')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardInnerDroppableGreedy);

		//todo The second "Outer Droppable" bordered area must contain an "Inner Droppable (greedy)" area inside it.
		greedyOuterDroppable().within(() => {
			greedyInnerDroppable().should('exist');
		});
		droppables.coordsGreedy().then(coords => {
			const [outerRectCoords, innerRectCoords] = coords;
			expect(innerRectCoords.top > outerRectCoords.top).to.be.true;
			expect(innerRectCoords.left > outerRectCoords.left).to.be.true;
			expect(innerRectCoords.right < outerRectCoords.right).to.be.true;
			expect(innerRectCoords.bottom < outerRectCoords.bottom).to.be.true;
		});

		//todo "Drag me" area is dragged
		droppables.position(idDraggablePrevent).then(coordenadas => {
			droppables.dragElement(idDraggablePrevent, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
		});

		notGreedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC7:  Validate dragging of the "Drag me" area over the first “Outer Droppable” area, in the "Prevent Propogation" tab', () => {
		const {
			draggablePrevent,
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idDraggablePrevent,
			idNotGreedyOuterDroppable,
		} = droppables.elements;

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo drag of the "Drag me" area over the first “Outer Droppable” area
		droppables.coordsTope(idNotGreedyOuterDroppable).then(coordenadas => {
			draggablePrevent().then(value => {
				const heightMedia = value[0].getBoundingClientRect().height / 2;
				droppables.dragElement(idDraggablePrevent, coordenadas.x, coordenadas.y + heightMedia);
			});
		});

		notGreedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC8: Validate dragging of the "Drag me" area over the “Inner droppable (not greedy)” area, in the "Prevent Propogation” tab', () => {
		const {
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idDraggablePrevent,
			idNotGreedyInnerDroppable,
		} = droppables.elements;

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo drag of the "Drag me" area over the “Inner droppable (not greedy)” area
		droppables.position(idNotGreedyInnerDroppable).then(coordenadas => {
			droppables.dragElement(idDraggablePrevent, coordenadas.x, coordenadas.y);
		});

		notGreedyInnerDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC9:  Validate dragging and dropping the "Drag me" area onto the "Inner droppable (not greedy)" area, in the "Prevent Propogation” tab', () => {
		const {
			draggablePrevent,
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idNotGreedyInnerDroppable,
		} = droppables.elements;

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo drag and drop the "Drag me" area onto the "Inner droppable (not greedy)" area
		draggablePrevent().drag(idNotGreedyInnerDroppable, { force: true });

		notGreedyInnerDroppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.steelBlue).and('have.contain', values.textDropped);
		greedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		greedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
	});

	it('5655 | TC10:  Validate dragging and dropping the " Drag me " area onto the first "Outer Droppable" area, in the "Prevent Propogation” tab', () => {
		const {
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idDraggablePrevent,
			idNotGreedyOuterDroppable,
		} = droppables.elements;

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo drag and drop the "Drag me" area onto the first "Outer Droppable" area
		droppables.dragAndDropOuter(idDraggablePrevent, idNotGreedyOuterDroppable);

		notGreedyOuterDroppable().should('have.css', 'background-color', values.steelBlue).and('have.contain', values.textDropped);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		greedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		greedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
	});

	it('5655 | TC11:  Validate dragging of the "Drag me" area over the second “Outer Droppable” area, in the "Prevent Propogation" tab', () => {
		const {
			draggablePrevent,
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idDraggablePrevent,
			idGreedyOuterDroppable,
		} = droppables.elements;

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo drag of the "Drag me" area over the second “Outer Droppable” area
		droppables.coordsTope(idGreedyOuterDroppable).then(coordenadas => {
			draggablePrevent().then(value => {
				const heightMedia = value[0].getBoundingClientRect().height / 2;
				droppables.dragElement(idDraggablePrevent, coordenadas.x, coordenadas.y + heightMedia);
			});
		});

		greedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC12:  Validate dragging of the "Drag me" area over the “Inner droppable (greedy)” area, in the "Prevent Propogation" tab', () => {
		const {
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idDraggablePrevent,
			idGreedyInnerDroppable,
		} = droppables.elements;

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo drag and drop the "Drag me" area onto the "Inner droppable (greedy)" area
		droppables.position(idGreedyInnerDroppable).then(coordenadas => {
			droppables.dragElement(idDraggablePrevent, coordenadas.x, coordenadas.y);
		});

		greedyInnerDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC13:  Validate dragging and dropping the "Drag me" area onto the "Inner droppable (greedy)" area, in the "Prevent Propogation” tab', () => {
		const {
			draggablePrevent,
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idGreedyInnerDroppable,
		} = droppables.elements;

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo drag and drop the "Drag me" area onto the "Inner droppable (greedy)" area
		draggablePrevent().drag(idGreedyInnerDroppable, { force: true });

		greedyInnerDroppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
		greedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
	});

	it('5655 | TC14:  Validate dragging and dropping the " Drag me " area onto the second "Outer Droppable" area, in the "Prevent Propogation” tab', () => {
		const {
			notGreedyOuterDroppable,
			notGreedyInnerDroppable,
			greedyOuterDroppable,
			greedyInnerDroppable,
			idDraggablePrevent,
			idGreedyOuterDroppable,
		} = droppables.elements;

		//todo  “Prevent Propagation” tab is selected
		droppables.selectTabPreventPropogation();

		//todo drag and drop the "Drag me" area onto the second "Outer Droppable" area
		droppables.dragAndDropOuter(idDraggablePrevent, idGreedyOuterDroppable);

		greedyOuterDroppable().should('have.css', 'background-color', values.steelBlue).and('have.contain', values.textDropped);
		greedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
	});

	//!-----For the “Revert Draggable” tab:-----

	it('5655 | TC15:  Validate dragging of the "Will Revert" area in the "Revert Draggable" tab', () => {
		const { tabs, tabSimple, tabRevertDraggable, revertable, notRevertable, dropContainerRevertable, droppable, idDroppable, idRevertable } =
			droppables.elements;

		//todo Tab “Simple” is displayed by default.
		tabSimple().should('have.attr', 'aria-selected', 'true');

		//todo  "Revert Draggable" tab is selected
		droppables.selectTabRevertDraggable();

		//todo Only one tab is displayed at once.
		tabs().then($el => {
			tabRevertDraggable().then(tab => {
				const textoABuscar = tab.text();
				cy.log(textoABuscar);
				cy.wrap($el).each((elemento, i) => {
					if (Cypress.$(elemento).text() === textoABuscar) {
						droppables.trueName(i);
						droppables.falseName(i);
						droppables.selectTabs().then($tab => {
							expect($tab[i].name).to.equal(Cypress.env('elemT').name);
							expect($tab[i].attrAriaSelected).to.equal(Cypress.env('elemT').attrAriaSelected);
							$tab.splice(i, 1);
							$tab.map((elementFalse, index) => {
								expect(elementFalse.name).to.equal(Cypress.env('elemF')[index].name);
								expect(elementFalse.attrAriaSelected).to.equal(Cypress.env('elemF')[index].attrAriaSelected);
							});
						});
					}
				});
			});
		});

		//todo “Will Revert” dashed area must be displayed.
		revertable()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardWillRevert);

		//todo “Not Revert” dashed area must be displayed.
		notRevertable()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.contain', values.nameCardNotRevert);

		dropContainerRevertable().within(() => {
			//todo “Drop here” bordered area must be displayed.
			droppable()
				.should('be.visible')
				.and('have.css', 'border-style', 'solid')
				.and('have.css', 'background-color', values.transparent)
				.and('have.text', values.nameCardDropHere);

			//todo "Will Revert" area is dragged
			droppables.position(idRevertable).then(coordenadas => {
				droppables.dragElement(idRevertable, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
			});
			droppable().should('have.css', 'background-color', values.mediumSeaGreen);

			//todo "Will Revert" area is dragged over the “Drop here” area
			droppables.position(idDroppable).then(coordenadas => {
				droppables.dragElement(idRevertable, coordenadas.x, coordenadas.y);
			});
			droppable().should('have.css', 'background-color', values.darkSeaGreen);
		});
	});

	it('5655 | TC16:  Validate dragging of the "Not Revert" area in the "Revert Draggable" tab', () => {
		const { dropContainerRevertable, droppable, idDroppable, idNotRevertable } = droppables.elements;

		//todo  "Revert Draggable" tab is selected
		droppables.selectTabRevertDraggable();

		dropContainerRevertable().within(() => {
			//todo "Not Revert" area is dragged
			droppables.position(idNotRevertable).then(coordenadas => {
				droppables.dragElement(idNotRevertable, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
			});
			droppable().should('have.css', 'background-color', values.mediumSeaGreen);

			//todo "Not Revert" area is dragged over the “Drop here” area
			droppables.position(idDroppable).then(coordenadas => {
				droppables.dragElement(idNotRevertable, coordenadas.x, coordenadas.y);
			});
			droppable().should('have.css', 'background-color', values.darkSeaGreen);
		});
	});

	it('5655 | TC17: Validate dragging and dropping the "Will Revert" area onto the “Drop here” area, in the " Revert Draggable " tab', () => {
		const { revertable, dropContainerRevertable, droppable, idDroppable, idRevertable } = droppables.elements;

		//todo  "Revert Draggable" tab is selected
		droppables.selectTabRevertDraggable();

		dropContainerRevertable().within(() => {
			//todo drag and drop the "Will Revert" area onto the “Drop here” area
			droppables.cssPosition(idRevertable).then(cssValuePosition => {
				const [positionInitial, leftInitial, topInitial] = cssValuePosition;

				revertable().drag(idDroppable, { force: true });

				revertable().should('have.css', 'position', positionInitial).and('have.css', 'left', leftInitial).and('have.css', 'top', topInitial);
				droppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
			});
		});
	});

	it('5655 | TC18: Validate dragging and dropping the "Not Revert" area onto the “Drop here” area, in the " Revert Draggable " tab', () => {
		const { notRevertable, dropContainerRevertable, droppable, idDroppable, idNotRevertable } = droppables.elements;

		//todo  "Revert Draggable" tab is selected
		droppables.selectTabRevertDraggable();


		dropContainerRevertable().within(() => {
			//todo drag and drop the "Not Revert" area onto the “Drop here” area
			droppables.position(idNotRevertable).then(coordBeforeDrop => {
				notRevertable().drag(idDroppable, { force: true });

				droppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);

				//todo drag and drop the "Not Revert" area in its initial position
				droppables.cssPosition(idNotRevertable).then(cssValue => {
					const [positionAfterDrop, leftAfterDrop, topAfterDrop] = cssValue;
					droppables.dragElementDrop(idNotRevertable, coordBeforeDrop.x, coordBeforeDrop.y);

					notRevertable()
						.should('have.css', 'position', positionAfterDrop)
						.and('have.css', 'left', leftAfterDrop)
						.and('have.css', 'top', topAfterDrop);
				});
			});
		});
	});
});

removeLogs();
