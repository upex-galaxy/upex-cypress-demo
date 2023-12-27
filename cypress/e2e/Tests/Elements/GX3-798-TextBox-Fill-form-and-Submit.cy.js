describe('GX3-798 | TS: ToolsQA | Elements | Text Box', () => {
	// ARRANGE
	beforeEach('', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	//casos
	it('799|TC1: Validar que se realiza el envio exitoso cuando los datos son ingresados correctamente', () => {
		//constantes
		const jUserName = 'Janetzi';
		const jUserEmails = 'janetzi@gmail.com';
		const jCurrentAddress = 'Direccion principal';
		const jPermanentAddress = 'Direccion secundaria';
		//steps
		cy.get('input#userName').type(jUserName);
		cy.get('input#userEmail').type(jUserEmails);
		cy.get('textarea#currentAddress').type(jCurrentAddress);
		cy.get('textarea#permanentAddress').type(jPermanentAddress);
		cy.get('#submit').click();

		//Assertion
		cy.get('p#name').should('contains.text', jUserName);
		cy.get('p#email').should('contains.text', jUserEmails);
		cy.get('p#currentAddress').should('contains.text', jCurrentAddress);
		cy.get('p#permanentAddress').should('contains.text', jPermanentAddress);
	});

	it('799|TC2: Validar que se realiza el envio exitoso cuando  solo el campo emails tiene un valor valido el resto de los campos es vacio', () => {
		const jEmail02 = 'janetzi@gmail.com';

		cy.get('input#userName').should('be.empty');
		cy.get('input#userEmail').type(jEmail02);
		cy.get('textarea#currentAddress').should('be.empty');
		cy.get('textarea#permanentAddress').should('be.empty');
		cy.get('#submit').click();

		//Assertion
		cy.get('p#email').should('contains.text', jEmail02);
	});

	it('799|TC3: Validar que el envio es fallido cuando el campo email no contiene @.', () => {
		//const
		const jEmail03 = 'janetzigmail.com';
		//steps
		cy.get('input#userEmail').type(jEmail03);
		cy.get('#submit').click();

		//Assertion
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});

	it('799|TC4: Validar que el envio es fallido cuando el campo email No contiene (mínimo) 1 carácter alfanumérico antes de @', () => {
		const jEmail04 = 'janetzi@';
		//steps
		cy.get('input#userEmail').type(jEmail04);
		cy.get('#submit').click();

		//Assertion
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});

	it('799|TC5: Validar que el envio es fallido cuando el campo email No contiene (mínimo) 1 carácter alfanumérico después de @', () => {
		const jEmail05 = '@gmail.com';
		//steps
		cy.get('input#userEmail').type(jEmail05);
		cy.get('#submit').click();

		//Assertion
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});

	it('799|TC6: Validar que el envio es fallido cuando el campo email No contiene "." después: 1 carácter alfanumérico después de @', () => {
		const jEmail06 = '@gmailcom';
		//steps
		cy.get('input#userEmail').type(jEmail06);
		cy.get('#submit').click();

		//Assertion
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});

	it('799|TC7: Validar que el envio es fallido cuando el campo email No contiene (mínimo) 2 caracteres alfanuméricos después de .', () => {
		const jEmail07 = '.com';
		//steps
		cy.get('input#userEmail').type(jEmail07);
		cy.get('#submit').click();

		//Assertion
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});
});
