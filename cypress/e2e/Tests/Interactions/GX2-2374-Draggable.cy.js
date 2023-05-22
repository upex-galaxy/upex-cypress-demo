import { dragContainerRestricted, dragMeSimple, dragCursorStyle } from '@pages/Draggable.Page';
import { dragAxisRestricted } from '@pages/Draggable.Page';

describe('ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Should be in the DemoQA page for Dragabble', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.contains('Dragabble').should('be.visible');
		cy.url().should('contain', 'dragabble');
	});

	it('2375 | TC1: Validate drag the Drag Me box at any direction for the Simple Tab', () => {
		dragMeSimple.simpleDrag();

		cy.should('have.css', 'cursor', 'move');
	});
	it('2375 | TC2: Validate drag the Only X box with random range for X axis only for the Axis Restricted Tab', () => {
		dragAxisRestricted.GetAxisTab();
		cy.should('have.attr', 'aria-selected', 'true');

		dragAxisRestricted.moveOnlyX();

		cy.should('have.text', 'Only X');
	});
	it('2375 | TC3: Validate drag the Only Y box with random range for Y axis only for the Axis Restricted Tab', () => {
		dragAxisRestricted.GetAxisTab();
		cy.should('have.attr', 'aria-selected', 'true');

		dragAxisRestricted.moveOnlyY();

		cy.should('have.text', 'Only Y');
	});

	it('2375 | TC4: Validate drag the Im contained within the box in the delimited area of action', () => {
		dragContainerRestricted.getContainerRestricted();
		cy.should('have.attr', 'aria-selected', 'true');

		dragContainerRestricted.moveOnlyWithinTheBox();
	});
	it("2375 | TC5: Validate NOT drag the 'Im contained within the box' box outside of the delimited area of action", () => {
		dragContainerRestricted.getContainerRestricted();
		cy.should('have.attr', 'aria-selected', 'true');

		dragContainerRestricted.moveOutsideTheBox();
		cy.should('have.css', 'cursor', 'auto');
	});
	it("2375 | TC6: Validate drag the 'Im contained within my parent' box in the delimited area of action", () => {
		dragContainerRestricted.getContainerRestricted();
		cy.should('have.attr', 'aria-selected', 'true');

		dragContainerRestricted.moveWithinTheParent();
	});
	it('2375 | TC7: Validate NOT drag the Im contained within my parent box outside of the delimited area of action', () => {
		dragContainerRestricted.getContainerRestricted();
		cy.should('have.attr', 'aria-selected', 'true');

		dragContainerRestricted.moveOutsideTheParent();
		cy.should('have.css', 'cursor', 'auto');
	});
	it("2375 | TC8: Validate move the box 'I will always stick to the center' at any direction for the Cursor Style Tab", () => {
		dragCursorStyle.getCursorStyleTab();
		cy.should('have.attr', 'aria-selected', 'true');

		dragCursorStyle.CenterStyle();
		cy.should('have.css', 'cursor', 'move');
	});
	it("2375 | TC9: Validate move the box 'My cursor is at top lef' at any direction for the Cursor Style Tab", () => {
		dragCursorStyle.getCursorStyleTab();
		cy.should('have.attr', 'aria-selected', 'true');

		dragCursorStyle.LeftStyle();
		cy.should('have.css', 'cursor', 'move');
	});
	it("2375 | TC10: Validate move the box 'My cursor is at the bottom' at any direction for the Cursor Style Tab", () => {
		dragCursorStyle.getCursorStyleTab();
		cy.should('have.attr', 'aria-selected', 'true');

		dragCursorStyle.BottomStyle();
		cy.should('have.css', 'cursor', 'move');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
