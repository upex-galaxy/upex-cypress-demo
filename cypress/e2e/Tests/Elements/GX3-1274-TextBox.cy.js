import * as json from '@data/GX3-1274-TextBox.json';
import { getRealValue } from '@helper/GX-1274-Utilidades';

describe('GX3-1274-tools-qa-elements-text-box-fill-form-and-submit', () => {
	beforeEach('PRC-Visitar la pagina Demo', () => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('|TC1|  Validar formulario llenando correctamente todos los campos', function () {
		//Formulario
		cy.fixture('data/GX3-1274-TextBox').then(data => {
			cy.get('#userName-wrapper input').type(data.validCredentials.FullName);
		});
		cy.get('#userEmail-wrapper input').type(json.validCredentials.Email);
		cy.get('#userEmail-wrapper input').should('have.value', json.validCredentials.Email);
		cy.get('#currentAddress-wrapper textarea').type(json.validCredentials.CurrentAddress);
		cy.get('#currentAddress-wrapper textarea').should('have.value', json.validCredentials.CurrentAddress);
		cy.get('#permanentAddress-wrapper textarea').type(json.validCredentials.PermanentAddress);
		cy.get('#permanentAddress-wrapper textarea').should('have.value', json.validCredentials.PermanentAddress);
		cy.get('#submit').click();
		//Configurar constante para agarrar texto agregado Assertions
		cy.get('#output #name')
			.invoke('text')
			.then(name => {
				cy.log(name);
			});
		cy.get('#output #name').invoke('text').as('name');
		cy.get('#output #email').invoke('text').as('email');
		cy.get('#output #currentAddress').invoke('text').as('currentAddress');
		cy.get('#output #permanentAddress').invoke('text').as('permanentAddress');
		//Assertions
		cy.then(() => {
			expect(getRealValue(this.name)).equal(json.validCredentials.FullName);
			expect(getRealValue(this.email)).equal(json.validCredentials.Email);
			expect(getRealValue(this.currentAddress)).equal(json.validCredentials.CurrentAddress);
			expect(getRealValue(this.permanentAddress)).equal(json.validCredentials.PermanentAddress);
		});
	});
	it('|TC2| Validar NO poder rellenar formulario con Email invalido', () => {
		const invalidEmails = [
			json.invalidCredentialsForEmail.Email0,
			json.invalidCredentialsForEmail.Email1,
			json.invalidCredentialsForEmail.Email2,
			json.invalidCredentialsForEmail.Email3,
			json.invalidCredentialsForEmail.Email4,
		];

		for (const email of invalidEmails) {
			cy.get('#userEmail-wrapper input').type(email);
			cy.get('#userEmail-wrapper input').should('have.value', email);
			cy.get('#submit').click();
			// Esperar a que el mensaje de error esté presente
			cy.get('.field-error').should('be.visible');
			// Asegurarse de que el campo tenga un borde rojo
			cy.get('.mr-sm-2.field-error.form-control').should('have.css', 'border-color', 'rgb(255, 0, 0)');
			//Borrar campo para seguir con la siguiente data
			cy.get('#userEmail-wrapper input').clear();
			//Asegurarse de que quedo limpio el campo
			cy.get('#userEmail-wrapper input').should('be.empty');
		}
	});

	it('|TC3| Validar NO poder rellenar formulario con campos vacíos', () => {
		cy.get('#userName-wrapper input').clear();
		cy.get('#userName-wrapper input').should('be.empty');
		cy.get('#userEmail-wrapper input').clear();
		cy.get('#userEmail-wrapper input').should('be.empty');
		cy.get('#currentAddress-wrapper textarea').clear();
		cy.get('#currentAddress-wrapper textarea').should('be.empty');
		cy.get('#permanentAddress-wrapper textarea').clear();
		cy.get('#permanentAddress-wrapper textarea').should('be.empty');
		cy.get('#submit').click();
		// Asegurarse de que no haya aparecido el cuadro de registro y que no se muestre ningún mensaje después del envío
		cy.get('.border').should('not.exist');
	});
});
