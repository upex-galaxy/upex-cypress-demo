import { removeLogs } from '@helper/RemoveLogs';
import { drag } from '@pages/Interactions/GX2-7669-dragabble.page';

const x = Cypress._.random(-300, 670);
const y = Cypress._.random(-340, 330);

describe('GX2-7669-tools-qa-interactions-dragabble', () => {
	beforeEach(() => {
		cy.visit('/dragabble');
	});

	it('7670 | TC1: Validar mover el recuadro “Drag me” de la pestaña Simple.', () => {
		drag.drag({
			X: x,
			Y: y,
		});
		drag.get.simpleDrag().should('have.css', 'left', `${x}px`);
		drag.get.simpleDrag().should('have.css', 'top', `${y}px`);
	});
	it('7670 | TC2: Validar mover en el eje X el recuadro Only X de la pestaña Axis Restricted.', () => {
		drag.axisDrag({
			X: x,
		});
		drag.get.xDrag().should('have.css', 'left', `${x}px`);
	});
	it('7670 | TC3: Validar mover en el eje Y el recuadro Only Y de la pestaña Axis Restricted.', () => {
		drag.axisDrag({
			Y: y,
		});
		drag.get.yDrag().should('have.css', 'top', `${y}px`);
	});
});

removeLogs();
