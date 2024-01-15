import * as json from '@data/credentialsDemoQA.json';

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

		// * Assertions:

		cy.get('#output #name')
			.invoke('text')
			.then(name => {
				cy.log(name);
			});

		cy.get('#output #name').invoke('text').as('name');
		cy.then(() => cy.log(this.name));
	});
});
