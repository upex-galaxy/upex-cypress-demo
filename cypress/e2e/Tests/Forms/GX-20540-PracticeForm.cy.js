import { modal } from '@pages/Forms/ModalForm.Page';
import { form } from '@pages/Forms/PracticeForm.Page';
//import { faker } from '@faker-js/faker';
import { removeLogs } from '@helper/RemoveLogs';

describe('ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		removeLogs();
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('20541 | TC1: Validar envío de formulario exitoso con todos los campos completos', () => {
		cy.randomFormData('fullData');
	});

	it.only('20541 | TC2: Validar envío de formulario exitoso con sólo los campos obligatorios completos', () => {
		cy.randomFormData('TC2').then(el => {
			form.submitClick();
			form.get.modal().should('be.visible');
			form.get.modalTitle().should('have.text', 'Thanks for submitting the form');

			//MODAL
			//cy.getModalData().then(el => {
			/* cy.log('LOG DEL modal data final');
			cy.log(Cypress.env('modalData')); */
			const fullName = Cypress.env('dataForm').firstName + ' ' + Cypress.env('dataForm').lastName;

			modal.get.name().should('have.text', fullName);
			modal.get.gender().should('have.text', Cypress.env('dataForm').gender);
			modal.get.mobile().should('have.text', Cypress.env('dataForm').mobile);

			const [day, month, year] = Cypress.env('dataForm').birthDate.split(' ');

			modal.get.birth().invoke('text').should('include', day);
			modal.get.birth().invoke('text').should('include', month);
			modal.get.birth().invoke('text').should('include', year);
			//});
		});
	});
});
