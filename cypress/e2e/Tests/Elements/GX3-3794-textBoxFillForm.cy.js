describe('ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: Situarse en la página DemoQA.com', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain','text-box');
	});

	it('GX3-3795 | TC01: Validar llenar correctamente todos los campos del formulario con datos válidos', () => {
		cy.fixture('data/Elements/GX3-3794-textBox').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.valid);
			cy.get(the.email.input).type(the.email.data.ValidEmail);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.validCA);
			cy.get(the.permanentAddress.input).type(the.permanentAddress.data.validPA);
			cy.get(the.botonEnviar).click();

			cy.get('#name').should('contain.text', the.fullName.data.valid);
			cy.get('#email').should('contain.text', the.email.data.ValidEmail);
			cy.get('#currentAddress.mb-1').should('contain.text', the.currentAddress.data.validCA);
			cy.get('#permanentAddress.mb-1').should('contain.text', the.permanentAddress.data.validPA);
		});
	});

	it('GX3-3795 | TC02: Validar NO enviar datos del formulario con campos vacíos', () => {
		cy.fixture('data/Elements/GX3-3794-textBox').then(the => {
			cy.get(the.botonEnviar).click();
			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get('#permanentAddress.mb-1').should('not.exist');
		});
	});

	it('GX3-3795 | TC03: Validar NO enviar formulario cuando el campo "Email" NO contiene "@"', () => {
		cy.fixture('data/Elements/GX3-3794-textBox').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.valid);
			cy.get(the.email.input).type(the.email.data.invalidEmail01);
			cy.get(the.botonEnviar).click();
			cy.get('[class="mr-sm-2 field-error form-control"]').should('have.class', 'field-error')
				.and('have.css', 'border','1.11111px solid rgb(255, 0, 0)');
		});
	});

	it('GX3-3795 | TC04: Validar NO enviar formulario cuando el campo "Email" NO contiene un caracter alfanumérico antes del "@"', () => {
		cy.fixture('data/Elements/GX3-3794-textBox').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.valid);
			cy.get(the.email.input).type(the.email.data.invalidEmail02);
			cy.get(the.botonEnviar).click();
			cy.get('[class="mr-sm-2 field-error form-control"]').should('have.class', 'field-error')
				.and('have.css', 'border','1.11111px solid rgb(255, 0, 0)');
	    });
	});

	it('GX3-3795 | TC05: Validar NO enviar formulario cuando el campo "Email" NO contiene un caracter alfanumérico después del "@"', () => {
		cy.fixture('data/Elements/GX3-3794-textBox').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.valid);
			cy.get(the.email.input).type(the.email.data.invalidEmail03);
			cy.get(the.botonEnviar).click();
			cy.get('[class="mr-sm-2 field-error form-control"]').should('have.class', 'field-error')
				.and('have.css', 'border','1.11111px solid rgb(255, 0, 0)');
	    });
	});

	it('GX3-3795 | TC06: Validar NO enviar formulario cuando el campo "Email" NO contiene un "." después de 1 caracter alfanumérico después del "@"', () => {
		cy.fixture('data/Elements/GX3-3794-textBox').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.valid);
			cy.get(the.email.input).type(the.email.data.invalidEmail04);
			cy.get(the.botonEnviar).click();
			cy.get('[class="mr-sm-2 field-error form-control"]').should('have.class', 'field-error')
				.and('have.css', 'border','1.11111px solid rgb(255, 0, 0)');
	    });
	});

	it('GX3-3795 | TC07: Validar NO enviar formulario cuando el campo "Email" NO contiene mínimo 2 caracteres alfanuméricos después del "."', () => {
		cy.fixture('data/Elements/GX3-3794-textBox').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.valid);
			cy.get(the.email.input).type(the.email.data.invalidEmail05);
			cy.get(the.botonEnviar).click();
			cy.get('[class="mr-sm-2 field-error form-control"]').should('have.class', 'field-error')
				.and('have.css', 'border','1.11111px solid rgb(255, 0, 0)');
	    });
	});
});