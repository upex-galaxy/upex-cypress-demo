import { formpractice } from '../../../support/pages/GX3-2205-Practiceform.Page';
import { faker } from '@faker-js/faker';
describe('2205 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});
	it('2084 |TC01 Validar rellenar el formulario con datos validos', () => {
		const name = faker.person.firstName();
		const lastName = faker.person.lastName();
		const email = faker.internet.email();
		const number = faker.string.numeric(10);
		const address = faker.location.streetAddress();

		formpractice.inputscomplete( name, lastName, email, number, address);
		formpractice.get.firtname().should('have.value', name);
		formpractice.get.lastName().should('have.value', lastName);
		formpractice.get.dataemail().should('have.value', email);
		formpractice.get.numberMobile().should('have.value', number);
		formpractice.get.currentaddress().should('have.value', address);

		formpractice.genderSelect();

	});
});
