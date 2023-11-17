import { removeLogs } from '@helper/RemoveLogs'; //Se importa la funcion
removeLogs(); //Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)

describe('GX3-470 | Tool QA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: Ususario debe estar situado en el endpoint de Radio Buttons', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'radio-button');
		//  Yes Button
		cy.get('[type="radio"]').eq(0).should('exist'); //.and('be.visible');
		cy.get('[type="radio"]').eq(0).should('not.be.checked');
		cy.get('.custom-control-label').eq(0).should('contain.text', 'Yes');
		//cy.get('[type="radio"]').eq(0).parentElement.textContent.should('equal', 'Yes');
		//cy.get('[type="radio"]').eq(0).parentElement.should('contain', 'Yes');
		//cy.get('.custom-control-label .textContent').eq(0).should('contain', 'Yes');
		//  Impressive Button
		cy.get('[type="radio"]').eq(1).should('exist'); //.and('be.visible');
		cy.get('[type="radio"]').eq(1).should('not.be.checked');
		cy.get('.custom-control-label').eq(1).should('contain.text', 'Impressive');
		//  No Button
		cy.get('[type="radio"]').eq(2).should('exist'); //.and('be.visible');
		cy.get('[type="radio"]').eq(2).should('not.be.checked');
		cy.get('.custom-control-label').eq(2).should('contain.text', 'No');
	});
	it('GX3-470 | TC1: Validar poder marcar el boton ‘YES’', () => {
		cy.get('[type="radio"]').eq(0).click({ force: true });
		cy.get('[type="radio"]').eq(0).should('be.checked');
		cy.get('.mt-3').eq(0).should('contain.text', 'You have selected');
		cy.get('.text-success').eq(0).should('contain.text', 'Yes');
	});
});
