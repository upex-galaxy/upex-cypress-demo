class Forms {
	get = {
		mainTitle: () => cy.get('.playgound-header'),
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		userEmail: () => cy.get('#userEmail'),
		userGender: () => cy.get('#genterWrapper [class=custom-control-input]'),
		userNumber: () => cy.get('#userNumber'),
		userDateOfBirth: () => cy.get('#dateOfBirthInput'),
		userYearOfBirth: () => cy.get('[class="react-datepicker__year-select"]'),
		userMonthOfBirth: () => cy.get('[class="react-datepicker__month-select"]'),
		userDayOfBirth: () => cy.get('.react-datepicker__day--today'),
		submitButton: () => cy.get('#submit'),
	};

	firstName(randomName) {
		randomName && this.get.firstName().type(randomName);
	}

	lastName(randomLastName) {
		randomLastName && this.get.lastName().type(randomLastName);
	}

	userEmail(randomEmail) {
		randomEmail && this.get.userEmail().type(randomEmail);
	}

	selectRandomGender() {
		let randomIndex;
		return this.get
			.userGender()
			.then(largo => {
				randomIndex = Cypress._.random(0, largo.length - 1);
				this.get.userGender().eq(randomIndex).click({ force: true });
			})
			.then(() => {
				return randomIndex;
			});
	}

	userNumber(randomNumber) {
		randomNumber && this.get.userNumber().type(randomNumber);
	}

	userYearOfBirth(randomYear) {
		randomYear && this.get.userYearOfBirth().select(1900, 2100);
	}

	userMonthOfBirth(randomMonth) {
		randomMonth && this.get.userMonthOfBirth().select(0, 11);
	}

	userDayOfBirth(randomDay) {
		randomDay && this.get.userDayOfBirth();
	}
}
export const forms = new Forms();
