import { faker } from '@faker-js/faker';
import { random } from 'cypress/types/lodash';
class PracticeFormPage {
	get = {
		// * ---- inputs -----
		firstNameInput: () => cy.get('#firstName'),
		lastNameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		maleGenderInput: () => cy.get('#gender-radio-1'),
		femaleGenderInput: () => cy.get('#gender-radio-2'),
		otherGenderInput: () => cy.get('#gender-radio-3'),
		mobileInput: () => cy.get('#userNumber'),
		//dateBirthInput: () cy.get(''),
		subjectsInput: () => cy.get('[class="value-container subjects-auto-complete"]'),
		sportsHobbiesInput: () => cy.get('#hobbies-checkbox-1'),
		readingHobbiesInput: () => cy.get('#hobbies-checkbox-2'),
		musicHobbiesInput: () => cy.get('#hobbies-checkbox-3'),
		uploadPictureInput: () => cy.get('#uploadPicture'),
		currentAddressInput: () => cy.get('#currentAddress'),

		// * ---- Log Messages -----
	};

	fillFirstName() {
		const randomName = faker.name.firstName();
		this.get.firstNameInput().type(randomName);
		return randomName;
	}

	fillLastName() {
		const randomLastName = faker.name.lastName();
		this.get.lastNameInput().type(randomLastName);
		return randomLastName;
	}

	fillEmail() {
		const randomEmail = faker.internet.email();
		this.get.emailInput().type(randomEmail);
		return randomEmail;
	}

	fillMobile() {
		const randomMobile = faker.datatype.number({ min: 1000000000, max: 9999999999 });
	}

	fillcurrentAddressInput() {
		const randomAddress = faker.address.direction();
		this.get.currentAddressInput().type(randomAddress);
		return randomAddress;
	}
}

export const pForm = new PracticeFormPage();
