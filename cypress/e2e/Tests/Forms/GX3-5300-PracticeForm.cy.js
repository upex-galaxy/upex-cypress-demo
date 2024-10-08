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
		const randomNumber = faker.number.int({ min: 0, max: 2 });
		const letter = faker.helpers.arrayElement(['a', 'c', 'd', 'e', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'y']);
		const randomDay = faker.datatype.number({ min: 1, max: 28 });
		let formattedDay;
		if (randomDay < 10) {
			formattedDay = '0' + randomDay;
		} else {
			formattedDay = String(randomDay);
		}
		const randomMonth = faker.helpers.arrayElement(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
		const randomYear = faker.datatype.number({ min: 1950, max: 2023 });
		const stringYear = randomYear.toString();
		const dateAssert = formattedDay + ' ' + randomMonth + ' ' + stringYear;
		const letterState = faker.helpers.arrayElement(['a', 'c', 'd', 'e', 'h', 'n', 'p', 'r', 's', 't', 'u', 'y']);
		const letterCity = faker.helpers.arrayElement(['a', 'd', 'e', 'g', 'h', 'i', 'l', 'n', 'o', 'r', 'u']);

		formPage.typeFirstName(firstName);
		formPage.typeLastName(lastName);
		formPage.typeEmail(email);
		formPage.typeMobileNumber(mobileNumber);
		formPage.typeCurrentAddress(currentAddress);
		formPage.selectGender(randomNumber);
		formPage.selectHobbies(randomNumber);
		formPage.selectSubjects(letter);
		formPage.selectPicture();
		formPage.selectMonth(randomMonth);
		formPage.selectYear(stringYear);
		formPage.selectDay(randomDay);
		formPage.selectState(letterState);
		formPage.selectCity(letterCity);
		formPage.clickSubmit();

		formPage.get.inputFirstName().should('have.value', firstName);
		formPage.get.inputLastName().should('have.value', lastName);
		formPage.get.inputEmail('have.value', email);
		formPage.get.inputMobileNumber().should('have.value', mobileNumber);
		formPage.get.inputCurrentAddress().should('have.value', currentAddress);
		formPage.get.radioButtonGenderSelect().should('be.checked', randomNumber);
		formPage.get.checksHobbiesSelect().should('be.checked', randomNumber);
		formPage.get.inputSubject().should('contain', letter);
		formPage.get.selectPicture().should('have.prop', 'files');
		formPage.get.inputDate().should('have.value', dateAssert);
		formPage.get.selectableState().should('contain', letterState);
		formPage.get.selectableCity().should('contain', letterCity);
		formPage.get.submitAssert().should('have.class', 'modal-content');
	});
});
