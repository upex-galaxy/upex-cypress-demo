import { TextBox } from '@pages/Elements/GX-34011-textBox-fillFormAndSubmit';
import data from '../../../fixtures/data/GX-34011-textBox-fillFormAndSubmit.json';
import { removeLogs } from '@helper/RemoveLogs';

describe('GX-34011-tools-qa-elements-text-box-fill-form-and-submit', () => {
	beforeEach('usuario debe visitar la pagina demoqa', () => {
		cy.visit({
			url: '/text-box',
			timeout: 80000,
		});
	});

	it('34012 | TC1: Validar enviar formulario con datos validos.', () => {
		TextBox.fillForm({
			name: data.validData.name,
			email: data.validData.email,
			currentAddress: data.validData.currentAddress,
			permanentAddress: data.validData.currentAddress,
		});
		//validations
		TextBox.get.nameResult().should('contain', data.validData.name);
		TextBox.get.emailResult().should('contain', data.validData.email);
		TextBox.get.currentAddressResult().should('contain', data.validData.currentAddress);
		TextBox.get.permanentAddressResult().should('contain', data.validData.currentAddress);
	});

	it('34012 | TC2: Validar NO enviar formulario con inputs vacios.', () => {
		TextBox.get.submitBtn().click();
		//validations
		TextBox.get.nameResult().should('not.exist');
		TextBox.get.emailResult().should('not.exist');
		TextBox.get.currentAddressResult().should('not.exist');
		TextBox.get.permanentAddressResult().should('not.exist');
	});

	it('34012 | TC3: Validar NO enviar formulario con correo invalido.', () => {
		data.invalidData.map(invalid => {
			TextBox.fillEmail(invalid.email);
			TextBox.get.email().should('have.class', 'field-error');
			//validations
			TextBox.get.emailResult().should('not.exist');
			TextBox.get.email().clear();
		});
	});
});

removeLogs();
