import { faker } from '@faker-js/faker';
import { formsPage } from '@pages/GX3-6075-Forms.Page';
describe('GX3-6075: ToolsQA | Forms | Practice Form', () => {
	beforeEach('Visitar la pagina de saucedemo', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it('Validar rellenar el formulario de forma exitosa', () => {
		const inputFirstName = faker.person.firstName();
		const inputLastName = faker.person.lastName();
		const inputEmail = faker.internet.email();
		const inputMobilNumber = faker.string.numeric({ length: 10, exclude: ['0'] });
		const currentAddress = faker.location.streetAddress();

		formsPage.typeInputFirstName(inputFirstName);
		formsPage.elementos.firstName().should('have.value', inputFirstName);

		formsPage.typeInputLastName(inputLastName);
		formsPage.elementos.lastName().should('have.value', inputLastName);

		formsPage.typeInputEmail(inputEmail);
		formsPage.elementos.email().should('have.value', inputEmail);

		formsPage.typeMobilNumber(inputMobilNumber);
		formsPage.elementos.mobilNumber().should('have.value', inputMobilNumber);

		formsPage.openDatePicker();
		formsPage.selectDatePicker(10, 2000, 8);

		formsPage.typeCurrentAddress(currentAddress);
		formsPage.elementos.textareaCurrentAddress().should('have.value', currentAddress);
	});
});
