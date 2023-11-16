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

	it('132 | TC2:  Validar que "Drag me" se puede arrastrar de forma aleatoria en cualquier dirección de la pestaña “Simple”', () => {
		draggable.get.simpleTab().click();
		draggable.moveRandom(randomX, randomY);
		draggable.get.buttonDragBox().should('have.css', 'left', `${randomX}px`);
		draggable.get.buttonDragBox().should('have.css', 'top', `${randomY}px`);
	});
	it('132 | TC3:  Validar que "Only X"  y "Only Y" se pueden mover aleatoriamente en el eje correspondiente según su nombre X o Y de la pestaña “Axis Restricted”', () => {
		draggable.get.axisRestrictedTab().click();
		draggable.moveRandomX(randomX, 0);
		draggable.get.buttonOnlyX().should('have.css', 'left', `${randomX}px`);
		draggable.get.buttonOnlyX().should('have.css', 'top', `${0}px`);
		draggable.moveRandomY(0, randomY);
		draggable.get.buttonOnlyY().should('have.css', 'top', `${randomY}px`);
		draggable.get.buttonOnlyY().should('have.css', 'left', `${0}px`);
	});
	it('132 | TC4: Validar que “I`m contained within the box” y “Im contained within my parent” se pueden mover aleatoriamente solo dentro del área de acción delimitada de la pestaña “Container Restricted”', () => {
		const ramdomBoxX = faker.datatype.number({ min: 0, max: 280 });
		const ramdomBoxY = faker.datatype.number({ min: 0, max: 106 });
		const ramdomParentX = faker.datatype.number({ min: 0, max: 13 });
		const ramdomParentY = faker.datatype.number({ min: 0, max: 86 });

		draggable.get.containerRestrictedTab().click();
		draggable.moveRandomDelimitedBox(ramdomBoxX, ramdomBoxY);
		draggable.get.textContainedBox().should('have.css', 'left', `${ramdomBoxX}px`);
		draggable.get.textContainedBox().should('have.css', 'top', `${ramdomBoxY}px`);

		draggable.moveRandomDelimitedParent(ramdomParentX, ramdomParentY);
		draggable.get.textContainedParent().should('have.css', 'left', `${ramdomParentX}px`);
		draggable.get.textContainedParent().should('have.css', 'top', `${ramdomParentY}px`);
	});
	it.only('132 | TC5: Validar que el cursor permanece en el centro del cuadro "I will always stick to the center” de la pestaña Cursor Style”', () => {
		draggable.get.cursorStyleTab().click();
		const ramdomCenterX = faker.datatype.number({ min: 450, max: 1400 });
		const ramdomCenterY = faker.datatype.number({ min: 450, max: 1000 });
		cy.log(ramdomCenterX, ramdomCenterY);
		draggable.get
			.cursorCenter()
			.trigger('mousedown', { which: 1 })
			.trigger('mousemove', { which: 1, pageX: ramdomCenterX, pageY: ramdomCenterY });
	});
});
