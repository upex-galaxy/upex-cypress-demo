import { removeLogs } from '@helper/RemoveLogs';
import { draggable } from '@pages/Interactions/GX2-4027-PageDraggable';

describe('US GX2-4027 | TS: ✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach(() => {
		draggable.visit();
	});

	it('4028 | TC 1 : Validar mover simple de forma aleatoria verticalmente dentro de los límites', () => {
		const x = 50;
		const y = draggable.getRandomNumber(1, 250);
		draggable.dragBox();
		draggable.moveElement('#dragBox', x, y);
		draggable
			.dragBox()
			.should('have.css', 'position', 'relative')
			.and('have.css', 'left', x + 'px')
			.and('have.css', 'top', y + 'px');
	});

	it('4028 | TC 2 : Validar mover simple de forma aleatoria horizontalmente dentro de los límites', () => {
		const x = draggable.getRandomNumber(1, 200);
		const y = 50;
		draggable.dragBox();
		draggable.moveElement('#dragBox', x, y);
		draggable
			.dragBox()
			.should('have.css', 'position', 'relative')
			.and('have.css', 'left', x + 'px')
			.and('have.css', 'top', y + 'px');
	});

	it('4028 | TC 3 : Validar mover sólo x', () => {
		draggable.draggableAxisRestriction();
		const y = 0;
		const x = draggable.getRandomNumber(100, 200);
		draggable.restrictedX();
		draggable.moveElement('#restrictedX', x, y);
		draggable
			.restrictedX()
			.should('have.css', 'position', 'relative')
			.and('have.css', 'left', x + 'px')
			.and('have.css', 'top', y + 'px');
	});

	it('4028 | TC 4 : Validar mover sólo y', () => {
		draggable.draggableAxisRestriction();
		const y = draggable.getRandomNumber(40, 389);
		const x = 0;
		draggable.restrictedY();
		draggable.moveElement('#restrictedY', x, y);
		draggable
			.restrictedY()
			.should('have.css', 'position', 'relative')
			.and('have.css', 'left', x + 'px')
			.and('have.css', 'top', y + 'px');
	});

	it('4028 | TC 5 : Validar mover el objeto dentro del contenedor', () => {
		draggable.draggableRestriction();
		const x = draggable.getRandomNumber(0, 600);
		const y = draggable.getRandomNumber(0, 100);
		draggable.moveElement(draggable.moverContenedor(), x, y);
		draggable
			.moverContenedor()
			.should('have.css', 'position', 'static')
			.and('have.css', 'left', x + 'px')
			.and('have.css', 'top', y + 'px');
	});

	it('4028 | TC 6 : Validar existencia de objeto estático', () => {
		draggable.draggableRestriction();
		const x = draggable.getRandomNumber(0, 100);
		const y = draggable.getRandomNumber(0, 100);
		draggable
			.moveElement(draggable.contenedorEstático(), x, y);
		draggable
			.contenedorEstático()
			.should('have.css', 'position', 'static')
			.and('have.css', 'left', x + 'px')
			.and('have.css', 'top', y + 'px');
	});

	it('4028 | TC 7 : Validar mover el objeto cursor Center', () => {
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

	it('4028 | TC 8 :Validar mover el objeto cursor Top Left', () => {
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

	it('4028 | TC 9 :Validar mover el objeto cursor Bottom', () => {
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
