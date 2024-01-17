import json from '@data/GX3-1274-TextBox.json';

describe('GX3-1274-tools-qa-elements-text-box-fill-form-and-submit', () => {
	beforeEach('PRC-Visitar la pagina Demo', () => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('|TC1|  Validar formulario llenando correctamente todos los campos', function () {
		cy.fixture('data/GX3-1274-TextBox').as('data');

		cy.get('[href="/commands/querying"]') // Sintaxis Comando Get de Selector de Atributos
			.eq(2) // Esto es un método opcional
			.click(); // Esto es un método de Interacción
	});
	it('|TC2| Validar formulario con Email invalido', () => {
		cy.get('[href="/commands/querying"]').eq(2).click();
		cy.get('#query-btn') // Sintaxis Comando Get de Selector de IDs
			.click(); // Esto es un método de Interacción (Acción)
	});
	it('|TC3| Validar formulario con campos vacíos', () => {
		cy.get('[href="/commands/querying"]').eq(2).click();
		cy.get('#query-btn').click();
		cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
			.should('contain.text', 'Button'); // Assertion BDD para validar resultado esperado (de muchas formas)
	});
});
