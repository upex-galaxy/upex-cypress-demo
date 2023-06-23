import { removeLogs } from '@helper/RemoveLogs';
import { draggable } from '@pages/Interactions/GX2-4027-PageDraggable';

describe('US GX2-4027 | TS: ✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach(() => {
		draggable.visit();
	});

	it('Validar mover simple de forma aleatoria verticalmente dentro de los límites', () => {
		const x = 50;
		const y = draggable.getRandomNumber(1, 250);
		draggable.dragBox();
		draggable.moveElement('#dragBox', x, y);
		draggable.validatePositionDragBox(x, y);
	});

	it('Validar mover simple de forma aleatoria horizontalmente dentro de los límites', () => {
		const x = draggable.getRandomNumber(1, 200);
		const y = 50;
		draggable.dragBox();
		draggable.moveElement('#dragBox', x, y);
		draggable.validatePositionDragBox(x, y);
	});

	it('Validar mover sólo x', () => {
		draggable.draggableAxisRestriction();
		const y = 0;
		const x = draggable.getRandomNumber(100, 200);
		draggable.restrictedX();
		draggable.moveElement('#restrictedX', x, y);
		draggable.validatePositionRestrictedX(x, y);
	});

	it('Validar mover sólo y', () => {
		draggable.draggableAxisRestriction();
		const y = draggable.getRandomNumber(40, 389);
		const x = 0;
		draggable.restrictedY();
		draggable.moveElement('#restrictedY', x, y);
		draggable.validatePositionRestrictedY(x, y);
	});

	it('Validar mover el objeto dentro del contenedor', () => {
		draggable.draggableRestriction();
		const x = draggable.getRandomNumber(0, 673);
		const y = draggable.getRandomNumber(0, 106);
		draggable.moverContenedor();
		draggable.moveElement('[class = "draggable ui-widget-content ui-draggable ui-draggable-handle"]', x, y);
		draggable.validatePositionContenedor(x, y);
	});

	it('Validar existencia de objeto estático', () => {
		draggable.draggableRestriction();
		draggable.contenedorEstático().should('have.css', 'position', 'relative').should('have.text', "I'm contained within my parent");
	});

	it('Validar mover el objeto cursor Center', () => {
		draggable.draggableCursorStyle();
		cy.get('#cursorCenter').then($cursorCenter => {
			const leftValue = $cursorCenter.css('left');
			const topValue = $cursorCenter.css('top');
			const x = draggable.getRandomNumber(50, 500);
			const y = draggable.getRandomNumber(10, 200);
			draggable.moveElement('#cursorCenter', x, y);
			expect(topValue).not.to.equal(y);
			expect(leftValue).not.to.equal(x);
		});
	});

	it('Validar mover el objeto cursor Top Left', () => {
		draggable.draggableCursorStyle();
		cy.get('#cursorTopLeft').then($cursorTopLeft => {
			const leftValue = $cursorTopLeft.css('left');
			const topValue = $cursorTopLeft.css('top');
			const x = draggable.getRandomNumber(400, 500);
			const y = draggable.getRandomNumber(100, 500);
			draggable.moveElement('#cursorTopLeft', x, y);
			expect(topValue).not.to.equal(y);
			expect(leftValue).not.to.equal(x);
		});
	});

	it('Validar mover el objeto cursor Bottom', () => {
		draggable.draggableCursorStyle();
		cy.get('#cursorBottom').then($cursorBottom => {
			const leftValue = $cursorBottom.css('left');
			const topValue = $cursorBottom.css('top');
			const x = draggable.getRandomNumber(-35, 400);
			const y = draggable.getRandomNumber(-257, -35);
			draggable.moveElement('#cursorBottom', x, y);
			expect(topValue).not.to.equal(y);
			expect(leftValue).not.to.equal(x);
		});
	});
});
removeLogs();
