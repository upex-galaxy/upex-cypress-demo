import { faker } from '@faker-js/faker';

class PracticeFormPage {
	// * Constructor
	get = {
		firstNameInput: () => cy.get('#firstName'),
		lastNameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		gender: () => cy.get('[class*="custom-radio"]'),
		mobileInput: () => cy.get('#userNumber'),

		dateBirthInput: () => cy.get('[class="react-datepicker-wrapper"]'),
		month: () => cy.get('[class="react-datepicker__month-select"]'),
		monthOptions: () => cy.get('[class="react-datepicker__month-select"] option'),
		year: () => cy.get('[class="react-datepicker__year-select"]'),
		yearOptions: () => cy.get('[class="react-datepicker__year-select"] option'),
		//daysOfMonthAndYearSelected: () => cy.get('[class*="react-datepicker__day--"]:not([class*="outside-month"])'),

		subjectsInput: () => cy.get('#subjectsInput'),
		subjectsContainer: () => cy.get('#subjectsContainer'),
		optionSubjects: () => cy.get('[id^="react-select-2-option"]'),
		hobbies: () => cy.get('[class*="custom-checkbox"]'),
		sportsHobbiesInput: () => cy.get('#hobbies-checkbox-1'),
		readingHobbiesInput: () => cy.get('#hobbies-checkbox-2'),
		musicHobbiesInput: () => cy.get('#hobbies-checkbox-3'),
		pictureButton: () => cy.get('#uploadPicture'),
		currentAddressInput: () => cy.get('#currentAddress'),
		state: () => cy.get('#state'),
		optionState: () => cy.get('[class$="-option"]'),
		city: () => cy.get('#city'),
		optionCity: () => cy.get('[id^="react-select-4-option"]'),
	};

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

		return {
			firstName: randomFirstName,
			lastName: randomLastName,
			email: randomEmail,
			mobile: randomMobile.toString(),
			address: randomAddress,
		};
	}

	fillField(fieldName, value) {
		const field = this.get[fieldName]();
		field.type(value);
		return value;
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
		let randomLetter = this.generateLetters();
		this.get.subjectsInput().type(randomLetter);
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

	selectGender() {
		const randomGender = faker.datatype.number({ min: 0, max: 2 });
		const genderType = {
			0: 'Male',
			1: 'Female',
			2: 'Other',
		};
		Cypress.env('genderSelected', genderType[randomGender]); // variable de entorno de Cypress: genderSelect
		this.get.gender().eq(randomGender).click();
	}

	SelectHobbies() {
		const randomHobbies = faker.datatype.number({ min: 0, max: 2 });
		const Hobbies = {
			0: 'Sports',
			1: 'Reading',
			2: 'Music',
		};
		Cypress.env('hobbiesSelected', Hobbies[randomHobbies]);
		this.get.hobbies().eq(randomHobbies).click();
	}

	uploadPicture(file) {
		this.get.pictureButton().click();
		this.get.pictureButton().selectFile('cypress/fixtures/images/upexlogo.png');
	}

	selectState() {
		this.get.state().click();
		return this.get
			.optionState()
			.its('length')
			.then(length => {
				let randomState = Cypress._.random(0, length - 1);
				let selectedState = this.get.optionState().eq(randomState).invoke('text');
				this.get.optionState().eq(randomState).click({ force: true });
				return selectedState;
			});
	}

	selectCity() {
		this.get.city().click();
		return this.get
			.optionCity()
			.its('length')
			.then(length => {
				let randomCity = Cypress._.random(0, length - 1);
				let selectedCity = this.get.optionCity().eq(randomCity).invoke('text');
				this.get.optionCity().eq(randomCity).click({ force: true });
				return selectedCity;
			});
	}
}

export const pForm = new PracticeFormPage();
