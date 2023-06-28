import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('✅ToolsQA | Elements | Tex Box Fill Form and Submit', () => {
	beforeEach('Usuario tiene acceso al SUT', () => {
		cy.visit('/text-box');
	});
	it('22031 | TC1: Validar completar el formulario con data valida', () => {
		cy.fixture('data/GX-22030-TexBox.Page').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.valid);
			cy.get(the.Email.input).type(the.Email.data.valid);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
			cy.get(the.SubmitButton).click();
			cy.get('#name').should('contain.text', the.FullName.data.valid);
			cy.get('#email').should('contain.text', the.Email.data.valid);
			cy.get('#currentAddress.mb-1').should('contain', the.CurrentAddress.data.valid);
			cy.get('#permanentAddress.mb-1').should('contain', the.PermanentAddress.data.valid);
		});
	});
	it('22031 | TC2: Validar que al enviar formulario cuando todos los campos son vacíos no se muestra ningún mensaje', () => {
		cy.fixture('data/GX-22030-TexBox.Page').then(the => {
			cy.get(the.FullName.input).should('be.empty');
			cy.get(the.Email.input).should('be.empty');
			cy.get(the.CurrentAddress.input).should('be.empty');
			cy.get(the.PermanentAddress.input).should('be.empty');
			cy.get(the.SubmitButton).click();
			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get('#permanentAddress.mb-1').should('not.exist');
		});
	});
	it('22031 | TC3: Validar No enviar formulario cuando Email  No contiene “@”', () => {
		cy.fixture('data/GX-22030-TexBox.Page').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid1);
			cy.get(the.SubmitButton).click();
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});
	it('22031 | TC4: Validar No enviar formulario cuando Email  No contiene (mínimo) 1 carácter alfanumérico antes de "@"', () => {
		cy.fixture('data/GX-22030-TexBox.Page').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid2);
			cy.get(the.SubmitButton).click();
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});
	it('22031 | TC5: Validar No enviar formulario cuando Email  No contiene (mínimo) 1 carácter alfanumérico después de "@"', () => {
		cy.fixture('data/GX-22030-TexBox.Page').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid3);
			cy.get(the.SubmitButton).click();
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});
	it('22031 | TC6: Validar No enviar formulario cuando Email  No contiene "." después de 1 carácter alfanumérico después de "@"', () => {
		cy.fixture('data/GX-22030-TexBox.Page').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid4);
			cy.get(the.SubmitButton).click();
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});
	it('22031 | TC7: Validar No enviar formulario cuando Email  No contiene (mínimo) 2 caracteres alfanuméricos después de "."', () => {
		cy.fixture('data/GX-22030-TexBox.Page').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid5);
			cy.get(the.SubmitButton).click();
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});
});
