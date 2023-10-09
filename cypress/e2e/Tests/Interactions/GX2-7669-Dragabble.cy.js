import { removeLogs } from '@helper/RemoveLogs';
import { drag } from '@pages/Interactions/GX2-7669-dragabble.page';

describe('GX2-7669-tools-qa-interactions-dragabble', () => {
	beforeEach(() => {
		cy.visit({
			url: '/dragabble',
			timeout: 80000,
		});
	});

	it('7670 | TC1: Validar mover el recuadro “Drag me” de la pestaña Simple.', () => {
		const x = Cypress._.random(0, 750);
		const y = Cypress._.random(0, 550);
		drag.drag({
			X: x,
			Y: y,
		});
		drag.get.simpleDrag().should('have.css', 'left', `${x}px`);
		drag.get.simpleDrag().should('have.css', 'top', `${y}px`);
		drag.get.simpleDrag().should('be.visible');
	});
	it('7670 | TC2: Validar mover en el eje X el recuadro Only X de la pestaña Axis Restricted.', () => {
		const x = Cypress._.random(-200, 450);

		drag.axisDrag({
			X: x,
		});
		drag.get.xDrag().should('have.css', 'left', `${x}px`).and('be.visible');
	});
	it('7670 | TC3: Validar mover en el eje Y el recuadro Only Y de la pestaña Axis Restricted.', () => {
		const y = Cypress._.random(0, 500);
		drag.axisDrag({
			Y: y,
		});
		drag.get.yDrag().should('have.css', 'top', `${y}px`).and('be.visible');
	});
	it('7670 | TC4: Validar mover el recuadro “Im contained within the box” dentro de su container de la pestaña “Container Restricted”.', () => {
		const x = Cypress._.random(0, 675);
		const y = Cypress._.random(0, 106);
		drag.containerDrag({
			x: x,
			Y: y,
		});
		drag.get.dragContainer().should('have.css', 'left', `${x}px`);
		drag.get.dragContainer().should('have.css', 'top', `${y}px`);
		drag.get.dragContainer().should('be.visible');
	});

	it('7670 | TC5: Validar mover el texto “Im contained within my parent” dentro de su container de la pestaña “Container Restricted”.', () => {
		const x = Cypress._.random(9, 14);
		const y = Cypress._.random(-1, 86);
		drag.textDrag({
			x: x,
			Y: y,
		});
		drag.get.dragText().should('have.css', 'left', `${x}px`);
		drag.get.dragText().should('have.css', 'top', `${y}px`);
		drag.get.dragText().should('be.visible');
	});
	it('7670 | TC6: Validar mover el recuadro “I will always stick to the center” de la pestaña "Cursor Style".', () => {
		const x = Cypress._.random(160, 800);
		cy.log(x);
		const y = Cypress._.random(120, 500);
		cy.log('y', y);

		drag.dragStickCenter({
			X: x,
			Y: y,
		});
		drag.get.dragCenter().should('not.have.css', 'left', `${x}px`);
		drag.get.dragCenter().should('not.have.css', 'top', `${y}px`);
		drag.get.dragCenter().should('have.css', 'cursor', `move`);
		drag.get.dragCenter().should('be.visible');
	});
	it('7670 | TC7: Validar mover el recuadro “My cursor is at top left” de la pestaña "Cursor Style".', () => {
		const x = Cypress._.random(100, 740) + 4.352;
		cy.log(x);
		const y = Cypress._.random(-130, 370);
		cy.log('y', y);

		drag.dragTop({
			X: x,
			Y: y,
		});
		drag.get.dragTopLeft().should('not.have.css', 'left', `${x}px`);
		drag.get.dragTopLeft().should('not.have.css', 'top', `${y}px`);
		drag.get.dragTopLeft().should('have.css', 'cursor', `move`);
		drag.get.dragTopLeft().should('be.visible');
	});
	it('7670 | TC8: Validar mover el recuadro “My cursor is at bottom” de la pestaña "Cursor Style".', () => {
		const x = Cypress._.random(110, 750);
		cy.log(x);
		const y = Cypress._.random(-200, 262);
		cy.log('y', y);

		drag.dragBottom({
			X: x,
			Y: y,
		});
		drag.get.dragBottom().should('have.css', 'left', `${x}px`);
		drag.get.dragBottom().should('not.have.css', 'top', `${y}px`);
		drag.get.dragBottom().should('have.css', 'cursor', `move`);
		drag.get.dragBottom().should('be.visible');
	});
});

removeLogs();
