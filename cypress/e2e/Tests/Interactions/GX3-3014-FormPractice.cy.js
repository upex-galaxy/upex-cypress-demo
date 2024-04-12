/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { formPage } from '../../../support/pages/GX3-3014-FormsPractice.Page';
import { faker } from '@faker-js/faker';

describe('GX3-3014 | ToolsQA | Forms | Practice Form' , () => {

	beforeEach('PRC | Usuario debe situarse en la URL de Demo QA' , () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice');
	});

	it('3015 | TC1 | Validar poder completar el formulario para el estudiante con valores validos', () => {
		const randomName = faker.person.firstName('female' | 'male');
		const randomLastName = faker.person.lastName();
		const randomEmail = faker.internet.email();
		const randomGender = Cypress._.random(0, 2);
		const randomNumber = faker.string.numeric(10);
		const randomAddress = faker.location.streetAddress();
		const randomHobbies = Cypress._.random(0, 2);
		const randomState = Cypress._.random(0, 3);
		const randomCity = Cypress._.random();
		const randomSubject = faker.string.alpha({ count: 1, casing: 'upper', exclude: ['Q', 'Ñ', 'K', 'J', 'F', 'X', 'W', 'Z'] });

		formPage.typeInputName(randomName);
		formPage.typeInputLast(randomLastName);
		formPage.typeInputEmail(randomEmail);
		formPage.selectInputGender(randomGender);
		formPage.typeInputNumber(randomNumber);
		formPage.selectInputDate();
		formPage.typeAddAddress(randomAddress);
		formPage.typeInputHobbies(randomHobbies);
		formPage.selectUpPicture();
		formPage.randomState(randomState);
		formPage.randomCity(randomCity);
		formPage.selectInputSubject(randomSubject);

		formPage.btnSubmit();

		formPage.get.document().should('contain.text', 'Thanks for submitting the form');
		formPage.get.resultFirtsName().should('contain.text', randomName);
		formPage.get.resultLastName().should('contain.text', randomLastName);
		formPage.get.resultEmail().should('contain.text', randomEmail);

	});

});