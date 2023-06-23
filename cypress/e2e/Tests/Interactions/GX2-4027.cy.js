import { draggable } from '@pages/Interactions/PageDraggable';

describe('This is your test project title', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/dragabble');
	});

	it('Validar mover simple de forma aleatoria verticalmente dentro de los límites', () => {
		const x = 50;
		const y = draggable.getRandomNumber(1, 250);
		draggable.dragBox();
		draggable.moveElement('#dragBox', x, y);
		draggable.validatePosition(x, y);
	});

	it('Validar mover simple de forma aleatoria horizontalmente dentro de los límites', () => {
		const x = draggable.getRandomNumber(1, 200);
		const y = 50;
		draggable.dragBox();
		draggable.moveElement('#dragBox', x, y);
		draggable.validatePosition(x, y);
	});

	it('Validar mover sólo x', () => {
		draggable.draggableAxisRestriction();
		const y = 0;
		const x = draggable.getRandomNumber(100, 200);
		draggable.restrictedX();
		draggable.moveElement('#restrictedX', x, y);
		draggable.validatePosition(x, y);
	});

	it('Validar mover sólo y', () => {
		draggable.draggableAxisRestriction();
		const y = draggable.getRandomNumber(40, 389);
		const x = 0;
		draggable.restrictedY();
		draggable.moveElement('#restrictedY', x, y);
		draggable.validatePosition(x, y);
	});

	it('Validar mover el objeto dentro del contenedor', () => {
		draggable.draggableRestriction();
		const x = draggable.getRandomNumber(0, 673);
		const y = draggable.getRandomNumber(0, 106);
		cy.get('[class = "draggable ui-widget-content ui-draggable ui-draggable-handle"]').Move({ x, y });
		draggable.validatePosition(x, y);
	});

	it('Validar existencia de objeto estático', () => {
		draggable.draggableRestriction();
		cy.get('[class="ui-widget-header ui-draggable ui-draggable-handle"]').should('have.css', 'position', 'relative');
		//.should('have.text', "I'm contained within my parent");
	});

	it('Validar mover el objeto cursor Center', () => {
		draggable.draggableCursorStyle();
		draggable.PosiciónActual();
		const x = draggable.getRandomNumber(50, 500);
		const y = draggable.getRandomNumber(50, 500);
		draggable.moveElement('#cursorCenter', x, y);
		draggable.validatePosition();
		draggable.PosiciónActual('#cursorCenter');
		draggable.ValorEsperado(x, y);
	});

	it('Validar mover el objeto cursor Top Left', () => {
		draggable.draggableCursorStyle();
		draggable.PosiciónActual();
		const x = draggable.getRandomNumber(50, 500);
		const y = draggable.getRandomNumber(50, 500);
		draggable.moveElement('#cursorTopLeft', x, y);
		draggable.validatePosition();
		draggable.PosiciónActual('#cursorTopLeft');
		draggable.ValorEsperado(x, y);
	});

	it('Validar mover el objeto cursor Bottom', () => {
		draggable.draggableCursorStyle();
		draggable.PosiciónActual();
		const x = draggable.getRandomNumber(50, 500);
		const y = draggable.getRandomNumber(50, 500);
		draggable.moveElement('#cursorBottom', x, y);
		draggable.validatePosition();
		draggable.PosiciónActual('#cursorBottom');
		draggable.ValorEsperado(x, y);
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
