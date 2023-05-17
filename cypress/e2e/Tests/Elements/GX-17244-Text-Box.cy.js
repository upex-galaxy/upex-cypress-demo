describe('✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondición: Usuario debe esta situado en Text Box page', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('17245 | TC01 - Validar formulario completo correctamente', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.Email).type(the.data.Email);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.FullName).should('be.visible');
			cy.get(the.assertions.Email).should('be.visible');
			cy.get(the.assertions.CurrentAddress).should('be.visible');
			cy.get(the.assertions.PermanentAddress).should('be.visible');
		});
	});

	it('17245 | TC02 - Validar que formulario no devuelva mensaje al no ingresar full name', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.Email).type(the.data.Email);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.Email).should('be.visible');
			cy.get(the.assertions.CurrentAddress).should('be.visible');
			cy.get(the.assertions.PermanentAddress).should('be.visible');
		});
	});

	it('17245 | TC03 - Validar que formulario no devuelva mensaje al no ingresar email', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.FullName).should('be.visible');
			cy.get(the.assertions.CurrentAddress).should('be.visible');
			cy.get(the.assertions.PermanentAddress).should('be.visible');
		});
	});

	it('17245 | TC04 - Validar formulario invalido ingresando email sin “@“', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.Email).type(the.data.InvalidEmail1);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.Error).should('be.visible');
		});
	});

	it('17245 | TC05 - Validar formulario invalido ingresando email sin 1 carácter alfanumérico antes del “@“', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.Email).type(the.data.InvalidEmail2);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.Error).should('be.visible');
		});
	});

	it('17245 | TC06 - Validar formulario invalido ingresando email sin 1 carácter alfanumérico después del “@“', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.Email).type(the.data.InvalidEmail3);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.Error).should('be.visible');
		});
	});

	it('17245 | TC07 - Validar formulario invalido ingresando email sin insertar “.“ después del “@”', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.Email).type(the.data.InvalidEmail4);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.Error).should('be.visible');
		});
	});

	it('17245 | TC08 - Validar formulario invalido ingresando email insertando 1 carácter después del “.“', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.Email).type(the.data.InvalidEmail5);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.Error).should('be.visible');
		});
	});

	it('17245 | TC09 - Validar que formulario no devuelva mensaje al no ingresar current address', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.Email).type(the.data.Email);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.FullName).should('be.visible');
			cy.get(the.assertions.Email).should('be.visible');
			cy.get(the.assertions.PermanentAddress).should('be.visible');
		});
	});

	it('17245 | TC10 - Validar que formulario no devuelva mensaje al no ingresar permanent address', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.Email).type(the.data.Email);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.SubmitButton).click();

			cy.get(the.assertions.FullName).should('be.visible');
			cy.get(the.assertions.Email).should('be.visible');
			cy.get(the.assertions.CurrentAddress).should('be.visible');
		});
	});
	it.only('17245 | TC11 - Validar formulario completo correctamente con diferente assertions', () => {
		cy.fixture('data/formtext.data').then(the => {
			cy.get(the.input.FullName).type(the.data.FullName);
			cy.get(the.input.FullName).should('have.value', the.data.FullName);
			cy.get(the.input.Email).type(the.data.Email);
			cy.get(the.input.Email).should('have.value', the.data.Email);
			cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
			cy.get(the.input.CurrentAddress).should('have.value', the.data.CurrentAddress);
			cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
			cy.get(the.input.PermanentAddress).should('have.value', the.data.PermanentAddress);
			cy.get(the.SubmitButton).click();
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
