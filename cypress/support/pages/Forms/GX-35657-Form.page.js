import { faker } from '@faker-js/faker';

class Form {
	get = {
		//formContainer
		formContainer: () => cy.get('[id=userForm]'),
		//Name
		firstNameInput: () => cy.get('[id=firstName]'),
		lastNameInput: () => cy.get('[id=lastName]'),
		//email
		emailInput: () => cy.get('[id=userEmail]'),
		//gender
		genderInput: () => cy.get('[class=custom-control-label]'),
		//mobileNumber
		mobileNumberInput: () => cy.get('[id=userNumber]'),
		//date of birth
		dateOfBirthInput: () => cy.get('[id=dateOfBirthInput]'),
		month: () => cy.get('.react-datepicker__month-select'),
		year: () => cy.get('.react-datepicker__year-select'),
		day: () => cy.get('[role="listbox"] [class*="datepicker__day"]:not([class$="outside-month"])'),
		//investigar dropdown y Picture
		subjectInput: () => cy.get('[id=subjectsInput]'),
		selectSubject: () => cy.get('[id*=react-select]'),
		//Picture
		picture: () => cy.get('[id=uploadPicture]'),
		hobbiesInput: () => cy.get('[class=custom-control-label]'),
		currentAddressInput: () => cy.get('[id=currentAddress]'),
		//state
		stateInput: () => cy.get('[id=state]'),
		selectState: () => cy.get('[id*=react-select]'),
		//city
		cityInput: () => cy.get('[id=city]'),
		selectCity: () => cy.get('[id*=react-select]'),
		submitBttn: () => cy.get('[id=submit]'),
		popUp: () => cy.get('[class=modal-content]'),
		//Validations
		studentInfo: value => cy.get('table[class*=table]').contains('td', value).siblings(),
	};

	fillForm({ firstName: val1, lastName: val2, email: val3, mobileNumber: val4, currentAddress: val5 }) {
		let Gender, Subject, Hobbies, State, City, Birthday;

		return cy
			.get('*')
			.then(() => {
				this.get.firstNameInput().clear().should('not.have.text').type(val1);
				this.get.lastNameInput().clear().should('not.have.text').type(val2);
				this.get.emailInput().clear().should('not.have.text').type(val3);
				this.get.genderInput().then(index => {
					let random;
					random = Cypress._.random(0, index.length - 4);

					this.get
						.genderInput()
						.eq(random)
						.click()
						.then($gender => {
							Gender = $gender.text();
						});
				});
				this.get.mobileNumberInput().clear().should('not.have.text').type(val4);

				this.get.dateOfBirthInput().then(() => {
					let month, day, year;

					this.get
						.dateOfBirthInput()
						.click()
						.then(() => {
							month = faker.date.month();
							day = faker.datatype.number({ min: 1, max: 28 }).toString();
							year = faker.datatype.number({ min: 1940, max: 2023 }).toString();

							this.get.month().select(month);
							this.get.year().select(year);
							this.get.day().contains(day).click();
							Birthday = `${day} ${month},${year}`;
						});
				});

				this.get.subjectInput().then(() => {
					let random;
					this.get.subjectInput().should('not.have.text').type('a');
					this.get.selectSubject().then(index => {
						random = Cypress._.random(0, index.length - 3);
						this.get
							.selectSubject()
							.eq(random)
							.click()
							.then($subject => {
								Subject = $subject.text();
							});
					});
				});

				this.get.hobbiesInput().then(index => {
					let random;
					random = Cypress._.random(3, index.length - 1);
					this.get
						.hobbiesInput()
						.eq(random)
						.click()
						.then($hobbies => {
							Hobbies = $hobbies.text();
						});
				});

				this.get
					.picture()
					.click()
					.then(() => this.get.picture().selectFile('cypress/fixtures/images/upexlogo.png'));

				this.get.currentAddressInput().clear().should('not.have.text').type(val5);

				this.get.stateInput().then(() => {
					let random;
					this.get.stateInput().click();
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
				});

				this.get.cityInput().then(() => {
					let random;

					this.get.cityInput().click();
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
				});

				this.get.submitBttn().click();
				this.get.formContainer().should('have.class', 'was-validated');
			})
			.then(() => {
				return [Gender, Subject, Hobbies, State, City, Birthday];
			});
	}

	submitEmptyForm() {
		this.get.firstNameInput().clear().should('not.have.text');
		this.get.lastNameInput().clear().should('not.have.text');
		this.get.emailInput().clear().should('not.have.text');
		this.get.mobileNumberInput().clear().should('not.have.text');
		this.get.dateOfBirthInput().then(date => {
			let Date;
			Date = date.text();
			this.get.dateOfBirthInput().should('have.text', Date);
		});
		this.get.subjectInput().should('not.have.text');
		this.get.currentAddressInput().clear().should('not.have.text');
		this.get.submitBttn().click();
		this.get.formContainer().should('have.class', 'was-validated');
	}

	fillInvalidForm({ email: val1, mobileNumber: val2 }) {
		this.get.firstNameInput().clear().should('not.have.text');
		this.get.lastNameInput().clear().should('not.have.text');
		this.get.emailInput().clear().should('not.have.text').type(val1);
		this.get.mobileNumberInput().clear().should('not.have.text').type(val2);
		this.get.dateOfBirthInput().then(date => {
			let Date;
			Date = date.text();
			this.get.dateOfBirthInput().should('have.text', Date);
		});
		this.get.subjectInput().should('not.have.text');
		this.get.currentAddressInput().clear().should('not.have.text');
		this.get.submitBttn().click();
		this.get.formContainer().should('have.class', 'was-validated');
	}
}

export const formPage = new Form();
