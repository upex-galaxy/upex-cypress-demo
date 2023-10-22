describe('TS: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondición: Usuario debe situarse en el formulario', () => {
		cy.visit('https://demoqa.com/text-box'); // Esto es un Comando de Acción directa
	});
	it('TC1 - Validar NO poder completar formulario con todos los campos vacíos.', () => {
		cy.fixture('data/GX-40435-TextBox').then(the => {
			cy.get(the.FullName.input).should('be.empty');
			cy.get(the.Email.input).should('be.empty');
			cy.get(the.CurrentAddress.input).should('be.empty');
			cy.get(the.PermanentAddress.input).should('be.empty');
			cy.get(the.SubmitButton).click();
			cy.get('#userName-wrapper').should('not.exist');
			cy.get('#userEmail-wrapper').should('not.exist');
			cy.get('#currentAddress-wrapper').should('not.exist');
			cy.get('#permanentAddress-wrapper').should('not.exist');
		});
	});

	it('TC2 - Validar poder completar formulario con todos los campos válidos.', () => {
		cy.fixture('data/GX-40435-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.data.valid);
			cy.get(the.Email.input).type(the.data.valid);
			cy.get(the.CurrentAddress.input).type(the.data.valid);
			cy.get(the.PermanentAddress.input).type(the.data.valid);
			cy.get(the.SubmitButton).click();
			cy.get('#userName-wrapper').should('contain.text', the.FullName.data.valid);
			cy.get('#userEmail-wrapper').should('contain.text', the.Email.data.valid);
			cy.get('#currentAddress-wrapper').should('contain.text', the.CurrentAddress.data.valid);
			cy.get('#permanentAddress-wrapper').should('contain.text', the.PermanentAddress.data.valid);
		});
	});
	it('TC3 - Validar NO poder completar formulario cuando el correo electrónico No contiene "@".', () => {
		cy.fixture('data/GX-40435-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.data.valid);
			cy.get(the.Email.input).type(the.data.invalid1);
			cy.get(the.CurrentAddress.input).type(the.data.valid);
			cy.get(the.PermanentAddress.input).type(the.data.valid);
			cy.get(the.SubmitButton).click();
			cy.get('#userName-wrapper').should('contain.text', the.FullName.data.valid);
			cy.get('#userEmail-wrapper').should('have.class', 'field-error');
			cy.get('#currentAddress-wrapper').should('contain.text', the.CurrentAddress.data.valid);
			cy.get('#permanentAddress-wrapper').should('contain.text', the.PermanentAddress.data.valid);
		});
	});
	it('TC4 - Validar NO poder completar formulario cuando el correo electrónico No contiene (mínimo) 1 carácter alfanumérico antes de “@”.', () => {
		cy.fixture('data/GX-40435-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.data.valid);
			cy.get(the.Email.input).type(the.data.invalid2);
			cy.get(the.CurrentAddress.input).type(the.data.valid);
			cy.get(the.PermanentAddress.input).type(the.data.valid);
			cy.get(the.SubmitButton).click();
			cy.get('#userName-wrapper').should('contain.text', the.FullName.data.valid);
			cy.get('#userEmail-wrapper').should('have.class', 'field-error');
			cy.get('#currentAddress-wrapper').should('contain.text', the.CurrentAddress.data.valid);
			cy.get('#permanentAddress-wrapper').should('contain.text', the.PermanentAddress.data.valid);
		});
	});
	it('TC5 - Validar NO poder completar formulario cuando el correo electrónico No contiene (mínimo) 1 carácter alfanumérico después de “@”.', () => {
		cy.fixture('data/GX-40435-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.data.valid);
			cy.get(the.Email.input).type(the.data.invalid3);
			cy.get(the.CurrentAddress.input).type(the.data.valid);
			cy.get(the.PermanentAddress.input).type(the.data.valid);
			cy.get(the.SubmitButton).click();
			cy.get('#userName-wrapper').should('contain.text', the.FullName.data.valid);
			cy.get('#userEmail-wrapper').should('have.class', 'field-error');
			cy.get('#currentAddress-wrapper').should('contain.text', the.CurrentAddress.data.valid);
			cy.get('#permanentAddress-wrapper').should('contain.text', the.PermanentAddress.data.valid);
		});
	});
	it('TC6 - Validar NO poder completar formulario cuando el correo electrónico No contiene "." después: 1 carácter alfanumérico después de “@”.', () => {
		cy.fixture('data/GX-40435-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.data.valid);
			cy.get(the.Email.input).type(the.data.invalid4);
			cy.get(the.CurrentAddress.input).type(the.data.valid);
			cy.get(the.PermanentAddress.input).type(the.data.valid);
			cy.get(the.SubmitButton).click();
			cy.get('#userName-wrapper').should('contain.text', the.FullName.data.valid);
			cy.get('#userEmail-wrapper').should('have.class', 'field-error');
			cy.get('#currentAddress-wrapper').should('contain.text', the.CurrentAddress.data.valid);
			cy.get('#permanentAddress-wrapper').should('contain.text', the.PermanentAddress.data.valid);
		});
	});
	it('TC7 - Validar NO poder completar formulario cuando el correo electrónico No contiene (mínimo) 2 caracteres alfanuméricos después de ".".', () => {
		cy.fixture('data/GX-40435-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.data.valid);
			cy.get(the.Email.input).type(the.data.invalid5);
			cy.get(the.CurrentAddress.input).type(the.data.valid);
			cy.get(the.PermanentAddress.input).type(the.data.valid);
			cy.get(the.SubmitButton).click();
			cy.get('#userName-wrapper').should('contain.text', the.FullName.data.valid);
			cy.get('#userEmail-wrapper').should('have.class', 'field-error');
			cy.get('#currentAddress-wrapper').should('contain.text', the.CurrentAddress.data.valid);
			cy.get('#permanentAddress-wrapper').should('contain.text', the.PermanentAddress.data.valid);
		});
	});
});
