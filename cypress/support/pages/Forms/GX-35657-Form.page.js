import { faker } from '@faker-js/faker';

class Form {
	get = {
		//Name
		firstName: () => cy.get('[id=firstName]'),
		lastName: () => cy.get('[id=lastName]'),
		//email
		email: () => cy.get('[id=userEmail]'),
		//gender
		gender: () => cy.get('[class=custom-control-label]'),
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
		hobbies: () => cy.get('[class=custom-control-label]'),
		currentAddress: () => cy.get('[id=currentAddress]'),
		//state
		state: () => cy.get('[id=state]'),
		selectState: () => cy.get('[id*=react-select]'),
		//city
		city: () => cy.get('[id=city]'),
		selectCity: () => cy.get('[id*=react-select]'),
		btn: () => cy.get('[id=submit]'),
		popUp: () => cy.get('[class=modal-content]'),
		//Validations
		studentInfo: value => cy.get('table[class*=table]').contains('td', value).siblings(),
	};

	fillForm({
		firstName = '',
		lastName = '',
		email = '',
		gender = false,
		mobileNumber = '',
		subject = false,
		hobbies = false,
		picture = '',
		currentAddress = '',
		state = false,
		city = false,
	}) {
		let Gender;
		let Subject;
		let Hobbies;
		let State;
		let City;
		let Birthday;

		return cy
			.get('*')
			.then(() => {
				this.get.firstName().then(() => (firstName == '' ? this.get.firstName().clear() : this.get.firstName().clear().type(firstName)));
				this.get.lastName().then(() => (lastName == '' ? this.get.lastName().clear() : this.get.lastName().clear().type(lastName)));
				this.get.email().then(() => (email == '' ? this.get.email().clear() : this.get.email().clear().type(email)));
				this.get.gender().then(index => {
					let random;
					random = Cypress._.random(0, index.length - 4);
					cy.log(index.length);
					gender == false
						? this.get.gender()
						: this.get
								.gender()
								.eq(random)
								.click()
								.then($gender => {
									Gender = $gender.text();
									cy.log('genro1', Gender);
								});
				});
				this.get
					.mobileNumber()
					.then(() =>
						mobileNumber == '' ? this.get.mobileNumber().clear() : this.get.mobileNumber().clear().type(mobileNumber, { delay: 100 })
					);
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
							Birthday = `${day} ${month},${year}`;
						});
				});

				this.get.subject().then(() => {
					let random;
					if (subject == false) {
						this.get.subject();
					} else {
						this.get.subject().type('a');
						this.get.selectSubject().then(index => {
							random = Cypress._.random(0, index.length - 3);
							this.get
								.selectSubject()
								.eq(random)
								.click()
								.then($subject => {
									Subject = $subject.text();
									cy.log(Subject);
								});
						});
					}
				});

				this.get.hobbies().then(index => {
					let random;
					random = Cypress._.random(3, index.length - 1);
					cy.log(index.length);
					hobbies == false
						? this.get.hobbies()
						: this.get
								.hobbies()
								.eq(random)
								.click()
								.then($hobbies => {
									Hobbies = $hobbies.text();
								});
				});

				this.get
					.picture()
					.click()
					.then(() =>
						picture == ''
							? this.get.picture()
							: this.get
									.picture()
									.selectFile(picture)
									.then($picture => {
										console.log('imagen', $picture);
									})
					);

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
							random = Cypress._.random(1, index.length - 4);
							this.get
								.selectState()
								.eq(random)
								.click({ force: true })
								.then($state => {
									State = $state.text();
								});
						});
					}
				});

				// this.get.city().click();

				this.get.city().then(() => {
					let random;
					if (state == false) {
						this.get.state();
					} else {
						this.get.city().click();
						this.get.selectCity().then(index => {
							random = Cypress._.random(2, index.length - 2);
							this.get
								.selectCity()
								.eq(random)
								.click({ force: true })
								.then($city => {
									City = $city.text();
								});
						});
					}
				});

				this.get.btn().click();
			})
			.then(() => {
				return [Gender, Subject, Hobbies, State, City, Birthday];
			});
	}
}

export const form = new Form();
