import { removeLogs } from '@helper/RemoveLogs'; //Se importa la funcion
removeLogs(); //Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)

let buttonName = ['Yes', 'Impressive', 'No'];

describe('GX3-470 | Tool QA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: Ususario debe estar situado en el endpoint de Radio Buttons', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'radio-button');
		for (let i = 0; i < 3; i++) {
			cy.get('[type="radio"]').eq(i).should('exist');
			cy.get('[type="radio"]').eq(i).should('not.be.checked');
			cy.get('.custom-control-label').eq(i).should('contain.text', buttonName[i]).and('be.visible');
		}
	});
	it('GX3-470 | TC1: Validar poder marcar el boton ‘YES’', () => {
		cy.get('[for="yesRadio"]').should('be.visible');
		cy.get('[for="yesRadio"]').click();
		cy.get('[type="radio"]').eq(0).should('be.checked');
		cy.get('.mt-3').should('contain.text', 'You have selected');
		cy.get('.text-success').should('contain.text', 'Yes');
	});
	it('GX3-470 | TC2: Validar poder marcar el boton ‘Impressive’', () => {
		cy.get('[for="impressiveRadio"]').should('be.visible');
		cy.get('[for="impressiveRadio"]').click();
		cy.get('[type="radio"]').eq(1).should('be.checked');
		cy.get('.mt-3').should('contain.text', 'You have selected');
		cy.get('.text-success').should('contain.text', 'Impressive');
	});
	it('GX3-470 | TC3: Validar no poder marcar el boton ‘No’', () => {
		cy.get('[type="radio"]').eq(2).should('be.disabled');
		cy.get('.mt-3').should('not.exist');
		cy.get('.text-success').should('not.exist');
	});
	it('GX3-470 | TC4: Validar poder cambiar de ‘Yes’ a ‘Impressive’', () => {
		cy.get('[for="yesRadio"]').click();
		cy.get('[type="radio"]').eq(0).should('be.checked');
		cy.get('[type="radio"]').eq(1).should('not.be.checked');
		cy.get('[for="impressiveRadio"]').click();
		cy.get('[type="radio"]').eq(0).should('not.be.checked');
		cy.get('[type="radio"]').eq(1).should('be.checked');
		cy.get('.mt-3').should('contain.text', 'You have selected');
		cy.get('.text-success').should('contain.text', 'Impressive');
	});
});
