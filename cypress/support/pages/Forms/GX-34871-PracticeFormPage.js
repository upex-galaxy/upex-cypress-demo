import { faker } from '@faker-js/faker';
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
}

export const pForm = new PracticeFormPage();
