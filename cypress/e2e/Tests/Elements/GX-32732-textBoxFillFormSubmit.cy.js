import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-32732-✅-tools-qa-elements-text-box-fill-form-and-submit', () => {
	beforeEach('Precondición: Usuario debe estar en el sut DemoQA', () => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('32733 | TC1: Validar poder completar el formulario con datos válidos', () => {
		cy.fixture('data/GX-32732-yesiData').then(user => {
			cy.get(user.fullName.input).type(user.fullName.data.valid);
			cy.get(user.email.input).type(user.email.data.valid);
			cy.get(user.currentAddress.input).type(user.currentAddress.data.valid);
			cy.get(user.permanentAddress.input).type(user.permanentAddress.data.valid);
			cy.get(user.bottonSubmit).click();
			cy.get('#name').should('contain.text', user.fullName.data.valid);
			cy.get('#email').should('contain.text', user.email.data.valid);
			cy.get('#currentAddress.mb-1').should('contain.text', user.currentAddress.data.valid);
			cy.get('#permanentAddress.mb-1').should('contain.text', user.permanentAddress.data.valid);
		});
	});
	it('32733 | TC2: Validar poder enviar el formulario con los datos vacíos', () => {
		cy.fixture('data/GX-32732-yesiData').then(user => {
			cy.get(user.fullName.input).should('be.empty');
			cy.get(user.email.input).should('be.empty');
			cy.get(user.currentAddress.input).should('be.empty');
			cy.get(user.permanentAddress.input).should('be.empty');
			cy.get(user.bottonSubmit).click();
			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get('#permanentAddress.mb-1').should('not.exist');
		});
	});
	it('32733 | TC3: Validar No poder enviar el formulario cuando email no tiene “@”', () => {
		cy.fixture('data/GX-32732-yesiData').then(user => {
			cy.get(user.email.input).type(user.email.data.invalid);
			cy.get(user.bottonSubmit).click();
			cy.get(user.email.input).should('have.class', 'field-error');
		});
	});
	it('32733 | TC4: Validar No poder enviar el formulario cuando email no contiene 1 alphanumeric antes “@”', () => {
		cy.fixture('data/GX-32732-yesiData').then(user => {
			cy.get(user.email.input).type(user.email.data.invalid1);
			cy.get(user.bottonSubmit).click();
			cy.get(user.email.input).should('have.class', 'field-error');
		});
	});
	it('32733 | TC5: Validar No poder enviar el formulario cuando email no contiene 1 alphanumeric despues“@”', () => {
		cy.fixture('data/GX-32732-yesiData').then(user => {
			cy.get(user.email.input).type(user.email.data.invalid2);
			cy.get(user.bottonSubmit).click();
			cy.get(user.email.input).should('have.class', 'field-error');
		});
	});
	it('32733 | TC6: Validar No poder enviar el formulario cuando email no contiene  2 alphanumeric despues“.”', () => {
		cy.fixture('data/GX-32732-yesiData').then(user => {
			cy.get(user.email.input).type(user.email.data.invalid3);
			cy.get(user.bottonSubmit).click();
			cy.get(user.email.input).should('have.class', 'field-error');
		});
	});
	it('32733 | TC7: Validar No poder enviar el formulario cuando email no contiene  "." despues del 1 alphanumeric despues "@”', () => {
		cy.fixture('data/GX-32732-yesiData').then(user => {
			cy.get(user.email.input).type(user.email.data.invalid4);
			cy.get(user.bottonSubmit).click();
			cy.get(user.email.input).should('have.class', 'field-error');
		});
	});
});
