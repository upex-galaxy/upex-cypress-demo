import * as json from '@data/credentialsDemoQA.json';
import { getRealValue } from '@helper/testUtils';

describe('GX3-1321: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach(() => {
		cy.visit('/text-box');
	});

	it('TC1: Should be able to fill form and submit', function () {
		// * Formulario:
		cy.fixture('data/credentialsDemoQA').then(data => {
			cy.get('#userName-wrapper input').type(data.validCredentials.FullName);
		});
		cy.get('#userEmail-wrapper input').type(json.validCredentials.Email);
		cy.get('#currentAddress-wrapper textarea').type(json.validCredentials.CurrentAddress);
		cy.get('#permanentAddress-wrapper textarea').type(json.validCredentials.PermanentAddress);

		cy.get('#submit').click();

		// * Este es un ejemplo de cómo usar el método invoke para obtener el valor de un elemento:
		cy.get('#output #name')
			.invoke('text')
			.then(name => {
				cy.log(name);
			});

		//* Aquíe usamos el Alias de Cypress para guardar el valor de un elemento como una variable:
		cy.get('#output #name').invoke('text').as('name');
		cy.get('#output #email').invoke('text').as('email');
		cy.get('#output #currentAddress').invoke('text').as('currentAddress');
		cy.get('#output #permanentAddress').invoke('text').as('permanentAddress');

		//* y Aquí hacemos el assertion con el valor de cada variable con el json que tenemos:
		cy.then(() => {
			expect(getRealValue(this.name)).equal(json.validCredentials.FullName);
			expect(getRealValue(this.email)).equal(json.validCredentials.Email);
			expect(getRealValue(this.currentAddress)).equal(json.validCredentials.CurrentAddress);
			expect(getRealValue(this.permanentAddress)).equal(json.validCredentials.PermanentAddress);
		});
	});
});
