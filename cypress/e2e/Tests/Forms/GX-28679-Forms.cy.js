import { faker } from '@faker-js/faker/locale/en';
import { form } from '../../../support/pages/Forms/GX-28679-Forms.page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('visitar la página DemoQA', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it('28683 | TC1: Validar el “pop up” al enviar el formulario con los datos correctos en los campos obligatorios.', () => {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const email = faker.internet.email();
		const phoneNumber = form.RandomPhoneNumber();
		form.firstNameField(firstName);
		form.lastNameField(lastName);
		form.emailField(email);
		form.selectGenderOption();
		form.numberField(phoneNumber);
		form.dateOfBirth();
		form.SelectYear();
	});
});