import { faker } from '@faker-js/faker';
describe('GX3-1067 | TS: ToolsQA | Forms | Practice Form', () => {
	beforeEach('Acceso a la pagina', () => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});
    
	it('929 | TC1: Validar ingresar data válida en los campos', () => {
		
		cy.get('#firstName').type(faker.name.firstName());
		cy.get('#lastName').type(faker.name.lastName());
		cy.get('#userEmail').type(faker.internet.email());
		cy.get('[for="hobbies-checkbox-1"]').should('be.visible');
		cy.get('[for="hobbies-checkbox-1"]').click();
		//
		cy.get('#userNumber').type(faker.phone.number());
		cy.get('#dateOfBirthInput').type(faker.date.birthdate());
			
	});	
});