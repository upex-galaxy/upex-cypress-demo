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
		subjectInputParent: () => cy.get('#subjectsInput').parent(),

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

	//*método del Subject, selección, longitud, random, etc

	generateLetters() {
		let letter;
		letter = faker.random.alpha();
		return letter;
	}

	fillSubjects() {
		const randomLetter = this.generateLetters();
		this.get.subjectsInput().type(randomLetter);
		return randomLetter;
	}

	/*selectRandomGender() {
		const randomGender = Math.floor(Math.random() * 3);
		switch (randomGender) {
			case 0:
				this.get.maleGenderInput().click({ force: true });
				break;
			case 1:
				this.get.femaleGenderInput().click({ force: true });
				break;
			case 2:
				this.get.otherGenderInput().click({ force: true });
				break;
		}
	}*/
}

export const pForm = new PracticeFormPage();
