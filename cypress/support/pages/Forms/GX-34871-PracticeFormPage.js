import { faker } from '@faker-js/faker';

class PracticeFormPage {
	get = {
		firstNameInput: () => cy.get('#firstName'),
		lastNameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),

		maleGenderInput: () => cy.get('#gender-radio-1').parent(),
		femaleGenderInput: () => cy.get('#gender-radio-2'),
		otherGenderInput: () => cy.get('#gender-radio-3'),

		mobileInput: () => cy.get('#userNumber'),
		//dateBirthInput: () cy.get(''),
		subjectsInput: () => cy.get('#subjectsInput'),
		subjectsContainer: () => cy.get('#subjectsContainer'),
		optionSubjects: () => cy.get('[id^="react-select-2-option"]'),

		sportsHobbiesInput: () => cy.get('#hobbies-checkbox-1'),
		readingHobbiesInput: () => cy.get('#hobbies-checkbox-2'),
		musicHobbiesInput: () => cy.get('#hobbies-checkbox-3'),
		uploadPictureInput: () => cy.get('#uploadPicture'),
		currentAddressInput: () => cy.get('#currentAddress'),
		stateInput: () => cy.get('[id="state"]'),
	};

	fillField(fieldName, value) {
		const field = this.get[fieldName]();
		field.type(value);
		return value;
	}

	fillAndGetInputData() {
		const randomFirstName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const randomEmail = faker.internet.email();
		const randomMobile = faker.datatype.number({ min: 1000000000, max: 9999999999 });
		const randomAddress = faker.address.streetAddress();

		this.fillField('firstNameInput', randomFirstName);
		this.fillField('lastNameInput', randomLastName);
		this.fillField('emailInput', randomEmail);
		this.fillField('mobileInput', randomMobile.toString());
		this.fillField('currentAddressInput', randomAddress);
		//this.selectRandomGender();

		return {
			firstName: randomFirstName,
			lastName: randomLastName,
			email: randomEmail,
			mobile: randomMobile.toString(),
			address: randomAddress,
		};
	}

	generateLetters() {
		let letter;
		do {
			letter = faker.random.alpha();
		} while (
			letter === 'x' ||
			letter === 'z' ||
			letter === 'j' ||
			letter === 'q' ||
			letter === 'w' ||
			letter === 'f' ||
			letter === 'k' ||
			letter === 'ñ'
		);
		return letter;
	}

	fillAndSelectSubject() {
		const randomLetter = this.generateLetters();
		this.get.subjectsInput().type(randomLetter);
		cy.wait(1000);
		return this.get
			.optionSubjects()
			.its('length')
			.then(length => {
				if (length > 0) {
					const randomIndex = Cypress._.random(0, length - 1);
					let selectedSubject = this.get.optionSubjects().eq(randomIndex).invoke('text');
					this.get.optionSubjects().eq(randomIndex).click();
					return selectedSubject;
				} else {
					this.get.subjectsInput().clear();
					return this.fillAndSelectSubject();
				}
			});
	}
}

export const pForm = new PracticeFormPage();
