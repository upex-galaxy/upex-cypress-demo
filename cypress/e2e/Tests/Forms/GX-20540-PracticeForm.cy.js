import { modal } from '@pages/Forms/ModalForm.Page';
import { form } from '@pages/Forms/PracticeForm.Page';
import { faker } from '@faker-js/faker';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
	});

	it('20541 | TC1: Validar envío de formulario exitoso con todos los campos completos', () => {
		// Código para validar el envío exitoso del formulario con todos los campos completos

		cy.randomFormData('TC1');
	});

	it.only('20541 | TC2: Validar envío de formulario exitoso con sólo los campos obligatorios completos', () => {
		// Código para validar el envío exitoso del formulario con sólo los campos obligatorios completos
		cy.randomFormData('TC2');
		form.submitClick();
	});
});
