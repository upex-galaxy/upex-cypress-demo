import { modal } from '@pages/Forms/ModalForm.Page';
import { form } from '@pages/Forms/PracticeForm.Page';
import { faker } from '@faker-js/faker';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('20541 | TC1: Validar envío de formulario exitoso con todos los campos completos', () => {
		cy.randomFormData('fullData');
	});

	it.only('20541 | TC2: Validar envío de formulario exitoso con sólo los campos obligatorios completos', () => {
		cy.randomFormData('TC2');
		form.submitClick();
		form.get.modal().should('be.visible');
		form.get.modalTitle().should('have.text', 'Thanks for submitting the form');
	});
});
