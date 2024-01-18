import json from '@data/GX3-1274-TextBox.json';

describe('GX3-1274-tools-qa-elements-text-box-fill-form-and-submit', () => {
	beforeEach('PRC-Visitar la pagina Demo', () => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('GX3-1274|TC1|  Validar formulario llenando correctamente todos los campos', function () {
		//Formulario
		cy.fixture('data/GX3-1274-TextBox').then(data => {
			cy.get('#userName-wrapper input').type(data.validCredentials.FullName);
		});
		cy.get('#userEmail-wrapper input').type(json.validCredentials.Email);
		cy.get('#currentAddress-wrapper textarea').type(json.validCredentials.CurrentAddress);
		cy.get('#permanentAddress-wrapper textarea').type(json.validCredentials.PermanentAddress);
		cy.get('#submit').click();
	});
	it.skip('GX3-1274|TC2| Validar formulario con Email invalido', () => {
		cy.get('[href="/commands/querying"]').eq(2).click();
		cy.get('#query-btn') // Sintaxis Comando Get de Selector de IDs
			.click(); // Esto es un método de Interacción (Acción)
	});
	it.skip('GX3-1274|TC3| Validar formulario con campos vacíos', () => {
		cy.get('[href="/commands/querying"]').eq(2).click();
		cy.get('#query-btn').click();
		cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
			.should('contain.text', 'Button'); // Assertion BDD para validar resultado esperado (de muchas formas)
	});
});
