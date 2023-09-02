import { removeLogs } from '@helper/RemoveLogs';
import { radioButton } from '../../../support/pages/Elements/GX-290708_RadioButtons.Page';

describe('GX-29708 ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: El usuario debe estar situado en la página web.', () => {
		cy.visit('/radio-button');
		cy.url().should('contain', 'radio-button');
	});

	it('29735 | TC1: Validar seleccionar el RB cuando la opción está habilitada (Yes).', () => {
		radioButton.clickButtonYes();
		cy.get('.text-success').should('have.text', 'Yes');
	});

	it('29735 | TC2: Validar seleccionar el RB cuando la opción está habilitada (Impressive).', () => {
		radioButton.clickButtonImpressive();
		cy.get('.text-success').should('have.text', 'Impressive');
	});

	it('29735 | TC3: Validar NO seleccionar el RB cuando la opción está deshabilitada (No).', () => {
		cy.get('div label').last().should('have.class', 'disabled');
		radioButton.clickButtonNo();
		cy.get('.text-success').should('not.exist');
	});
});

removeLogs();
