import { faker } from '@faker-js/faker';
import { formPage } from '@pages/Forms/GX-41328-practiceForm.page';

describe('PRC: Visitar el formulario de ToolsQA', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});
	it('TC1', () => {
		const randomFirstname = faker.name.firstName();
		const randomEmail = faker.internet.email();
		const randomLastName = faker.name.lastName();
		const randomGender = faker.datatype.number({ min: 0, max: 2 });
		const randomHobbies = faker.datatype.number({ min: 0, max: 2 });
		const randomPhoneNumber = faker.phone.number('##########');
		const randomDay = faker.datatype.number({ min: 0, max: 30 });
		//const stringDay = randomDay.toString();
		const randomMonth = faker.date.month();
		const stringMonth = randomMonth.toString();
		const randomYear = faker.datatype.number({ min: 1950, max: 2023 });
		const stringYear = randomYear.toString();

		const currentDate = new Date();
		const currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });
		const dateAssert = randomDay + ' ' + currentMonth + ' ' + stringYear;

		formPage.typeFirstname(randomFirstname);
		formPage.get.imputFirstName().should('have.value', randomFirstname);
		formPage.typeLastName(randomLastName);
		formPage.get.inputLastName().should('have.value', randomLastName);
		formPage.typeEmail(randomEmail);
		formPage.get.inputEmail().should('have.value', randomEmail);
		formPage.selectGender(randomGender);
		formPage.get.radioButtonsGender().should('be.checked', randomGender);
		formPage.typeMobile(randomPhoneNumber);
		formPage.get.inputMobile().should('have.value', randomPhoneNumber);
		formPage.selectMonth(randomMonth);
		formPage.selectYear(stringYear);
		formPage.selectDay(randomDay);
		formPage.get.inputDate().should('have.value', dateAssert);
		formPage.selectHobbies(randomHobbies);
		formPage.get.checksHobbies().should('be.checked', randomHobbies);
		formPage.selectSubjects();
		formPage.selectPicture();
		formPage.typeCurrentAddress();
		formPage.selectState();
		formPage.selectCity();
		formPage.clickSubmit();
	});
});
