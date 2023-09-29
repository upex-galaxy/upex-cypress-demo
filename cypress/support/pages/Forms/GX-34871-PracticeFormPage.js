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
		subjectsContainer: () => cy.get('#subjectsContainer'), // se debe usar .type() para ingresar un carácter, así se despliega un dropdown
		optionSubjects: () => cy.get('[id^="react-select-2-option"]'), // para elegir una opción luego que se genera el dropdown al escribir

		//subjectList: () => cy.get('[class^="css-1rhbuit-multiValue"]'),

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

	fillSubjects() {
		const randomLetter = this.generateLetters();
		this.get.subjectsInput().type(randomLetter);
		return randomLetter;
	}

	selectOptionSubjects() {
		let randomSubjects;
		return this.get.optionSubjects().then(length => {
			randomSubjects = Cypress._.random(0, length.length - 1);
			this.get.optionSubjects().eq(randomSubjects).click();
		});
	}
}

export const pForm = new PracticeFormPage();
