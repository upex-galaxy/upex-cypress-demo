const { contains } = require('cypress/types/jquery');

describe('GX3-798 | TS: ToolsQA | Elements | Text Box', () => {
	// ARRANGE
	beforeEach('Visitar la pagina demoQA', () => {
		cy.visit('/text-box');
	});

	//casos
	it('799|TC1: Validar que se realiza el envio exitoso cuando los datos son ingresados correctamente', () => {
		//constantes
		const j_UserName = 'Janetzi';
		const j_UserEmails = 'janetzi@gmail.com';
		const j_CurrentAddress = 'Direccion principal';
		const j_PermanentAddress = ' Direccion secundaria';
		//steps
		cy.get('input#userName').type(j_UserName);
		cy.get('input#userEmail').type(j_UserEmails);
		cy.get('textarea#currentAddress').type('j_CurrentAddress');
		cy.get('textarea#permanentAddress').type('j_PermanentAddress');
		cy.get('#submit').click();

		//Assertions
		cy.get('#userName').should('contains.text', j_UserName);
		cy.get('#userEmail').should('contains.text', j_UserEmails);
		cy.get('#userName').should('contains.text', j_UserName);
		cy.get('#userName').should('contains.text', j_UserName);
	});

	//it('799|TC2: Validar que se realiza el envio exitoso cuando  solo el campo emails tiene un valor valido el resto de los campos es vacio.', () => {});
	//it('799|TC3: Validar que el envio es fallido cuando el campo email no contiene @.', () => {});
	//it('799|TC4: Validar que el envio es fallido cuando el campo email No contiene (mínimo) 1 carácter alfanumérico antes de @', () => {});
	//it('799|TC5: Validar que el envio es fallido cuando el campo email No contiene (mínimo) 1 carácter alfanumérico después de @', () => {});
	//it('799|TC6: Validar que el envio es fallido cuando el campo email No contiene "." después: 1 carácter alfanumérico después de @', () => {});
	//it('799|TC7: Validar que el envio es fallido cuando el campo email No contiene (mínimo) 2 caracteres alfanuméricos después de .', () => {});
});
