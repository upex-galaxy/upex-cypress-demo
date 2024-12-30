import { faker } from '@faker-js/faker';
// faker usage guide: https://fakerjs.dev/guide/usage
// faker modules: https://fakerjs.dev/api/

import { objJsonDataHandler } from '@helper/JsonDataHandler';
import { objPracticeFormPage } from '@pages/GX3-5746-Practice-Form.Page';

const DATA_FIRST_NAME = faker.person.firstName();
const DATA_LAST_NAME = faker.person.lastName();
const DATA_USER_EMAIL = faker.internet.email();
const DATA_PHONE_NUMBER = faker.string.numeric({ length: 10 });
const DATA_CHAR_SUBJECT = faker.string.alpha({
	length: 1,
	casing: 'lower',
	exclude: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z']
});
const DATA_PICTURE_PATH = 'cypress/fixtures/images/upexgalaxy.gif';
const DATA_CURRENT_ADDRESS = faker.location.direction();

describe('GX3-5746 |ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: Usuario debe estar en la url Practice Form de ToolsQA', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');

		objJsonDataHandler.setAllowedKeys(['firstName', 'lastName', 'email', 'gender', 'phoneNumber', 'birthDate', 'subject', 'hobbies', 'fileName', 'currentAddress', 'state', 'city']);
	});

	it('GX-5746 - TC01: Validar que se pueda enviar el formulario correctamente (HP)', () => {
		objPracticeFormPage.typeFirstName(DATA_FIRST_NAME);
		cy.get('@typedFirstName')
			.invoke('text')
			.then($the => objJsonDataHandler.writeValue('firstName', $the));

		objPracticeFormPage.typeLastName(DATA_LAST_NAME);
		cy.get('@typedLastName')
			.invoke('text')
			.then($the => objJsonDataHandler.writeValue('lastName', $the));

		objPracticeFormPage.typeEmail(DATA_USER_EMAIL);
		cy.get('@typedEmail')
			.invoke('text')
			.then($the => objJsonDataHandler.writeValue('email', $the));

		objPracticeFormPage.selectRandomGender();
		cy.get('@selectedOptionGender')
			.invoke('text')
			.then($the => objJsonDataHandler.writeValue('gender', $the));

		objPracticeFormPage.typePhoneNumber(DATA_PHONE_NUMBER);
		cy.get('@typedPhoneNumber')
			.invoke('val')
			.then($the => {
				objJsonDataHandler.writeValue('phoneNumber', $the);
			});

		objPracticeFormPage.selectRandomDate();
		cy.get('@selectedBirthDate')
			.invoke('val')
			.then($the => objJsonDataHandler.writeValue('birthDate', $the));

		objPracticeFormPage.typeRandomSubjects(DATA_CHAR_SUBJECT);
		objPracticeFormPage.get
			.labelSubjects()
			.should('exist')
			.invoke('text')
			.then($the => {
				let _jsonArraySubjects = objJsonDataHandler.readValue('subject') || [];

				if (!_jsonArraySubjects.includes($the)) {
					_jsonArraySubjects.push($the);

					objJsonDataHandler.writeValue('subject', _jsonArraySubjects);
				}
			});

		objPracticeFormPage.selectRandomHobbies();
		cy.get('@selectedHobby')
			.invoke('text')
			.then($the => {
				let _jsonArrayHobbies = objJsonDataHandler.readValue('hobbies') || [];

				if (!_jsonArrayHobbies.includes($the)) {
					_jsonArrayHobbies.push($the);

					objJsonDataHandler.writeValue('hobbies', _jsonArrayHobbies);
				}
			});

		objPracticeFormPage.uploadPicture(DATA_PICTURE_PATH);
		cy.get('@selectedFileName').then($the => {
			let _arrFiles = $the[0] as HTMLInputElement;
			let _fileName = _arrFiles.files![0].name;

			objJsonDataHandler.writeValue('fileName', _fileName);
		});

		objPracticeFormPage.typeCurrentAddress(DATA_CURRENT_ADDRESS);
		cy.get('@typedAddress')
			.invoke('val')
			.then($the => objJsonDataHandler.writeValue('currentAddress', $the));

		objPracticeFormPage.selectRandomState();
		objPracticeFormPage.get
			.selectedStateLabel()
			.invoke('text')
			.then($the => objJsonDataHandler.writeValue('state', $the));

		objPracticeFormPage.selectRandomCity();
		objPracticeFormPage.get
			.selectedCityLabel()
			.invoke('text')
			.then($the => objJsonDataHandler.writeValue('city', $the));

		objPracticeFormPage.clickSubmit();

		objPracticeFormPage.get
			.resultTable()
			.should('exist')
			.then(() => {
				let _firstName = objJsonDataHandler.readValue('firstName');
				let _lastName = objJsonDataHandler.readValue('lastName');
				objPracticeFormPage.get.resultName().should('exist').and('contain.text', _firstName).and('contain.text', _lastName);

				let _email = objJsonDataHandler.readValue('email');
				objPracticeFormPage.get.resultEmail().should('exist').and('contain.text', _email);

				let _gender = objJsonDataHandler.readValue('gender');
				objPracticeFormPage.get.resultGenders().should('exist').and('have.text', _gender);

				let _phoneNumber = objJsonDataHandler.readValue('phoneNumber');
				objPracticeFormPage.get.resultMobile().should('exist').and('have.text', _phoneNumber);

				objPracticeFormPage.get
					.resultBirth()
					.should('exist')
					.invoke('text')
					.then($the => {
						let _jsonValue = objJsonDataHandler.readValue('birthDate');
						let _formatedBirthDate = objPracticeFormPage.formatDate(_jsonValue);

						let _formatedDateThe = objPracticeFormPage.formatDate($the);

						expect(_formatedDateThe).to.equal(_formatedBirthDate);
					});

				const DATA_ARRAY_SUBJECTS = objJsonDataHandler.readValue('subject');
				DATA_ARRAY_SUBJECTS.forEach(($the: any[], $index: number) => {
					objPracticeFormPage.get.resultSubjects().should('exist').and('contain.text', $the[$index]);
				});

				const DATA_ARRAY_HOBBIES = objJsonDataHandler.readValue('hobbies');
				DATA_ARRAY_HOBBIES.forEach(($the: any[], $index: number) => {
					objPracticeFormPage.get.resultHobbies().should('exist').and('contain.text', $the[$index]);
				});

				let _fileName = objJsonDataHandler.readValue('fileName');
				objPracticeFormPage.get.resultPicture().should('exist').and('have.text', _fileName);

				let _currentAddress = objJsonDataHandler.readValue('currentAddress');
				objPracticeFormPage.get.resultAddress().should('exist').and('have.text', _currentAddress);

				let _state = objJsonDataHandler.readValue('state');
				let _city = objJsonDataHandler.readValue('city');
				objPracticeFormPage.get.resultStateCity().should('exist').and('contain.text', _state).and('contain.text', _city);
			});
	});
});
