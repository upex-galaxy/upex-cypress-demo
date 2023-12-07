describe('⚡️ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	let THE;
	beforeEach('Precondición: El usuario debe estar en el endpoint text-box', () => {
		cy.fixture('data/GX3-551-FranData').then(the => {
			THE = the;
		});
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text');
	});

	it('552 | TC1: Validar enviar formulario al completar todos los campos válidamente', () => {
		cy.get(THE.username.input).type(THE.username.data.valid).should('have.value', THE.username.data.valid).and('not.equal', 'password');
		cy.get(THE.email.input).type(THE.email.data.valid).should('have.value', THE.email.data.valid).and('not.equal', 'username');
		cy.get(THE.currentAddress.textarea).type(THE.currentAddress.data.valid).should('have.value', THE.currentAddress.data.valid).and('be.visible');
		cy.get(THE.permanentAddress.textarea)
			.type(THE.permanentAddress.data.valid)
			.should('have.value', THE.permanentAddress.data.valid)
			.and('have.attr', 'rows', '5');
		cy.get(THE.SubmitButton).click().should('contain.text', 'mit').and('exist').and('have.attr', 'type', 'button');
		cy.get(THE.RegisteredData.username).should('be.visible').and('contain.text', THE.username.data.valid);
		cy.get(THE.RegisteredData.email).should('be.visible').and('contain.text', THE.email.data.valid);
		cy.get(THE.RegisteredData.currentAddress).should('be.visible').and('contain.text', THE.currentAddress.data.valid);
		cy.get(THE.RegisteredData.permanentAddress).should('be.visible').and('contain.text', THE.permanentAddress.data.valid);
	});

	it('552 | TC2: Validar enviar formulario al dejar el campo “Permanent Address“ vacío', () => {
		cy.get(THE.username.input).type(THE.username.data.valid).should('have.value', THE.username.data.valid).and('have.attr', 'type', 'text');
		cy.get(THE.email.input).type(THE.email.data.valid).should('have.value', THE.email.data.valid).and('be.visible');
		cy.get(THE.currentAddress.textarea)
			.type(THE.currentAddress.data.valid)
			.should('have.value', THE.currentAddress.data.valid)
			.and('not.equal', 'Permanent');
		cy.get(THE.permanentAddress.textarea).should('be.empty').and('have.class', 'form-control');
		cy.get(THE.SubmitButton).click().should('have.class', 'btn');
		cy.get(THE.RegisteredData.username).should('be.visible').and('contain.text', THE.username.data.valid);
		cy.get(THE.RegisteredData.email).should('be.visible').and('contain.text', THE.email.data.valid);
		cy.get(THE.RegisteredData.currentAddress).should('be.visible').and('contain.text', THE.currentAddress.data.valid);
	});

	it('552 | TC3: Validar enviar formulario al completar el campo email sin el “@“', () => {
		cy.get(THE.username.input).type(THE.username.data.valid).should('have.value', THE.username.data.valid).and('have.class', 'mr-sm-2');
		cy.get(THE.email.input)
			.type(THE.email.data.invalid.Option1)
			.should('have.value', THE.email.data.invalid.Option1)
			.and('have.attr', 'autocomplete', 'off');
		cy.get(THE.currentAddress.textarea)
			.type(THE.currentAddress.data.valid)
			.should('have.value', THE.currentAddress.data.valid)
			.and('have.attr', 'rows', 5);
		cy.get(THE.permanentAddress.textarea)
			.type(THE.permanentAddress.data.valid)
			.should('have.value', THE.permanentAddress.data.valid)
			.and('exist');
		cy.get(THE.SubmitButton).click().should('contain.text', 'Sub');
		cy.get(THE.errorField).should('be.visible');
	});

	it('552 | TC4: Validar enviar formulario al completar el campo email sin un carácter alfanumérico antes del “@“', () => {
		cy.get(THE.username.input).type(THE.username.data.valid).should('have.value', THE.username.data.valid).and('be.visible');
		cy.get(THE.email.input).type(THE.email.data.invalid.Option2).should('have.value', THE.email.data.invalid.Option2).and('not.contain', 'a');
		cy.get(THE.currentAddress.textarea)
			.type(THE.currentAddress.data.valid)
			.should('have.value', THE.currentAddress.data.valid)
			.and('not.equal', 'email');
		cy.get(THE.permanentAddress.textarea)
			.type(THE.permanentAddress.data.valid)
			.should('have.value', THE.permanentAddress.data.valid)
			.and('exist');
		cy.get(THE.SubmitButton).click().should('have.attr', 'type', 'button');
		cy.get(THE.errorField).should('be.visible');
	});

	it('552 | TC5: Validar enviar formulario al completar el campo email sin un carácter alfanumérico después del “@“', () => {
		cy.get(THE.username.input).type(THE.username.data.valid).should('have.value', THE.username.data.valid).and('not.equal', 'password');
		cy.get(THE.email.input).type(THE.email.data.invalid.Option3).should('have.value', THE.email.data.invalid.Option3).and('exist');
		cy.get(THE.currentAddress.textarea)
			.type(THE.currentAddress.data.valid)
			.should('have.value', THE.currentAddress.data.valid)
			.and('have.attr', 'cols', '20');
		cy.get(THE.permanentAddress.textarea)
			.type(THE.permanentAddress.data.valid)
			.should('have.value', THE.permanentAddress.data.valid)
			.and('have.length', 1);
		cy.get(THE.SubmitButton).click().should('have.class', 'btn');
		cy.get(THE.errorField).should('be.visible');
	});

	it('552 | TC6: Validar enviar formulario al completar el campo email sin un “.“ después de un carácter alfanumérico después del “@“', () => {
		cy.get(THE.username.input).type(THE.username.data.valid).should('have.value', THE.username.data.valid).and('have.attr', 'type', 'text');
		cy.get(THE.email.input).type(THE.email.data.invalid.Option4).should('have.value', THE.email.data.invalid.Option4).and('not.contain', '.');
		cy.get(THE.currentAddress.textarea).type(THE.currentAddress.data.valid).should('have.value', THE.currentAddress.data.valid).and('exist');
		cy.get(THE.permanentAddress.textarea)
			.type(THE.permanentAddress.data.valid)
			.should('have.value', THE.permanentAddress.data.valid)
			.and('be.visible')
			.and('have.attr', 'cols', '20');
		cy.get(THE.SubmitButton).click().should('have.class', 'btn btn-primary');
		cy.get(THE.errorField).should('be.visible');
	});

	it('552 | TC7: Validar enviar formulario al completar el campo email sin 2 caracteres alfanuméricos después del “.“', () => {
		cy.get(THE.username.input).type(THE.username.data.valid).should('have.value', THE.username.data.valid).and('have.class', 'mr-sm-2');
		cy.get(THE.email.input)
			.type(THE.email.data.invalid.Option5)
			.should('have.value', THE.email.data.invalid.Option5)
			.and('have.attr', 'type', 'email');
		cy.get(THE.currentAddress.textarea).type(THE.currentAddress.data.valid).should('have.value', THE.currentAddress.data.valid).and('exist');
		cy.get(THE.permanentAddress.textarea)
			.type(THE.permanentAddress.data.valid)
			.should('have.value', THE.permanentAddress.data.valid)
			.and('have.focus');
		cy.get(THE.SubmitButton).click().should('not.equal', 'send');
		cy.get(THE.errorField).should('be.visible');
	});

	it('552 | TC8: Validar enviar formulario al dejar el campo email vacío', () => {
		cy.get(THE.username.input).type(THE.username.data.valid).should('have.value', THE.username.data.valid).and('have.focus');
		cy.get(THE.email.input).should('be.empty').and('have.attr', 'placeholder', 'name@example.com');
		cy.get(THE.currentAddress.textarea)
			.type(THE.currentAddress.data.valid)
			.should('have.value', THE.currentAddress.data.valid)
			.and('have.attr', 'placeholder', 'Current Address');
		cy.get(THE.permanentAddress.textarea)
			.type(THE.permanentAddress.data.valid)
			.should('have.value', THE.permanentAddress.data.valid)
			.and('have.class', 'form-control');
		cy.get(THE.SubmitButton).click().should('contain.text', 'ubm');
		cy.get(THE.RegisteredData.username).should('be.visible').and('contain.text', THE.username.data.valid);
		cy.get(THE.RegisteredData.currentAddress).should('be.visible').and('contain.text', THE.currentAddress.data.valid);
		cy.get(THE.RegisteredData.permanentAddress).should('be.visible').and('contain.text', THE.permanentAddress.data.valid);
	});
});
