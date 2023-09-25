import { faker } from '@faker-js/faker';

class Form {
	get = {
		//Name
		firstName: () => cy.get('[id=firstName]'),
		lastName: () => cy.get('[id=lastName]'),
		//email
		email: () => cy.get('[id=userEmail]'),
		//gender
		gender: () => cy.get('[class=custom-control-input][id*=gender-radio]'),
		//mobileNumber
		mobileNumber: () => cy.get('[id=userNumber]'),
		//date of birth
		dateOfBirth: () => cy.get('[id=dateOfBirthInput]'),
		month: () => cy.get('.react-datepicker__month-select'),
		year: () => cy.get('.react-datepicker__year-select'),
		day: () => cy.get('[role="listbox"] [class*="datepicker__day"]:not([class$="outside-month"])'),
		//investigar dropdown y Picture
		subject: () => cy.get('[id=subjectsInput]'),
		selectSubject: () => cy.get('[id*=react-select]'),
		//Picture
		picture: () => cy.get('[id=uploadPicture]'),
		hobbies: () => cy.get('[class=custom-control-input][id*=hobbies-checkbox]'),
		currentAddress: () => cy.get('[id=currentAddress]'),
		//state
		state: () => cy.get('[id=state]'),
		selectState: () => cy.get('[id*=react-select]'),
		//city
		city: () => cy.get('[id=city]'),
		selectCity: () => cy.get('[id*=react-select]'),

		btn: () => cy.get('[id=submit]'),
	};

	fillForm({
		firstName = '',
		lastName = '',
		email = '',
		gender = false,
		mobileNumber = '',
		// dateOfBirth = '',
		subject = false,
		hobbies = false,
		picture = '',
		currentAddress = '',
		state = false,
		city = false,
	}) {
		this.get.firstName().then(() => (firstName == '' ? this.get.firstName().clear() : this.get.firstName().clear().type(firstName)));
		this.get.lastName().then(() => (lastName == '' ? this.get.lastName().clear() : this.get.lastName().clear().type(lastName)));
		this.get.email().then(() => (email == '' ? this.get.email().clear() : this.get.email().clear().type(email)));
		this.get.gender().then(index => {
			let random;
			random = Cypress._.random(0, index.length - 1);
			cy.log(index.length);
			gender == false ? this.get.gender() : this.get.gender().eq(random).click({ force: true });
		});
		this.get
			.mobileNumber()
			.then(() => (mobileNumber == '' ? this.get.mobileNumber().clear() : this.get.mobileNumber().clear().type(mobileNumber)));
		//realizar if para los dias del mes
		this.get.dateOfBirth().then(() => {
			let month;
			let day;
			let year;

			this.get
				.dateOfBirth()
				.click()
				.then(() => {
					month = faker.date.month();
					day = faker.datatype.number({ min: 1, max: 28 }).toString();
					year = faker.datatype.number({ min: 1940, max: 2023 }).toString();
					cy.log(month);
					cy.log(day);
					cy.log(year);
					this.get.month().select(month);
					this.get.year().select(year);
					this.get.day().contains(day).click();
				});
		});

		this.get.subject().then(() => {
			let random;
			if (subject == false) {
				this.get.subject();
			} else {
				this.get.subject().type('a');
				this.get.selectSubject().then(index => {
					cy.log(index.length);
					random = Cypress._.random(2, index.length - 2);
					this.get.selectSubject().eq(random).click();
				});
			}
		});

		this.get.hobbies().then(index => {
			let random;
			random = Cypress._.random(0, index.length - 1);
			cy.log(index.length);
			hobbies == false ? this.get.hobbies() : this.get.hobbies().eq(random).click({ force: true });
		});

		this.get
			.picture()
			.click()
			.then(() => (picture == '' ? this.get.picture() : this.get.picture().selectFile(picture)));

		this.get
			.currentAddress()
			.then(() => (currentAddress == '' ? this.get.currentAddress().clear() : this.get.currentAddress().clear().type(currentAddress)));

		this.get.state().then(() => {
			let random;
			if (state == false) {
				this.get.state();
			} else {
				this.get.state().click();
				this.get.selectState().then(index => {
					random = Cypress._.random(2, index.length - 1);
					this.get.selectState().eq(2).click({ force: true });
				});
			}
		});

		// this.get.city().click();

		this.get.city().then(() => {
			let random;
			if (city == false) {
				this.get.city();
			} else {
				this.get.city().click();
				this.get.selectCity().then(index => {
					cy.log(index.length);
					random = Cypress._.random(2, index.length - 1);
					this.get.selectCity().eq(2).click({ force: true });
				});
			}
		});

		this.get.btn().click();
	}
}

export const form = new Form();
