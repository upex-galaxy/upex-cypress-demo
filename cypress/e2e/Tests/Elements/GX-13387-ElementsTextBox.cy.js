import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('US GX-13387 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: Usuario debe ubicarse en la Text Box Page', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('13388 | TC01: Validar visualizar strings como párrafo al enviar formulario con todos los campos válidos', () => {
		cy.get('[type="text"]').type('Pablo Vertone');
		cy.get('[type="email"]').type('verto@gmail.com');
		cy.get('#currentAddress').type('Dirección 123');
		cy.get('#permanentAddress').type('Permanent');
		cy.get('#submit').click();
		cy.get('.mb-1').should('exist');
	});

	it('13388 | TC02: Validar NO visualizar ningún log message al enviar formulario con todos los campos nulos', () => {
		cy.get('#submit').click();
		cy.get('.mb-1').should('not.exist');
	});

	it('13388 | TC03: Validar NO enviar formulario cuando campo "email" no contiene @', () => {
		cy.get('[type="text"]').type('Pablo Vertone');
		cy.get('[type="email"]').type('vertogmail.com');
		cy.get('#currentAddress').type('Dirección 123');
		cy.get('#permanentAddress').type('Permanent');
		cy.get('#submit').click();
		cy.get('.field-error').should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get('.mb-1').should('not.exist');
	});

	it('13388 | TC04: Validar NO enviar formulario cuando campo "email" no contiene caracteres alfanuméricos antes del @', () => {
		cy.get('[type="text"]').type('Pablo Vertone');
		cy.get('[type="email"]').type('@gmail.com');
		cy.get('#currentAddress').type('Dirección 123');
		cy.get('#permanentAddress').type('Permanent');
		cy.get('#submit').click();
		cy.get('.field-error').should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get('.mb-1').should('not.exist');
	});

	it('13388 | TC05: Validar NO enviar formulario cuando campo "email" no contiene caracteres alfanuméricos después del @', () => {
		cy.get('[type="text"]').type('Pablo Vertone');
		cy.get('[type="email"]').type('verto@');
		cy.get('#currentAddress').type('Dirección 123');
		cy.get('#permanentAddress').type('Permanent');
		cy.get('#submit').click();
		cy.get('.field-error').should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get('.mb-1').should('not.exist');
	});

	it('13388 | TC06: Validar NO enviar formulario cuando campo "email" no contiene "." en el formato', () => {
		cy.get('[type="text"]').type('Pablo Vertone');
		cy.get('[type="email"]').type('verto@gmailcom');
		cy.get('#currentAddress').type('Dirección 123');
		cy.get('#permanentAddress').type('Permanent');
		cy.get('#submit').click();
		cy.get('.field-error').should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get('.mb-1').should('not.exist');
	});

	it('13388 | TC07: Validar NO enviar formulario cuando campo "email" no contiene al menos dos caracteres después del "."', () => {
		cy.get('[type="text"]').type('Pablo Vertone');
		cy.get('[type="email"]').type('verto@gmail.c');
		cy.get('#currentAddress').type('Dirección 123');
		cy.get('#permanentAddress').type('Permanent');
		cy.get('#submit').click();
		cy.get('.field-error').should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get('.mb-1').should('not.exist');
	});
});
