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

	it('34012 | TC2: Validar NO mostar "Result Box" del  formulario con correo no valido.', () => {
		data.invalidData.map(invalid => {
			TextBox.fillForm({
				name: data.validData.name,
				email: invalid.email,
				currentAddress: data.validData.currentAddress,
				permanentAddress: data.validData.currentAddress,
			});
			//validations
			TextBox.get.email().should('have.class', 'field-error');
			TextBox.get.email().should('have.css', 'border', '1px solid rgb(255, 0, 0)');
			TextBox.get.emailResult().should('not.exist');
			TextBox.get.nameResult().should('not.exist');
			TextBox.get.currentAddressResult().should('not.exist');
			TextBox.get.permanentAddressResult().should('not.exist');
		});
	});
});

removeLogs();
