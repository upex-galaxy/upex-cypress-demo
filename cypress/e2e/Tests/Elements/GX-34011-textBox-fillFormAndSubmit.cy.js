import { TextBox } from '@pages/Elements/GX-34011-textBox-fillFormAndSubmit';
import data from '../../../fixtures/data/GX-34011-textBox-fillFormAndSubmit.json';
import { removeLogs } from '@helper/RemoveLogs';

describe('GX-34011-tools-qa-elements-text-box-fill-form-and-submit', () => {
	beforeEach('usuario debe visitar la pagina demoqa', () => {
		cy.visit('/text-box');
	});

	it('34012 | TC1: Validar enviar formulario con datos validos.', () => {
		TextBox.fillForm({
			name: data.validData.name,
			email: data.validData.email,
			currentAddress: data.validData.currentAddress,
			permanentAddress: data.validData.currentAddress,
		});
		TextBox.get.nameResult().should('contain', data.validData.name);
		TextBox.get.emailResult().should('contain', data.validData.email);
		TextBox.get.currentAddressResult().should('contain', data.validData.currentAddress);
		TextBox.get.permanentAddressResult().should('contain', data.validData.currentAddress);
	});
});

removeLogs();
