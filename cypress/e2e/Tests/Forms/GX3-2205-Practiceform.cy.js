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
		const month = faker.date.month();
		const year = new Date().getFullYear();
		const day = faker.number.int({ min: 0, max: 31 });
		const date = `${year}-${month}-${day}`;
		const subjects = ['English', 'History', 'Hindi'];
		const address = faker.location.streetAddress();

		formpractice.inputscomplete( name, lastName, email, number, address);
		formpractice.get.firtname().should('have.value', name);
		formpractice.get.lastName().should('have.value', lastName);
		formpractice.get.dataemail().should('have.value', email);
		formpractice.get.numberMobile().should('have.value', number);
		formpractice.get.currentaddress().should('have.value', address);

		formpractice.genderSelect();

		formpractice.selectDatebirth(date);

		formpractice.subjectsInput();

		formpractice.hobbiesCheckbox();
		formpractice.get.hobbies().should('be.checked');

		formpractice.pictureSelect();
		formpractice.get.picture().should('contain.value', 'upexgalaxy.gif');

		formpractice.stateRandom();
		formpractice.get.state().invoke('text').should('include', randomState);

	});
});
