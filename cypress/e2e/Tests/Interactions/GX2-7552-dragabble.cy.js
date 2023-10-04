import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { dragMove } from '@pages/Interactions/GX2-7552-dragabble.page';

describe('GX2-7552-✅-tools-qa-interactions-dragabble', () => {
	beforeEach('Usuario debe estar situado en https://demoqa.com/dragabble', () => {
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	it('7553 | TC1: Validar poder movilizar la pestaña hacia alguna direccion', () => {
		dragMove.clickSimple();
		dragMove.get.simple().should('contain.text', 'Simple');
		dragMove.clickDragbox();
		dragMove.get.dragBox().invoke('offset').as('Inicial');
		cy.get('@Inicial').then($inicial => {
			dragMove.get.dragBox().trigger('mousedown', { which: 1 });
			dragMove.get.dragBox().trigger('mousemove', {
				clientX: $inicial.left - 550,
				clientY: $inicial.top + 80,
			});
		});
	});
});
