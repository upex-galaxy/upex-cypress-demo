describe('✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('visitar la página de Demo QA', () => {
		selectable.urlVisit();
		cy.url().should('contain', 'selectable');
	});
	it('5550 | TC1: Validar que el elemento “List” tenga el funcionamiento correcto al seleccionarse.', () => {
		//pasos y aserciones
	});
	it('5550 | TC2: Validar que el elemento “List” tenga el funcionamiento correcto al desseleccionarse.', () => {
		//pasos y aserciones
	});
	it('5550 | TC3: Validar que el elemento “Grid” tenga el funcionamiento correcto al seleccionarse.', () => {
		//pasos y aserciones
	});
	it('5550 | TC4: Validar que el elemento “Grid” tenga el funcionamiento correcto al desseleccionarse.', () => {
		//pasos y aserciones
	});
});

import { selectable } from '@pages/Interactions/GX2-5549-Selectable.Page';

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
