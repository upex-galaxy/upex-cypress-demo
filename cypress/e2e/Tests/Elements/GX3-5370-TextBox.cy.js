import dataForm from '@data/Elements/GX3-5370_CredentialTextBox.json';

describe('GX3-5375 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('include', '/text-box');
		cy.get('h1.text-center').should('have.text', 'Text Box');
	});
	it('GX3-5375 | TC1: Validar que el formulario contenga todos los inputs', () => {
		cy.contains('Full Name').should('be.visible');
		cy.contains('Email').should('be.visible');
		cy.contains('Current Address').should('be.visible');
		cy.contains('Permanent Address').should('be.visible');
	});
	it('GX3-5375 | TC2: Validar rellenar formulario y su envio exitosamente.', function () {
		cy.get('#userName-wrapper input').type(dataForm.validCredentials.FullName);
		cy.get('#userEmail-wrapper input').type(dataForm.validCredentials.EmailTc2);
		cy.get('#currentAddress-wrapper textarea').type(dataForm.validCredentials.CurrentAddress);
		cy.get('#permanentAddress-wrapper textarea').type(dataForm.validCredentials.PermanentAddress);
		cy.get('#submit').click();
		cy.get('#output #name').should('contain.text', dataForm.validCredentials.FullName);
		cy.get('#output #email').should('contain.text', dataForm.validCredentials.EmailTc2);
		cy.get('#output #currentAddress').should('contain.text', dataForm.validCredentials.CurrentAddress);
		cy.get('#output #permanentAddress').should('contain.text', dataForm.validCredentials.PermanentAddress);
	});
	it('GX3-5375 | TC3: Validar se envie solo el campo rellenado "Email"', () => {
		cy.get('#userEmail-wrapper input').type(dataForm.validCredentials.EmailTc2);
		cy.get('#submit').click();
		cy.get('#output #email').should('contain.text', dataForm.validCredentials.EmailTc2);
	});
	it('GX3-5375 | TC4: Validar NO registrarse si No contiene @', () => {
		cy.get('#userEmail-wrapper input').type(dataForm.invalidEmailCredentials.EmailTc4);
		cy.get('#submit').click();
		cy.get('#userEmail.mr-sm-2.field-error.form-control').should('be.visible');
	});
	it('GX3-5375 | TC5: Validar NO registrarse si No contiene (mínimo) 1 carácter alfanumérico antes de "@"', () => {
		cy.get('#userEmail-wrapper input').type(dataForm.invalidEmailCredentials.EmailTc5);
		cy.get('#submit').click();
		cy.get('#userEmail.mr-sm-2.field-error.form-control').should('be.visible');
	});
	it('GX3-5375 | TC6: Validar NO registrarse si No contiene (mínimo) 1 carácter alfanumérico después de "@"', () => {
		cy.get('#userEmail-wrapper input').type(dataForm.invalidEmailCredentials.EmailTc6);
		cy.get('#submit').click();
		cy.get('#userEmail.mr-sm-2.field-error.form-control').should('be.visible');
	});
	it('GX3-5375 | TC7: Validar NO registrarse si No contiene "." después de: 1 carácter alfanumérico después de "@".', () => {
		cy.get('#userEmail-wrapper input').type(dataForm.invalidEmailCredentials.EmailTc7);
		cy.get('#submit').click();
		cy.get('#userEmail.mr-sm-2.field-error.form-control').should('be.visible');
	});
	it('GX3-5375 | TC8: Validar NO registrarse si No contiene (mínimo) 2 caracteres alfanuméricos después de "."', () => {
		cy.get('#userEmail-wrapper input').type(dataForm.invalidEmailCredentials.EmailTc8);
		cy.get('#submit').click();
		cy.get('#userEmail.mr-sm-2.field-error.form-control').should('be.visible');
	});
});
