import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('The user must navigate to the endpoint under test', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('20683 | TC1: HappyPath: Validar que el formulario funcione correctamente al enviarlo', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.fullName).click().type(the.data.valid.user);
			cy.get(the.input.email).click().type(the.data.valid.validEmailAddress);
			cy.get(the.input.currentAddress).click().type(the.data.valid.firstAddress);
			cy.get(the.input.permanentAddress).click().type(the.data.valid.secondAddress);
			cy.get(the.input.submitButton).click();
			cy.get('.mb-1').should('contain.text', 'Name', 'Current Address', 'Permanent Address');
		});
	});

	it('20683 | TC2: Validar que NO se muestra ningún mensaje cuando los campos ”Full Name”, “Current Address“ y “Permanent Address“ estén vacíos al enviar el formulario', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.email).click().type(the.data.valid.validEmailAddress);
			cy.get(the.input.submitButton).click();
			cy.get('.mb-1').should('have.text', 'Email:julian.battaglini@upexgalaxy.com');
		});
	});
	it('20683 | TC3: Validar que el mensaje es mostrado cuando los campos ”Full Name”, “Current Address“ y “Permanent Address“ estén completados al enviar el formulario', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.fullName).click().type(the.data.valid.user);
			cy.get(the.input.currentAddress).click().type(the.data.valid.firstAddress);
			cy.get(the.input.permanentAddress).click().type(the.data.valid.secondAddress);
			cy.get(the.input.submitButton).click();
			cy.get('.mb-1').should('contain.text', 'Name', 'Current Address', 'Permanent Address');
		});
	});
	it('20683 | TC4: Validar que el formulario NO pueda ser enviado si el campo ”Email” es inválido al no contener “@”', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.email).click().type(the.data.invalid.invalidEmailAddress1);
			cy.get(the.input.submitButton).click();
			cy.get(the.error).should('have.css', 'border-color', 'rgb(255, 0, 0)');
		});
	});
	it('20683 | TC5: Validar que el formulario NO pueda ser enviado si el campo  ”Email” es inválido al no contener al menos un caracter alfanumérico antes del “@”', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.email).click().type(the.data.invalid.invalidEmailAddress2);
			cy.get(the.input.submitButton).click();
			cy.get(the.error).should('contain.css', 'border-color', 'rgb(255, 0, 0)');
		});
	});
	it('20683 | TC6: Validar que el formulario NO pueda ser enviado si el campo  ”Email” es inválido al no contener al menos un caracter alfanumérico después del “@”', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.email).click().type(the.data.invalid.invalidEmailAddress3);
			cy.get(the.input.submitButton).click();
			cy.get(the.error).should('have.css', 'border-color', 'rgb(255, 0, 0)');
		});
	});
	it('20683 | TC7: Validar que el formulario NO pueda ser enviado si el campo  ”Email” es inválido al no contener “.” después de un caracter alfanumérico después del “@”', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.email).click().type(the.data.invalid.invalidEmailAddress4);
			cy.get(the.input.submitButton).click();
			cy.get(the.error).should('have.css', 'border-color', 'rgb(255, 0, 0)');
		});
	});
	it('20683 | TC8: Validar que el formulario NO pueda ser enviado si el campo  ”Email” es inválido al no contener al menos dos caracteres alfanuméricos después del “.”', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.email).click().type(the.data.invalid.invalidEmailAddress5);
			cy.get(the.input.submitButton).click();
			cy.get(the.error).should('have.css', 'border-color', 'rgb(255, 0, 0)');
		});
	});
	it('20683 | TC9: Validar que el formulario pueda ser enviado si el campo  ”Email” está vacío', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.fullName).click().type(the.data.valid.user);
			cy.get(the.input.currentAddress).click().type(the.data.valid.firstAddress);
			cy.get(the.input.permanentAddress).click().type(the.data.valid.secondAddress);
			cy.get(the.input.submitButton).click();
			cy.get(the.input.fullName).should('be.empty');
			cy.get('.mb-1').should('contain.text', 'Name', 'Current Address', 'Permanent Address');
		});
	});
	it('20683 | TC10: Validar que el formulario pueda ser enviado cuando el campo  ”Email” es válido', () => {
		cy.fixture('data/textBoxForm.Page').then(the => {
			cy.get(the.input.email).click().type(the.data.valid.validEmailAddress);
			cy.get(the.input.submitButton).click();
			cy.get('.mb-1').should('have.text', 'Email:julian.battaglini@upexgalaxy.com');
		});
	});
});
