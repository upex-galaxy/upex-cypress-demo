import { faker } from '@faker-js/faker';
import { formsPage } from '@pages/GX3-6075-Forms.Page';
describe('GX3-6075: ToolsQA | Forms | Practice Form', () => {
	beforeEach('Visitar la pagina de saucedemo', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it('Validar rellenar el formulario de forma exitosa', () => {
		const randomFirstName = faker.person.firstName();
		const randomLastName = faker.person.lastName();
		const randomEmail = faker.internet.email();
		const randomNumberMobil = faker.string.numeric({ length: 10, exclude: ['0'] });
		const randomDateTime = faker.date.anytime();
		const year = randomDateTime.getFullYear();
		const month = randomDateTime.getMonth();
		const day = randomDateTime.getDate();
		const currentAddress = faker.location.streetAddress();

		formsPage.typeInputFirstName(randomFirstName);
		formsPage.elementos.firstName().should('have.value', randomFirstName);

		formsPage.typeInputLastName(randomLastName);
		formsPage.elementos.lastName().should('have.value', randomLastName);

		formsPage.typeInputEmail(randomEmail);
		formsPage.elementos.email().should('have.value', randomEmail);

		formsPage.typeMobilNumber(randomNumberMobil);
		formsPage.elementos.mobilNumber().should('have.value', randomNumberMobil);

		formsPage.checkRadioGender();

		formsPage.checkHobbies();

		formsPage.openDatePicker();
		cy.log('test random Date');
		formsPage.selectDatePicker(year, month, day);

		formsPage.typeCurrentAddress(currentAddress);
		formsPage.elementos.textareaCurrentAddress().should('have.value', currentAddress);
	});
});
