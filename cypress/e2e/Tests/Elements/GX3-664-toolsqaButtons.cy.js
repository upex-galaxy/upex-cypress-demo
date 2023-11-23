const { buttons } = require('../../../support/pages/Elements/GX3-664-buttonsPage');

describe('🧪GX3-664 | TS: ⚡️ToolsQA | Elements | Buttons', () => {
	beforeEach('visitar la pagina', () => {
		cy.visit('/buttons');
		cy.url().should('contain', 'buttons');
	});

	it('664 | TC1 Validar hacer doble click en el boton "double click me" con exito', () => {
		buttons.doubleClick();
		buttons.get.assertion1().should('have.text', 'You have done a double click');
	});

	it('664 | TC2 Validar hacer click derecho en el boton "right click me" con exito', () => {
		buttons.rightClick();
		buttons.get.assertion2().should('have.text', 'You have done a right click');
	});

	it('664 | TC3 Validar hacer click en el boton "click me" con exito', () => {
		buttons.clickButton();
		buttons.get.assertion3().should('have.text', 'You have done a dynamic click');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
