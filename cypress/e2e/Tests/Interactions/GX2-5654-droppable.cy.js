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


	//-----For the component:-----

	it('5655 | TC1: Validate default display of the "Simple" tab.', () => {
		cy.visit('/droppable');
		droppables.elements.tabSimple().should('have.attr', 'aria-selected', 'true');
	});

	it('5655 | TC2: Validate that only the content of one tab is displayed at a time', () => {
		droppables.tabLength().then(() => {
			for (let eq = 0; eq < Cypress.env('tabLg'); eq++) {
				droppables.trueName(eq);
				droppables.falseName(eq);

				droppables.selectTabs(eq).then($el => {
					expect($el[eq].name).to.equal(Cypress.env('textN'));
					expect($el[eq].attrAriaSelected).to.equal('true');
					$el.splice(eq, 1);
					$el.map((elementsFalse, index) => {
						expect(elementsFalse.name).to.equal(Cypress.env('elemF')[index].name);
						expect(elementsFalse.attrAriaSelected).to.equal('false');
					});
				});
			}
		});
	});

	it('5655 | TC3: Validate display of "Propogation" instead of "Propagation" in the "Prevent propagation" tab.', () => {
		droppables.elements.tabPreventPropogation().should('contain.text', 'Propogation');
	});

	//-----For the “Simple” tab:-----

	it('5655 | TC4:  Validate display of areas in the "Simple" tab', () => {
		droppables.elements
			.draggableSimple()
			.should('be.visible')
			.and('have.css', 'border', `1px dashed ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDragMe);
		droppables.elements
			.droppableSimple()
			.should('be.visible')
			.and('have.css', 'border', `1px solid ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDropHere);
	});

	it('5655 | TC5: Validate the change the background color and display of the text "Dropped!" after dropping the "Drag Me" area into the "Drop Here" area, in the "Simple" tab', () => {
		droppables.dragAndDrop(values.draggableSimple, values.droppableSimple);
		droppables.elements.droppableSimple().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
	});

	//-----For the “Accept” tab:-----

	it('5655 | TC6:  Validate display of areas in the "Accept" tab', () => {
		droppables.selectTabAccept();
		droppables.elements
			.acceptable()
			.should('be.visible')
			.and('have.css', 'border', `1px dashed ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardAcceptable);
		droppables.elements
			.notAcceptable()
			.should('be.visible')
			.and('have.css', 'border', `1px dashed ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardNotAcceptable);
		droppables.elements
			.droppableAccept()
			.should('be.visible')
			.and('have.css', 'border', `1px solid ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDropHere);
	});

	it('5655 | TC7:   Validate the background color change of "Drop here" area when "Acceptable" area is dragged, in the "Accept" tab', () => {
		droppables.selectTabAccept();
		droppables.position(values.droppableAccept).then(coordenadas => {
			droppables.dragElement(values.acceptable, coordenadas.x, coordenadas.y);
		});
		droppables.elements.droppableAccept().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	/* values.deltaPosition.map((delta, index) => {
		it(`'5655 | TC7-${index+1}:   Validate color change of "Drop here" area when "Acceptable" area is dragged of the "Accept" tab'`, () => {
			droppables.selectTabAccept();
			droppables.position(values.acceptable).then(coordenadas => {
				droppables.dragElement(values.acceptable, coordenadas.x + delta.x, coordenadas.y + delta.y);
			});
			droppables.elements.droppableAccept().should('have.css', 'background-color', values.mediumSeaGreen);
		});
	}); */

	it('5655 | TC8:  Validate the change the background color and display of the text "Dropped!"  when dragging and dropping the "Acceptable" area onto the "Drop here" area, in the "Accept" tab', () => {
		droppables.selectTabAccept();
		droppables.dragAndDrop(values.acceptable, values.droppableAccept);
		droppables.elements.droppableAccept().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
	});

	it('5655 | TC9:  Validate that the "Drop here" area remains unchanged in the background color and no text appears when placing the "Not Acceptable" area in the "Drop here" area, in the "Accept" tab', () => {
		droppables.selectTabAccept();
		droppables.dragAndDrop(values.notAcceptable, values.droppableAccept);
		droppables.elements.droppableAccept().should('have.css', 'background-color', values.transparent).and('not.contain', values.textDropped);
	});

	//-----For the “Prevent Propogation” tab:-----

	it('5655 | TC10:  Validate visibility of "Drag me" area in the "Prevent Propagation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.elements
			.draggablePrevent()
			.should('be.visible')
			.and('have.css', 'border', `1px dashed ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDragMePrevent);
	});

	it('5655 | TC11:  Validate that the first "Outer droppable" area is visible and contains “Inner droppable (not greedy)” area inside,  in the "Prevent Propogation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.elements
			.notGreedyOuterDroppable()
			.should('be.visible')
			.and('have.css', 'border', `1px solid ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.contain', values.nameCardOuterDroppable);
		droppables.elements
			.notGreedyInnerDroppable()
			.should('be.visible')
			.and('have.css', 'border', `1px solid ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardInnerDroppableNotGreedy);
		droppables.elements.notGreedyOuterDroppable().within(() => {
			droppables.elements.notGreedyInnerDroppable().should('exist');
		});
		droppables.coordsNotGreedy().then(coords => {
			const [outerRectCoords, innerRectCoords] = coords;
			expect(innerRectCoords.top > outerRectCoords.top).to.be.true;
			expect(innerRectCoords.left > outerRectCoords.left).to.be.true;
			expect(innerRectCoords.right < outerRectCoords.right).to.be.true;
			expect(innerRectCoords.bottom < outerRectCoords.bottom).to.be.true;
		});
	});

	it('5655 | TC12:  Validate that the second "Outer droppable" area is visible and contains “Inner droppable (greedy)” area inside,  in the "Prevent Propogation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.elements
			.greedyOuterDroppable()
			.should('be.visible')
			.and('have.css', 'border', `1px solid ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.contain', values.nameCardOuterDroppable);
		droppables.elements
			.greedyInnerDroppable()
			.should('be.visible')
			.and('have.css', 'border', `1px solid ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardInnerDroppableGreedy);
		droppables.elements.greedyOuterDroppable().within(() => {
			droppables.elements.greedyInnerDroppable().should('exist');
		});
		droppables.coordsGreedy().then(coords => {
			const [outerRectCoords, innerRectCoords] = coords;
			expect(innerRectCoords.top > outerRectCoords.top).to.be.true;
			expect(innerRectCoords.left > outerRectCoords.left).to.be.true;
			expect(innerRectCoords.right < outerRectCoords.right).to.be.true;
			expect(innerRectCoords.bottom < outerRectCoords.bottom).to.be.true;
		});
	});

	it('5655 | TC13:  Validate the background color change of first “Outer Droppable” area and the “Inner droppable (not greedy)” area when "Drag me" area is dragged, in the "Prevent Propogation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.position(values.draggablePP).then(coordenadas => {
			droppables.dragElement(values.draggablePP, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
		});
		droppables.elements.notGreedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		droppables.elements.notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC14:  Validate the background color change of first “Outer Droppable” area and the “Inner droppable (not greedy)” area when " Drag me " area is dragged to “Outer Droppable” area, in the "Prevent Propogation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.positionTope(values.notGreedyOuterDroppable).then(coordenadas => {
			droppables.elements.draggablePrevent().then(delta => {
				const deltaPosition = delta[0].getBoundingClientRect().height / 2;
				droppables.dragElement(values.draggablePP, coordenadas.x, coordenadas.y + deltaPosition);
			});
		});
		droppables.elements.notGreedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		droppables.elements.notGreedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC15:  Validate the background color change of first “Outer Droppable” area and the “Inner droppable (not greedy)” area when "Drag me" area is dragged to “Inner droppable (not greedy)” area, in the "Prevent Propogation” tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.position(values.notGreedyInnerDroppable).then(coordenadas => {
			droppables.dragElement(values.draggablePP, coordenadas.x, coordenadas.y);
		});
		droppables.elements.notGreedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		droppables.elements.notGreedyInnerDroppable().should('have.css', 'background-color', values.darkSeaGreen);
	});

	it('5655 | TC16:  Validate the change the background color and display of the text "Dropped!"  when dragging and dropping the "Drag me" area onto the "Inner droppable (not greedy)" area, in the "Prevent Propogation” tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.dragAndDrop(values.draggablePP, values.notGreedyInnerDroppable);
		droppables.elements
			.notGreedyOuterDroppable()
			.should('have.css', 'background-color', values.steelBlue)
			.and('have.contain', values.textDropped);
		droppables.elements.notGreedyInnerDroppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
	});

	it('5655 | TC17:  Validate the change the background color and display of the text "Dropped!"  when dragging and dropping the " Drag me " area onto the first "Outer Droppable" area, in the "Prevent Propogation” tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.dragAndDropOuter(values.draggablePP, values.notGreedyOuterDroppable);
		droppables.elements
			.notGreedyOuterDroppable()
			.should('have.css', 'background-color', values.steelBlue)
			.and('have.contain', values.textDropped);
		droppables.elements
			.notGreedyInnerDroppable()
			.should('have.css', 'background-color', values.transparent)
			.and('not.have.text', values.textDropped);
	});

	it('5655 | TC18:  Validate the background color change of the second “Outer Droppable” area and the “Inner droppable (greedy)” area when "Drag me" area is dragged, in the "Prevent Propogation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.position(values.draggablePP).then(coordenadas => {
			droppables.dragElement(values.draggablePP, coordenadas.x + values.deltaPosition[1].x, coordenadas.y + values.deltaPosition[1].y);
		});
		droppables.elements.greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		droppables.elements.greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC19:  Validate the background color change of the second “Outer Droppable” area and the “Inner droppable (greedy)” area when "Drag me" area is dragged to “Outer Droppable” area, in the "Prevent Propogation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.positionTope(values.greedyOuterDroppable).then(coordenadas => {
			droppables.elements.draggablePrevent().then(delta => {
				const deltaPosition = delta[0].getBoundingClientRect().height / 2;
				cy.log(deltaPosition);
				droppables.dragElement(values.draggablePP, coordenadas.x, coordenadas.y + deltaPosition);
			});
		});
		droppables.elements.greedyOuterDroppable().should('have.css', 'background-color', values.darkSeaGreen);
		droppables.elements.greedyInnerDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC20:  Validate the background color change of the second “Outer Droppable” area and the “Inner droppable (greedy)” area when "Drag me" area is dragged to “Inner droppable (greedy)” area, in the "Prevent Propogation” tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.position(values.greedyInnerDroppable).then(coordenadas => {
			droppables.dragElement(values.draggablePP, coordenadas.x, coordenadas.y);
		});
		droppables.elements.greedyOuterDroppable().should('have.css', 'background-color', values.mediumSeaGreen);
		droppables.elements.greedyInnerDroppable().should('have.css', 'background-color', values.darkSeaGreen);
	});

	it('5655 | TC21:  Validate the change of the background color and the display of the text "Dropped!" in the "Inner droppable (greedy)" area when the "Drag Me" area is dragged and dropped onto it, in the "Prevent Propogation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.dragAndDrop(values.draggablePP, values.greedyInnerDroppable);
		droppables.elements
			.greedyOuterDroppable()
			.should('have.css', 'background-color', values.transparent)
			.and('not.have.text', values.textDropped);
		droppables.elements.greedyInnerDroppable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
	});

	it('5655 | TC22:  Validate the change of the background color and the display of the text "Dropped!" in the second "Outer droppable" area when the "Drag Me" area is dragged and dropped onto it, in the "Prevent Propogation" tab', () => {
		droppables.selectTabPreventPropogation();
		droppables.dragAndDropOuter(values.draggablePP, values.greedyOuterDroppable);
		droppables.elements.greedyOuterDroppable().should('have.css', 'background-color', values.steelBlue).and('have.contain', values.textDropped);
		droppables.elements
			.greedyInnerDroppable()
			.should('have.css', 'background-color', values.transparent)
			.and('not.have.text', values.textDropped);
	});

	//-----For the “Revert Draggable” tab:-----

	it('5655 | TC23:Validate display of areas in the "Revert Draggable" tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.elements
			.revertable()
			.should('be.visible')
			.and('have.css', 'border', `1px dashed ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardWillRevert);
		droppables.elements
			.notRevertable()
			.should('be.visible')
			.and('have.css', 'border', `1px dashed ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardNotRevert);
		droppables.elements
			.droppableRevertDraggable()
			.should('be.visible')
			.and('have.css', 'border', `1px solid ${values.black}`)
			.and('have.css', 'background-color', values.transparent)
			.and('have.text', values.nameCardDropHere);
	});

	it('5655 | TC24:Validate the background color change of the "Drop Here" area when the "Will Revert" area is dragged, in the "Draggable Revert" tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.position(values.revertable).then(coordenadas => {
			droppables.dragElement(values.revertable, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
		});
		droppables.elements.droppableRevertDraggable().should('have.css', 'background-color', values.mediumSeaGreen);
	});
	it('5655 | TC25:Validate the background color change of the "Drop Here" area when the "Will Revert" area is dragged to the "Drop here" area, in the " Revert Draggable " tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.position(values.droppableRevertDraggable).then(coordenadas => {
			droppables.dragElement(values.revertable, coordenadas.x, coordenadas.y);
		});
		droppables.elements.droppableRevertDraggable().should('have.css', 'background-color', values.darkSeaGreen);
	});

	it('5655 | TC26:Validate the "Will Revert" area revert when dragged and dropped in the "Drop Here" area, in the "Revert Draggable" tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.cssPosition(values.revertable).then(cssValue => {
			const [positionInitial, leftInitial, topInitial] = cssValue;
			droppables.dragAndDrop(values.revertable, values.droppableRevertDraggable);
			droppables.elements
				.revertable()
				.should('have.css', 'position', positionInitial)
				.and('have.css', 'left', leftInitial)
				.and('have.css', 'top', topInitial);
		});
	});

	it('5655 | TC27:Validate the change of the background color and the display of the text "Dropped!" in the " Drop here" area when the " Will Revert" area is dragged and dropped onto it, in the " Revert Draggable " tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.dragAndDrop(values.revertable, values.droppableRevertDraggable);
		droppables.elements.droppableRevertDraggable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
	});

	it('5655 | TC28:Validate the background color change of the "Drop Here" area when the "Not Revert" area is dragged, in the "Draggable Revert" tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.position(values.notRevertable).then(coordenadas => {
			droppables.dragElement(values.notRevertable, coordenadas.x + values.deltaPosition[0].x, coordenadas.y + values.deltaPosition[0].y);
		});
		droppables.elements.droppableRevertDraggable().should('have.css', 'background-color', values.mediumSeaGreen);
	});

	it('5655 | TC29:Validate the background color change of the "Drop Here" area when the "Not Revert" area is dragged to the "Drop here" area, in the " Revert Draggable " tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.position(values.droppableRevertDraggable).then(coordenadas => {
			droppables.dragElement(values.notRevertable, coordenadas.x, coordenadas.y);
		});
		droppables.elements.droppableRevertDraggable().should('have.css', 'background-color', values.darkSeaGreen);
	});

	it('5655 | TC30:Validate the permanence of the "Not Revert" area when dragging and dropping it in the "Drop Here" area, in the "Revert Draggable” tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.position(values.notRevertable).then(coordPreArrastre => {
			droppables.dragAndDrop(values.notRevertable, values.droppableRevertDraggable);
			droppables.cssPosition(values.notRevertable).then(cssValue => {
				const [positionInitial, leftInitial, topInitial] = cssValue;
				droppables.dragElementDrop(values.notRevertable, coordPreArrastre.x, coordPreArrastre.y);
				droppables.elements
					.notRevertable()
					.should('have.css', 'position', positionInitial)
					.and('have.css', 'left', leftInitial)
					.and('have.css', 'top', topInitial);
			});
		});
	});

	it('5655 | TC31:Validate the change of the background color and the display of the text "Dropped!" in the " Drop here" area when the " Not Revert" area is dragged and dropped onto it, in the " Revert Draggable " tab', () => {
		droppables.selectTabRevertDraggable();
		droppables.dragAndDrop(values.notRevertable, values.droppableRevertDraggable);
		droppables.elements.droppableRevertDraggable().should('have.css', 'background-color', values.steelBlue).and('have.text', values.textDropped);
	});
});

removeLogs();
