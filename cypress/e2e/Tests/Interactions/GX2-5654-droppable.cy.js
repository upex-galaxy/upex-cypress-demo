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

	//-----For the “Simple” tab:-----

	it('5655 | TC1: Validate drag and drop the "Drag me" area over the "Drop here" area in the "Simple" tab', () => {
		const { tabs, tabSimple, draggableSimple, dropContainerSimple, droppable } = droppables.elements;
		tabSimple().should('have.attr', 'aria-selected', 'true'); // Tab “Simple” is displayed by default.

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
		}); // Only one tab is displayed at once.

		draggableSimple()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDragMe); //“Drag me” dashed area must be displayed.

		dropContainerSimple().within(() => {
			droppable()
				.should('be.visible')
				.and('have.css', 'border-style', 'solid')
				.and('have.css', 'background-color', values.transparent)
				.and('have.text', values.nameCardDropHere); //“Drop here” bordered area must be displayed.
			droppable()
				.invoke('attr', 'id')
				.then(drop => {
					draggableSimple().drag(`#${drop}`, { force: true });
				});
			droppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
		});
	});

	//-----For the “Accept” tab:-----

	it('5655 | TC2:   Validate dragging of the "Acceptable" area in the "Accept" tab', () => {
		const { tabs, tabSimple, tabAccept, dropContainerAccept, acceptable, notAcceptable, droppable } = droppables.elements;
		tabSimple().should('have.attr', 'aria-selected', 'true'); // Tab “Simple” is displayed by default.

		droppables.selectTabAccept();
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
		}); // Only one tab is displayed at once.

		acceptable()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardAcceptable); // “Acceptable” dashed area must be displayed.
		notAcceptable()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardNotAcceptable); // “Not Acceptable” dashed area must be displayed.

		dropContainerAccept().within(() => {
			droppable()
				.should('be.visible')
				.and('have.css', 'border-style', 'solid')
				.and('have.css', 'background-color', values.transparent)
				.and('have.text', values.nameCardDropHere); //“Drop here” bordered area must be displayed.
			acceptable()
				.invoke('attr', 'id')
				.then($id => {
					droppables.position(`#${$id}`).then(coordenadas => {
						droppables.dragElement(`#${$id}`, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
					});
				}); // "Acceptable" area is dragged

			droppable().should('have.css', 'background-color', values.mediumSeaGreen);
		});

		dropContainerAccept().within(() => {
			droppable()
				.invoke('attr', 'id')
				.then($id => {
					droppables.position(`#${$id}`).then(coordenadas => {
						acceptable()
							.invoke('attr', 'id')
							.then(idDrag => {
								droppables.dragElement(`#${idDrag}`, coordenadas.x, coordenadas.y);
							});
					});
				}); // "Acceptable" area is dragged over the “Drop here” area

			droppable().should('have.css', 'background-color', values.mediumSeaGreen);
		});
	});

	it('5655 | TC3:   Validate dragging of the "Not Acceptable" area in the "Accept" tab', () => {
		const { dropContainerAccept, notAcceptable, droppable } = droppables.elements;
		droppables.selectTabAccept();
		dropContainerAccept().within(() => {
			droppable()
				.invoke('attr', 'id')
				.then($id => {
					droppables.position(`#${$id}`).then(coordenadas => {
						notAcceptable()
							.invoke('attr', 'id')
							.then(id => {
								droppables.dragElement(`#${id}`, coordenadas.x, coordenadas.y);
							});
					});
				});

			droppable().should('not.have.css', 'background-color', values.mediumSeaGreen);
			droppable().should('have.css', 'background-color', values.transparent);
		});
	});

	it('5655 | TC4:  Validate drag and drop the "Acceptable" area over the "Drop here" area in the "Accept" tab', () => {
		const { dropContainerAccept, acceptable, droppable } = droppables.elements;
		droppables.selectTabAccept();

		dropContainerAccept().within(() => {
			droppable()
				.invoke('attr', 'id')
				.then(drop => {
					acceptable().drag(`#${drop}`, { force: true });
				});

			droppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
		});
	});

	it('5655 | TC5: Validate drag and drop the "Not Acceptable" area over the "Drop here" area in the "Accept" tab', () => {
		const { dropContainerAccept, notAcceptable, droppable } = droppables.elements;
		droppables.selectTabAccept();

		dropContainerAccept().within(() => {
			droppable()
				.invoke('attr', 'id')
				.then(drop => {
					notAcceptable().drag(`#${drop}`, { force: true });
				});

			droppable().should('not.have.css', 'background-color', values.steelBlue).and('not.have.text', values.textDropped);
			droppable().should('have.css', 'background-color', values.transparent);
		});
	});

	//-----For the “Prevent Propogation” tab:-----

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
		} = droppables.elements;

		tabSimple().should('have.attr', 'aria-selected', 'true'); // Tab “Simple” is displayed by default.
		droppables.selectTabPreventPropogation();
		tabPreventPropogation().should('contain.text', 'Propogation'); // Prevent “*Propogation*” is accepted.
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
		}); // Only one tab is displayed at once.

		draggablePrevent()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDragMePrevent); // “Drag me” dashed area must be displayed.

		// the first "Outer droppable" area must be displayed
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

		// The first "Outer Droppable" bordered area must contain an "Inner Droppable (not greedy)" area inside it.
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

		// the second "Outer droppable" area must be displayed
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

		// The second "Outer Droppable" bordered area must contain an "Inner Droppable (greedy)" area inside it.
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

		draggablePrevent()
			.invoke('attr', 'id')
			.then($id => {
				droppables.position(`#${$id}`).then(coordenadas => {
					droppables.dragElement(`#${$id}`, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
				});
			}); // "Drag me" area is dragged

		notGreedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC7:  Validate dragging of the "Drag me" area over the first “Outer Droppable” area, in the "Prevent Propogation" tab', () => {
		const { draggablePrevent, notGreedyOuterDroppable, notGreedyInnerDroppable, greedyOuterDroppable, greedyInnerDroppable } =
			droppables.elements;
		droppables.selectTabPreventPropogation();
		notGreedyOuterDroppable()
			.invoke('attr', 'id')
			.then(idDrop => {
				droppables.coordsTope(`#${idDrop}`).then(coordenadas => {
					draggablePrevent().then(value => {
						const heightMedia = value[0].getBoundingClientRect().height / 2;
						cy.wrap(value)
							.invoke('attr', 'id')
							.then(idDrag => {
								droppables.dragElement(`#${idDrag}`, coordenadas.x, coordenadas.y + heightMedia);
							});
					});
				});
			});
		notGreedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC8: Validate dragging of the "Drag me" area over the “Inner droppable (not greedy)” area, in the "Prevent Propogation” tab', () => {
		const { draggablePrevent, notGreedyOuterDroppable, notGreedyInnerDroppable, greedyOuterDroppable, greedyInnerDroppable } =
			droppables.elements;
		droppables.selectTabPreventPropogation();
		notGreedyInnerDroppable()
			.invoke('attr', 'id')
			.then(idDrop => {
				droppables.position(`#${idDrop}`).then(coordenadas => {
					draggablePrevent()
						.invoke('attr', 'id')
						.then(idDrag => {
							droppables.dragElement(`#${idDrag}`, coordenadas.x, coordenadas.y);
						});
				});
			});

		notGreedyInnerDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC9:  Validate dragging and dropping the "Drag me" area onto the "Inner droppable (not greedy)" area, in the "Prevent Propogation” tab', () => {
		const { draggablePrevent, notGreedyOuterDroppable, notGreedyInnerDroppable, greedyOuterDroppable, greedyInnerDroppable } =
			droppables.elements;
		droppables.selectTabPreventPropogation();

		notGreedyInnerDroppable()
			.invoke('attr', 'id')
			.then(drop => {
				draggablePrevent().drag(`#${drop}`, { force: true });
			});

		notGreedyOuterDroppable().should('have.css', 'background-color', values.steelBlue).and('have.contain', values.textDropped);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
		greedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		greedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
	});

	it('5655 | TC10:  Validate dragging and dropping the " Drag me " area onto the first "Outer Droppable" area, in the "Prevent Propogation” tab', () => {
		const { draggablePrevent, notGreedyOuterDroppable, notGreedyInnerDroppable, greedyOuterDroppable, greedyInnerDroppable } =
			droppables.elements;
		droppables.selectTabPreventPropogation();

		notGreedyOuterDroppable()
			.invoke('attr', 'id')
			.then(idDrop => {
				draggablePrevent()
					.invoke('attr', 'id')
					.then($idDrag => {
						droppables.dragAndDropOuter(`#${$idDrag}`, `#${idDrop}`);
					});
			});

		notGreedyOuterDroppable().should('have.css', 'background-color', values.steelBlue).and('have.contain', values.textDropped);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		greedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		greedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
	});

	it('5655 | TC11:  Validate dragging of the "Drag me" area over the second “Outer Droppable” area, in the "Prevent Propogation" tab', () => {
		const { draggablePrevent, notGreedyOuterDroppable, notGreedyInnerDroppable, greedyOuterDroppable, greedyInnerDroppable } =
			droppables.elements;
		droppables.selectTabPreventPropogation();
		greedyOuterDroppable()
			.invoke('attr', 'id')
			.then(idDrop => {
				droppables.coordsTope(`#${idDrop}`).then(coordenadas => {
					draggablePrevent().then(value => {
						const heightMedia = value[0].getBoundingClientRect().height / 2;
						cy.wrap(value)
							.invoke('attr', 'id')
							.then(idDrag => {
								droppables.dragElement(`#${idDrag}`, coordenadas.x, coordenadas.y + heightMedia);
							});
					});
				});
			});

		greedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC12:  Validate dragging of the "Drag me" area over the “Inner droppable (greedy)” area, in the "Prevent Propogation" tab', () => {
		const { draggablePrevent, notGreedyOuterDroppable, notGreedyInnerDroppable, greedyOuterDroppable, greedyInnerDroppable } =
			droppables.elements;

		droppables.selectTabPreventPropogation();
		greedyInnerDroppable()
			.invoke('attr', 'id')
			.then(idDrop => {
				droppables.position(`#${idDrop}`).then(coordenadas => {
					draggablePrevent()
						.invoke('attr', 'id')
						.then(idDrag => {
							droppables.dragElement(`#${idDrag}`, coordenadas.x, coordenadas.y);
						});
				});
			});

		greedyInnerDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC13:  Validate dragging and dropping the "Drag me" area onto the "Inner droppable (greedy)" area, in the "Prevent Propogation” tab', () => {
		const { draggablePrevent, notGreedyOuterDroppable, notGreedyInnerDroppable, greedyOuterDroppable, greedyInnerDroppable } =
			droppables.elements;
		droppables.selectTabPreventPropogation();

		greedyInnerDroppable()
			.invoke('attr', 'id')
			.then(drop => {
				draggablePrevent().drag(`#${drop}`, { force: true });
			});

		greedyInnerDroppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
		greedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
	});

	it('5655 | TC14:  Validate dragging and dropping the " Drag me " area onto the second "Outer Droppable" area, in the "Prevent Propogation” tab', () => {
		const { draggablePrevent, notGreedyOuterDroppable, notGreedyInnerDroppable, greedyOuterDroppable, greedyInnerDroppable } =
			droppables.elements;
		droppables.selectTabPreventPropogation();

		greedyOuterDroppable()
			.invoke('attr', 'id')
			.then(idDrop => {
				draggablePrevent()
					.invoke('attr', 'id')
					.then($idDrag => {
						droppables.dragAndDropOuter(`#${$idDrag}`, `#${idDrop}`);
					});
			});

		greedyOuterDroppable().should('have.css', 'background-color', values.steelBlue).and('have.contain', values.textDropped);
		greedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		notGreedyOuterDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
		notGreedyInnerDroppable().should('have.css', 'background-color', values.transparent).and('not.have.text', values.textDropped);
	});

	//-----For the “Revert Draggable” tab:-----

	it('5655 | TC15:  Validate dragging of the "Will Revert" area in the "Revert Draggable" tab', () => {
		const { tabs, tabSimple, tabRevertDraggable, revertable, notRevertable, dropContainerRevertable, droppable } = droppables.elements;

		tabSimple().should('have.attr', 'aria-selected', 'true'); // Tab “Simple” is displayed by default.
		droppables.selectTabRevertDraggable();

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
		}); // Only one tab is displayed at once.

		revertable()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardWillRevert); // “Will Revert” dashed area must be displayed.

		notRevertable()
			.should('be.visible')
			.and('have.css', 'border-style', 'dashed')
			.and('have.css', 'background-color', values.transparent)
			.and('have.contain', values.nameCardNotRevert); // “Not Revert” dashed area must be displayed.

		dropContainerRevertable().within(() => {
			droppable()
				.should('be.visible')
				.and('have.css', 'border-style', 'solid')
				.and('have.css', 'background-color', values.transparent)
				.and('have.text', values.nameCardDropHere); //“Drop here” bordered area must be displayed.
		});

		revertable()
			.invoke('attr', 'id')
			.then(idDrag => {
				droppables.position(`#${idDrag}`).then(coordenadas => {
					droppables.dragElement(`#${idDrag}`, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
				});
			}); // "Will Revert" area is dragged

		dropContainerRevertable().within(() => {
			droppable().should('have.css', 'background-color', values.mediumSeaGreen);
		});

		dropContainerRevertable().within(() => {
			droppable()
				.invoke('attr', 'id')
				.then($id => {
					droppables.position(`#${$id}`).then(coordenadas => {
						revertable()
							.invoke('attr', 'id')
							.then(idDrag => {
								droppables.dragElement(`#${idDrag}`, coordenadas.x, coordenadas.y);
							});
					});
				}); // "Will Revert" area is dragged over the “Drop here” area

			droppable().should('have.css', 'background-color', values.darkSeaGreen);
		});
	});

	it('5655 | TC16:  Validate dragging of the "Not Revert" area in the "Revert Draggable" tab', () => {
		const { notRevertable, dropContainerRevertable, droppable } = droppables.elements;
		droppables.selectTabRevertDraggable();

		notRevertable()
			.invoke('attr', 'id')
			.then(idDrag => {
				droppables.position(`#${idDrag}`).then(coordenadas => {
					droppables.dragElement(`#${idDrag}`, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
				});
			}); // "Not Revert" area is dragged

		dropContainerRevertable().within(() => {
			droppable().should('have.css', 'background-color', values.mediumSeaGreen);
		});

		dropContainerRevertable().within(() => {
			droppable()
				.invoke('attr', 'id')
				.then($id => {
					droppables.position(`#${$id}`).then(coordenadas => {
						notRevertable()
							.invoke('attr', 'id')
							.then(idDrag => {
								droppables.dragElement(`#${idDrag}`, coordenadas.x, coordenadas.y);
							});
					});
				}); // "Not Revert" area is dragged over the “Drop here” area

			droppable().should('have.css', 'background-color', values.darkSeaGreen);
		});
	});

	it('5655 | TC17: Validate dragging and dropping the "Will Revert" area onto the “Drop here” area, in the " Revert Draggable " tab', () => {
		const { revertable, dropContainerRevertable, droppable } = droppables.elements;

		droppables.selectTabRevertDraggable();

		revertable()
			.invoke('attr', 'id')
			.then(id => {
				droppables.cssPosition(`#${id}`).then(cssValue => {
					const [positionInitial, leftInitial, topInitial] = cssValue;
					dropContainerRevertable().within(() => {
						droppable()
							.invoke('attr', 'id')
							.then(drop => {
								revertable().drag(`#${drop}`, { force: true });
							});

						revertable()
							.should('have.css', 'position', positionInitial)
							.and('have.css', 'left', leftInitial)
							.and('have.css', 'top', topInitial);
						droppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
					});
				});
			});
	});

	it('5655 | TC18: Validate dragging and dropping the "Not Revert" area onto the “Drop here” area, in the " Revert Draggable " tab', () => {
		const { notRevertable, dropContainerRevertable, droppable } = droppables.elements;
		droppables.selectTabRevertDraggable();

		notRevertable()
			.invoke('attr', 'id')
			.then(idNotRev => {
				droppables.position(`#${idNotRev}`).then(coordBeforeDrop => {
					dropContainerRevertable().within(() => {
						droppable()
							.invoke('attr', 'id')
							.then(drop => {
								notRevertable().drag(`#${drop}`, { force: true });
							});

						droppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);

						droppables.cssPosition(`#${idNotRev}`).then(cssValue => {
							const [positionAfterDrop, leftAfterDrop, topAfterDrop] = cssValue;
							droppables.dragElementDrop(`#${idNotRev}`, coordBeforeDrop.x, coordBeforeDrop.y); // dragging and dropping the "Not Revert" area in its initial position

							notRevertable()
								.should('have.css', 'position', positionAfterDrop)
								.and('have.css', 'left', leftAfterDrop)
								.and('have.css', 'top', topAfterDrop);
						});
					});
				});
			});
	});
});

removeLogs();
