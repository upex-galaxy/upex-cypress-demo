import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('24117 | TS: | Elements | Text Box', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
	});

	it('24117| TC1: Validar completar los campos con datos validos.', () => {
		cy.fixture('data/GX-24117-TexBox.json').then((the) => {
			cy.get(the.FullName.input).type(the.FullName.data.valid);
			cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);
			cy.get(the.Email.input).type(the.Email.data.valid);
			cy.get(the.Email.input).should('have.value', the.Email.data.valid);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
			cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
			cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid);
			cy.get('#submit').click();
			cy.get('#name').should('contain', the.FullName.data.valid);
			cy.get('#email').should('contain', the.Email.data.valid);
			cy.get('[class="mb-1"]').should('contain', the.CurrentAddress.data.valid);
			cy.get('[class="mb-1"]').should('contain', the.CurrentAddress.data.valid);
		});
	});
	it('24117| TC2: Validar al enviar el formulario cuando todos los campos son vacíos, no se muestre ningún mensaje.', () => {
		cy.fixture('data/GX-24117-TexBox.json').then((the) => {
			cy.get(the.FullName.input).should('be.empty');
			cy.get(the.Email.input).should('be.empty');
			cy.get(the.CurrentAddress.input).should('be.empty');
			cy.get(the.PermanentAddress.input).should('be.empty');
			cy.get('#submit').click();
			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('[class="mb-1"]').should('not.exist');
			cy.get('[class="mb-1"]').should('not.exist');
		});
	});
	it('24117| TC3: Validar que el campo de "Email" contenga el @ obligatoriamente en la direccion de correo electronico', () => {
		cy.fixture('data/GX-24117-TexBox.json').then((the) => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailInvalid);
			cy.get('#submit').click();
			cy.get(the.Email.input).should('have.value', the.Email.data.invalid.emailInvalid);
		});
	});
	it('24117| TC4: Validar que el campo de "Email" contenga al menos un caracter especal "." luego del @ ', () => {
		cy.fixture('data/GX-24117-TexBox.json').then((the) => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailInvalid2);
			cy.get('#submit').click();
			cy.get(the.Email.input).should('have.value', the.Email.data.invalid.emailInvalid2);
		});
	});
	it('24117| TC5: Validar que la direccion de correo electronico antes del "@" contenga un caracter como minimo', () => {
		cy.fixture('data/GX-24117-TexBox.json').then((the) => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailInvalid3);
			cy.get('#submit').click();
			cy.get(the.Email.input).should('have.value', the.Email.data.invalid.emailInvalid3);
		});

	});
	it('24117| TC6: Validar que la direccion de correo electronico contenga un "dominio" despues del "@"', () => {
		cy.fixture('data/GX-24117-TexBox.json').then((the) => {
			cy.get(the.Email.input).type(the.Email.data.invalid.emailInvalid4);
			cy.get('#submit').click();
			cy.get(the.Email.input).should('have.value', the.Email.data.invalid.emailInvalid4);

		});
	});
});