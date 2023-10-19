describe('GX-40128-ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
	it(' GX-40129| TC1: Validar enviar el formulario satisfactoriamente.', () => {
		cy.fixture('data/Elements/GX-40128-TextBox-fillFormAndSubmit').then(the => {
			cy.get(the.fullName.inputName).type(the.fullName.data.valid);
			cy.get(the.fullName.inputName).should('have.value', the.fullName.data.valid);

			cy.get(the.email.inputEmail).type(the.email.dataEmail.valid);
			cy.get(the.email.inputEmail).should('have.value', the.email.dataEmail.valid);

			cy.get(the.currentAddress.inputCurrentAddress).type(the.currentAddress.dataCurrentAddress.valid);
			cy.get(the.currentAddress.inputCurrentAddress).should('have.value', the.currentAddress.dataCurrentAddress.valid);

			cy.get(the.permanentAddress.inputPermanentAddress).type(the.permanentAddress.dataPermanentAddress.valid);
			cy.get(the.permanentAddress.inputPermanentAddress).should('have.value', the.permanentAddress.dataPermanentAddress.valid);

			cy.get(the.submitButton).click();

			//VALIDACIONES
			cy.get(the.confirmRegister).should('contain', 'Name');
		});
	});

	it('GX-40129| TC2:  Validar NO enviar el formulario cuando el campo email no contiene "@"', () => {
		cy.fixture('data/Elements/GX-40128-TextBox-fillFormAndSubmit').then(the => {
			cy.get(the.fullName.inputName).should('be.empty');

			cy.get(the.email.inputEmail).type(the.email.dataEmail.invalid);
			cy.get(the.email.inputEmail).should('have.value', the.email.dataEmail.invalid);

			cy.get(the.currentAddress.inputCurrentAddress).should('be.empty');

			cy.get(the.permanentAddress.inputPermanentAddress).should('be.empty');

			cy.get(the.submitButton).click();

			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	it('GX-40129| TC3:  Validar NO enviar el formulario cuando el campo email  no contiene (mínimo) 1 carácter alfanumérico antes de “@”', () => {
		cy.fixture('data/Elements/GX-40128-TextBox-fillFormAndSubmit').then(the => {
			cy.get(the.fullName.inputName).should('be.empty');

			cy.get(the.email.inputEmail).type(the.email.dataEmail.invalid1);
			cy.get(the.email.inputEmail).should('have.value', the.email.dataEmail.invalid1);

			cy.get(the.currentAddress.inputCurrentAddress).should('be.empty');

			cy.get(the.permanentAddress.inputPermanentAddress).should('be.empty');

			cy.get(the.submitButton).click();

			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	it('GX-40129| TC4:  Validar NO enviar el formulario cuando el campo email no contiene (mínimo) 1 carácter alfanumérico después de “@”', () => {
		cy.fixture('data/Elements/GX-40128-TextBox-fillFormAndSubmit').then(the => {
			cy.get(the.fullName.inputName).should('be.empty');

			cy.get(the.email.inputEmail).type(the.email.dataEmail.invalid2);
			cy.get(the.email.inputEmail).should('have.value', the.email.dataEmail.invalid2);

			cy.get(the.currentAddress.inputCurrentAddress).should('be.empty');

			cy.get(the.permanentAddress.inputPermanentAddress).should('be.empty');

			cy.get(the.submitButton).click();

			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	it('GX-40129| TC5:  Validar NO enviar el formulario cuando el campo email no contiene "." después: 1 carácter alfanumérico después de “@”.', () => {
		cy.fixture('data/Elements/GX-40128-TextBox-fillFormAndSubmit').then(the => {
			cy.get(the.fullName.inputName).should('be.empty');

			cy.get(the.email.inputEmail).type(the.email.dataEmail.invalid3);
			cy.get(the.email.inputEmail).should('have.value', the.email.dataEmail.invalid3);

			cy.get(the.currentAddress.inputCurrentAddress).should('be.empty');

			cy.get(the.permanentAddress.inputPermanentAddress).should('be.empty');

			cy.get(the.submitButton).click();

			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	it('GX-40129| TC6:  Validar NO enviar el formulario cuando el campo email no contiene (mínimo) 2 caracteres alfanuméricos después de "."', () => {
		cy.fixture('data/Elements/GX-40128-TextBox-fillFormAndSubmit').then(the => {
			cy.get(the.fullName.inputName).should('be.empty');

			cy.get(the.email.inputEmail).type(the.email.dataEmail.invalid4);
			cy.get(the.email.inputEmail).should('have.value', the.email.dataEmail.invalid4);

			cy.get(the.currentAddress.inputCurrentAddress).should('be.empty');

			cy.get(the.permanentAddress.inputPermanentAddress).should('be.empty');

			cy.get(the.submitButton).click();

			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
});
