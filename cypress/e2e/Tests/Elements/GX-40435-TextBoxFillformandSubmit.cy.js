import the from '@data/GX-40435-TextBox.json';

describe('TS: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondición: Usuario debe situarse en el formulario', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box'); // Esto es un Comando de Acción directa
	});
	it('GX-40436 - TC1 - Validar NO poder completar formulario con todos los campos vacíos.', () => {
		cy.get(the.FullName.input).should('be.empty');
		cy.get(the.Email.input).should('be.empty');
		cy.get(the.CurrentAddress.input).should('be.empty');
		cy.get(the.PermanentAddress.input).should('be.empty');
		cy.get(the.SubmitButton).click();
		cy.get(the.output).should('not.have.class', '.border');
	});

	it('GX-40436 - TC2 - Validar poder completar formulario con todos los campos válidos.', () => {
		cy.get(the.FullName.input).type(the.FullName.data.valid);
		cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);

		cy.get(the.Email.input).type(the.Email.data.valid);
		cy.get(the.Email.input).should('have.value', the.Email.data.valid);

		cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
		cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid);

		cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
		cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid);

		cy.get(the.SubmitButton).click();
		cy.get(the.name).should('contain', 'Name');
		cy.get(the.email).should('contain', 'Email');
		cy.get(the.currentAddress).should('contain', 'Current Address ');
		cy.get(the.permanentAddress).should('contain', 'Permananet Address ');
		//});
	});

	it('GX-40436 - TC3 - Validar NO poder completar formulario cuando el correo electrónico No contiene "@".', () => {
		cy.get(the.FullName.input).type(the.FullName.data.valid);
		cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);

		cy.get(the.Email.input).type(the.Email.data.invalid1);
		cy.get(the.Email.input).should('have.value', the.Email.data.invalid1);

		cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
		cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid);

		cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
		cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid);

		cy.get(the.SubmitButton).click();
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});

	it('GX-40436 - TC4 - Validar NO poder completar formulario cuando el correo electrónico No contiene (mínimo) 1 carácter alfanumérico antes de “@”.', () => {
		//cy.fixture('data/GX-40435-TextBox').then(the => {
		cy.get(the.FullName.input).type(the.FullName.data.valid);
		cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);

		cy.get(the.Email.input).type(the.Email.data.invalid2);
		cy.get(the.Email.input).should('have.value', the.Email.data.invalid2);

		cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
		cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid);

		cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
		cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid);

		cy.get(the.SubmitButton).click();
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
		//});
	});

	it('GX-40436 - TC5 - Validar NO poder completar formulario cuando el correo electrónico No contiene (mínimo) 1 carácter alfanumérico después de “@”.', () => {
		//cy.fixture('data/GX-40435-TextBox').then(the => {
		cy.get(the.FullName.input).type(the.FullName.data.valid);
		cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);

		cy.get(the.Email.input).type(the.Email.data.invalid3);
		cy.get(the.Email.input).should('have.value', the.Email.data.invalid3);

		cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
		cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid);

		cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
		cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid);

		cy.get(the.SubmitButton).click();
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});

	it('GX-40436 - TC6 - Validar NO poder completar formulario cuando el correo electrónico No contiene "." después: 1 carácter alfanumérico después de “@”.', () => {
		//cy.fixture('data/GX-40435-TextBox').then(the => {
		cy.get(the.FullName.input).type(the.FullName.data.valid);
		cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);

		cy.get(the.Email.input).type(the.Email.data.invalid4);
		cy.get(the.Email.input).should('have.value', the.Email.data.invalid4);

		cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
		cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid);

		cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
		cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid);

		cy.get(the.SubmitButton).click();
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});

	it('GX-40436 - TC7 - Validar NO poder completar formulario cuando el correo electrónico No contiene (mínimo) 2 caracteres alfanuméricos después de ".".', () => {
		//cy.fixture('data/GX-40435-TextBox').then(the => {
		cy.get(the.FullName.input).type(the.FullName.data.valid);
		cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);

		cy.get(the.Email.input).type(the.Email.data.invalid5);
		cy.get(the.Email.input).should('have.value', the.Email.data.invalid5);

		cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
		cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid);

		cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
		cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid);

		cy.get(the.SubmitButton).click();
		cy.get('input.mr-sm-2.field-error').should('be.enabled');
	});
});
