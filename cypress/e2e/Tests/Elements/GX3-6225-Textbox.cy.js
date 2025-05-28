import Data from '@data/Elements/GX3-6225-Textbox.json';

describe('GX3-6225-Textbox', () => {
	beforeEach('PRC:User need to be on Textbox page', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('include', 'text-box');
	});
	it('GX3-6232 | TC1:Validar el registro exitoso del TextBox', () => {
		cy.get('#userName').type(Data.FullName.namevalid);
		cy.get('#userEmail').type(Data.Email.emailTC1);
		cy.get('#currentAddress').type('Chile');
		cy.get('#permanentAddress').type('Venezuela');
		cy.get('#submit').click();
		cy.get('#name').should('contain.text', Data.FullName.namevalid);
		cy.get('#email').should('contain.text', Data.Email.emailTC1);
		cy.get('p#currentAddress.mb-1').should('contain.text', 'Chile');
		cy.get('p#permanentAddress.mb-1').should('contain.text', 'Venezuela');
	});

	it('GX3-6232 | TC2:Validar NO registrarse al no ingresar @ en campo email ', () => {
		cy.get('#userName').type(Data.FullName.namevalid2);
		cy.get('#userEmail').type(Data.Email.emailTC2);
		cy.get('#currentAddress').type('Venezuela');
		cy.get('#permanentAddress').type('Chile');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});

	it('GX3-6232 | TC3:Validar NO registrarse al no ingresar caracteres antes de @ en campo email ', () => {
		cy.get('#userName').type(Data.FullName.namevalid3);
		cy.get('#userEmail').type(Data.Email.emailTC3);
		cy.get('#currentAddress').type('Chile');
		cy.get('#permanentAddress').type('Venezuela');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});

	it('GX3-6232 | TC4:Validar NO registrarse al no ingresar caracteres despues de @ en campo email  ', () => {
		cy.get('#userName').type(Data.FullName.namevalid4);
		cy.get('#userEmail').type(Data.Email.emailTC4);
		cy.get('#currentAddress').type('Chile');
		cy.get('#permanentAddress').type('Venezuela');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});

	it('GX3-6232 |TC5:Validar NO registrarse al no ingresar "." despues de @ en campo email ', () => {
		cy.get('#userName').type(Data.FullName.namevalid5);
		cy.get('#userEmail').type(Data.Email.emailTC5);
		cy.get('#currentAddress').type('Chile');
		cy.get('#permanentAddress').type('Venezuela');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});

	it('GX3-6232 | TC6:Validar NO registrarse al no ingresar caracateres despues de "." en campo email ', () => {
		cy.get('#userName').type(Data.FullName.namevalid6);
		cy.get('#userEmail').type(Data.Email.emailTC6);
		cy.get('#currentAddress').type('Chile');
		cy.get('#permanentAddress').type('Venezuela');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
});
