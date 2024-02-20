import { faker } from '@faker-js/faker';
describe('', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});
	it('2084 |TC01 Validar rellenar el formulario con datos validos', () => {
		const name = faker.person.firstName();
		const lastname = faker.person.lastName();
		cy.get('#firstName').type(name);
	    cy.get('#lastName').type(lastname);
	});
});
