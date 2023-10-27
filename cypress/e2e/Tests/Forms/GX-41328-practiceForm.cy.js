import { faker } from '@faker-js/faker';
import { formPage } from '@pages/Forms/GX-41328-practiceForm.page';
import data from '@data/Form/GX-41328-practiceForm.json';

describe('GX-41328 |ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC:Visitar para registro de estudiantes', () => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});
	it('41329 | TC1: Validar envio de formulario con todos los campos correctamente rellenados', () => {
		const randomFirstname = faker.name.firstName();
		const randomEmail = faker.internet.email();
		const randomLastName = faker.name.lastName();
		const randomGender = faker.datatype.number({ min: 0, max: 2 });
		const randomHobbies = faker.datatype.number({ min: 0, max: 2 });
		const randomPhoneNumber = faker.phone.number('##########');
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
		const randomAddress = faker.address.streetAddress();

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
		formPage.get.inputSubjects().should('contain', data.subjects);
		formPage.selectPicture();
		formPage.get.inputPicture().should('have.prop', 'files');
		formPage.typeCurrentAddress(randomAddress);
		formPage.get.textAreaCurrentAddress().should('have.value', randomAddress);
		formPage.selectState();
		formPage.get.selectableState().should('contain', data.state);
		formPage.selectCity();
		formPage.get.selectableCity().should('contain', data.city);
		formPage.clickSubmit();
		formPage.get.submitAssert().should('have.class', 'modal-content');
	});
});
