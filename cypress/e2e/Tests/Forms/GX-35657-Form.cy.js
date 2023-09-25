import { form } from '@pages/Forms/GX-35657-Form.page';
import { faker } from '@faker-js/faker';

import { removeLogs } from '@helper/RemoveLogs';

describe(' GX-35657 | ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
	});

	it('35658 | TC1: Validar enviar formulario con datos validos.', () => {
		form.fillForm({});
	});
});

removeLogs();
