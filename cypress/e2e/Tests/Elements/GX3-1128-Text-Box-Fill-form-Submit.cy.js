describe('⚡️ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	//Precondition:
	beforeEach('PRC: Usuario debe estar situado en la página DemoQA en el módulo Text Box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
	//Test Cases:
	//Form HappyPath
	it('GX3-1129 | TC1: Validar mostrar cadena de texto (mensaje) después de enviar los campos válidos “Full Name”, “Current Address” and “Permanent Address”.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.filled);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.filled);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.filled);
			cy.get(the.SubmitButton).click();
			cy.get('#name').should('contain.text', the.FullName.data.filled);
			cy.get('#currentAddress.mb-1').should('contain', the.CurrentAddress.data.filled);
			cy.get('#permanentAddress.mb-1').should('contain', the.PermanentAddress.data.filled);
		});
	});
	it('GX3-1129 | TC2: Validar NO mostrar ningún mensaje después de enviar vacío en campo “Full Name”.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.FullName.input).should('contain', the.FullName.data.empty);
			cy.get('.border.col-md-12.col-sm-12').should('not.exist');
			cy.get(the.SubmitButton).click();
			cy.get('#name').should('not.exist');
		});
	});
	it('GX3-1129 | TC3: Validar NO mostrar ningún mensaje después de enviar vacío en campo “Current Address”.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.CurrentAddress.input).should('contain', the.CurrentAddress.data.empty);
			cy.get('.border.col-md-12.col-sm-12').should('not.exist');
			cy.get(the.SubmitButton).click();
			cy.get('#currentAddress.mb-1').should('not.exist');
		});
	});
	it('GX3-1129 | TC4: Validar NO mostrar ningún mensaje después de enviar vacío en campo “Permanent Address”.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.PermanentAddress.input).should('contain', the.PermanentAddress.data.empty);
			cy.get('.border.col-md-12.col-sm-12').should('not.exist');
			cy.get(the.SubmitButton).click();
			cy.get('#permanentAddress.mb-1').should('not.exist');
		});
	});
	it('GX3-1129 | TC5: Validar mostrar cadena de texto (mensaje) después de enviar todos los campos válidos del form “Full Name”, “Email”, “Current Address” and “Permanent Address”.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.filled);
			cy.get(the.Email.input).type(the.Email.data.filled);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.filled);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.filled);
			cy.get(the.SubmitButton).click();
			cy.get('#name').should('contain.text', the.FullName.data.filled);
			cy.get('#currentAddress.mb-1').should('contain', the.CurrentAddress.data.filled);
			cy.get('#email').should('contain', the.Email.data.filled);
			cy.get('#permanentAddress.mb-1').should('contain', the.PermanentAddress.data.filled);
		});
	});
	//Test Case negative:
	//Textbox displays a red border
	it('GX3-1129 | TC6: Validar textbox displays a red border después de enviar sin carácter arroba “@“ en campo Email.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailOne);
			cy.get(the.SubmitButton).click();
			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	it('GX3-1129 | TC7: Validar textbox displays a red border después de enviar 1 carácter alfanumérico antes de “@“ en campo Email.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailTwo);
			cy.get(the.SubmitButton).click();
			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	it('GX3-1129 | TC8: Validar textbox displays a red border después de enviar 1 carácter alfanumérico después de “@“ en campo Email.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailThree);
			cy.get(the.SubmitButton).click();
			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	it('GX3-1129 | TC9: Validar textbox displays a red border después de enviar sin punto (.) despúes de un carácter alfanumérico después de “@“ en campo Email.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailFour);
			cy.get(the.SubmitButton).click();
			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	it.only('GX3-1129 | TC10: Validar textbox displays a red border después de enviar sin dos caracteres alfanumericos después del (.) en campo Email.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailFive);
			cy.get(the.SubmitButton).click();
			cy.get('input.mr-sm-2.field-error').should('be.enabled');
		});
	});
	//TC: validación negativa para el mensaje después de enviar campo Email.
	it('GX3-1129 | TC11: Validar NO mostrar ningún mensaje después de enviar vacío en campo ”Email”.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.Email.input).should('contain', the.Email.data.empty);
			cy.get('.border.col-md-12.col-sm-12').should('not.exist');
			cy.get(the.SubmitButton).click();
			cy.get('#email').should('not.exist');
		});
	});
	//TC: validación positiva para el mensaje después de enviar campo Email.
	it('GX3-1129 | TC12: Validar mostrar cadena de texto (mensaje) después de enviar el campos válido “Email“.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.Email.input).type(the.Email.data.filled);
			cy.get(the.SubmitButton).click();
			cy.get('#email').should('contain', the.Email.data.filled);
		});
	});
});
