describe('⚡️ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondición: El usuario debe estar en el endpoint text-box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text');
	});

	it('552 | TC1: Validar enviar formulario al completar todos los campos válidamente', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			cy.get(the.username.input).type(the.username.data.valid).should('have.value', the.username.data.valid).and('not.equal', 'password');
			cy.get(the.email.input).type(the.email.data.valid).should('have.value', the.email.data.valid).and('not.equal', 'username');
			cy.get(the.currentAddress.textarea)
				.type(the.currentAddress.data.valid)
				.should('have.value', the.currentAddress.data.valid)
				.and('be.visible');
			cy.get(the.permanentAddress.textarea)
				.type(the.permanentAddress.data.valid)
				.should('have.value', the.permanentAddress.data.valid)
				.and('have.attr', 'rows', '5');
			cy.get(the.SubmitButton).click().should('contain.text', 'mit').and('exist').and('have.attr', 'type', 'button');
			cy.get(the.RegisteredData.username).should('be.visible').and('contain.text', the.username.data.valid);
			cy.get(the.RegisteredData.email).should('be.visible').and('contain.text', the.email.data.valid);
			cy.get(the.RegisteredData.currentAddress).should('be.visible').and('contain.text', the.currentAddress.data.valid);
			cy.get(the.RegisteredData.permanentAddress).should('be.visible').and('contain.text', the.permanentAddress.data.valid);
		});
	});

	it('552 | TC2: Validar enviar formulario al dejar el campo “Permanent Address“ vacío', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			cy.get(the.username.input).type(the.username.data.valid).should('have.value', the.username.data.valid).and('have.attr', 'type', 'text');
			cy.get(the.email.input).type(the.email.data.valid).should('have.value', the.email.data.valid).and('be.visible');
			cy.get(the.currentAddress.textarea)
				.type(the.currentAddress.data.valid)
				.should('have.value', the.currentAddress.data.valid)
				.and('not.equal', 'Permanent');
			cy.get(the.permanentAddress.textarea).should('be.empty').and('have.class', 'form-control');
			//por ahora se elige no hacer type vacío por error
			cy.get(the.SubmitButton).click().should('have.class', 'btn');
			cy.get(the.RegisteredData.username).should('be.visible').and('contain.text', the.username.data.valid);
			cy.get(the.RegisteredData.email).should('be.visible').and('contain.text', the.email.data.valid);
			cy.get(the.RegisteredData.currentAddress).should('be.visible').and('contain.text', the.currentAddress.data.valid);
		});
	});

	it('552 | TC3: Validar enviar formulario al completar el campo email sin el “@“', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			cy.get(the.username.input).type(the.username.data.valid).should('have.value', the.username.data.valid).and('have.class', 'mr-sm-2');
			cy.get(the.email.input)
				.type(the.email.data.invalid.Option1)
				.should('have.value', the.email.data.invalid.Option1)
				.and('have.attr', 'autocomplete', 'off');
			cy.get(the.currentAddress.textarea)
				.type(the.currentAddress.data.valid)
				.should('have.value', the.currentAddress.data.valid)
				.and('have.attr', 'rows', 5);
			cy.get(the.permanentAddress.textarea)
				.type(the.permanentAddress.data.valid)
				.should('have.value', the.permanentAddress.data.valid)
				.and('exist');
			cy.get(the.SubmitButton).click().should('contain.text', 'Sub');
			cy.get(the.errorField).should('be.visible');
		});
	});

	it('552 | TC4: Validar enviar formulario al completar el campo email sin un carácter alfanumérico antes del “@“', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			cy.get(the.username.input).type(the.username.data.valid).should('have.value', the.username.data.valid).and('be.visible');
			cy.get(the.email.input).type(the.email.data.invalid.Option2).should('have.value', the.email.data.invalid.Option2).and('not.contain', 'a');
			cy.get(the.currentAddress.textarea)
				.type(the.currentAddress.data.valid)
				.should('have.value', the.currentAddress.data.valid)
				.and('not.equal', 'email');
			cy.get(the.permanentAddress.textarea)
				.type(the.permanentAddress.data.valid)
				.should('have.value', the.permanentAddress.data.valid)
				.and('exist');
			cy.get(the.SubmitButton).click().should('have.attr', 'type', 'button');
			cy.get(the.errorField).should('be.visible');
		});
	});

	it('552 | TC5: Validar enviar formulario al completar el campo email sin un carácter alfanumérico después del “@“', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			cy.get(the.username.input).type(the.username.data.valid).should('have.value', the.username.data.valid).and('not.equal', 'password');
			cy.get(the.email.input).type(the.email.data.invalid.Option3).should('have.value', the.email.data.invalid.Option3).and('exist');
			cy.get(the.currentAddress.textarea)
				.type(the.currentAddress.data.valid)
				.should('have.value', the.currentAddress.data.valid)
				.and('have.attr', 'cols', '20');
			cy.get(the.permanentAddress.textarea)
				.type(the.permanentAddress.data.valid)
				.should('have.value', the.permanentAddress.data.valid)
				.and('have.length', 1);
			cy.get(the.SubmitButton).click().should('have.class', 'btn');
			cy.get(the.errorField).should('be.visible');
		});
	});

	it('552 | TC6: Validar enviar formulario al completar el campo email sin un “.“ después de un carácter alfanumérico después del “@“', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			cy.get(the.username.input).type(the.username.data.valid).should('have.value', the.username.data.valid).and('have.attr', 'type', 'text');
			cy.get(the.email.input).type(the.email.data.invalid.Option4).should('have.value', the.email.data.invalid.Option4).and('not.contain', '.');
			cy.get(the.currentAddress.textarea).type(the.currentAddress.data.valid).should('have.value', the.currentAddress.data.valid).and('exist');
			cy.get(the.permanentAddress.textarea)
				.type(the.permanentAddress.data.valid)
				.should('have.value', the.permanentAddress.data.valid)
				.and('be.visible')
				.and('have.attr', 'cols', '20');
			cy.get(the.SubmitButton).click().should('have.class', 'btn btn-primary');
			cy.get(the.errorField).should('be.visible');
		});
	});

	it('552 | TC7: Validar enviar formulario al completar el campo email sin 2 caracteres alfanuméricos después del “.“', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			cy.get(the.username.input).type(the.username.data.valid).should('have.value', the.username.data.valid).and('have.class', 'mr-sm-2');
			cy.get(the.email.input)
				.type(the.email.data.invalid.Option5)
				.should('have.value', the.email.data.invalid.Option5)
				.and('have.attr', 'type', 'email');
			cy.get(the.currentAddress.textarea).type(the.currentAddress.data.valid).should('have.value', the.currentAddress.data.valid).and('exist');
			cy.get(the.permanentAddress.textarea)
				.type(the.permanentAddress.data.valid)
				.should('have.value', the.permanentAddress.data.valid)
				.and('have.focus');
			cy.get(the.SubmitButton).click().should('not.equal', 'send');
			cy.get(the.errorField).should('be.visible');
		});
	});

	it('552 | TC8: Validar enviar formulario al dejar el campo email vacío', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			cy.get(the.username.input).type(the.username.data.valid).should('have.value', the.username.data.valid).and('have.focus');
			cy.get(the.email.input).should('be.empty').and('have.attr', 'placeholder', 'name@example.com');
			cy.get(the.currentAddress.textarea)
				.type(the.currentAddress.data.valid)
				.should('have.value', the.currentAddress.data.valid)
				.and('have.attr', 'placeholder', 'Current Address');
			cy.get(the.permanentAddress.textarea)
				.type(the.permanentAddress.data.valid)
				.should('have.value', the.permanentAddress.data.valid)
				.and('have.class', 'form-control');
			cy.get(the.SubmitButton).click().should('contain.text', 'ubm');
			cy.get(the.RegisteredData.username).should('be.visible').and('contain.text', the.username.data.valid);
			cy.get(the.RegisteredData.currentAddress).should('be.visible').and('contain.text', the.currentAddress.data.valid);
			cy.get(the.RegisteredData.permanentAddress).should('be.visible').and('contain.text', the.permanentAddress.data.valid);
		});
	});
});
