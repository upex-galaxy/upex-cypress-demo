import { dragContainerRestricted, dragMeSimple } from '@pages/Draggable.Page';
import { dragAxisRestricted } from '@pages/Draggable.Page';

describe('ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Should be in the DemoQA page for Dragabble', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.contains('Dragabble').should('be.visible');
		cy.url().should('contain', 'dragabble');
	});

	it('2375 | TC1: Validate drag the Drag Me box at any direction for the Simple Tab', () => {
		dragMeSimple.simpleDrag();

		cy.should('have.text', 'Drag me');
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

	it.only('2375 | TC4: Validate drag the Im contained within the box box in the delimited area of action', () => {
		dragContainerRestricted.getContainerRestricted();
		cy.should('have.attr', 'aria-selected', 'true');

		dragContainerRestricted.moveOnlyWithinTheBox();
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
