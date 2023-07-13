class Forms {
	get = {
		mainTitle: () => cy.get('.playgound-header'),
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		userEmail: () => cy.get('#userEmail'),
		userGender: () => cy.get('#genterWrapper [class=custom-control-input]'),
		userNumber: () => cy.get('#userNumber'),
		userDateOfBirth: () => cy.get('#dateOfBirthInput'),
		userSubjects: () => cy.get('#subjectsContainer'),
		userSubjectsList: () => cy.get('.subjects-auto-complete__menu'),
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

	userSubjects(randomSubject) {
		randomSubject && this.get.userSubjects().type(randomSubject);
	}
}
export const forms = new Forms();
