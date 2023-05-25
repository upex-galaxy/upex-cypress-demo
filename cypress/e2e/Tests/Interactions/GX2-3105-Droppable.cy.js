import '@4tw/cypress-drag-drop';
import { droppable } from '@pages/GX2-3105-Droppable/droppablePage';
import { removeLogs } from '@helper/RemoveLogs';

removeLogs();

describe('GX2-3105 |ToolsQA | Interactions | Droppable', () => {
	beforeEach('User must be situated in the website', () => {
		cy.visit('https://demoqa.com/droppable');
	});
	it('3106 | TC1: Validate Tabs “Simple”, “Accept”, “Prevent Propogation”, “Revert Draggable” must be shown.', () => {
		droppable.get.simpleTab().should('exist').and('be.visible');
		droppable.get.acceptTab().should('exist').and('be.visible');
		droppable.get.preventPropogationTab().should('exist').and('be.visible');
		droppable.get.revertableTab().should('exist').and('be.visible');
	});
	it('3106 | TC2: Validate Tab “Simple” is displayed by default. and only one tab is displayed at once.', () => {
		droppable.get.tabList().within(() => {
			droppable.get.simpleTab().should('not.be.disabled').and('have.attr', 'aria-selected', 'true').and('have.class', 'active');
		});
	});

	it('3106 | TC3: Validate "Drag me" area is dropped on the “Drop here” area, changes the background color to blue and text “Dropped!” is displayed.', () => {
		droppable.get.simpleTab().should('not.be.disabled');
		droppable.get.dragArea().should('be.visible');
		droppable.get.dropArea().should('be.visible');
		droppable.get
			.simpleContainer()
			.within(() => {
				droppable.get.dragArea().drag('#droppable', {
					force: true,
				});
			})
			.then(() => {
				droppable.get.dropArea().should('have.css', 'background-color', 'rgb(70, 130, 180)').and('have.text', 'Dropped!');
			});
	});
	it('3106 | TC4: Validate "accept tab" components', () => {
		droppable.clickAcceptTab();
		droppable.get.acceptContainer().within(() => {
			droppable.get.dropArea().should('be.visible');
			droppable.get.acceptableArea().should('be.visible');
			droppable.get.notAcceptableArea().should('be.visible');
		});
	});
	it('3106 | TC5: Validate “Acceptable” area is dragged and “Drop here” area changes the background color to Green.', () => {
		droppable.clickAcceptTab();
		droppable
			.moveAcceptableArea()
			.wait(1000)
			.then(() => {
				droppable.get.acceptContainer().within(() => {
					cy.get(droppable.get.dropArea().should('have.css', 'background-color', 'rgb(60, 179, 113)'));
				});
			});
	});
	it('3106 | TC6: Validate “Acceptable” area is dropped on the “Drop here” area, changes the background color to blue and text “Dropped!” is displayed.', () => {
		droppable.clickAcceptTab();
		droppable.get
			.acceptContainer()
			.within(() => {
				droppable.get.acceptableArea().drag('#droppable', {
					force: true,
				});
			})
			.then(() => {
				droppable.get.acceptContainer().within(() => {
					droppable.get.dropArea().should('have.css', 'background-color', 'rgb(70, 130, 180)').and('have.text', 'Dropped!');
				});
			});
	});
	it('3106 | TC7: Validate components within the “Prevent Propogation” tab', () => {
		droppable.clickPreventTab();
		droppable.get.preventContainer().within(() => {
			droppable.get.dragBox().should('be.visible');
			droppable.get
				.outerArea1()
				.should('be.visible')
				.within(() => {
					droppable.get.notGreedyArea().should('exist').and('be.visible');
				});
			droppable.get
				.outerArea2()
				.should('be.visible')
				.within(() => {
					droppable.get.greedyArea().should('exist').and('be.visible');
				});
		});
	});
	it('3106 | TC8: Validate “Drag me” area is dragged and “Outer Droppable” area changes the background color to Green.', () => {
		droppable.clickPreventTab();
		droppable
			.moveDragBoxToOuterArea()
			.wait(1000)
			.then(() => {
				droppable.get.preventContainer().within(() => {
					droppable.get.outerArea1().should('have.css', 'background-color', 'rgb(60, 179, 113)');
				});
			});
	});
	it('3106 | TC9: Validate “Drag me” area is dragged to “Inner droppable (greedy)” area and its area changes the background color to Light Green.', () => {
		droppable.clickPreventTab();
		droppable
			.moveDragBoxToGreedyArea()
			.wait(1000)
			.then(() => {
				droppable.get.preventContainer().within(() => {
					droppable.get.greedyArea().should('have.css', 'background-color', 'rgb(143, 188, 143)');
				});
			});
	});
	it('3106 | TC10: Validate components within the “Revert Draggable” tab.', () => {
		droppable.clickRevertableTab();
		droppable.get.revertableContainer().within(() => {
			droppable.get.revertableArea().should('be.visible');
			droppable.get.notRevertableArea().should('be.visible');
			droppable.get.dropArea().should('be.visible');
		});
	});
	it('3106 | TC11: Validate “Will Revert” area or “Not Revert” area is dragged and “Drop here” area changes the background color to Green.', () => {
		droppable.clickRevertableTab();
		droppable
			.moveRevertableArea()
			.wait(1000)
			.then(() => {
				droppable.get.revertableContainer().within(() => {
					droppable.get.dropArea().should('have.css', 'background-color', 'rgb(60, 179, 113)');
				});
			});
		droppable.get
			.notRevertableArea()
			.wait(1000)
			.then(() => {
				droppable.get.revertableContainer().within(() => {
					droppable.get.dropArea().should('have.css', 'background-color', 'rgb(60, 179, 113)');
				});
			});
	});
	it('3106 | TC12: Validate “Will Revert” area is dropped on the “Drop here” area, goes back to the initial position, “Drop here” area changes the background color to Blue and text “Dropped” is displayed.', () => {
		droppable.clickRevertableTab();
		droppable.get
			.revertableContainer()
			.within(() => {
				droppable.get.revertableArea().drag('#droppable', {
					force: true,
				});
			})
			.then(() => {
				droppable.get.revertableArea().should('have.css', 'left', '0px').and('have.css', 'top', '0px');
			})
			.then(() => {
				droppable.get.revertableContainer().within(() => {
					droppable.get.dropArea().should('have.css', 'background-color', 'rgb(70, 130, 180)').and('have.text', 'Dropped!');
				});
			});
	});
	it('3106 | TC13: Validate "Not Revert" area is dropped on the “Drop here” area, can not be removed, “Drop here” area changes the background color to Blue and text “Dropped” is displayed', () => {
		droppable.clickRevertableTab();
		droppable.get
			.revertableContainer()
			.within(() => {
				droppable.get.notRevertableArea().drag('#droppable', {
					force: true,
				});
			})
			.then(() => {
				droppable.get
					.notRevertableArea()
					.move({ deltaX: -5, deltaY: 102 })
					.should('have.css', 'left', '249px')
					.and('have.css', 'top', '-17px');
			})
			.then(() => {
				droppable.get.revertableContainer().within(() => {
					droppable.get.dropArea().should('have.css', 'background-color', 'rgb(70, 130, 180)').and('have.text', 'Dropped!');
				});
			});
	});
});
