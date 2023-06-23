import { modal } from '@pages/Forms/ModalForm.Page';
import { form } from '@pages/Forms/PracticeForm.Page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form', { failOnStatusCode: false });
		cy.url().should('contain', 'automation-practice-form');
	});
	//Se omite campo "Subjects" ya que hay defecto detectado: se borra el contenido del campo al hacer clic o enviar el formulario
	it('20541 | TC1: Validar envío de formulario exitoso con todos los campos completos', () => {
		cy.fixture('data/files').then(el => {
			Cypress.env('file', el.imagePathUpload);
		});
		cy.randomFormData('fullData').then(el => {
			form.submitClick();
			modal.get.modal().should('be.visible');
			modal.get.modalTitle().should('have.text', 'Thanks for submitting the form');
			const fullName = Cypress.env('dataForm').firstName + ' ' + Cypress.env('dataForm').lastName;
			modal.get.name().should('have.text', fullName);
			modal.get.email().should('have.text', Cypress.env('dataForm').email);
			modal.get.gender().should('have.text', Cypress.env('dataForm').gender);
			modal.get.mobile().should('have.text', Cypress.env('dataForm').mobile);
			const [day, month, year] = Cypress.env('dataForm').birthDate.split(' ');
			modal.get.birth().invoke('text').should('include', day);
			modal.get.birth().invoke('text').should('include', month);
			modal.get.birth().invoke('text').should('include', year);
			modal.get.hobbies().should('have.text', Cypress.env('dataForm').hobbies);
			const parts = Cypress.env('dataForm').picture.split('/');
			const fileName = parts.pop();
			modal.get.picture().should('have.text', fileName);
			modal.get.address().should('have.text', Cypress.env('dataForm').address);
			const state_city = Cypress.env('dataForm').state + ' ' + Cypress.env('dataForm').city;
			modal.get.stateCity().should('have.text', state_city);
		});
	});

	it('20541 | TC2: Validar envío de formulario exitoso con sólo los campos obligatorios completos', () => {
		cy.randomFormData('TC2').then(el => {
			form.submitClick();
			modal.get.modal().should('be.visible');
			modal.get.modalTitle().should('have.text', 'Thanks for submitting the form');
			const fullName = Cypress.env('dataForm').firstName + ' ' + Cypress.env('dataForm').lastName;
			modal.get.name().should('have.text', fullName);
			modal.get.gender().should('have.text', Cypress.env('dataForm').gender);
			modal.get.mobile().should('have.text', Cypress.env('dataForm').mobile);
			const [day, month, year] = Cypress.env('dataForm').birthDate.split(' ');
			modal.get.birth().invoke('text').should('include', day);
			modal.get.birth().invoke('text').should('include', month);
			modal.get.birth().invoke('text').should('include', year);
		});
	});
});
