import { formPage } from '@pages/Forms/GX-35657-Form.page';
import { faker } from '@faker-js/faker';
import data from '../../../fixtures/data/GX-35657-Form.json';

import { removeLogs } from '@helper/RemoveLogs';

describe(' GX-35657 | ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', '/automation-practice-form');
	});

	it('35658 | TC1: Validar enviar formulario con datos validos.', () => {
		const randomName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const randomEmail = faker.internet.email();
		const randomValidMobileNumber = faker.datatype.number({ min: 1000000000, max: 9999999999 });
		const randomCurrentAddress = faker.address.streetAddress();

		formPage
			.fillForm({
				firstName: randomName,
				lastName: randomLastName,
				email: randomEmail,
				currentAddress: randomCurrentAddress,
				mobileNumber: randomValidMobileNumber,
			})
			.then(Data => {
				const [gender, subject, hobbies, state, city, birthday] = Data;

				formPage.get.popUp().should('exist');
				formPage.get.studentInfo('Student Name').should('have.text', `${randomName} ${randomLastName}`);
				formPage.get.studentInfo('Student Email').should('have.text', randomEmail);
				formPage.get.studentInfo('Gender').should('have.text', gender);
				formPage.get.studentInfo('Mobile').should('have.text', randomValidMobileNumber);
				formPage.get.studentInfo('Date of Birth').should('contain.text', birthday);
				formPage.get.studentInfo('Subjects').should('have.text', subject);
				formPage.get.studentInfo('Hobbies').should('have.text', hobbies);
				formPage.get.studentInfo('Address').should('have.text', randomCurrentAddress);
				formPage.get.studentInfo('State and City').should('have.text', `${state} ${city}`);
				formPage.get.studentInfo('Picture').should('contain.text', data.logo);
			});
	});
	it('35658 | TC2: Validar no enviar formulario con campos vacíos.', () => {
		formPage.submitEmptyForm();

		formPage.get.popUp().should('not.exist');
		formPage.get.firstNameInput().should('have.css', 'border-color', data.invalidCss);
		formPage.get.lastNameInput().should('have.css', 'border-color', data.invalidCss);
		formPage.get.emailInput().should('have.css', 'border-color', data.validCss);
		formPage.get.genderInput().should('have.css', 'border-color', data.invalidCss);
		formPage.get.mobileNumberInput().should('have.css', 'border-color', data.invalidCss);
		formPage.get.dateOfBirthInput().should('have.css', 'border-color', data.validCss);
		formPage.get.currentAddressInput().should('have.css', 'border-color', data.validCss);
		formPage.get.popUp().should('not.exist');
	});

	it('35658 | TC3: Validar no enviar formulario con campos no validos.', () => {
		const randomInvalidMobileNumber = faker.datatype.number({ min: 100000000, max: 999999999 });

		data.invalidEmail.map(invalid => {
			formPage.fillInvalidForm({
				email: invalid.email,
				mobileNumber: randomInvalidMobileNumber,
			});

			formPage.get.popUp().should('not.exist');
			formPage.get.emailInput().should('have.css', 'border-color', data.invalidCss);
		});
	});
});

removeLogs();
