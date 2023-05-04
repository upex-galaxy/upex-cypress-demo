import { dragMeSimple } from '@pages/Draggable.Page';
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
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
