describe('US GX-21075 | TS: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Having access to the SUT.', () => {
		cy.visit('/text-box');
	});

	it('GX-21076 | TC1: Validate all fields are submitted with validate data and string is displayed.', () => {
		cy.fixture('GX-21075/ToolsQA-TextBox.Page').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.valid);
			cy.get(the.email.input).type(the.email.data.valid);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
			cy.get(the.SubmitButton).click();
			cy.contains('Name:Upex').should('be.visible');
			cy.contains('Email:hola@gmail.com').should('be.visible');
			cy.contains('Current Address :Caracas, Venezuela').should('be.visible');
			cy.contains('Permananet Address :The World').should('be.visible');
		});
	});

	it('GX-21076 | TC2: Validate all fields are submitted with empty data and no string is displayed.', () => {
		cy.fixture('GX-21075/ToolsQA-TextBox.Page').then(the => {
			cy.get(the.FullName.input).should('be.empty');
			cy.get(the.email.input).should('be.empty');
			cy.get(the.CurrentAddress.input).should('be.empty');
			cy.get(the.PermanentAddress.input).should('be.empty');
			cy.get(the.SubmitButton).click();
		});
	});

	it('GX-21076 | TC3: Validate field “email” is submitted with invalid data and red border is displayed.', () => {
		cy.fixture('GX-21075/ToolsQA-TextBox.Page').then(the => {
			cy.get(the.email.input).type(the.email.data.invalid);
			cy.get(the.SubmitButton).click();
			cy.get('.form-control').eq('1').should('have.class', 'field-error');
		});
	});

	it('GX-21076 | TC4:  Validate field “email” is submitted with empty data and no log message is displayed.', () => {
		cy.fixture('GX-21075/ToolsQA-TextBox.Page').then(the => {
			cy.get(the.email.input).should('be.empty');
			cy.get(the.SubmitButton).click();
		});
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
