describe('2049 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondicion: El usuario debe estar situado en la pagina DEMOQA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');

	});
	it('2049 | TC1 | Usuario completa los campos correctamente', () => {
		cy.fixture('data/Elements/GX3-2049-textBox').then(the => {
			cy.get(the.username.input).type(the.username.data.valid);
			cy.get(the.useremail.input).type(the.useremail.data.valid);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
			cy.get(the.permanentAdress.input).type(the.permanentAdress.data.valid);
			cy.get(the.botonSubmit).click();
			cy.get('#name').should('contain.text', the.username.data.valid);
			cy.get('#email').should('contain.text', the.useremail.data.valid);
			cy.get('#output #currentAddress').should('contain.text', the.currentAddress.data.valid);
			cy.get('#output #permanentAddress').should('contain.text', the.permanentAdress.data.valid);

		});
	});
	it('2049 | TC2 | Validar NO poder enviar el formulario con datos vacíos.', () => {
		cy.fixture('data/Elements/GX3-2049-textBox').then(the => {
			cy.get(the.username.input).should('be.empty');
			cy.get(the.useremail.input).should('be.empty');
			cy.get(the.currentAddress.input).should('be.empty');
			cy.get(the.permanentAdress.input).should('be.empty');
			cy.get(the.botonSubmit).click();
			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#output #currentAddress').should('not.exist');
			cy.get('#output #permanentAddress').should('not.exist');
		});
	});
	it('2049 | TC3 | Validar NO poder enviar el formulario cuando email no con contiene “@“.', () => {
		cy.fixture('data/Elements/GX3-2049-textBox').then(the => {
			cy.get(the.username.input).type(the.username.data.valid);
			cy.get(the.useremail.input).type(the.useremail.data.emailTc03);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);;
			cy.get(the.permanentAdress.input).type(the.permanentAdress.data.valid);;
			cy.get(the.botonSubmit).click();
			cy.get(the.useremail.input).should('have.class', 'field-error').and('have.css', 'border', '1px solid rgb(255, 0, 0)');
		});
	});
	it('2049 | TC4 | Validar NO poder enviar el formulario cuando el email no contiene 1 Alpha numérica antes del “@“.', () => {
		cy.fixture('data/Elements/GX3-2049-textBox').then(the => {
			cy.get(the.username.input).type(the.username.data.valid);
			cy.get(the.useremail.input).type(the.useremail.data.emailTc04);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
			cy.get(the.permanentAdress.input).type(the.permanentAdress.data.valid);
			cy.get(the.botonSubmit).click();
			cy.get(the.useremail.input).should('have.class', 'field-error').and('have.css', 'border', '1px solid rgb(255, 0, 0)');
		});
	});
	it('2049 | TC5 | Validar NO poder enviar el formulario cuando el email no contiene 1 Alpha numérica después del “@“.', () => {
		cy.fixture('data/Elements/GX3-2049-textBox').then(the => {
			cy.get(the.username.input).type(the.username.data.valid);
			cy.get(the.useremail.input).type(the.useremail.data.emailTc05);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
			cy.get(the.permanentAdress.input).type(the.permanentAdress.data.valid);
			cy.get(the.botonSubmit).click();
			cy.get(the.useremail.input).should('have.class', 'field-error').and('have.css', 'border', '1px solid rgb(255, 0, 0)');
		});
	});
	it('2049 | TC6 | Validar NO poder enviar el formulario cuando el email no contiene 2 Alpha numérica después del “.“', () => {
		cy.fixture('data/Elements/GX3-2049-textBox').then(the => {
			cy.get(the.username.input).type(the.username.data.valid);
			cy.get(the.useremail.input).type(the.useremail.data.emailTc06);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
			cy.get(the.permanentAdress.input).type(the.permanentAdress.data.valid);
			cy.get(the.botonSubmit).click();
			cy.get(the.useremail.input).should('have.class', 'field-error').and('have.css', 'border', '1px solid rgb(255, 0, 0)');
		});
	});
	it('2049 | TC7 | Validar NO poder enviar el formulario cuando el email no contiene 2 Alpha numérica después del “@“ y antes del “.” ', () => {
		cy.fixture('data/Elements/GX3-2049-textBox').then(the => {
			cy.get(the.username.input).type(the.username.data.valid);
			cy.get(the.useremail.input).type(the.useremail.data.emailTc07);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
			cy.get(the.permanentAdress.input).type(the.permanentAdress.data.valid);
			cy.get(the.botonSubmit).click();
			cy.get(the.useremail.input).should('have.class', 'field-error').and('have.css', 'border', '1px solid rgb(255, 0, 0)');
		});
	});
});
