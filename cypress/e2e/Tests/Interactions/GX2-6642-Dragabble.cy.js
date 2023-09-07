import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { Dragabble } from '../../../support/pages/Interactions/GX2-6642-Dragabble.page';

describe('GX2-6642 ✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Visitar la pagina DemoQA', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	it('GX2-6643 | TC1: Validar poder arrastrar en cualquier posición el tablero “Drag me“ de la pestaña “Simple“.', () => {
		Dragabble.dragToRandomPosition();
		Dragabble.clickAxisRestricted();
	});
});