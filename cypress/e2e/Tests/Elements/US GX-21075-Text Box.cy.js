describe('US GX-21075 | TS: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Having access to the SUT.', () => {
		cy.visit('/text-box');
	});

	it('GX-21076 | TC1: Validate all fields are submitted with validate data and string is displayed.', () => {
		cy.get('[type="text"]').type('Upex');
		cy.get('[type="email"]').type('hola@gmail.com');
		cy.get('#currentAddress').type('Caracas, Venezuela');
		cy.get('#permanentAddress').type('The World');
		cy.get('#submit').click();
		cy.contains('Name:Upex');
		cy.contains('Email:hola@gmail.com');
		cy.contains('Current Address :Caracas, Venezuela');
		cy.contains('Permananet Address :The World');
	});

	//	it('GX-21076 | TC2: Validate all fields are submitted with empty data and no string is displayed.', () => {
	//		cy.get('[href="/commands/querying"]').eq(2).click();
	//		cy.get('#query-btn') // Sintaxis Comando Get de Selector de IDs
	//			.click(); // Esto es un método de Interacción (Acción)
	//	});
	//
	//	it('GX-21076 | TC3: Validate field “email” is submitted with invalid data and red border is displayed.', () => {
	//		cy.get('[href="/commands/querying"]').eq(2).click();
	//		cy.get('#query-btn').click();
	//		cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
	//			.should('contain.text', 'Button'); // Assertion BDD para validar resultado esperado (de muchas formas)
	//	});
	//
	//	it('GX-21076 | TC4:  Validate field “email” is submitted with empty data and no log message is displayed.', () => {
	//		cy.get('[href="/commands/querying"]').eq(2).click();
	//		cy.get('#query-btn').click();
	//		cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
	//			.should('contain.text', 'Button');
	///	});
});

//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
