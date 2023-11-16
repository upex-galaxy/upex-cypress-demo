import { draggable } from '@pages/Interactions/GX3-132-Draggable.page';
import { faker } from '@faker-js/faker';

describe('US GX3-132 | ToolsQA | Interactions | Dragabble', () => {
	const randomX = faker.datatype.number({ min: 0, max: 450 });
	const randomY = faker.datatype.number({ min: 0, max: 450 });
	beforeEach('', () => {
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	it('132 | TC1: Validar que se muestren las pestañas “Simple”, “Axis Restricted”, “Container Restricted”, “Cursor Style”', () => {
		draggable.get.simpleTab().should('be.visible');
		draggable.get.axisRestrictedTab().should('be.visible');
		draggable.get.containerRestrictedTab().should('be.visible');
		draggable.get.cursorStyleTab().should('be.visible');
		draggable.get.simpleTabVisible().should('be.visible');
	});

	it('132 | TC2: Validar que "Drag me" se puede arrastrar como se desee en cualquier dirección de la pestaña “Simple”', () => {
		//draggable.get.buttonDragBox().click();
		draggable.moveRandom(randomX, randomY);
		
	});
});
