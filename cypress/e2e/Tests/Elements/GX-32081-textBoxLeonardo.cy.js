describe('GX-32081-✅-tools-qa-elements-text-box-fill-form-and-submit', () => {
	beforeEach('Visitar la pagina DemoQA', () => {
		cy.visit('/text-box');
	});
	//todo: Forma 1
	it('32082 | TC1: Validar resultado después de completar formulario con datos validos', () => {
		//todo: Completar formularios
		textBoxPage.fillUserNameInput(data.valid.userName);
		textBoxPage.fillEmailInput(data.valid.userEmail);
		textBoxPage.fillCurrentAddressInput(data.valid.userCurrentAddress);
		textBoxPage.fillPermanentAddressInput(data.valid.userPermanentAddress);
		textBoxPage.clickOnSubmitButton();
		//todo: Validaciones
		textBoxPage.get.nameResult().should('contain', data.valid.userName);
		textBoxPage.get.emailResult().should('contain', data.valid.userEmail);
		textBoxPage.get.currentAddressResult().should('contain', data.valid.userCurrentAddress);
		textBoxPage.get.permanentAddressResult().should('contain', data.valid.userPermanentAddress);
	});
	//todo: Forma 2
	it('32082 | TC1: Validar resultado después de completar formulario con datos validos', () => {
		textBoxPage.completeForm({
			userName: data.valid.userName,
			email: data.valid.userEmail,
			currentAddress: data.valid.userCurrentAddress,
			permanentAddress: data.valid.userPermanentAddress,
		});
		//todo: Validaciones
		textBoxPage.get.nameResult().should('contain', data.valid.userName);
		textBoxPage.get.emailResult().should('contain', data.valid.userEmail);
		textBoxPage.get.currentAddressResult().should('contain', data.valid.userCurrentAddress);
		textBoxPage.get.permanentAddressResult().should('contain', data.valid.userPermanentAddress);
	});
	it('32082 | TC2: Validar No genere resultado después de completar “Input email” con datos inválidos', () => {
		data.invalid.forEach(invalidData => {
			textBoxPage.fillEmailInput(invalidData.email);
			textBoxPage.clickOnSubmitButton();
			//todo: validaciones
			textBoxPage.get.emailResult().should('not.exist');
			textBoxPage.get.inputEmail().should('have.css', 'border', '1px solid rgb(255, 0, 0)');
			textBoxPage.clearEmailInput();
		});
	});
});
import data from '../../../fixtures/data/GX-32081-textBoxLeonardo.json';
import { textBoxPage } from '@pages/Elements/GX-32081-textBoxLeonardo.Page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
