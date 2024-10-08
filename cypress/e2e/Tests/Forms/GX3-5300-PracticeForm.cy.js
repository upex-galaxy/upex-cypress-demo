import { faker } from '@faker-js/faker';
import { formPage } from '@pages/GX3-5300-practiceForm.Page';

describe('GX3-5300 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: Usuario visita la Pagina Demo QA', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it('53001 | TC1: Validar completar el formulario exitosamente', () => {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();
		const email = faker.internet.email();
		const mobileNumber = faker.finance.pin(8);
		const currentAddress = faker.location.direction();

		formPage.typeFirstName(firstName);
		formPage.typeLastName(lastName);
		formPage.typeEmail(email);
		formPage.typeMobileNumber(mobileNumber);
		formPage.typeCurrentAddress(currentAddress);

		formPage.get.inputFirstName().should('have.value', firstName);
		formPage.get.inputLastName().should('have.value', lastName);
		formPage.get.inputEmail('have.value', email);
		formPage.get.inputMobileNumber().should('have.value', mobileNumber);
		formPage.get.inputCurrentAddress().should('have.value', currentAddress);
	});
});
