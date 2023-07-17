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
		userSubjectChoice: () => cy.get('#react-select-2-option-0'),
		userHobbies: () => cy.get('#hobbiesWrapper [class=custom-control-input]'),
		uploadPictureButton: () => cy.get('#uploadPicture'),
		userAddress: () => cy.get('#currentAddress'),
		userState: () => cy.get('#state'),
		dropdownStateOptions: () => cy.get('[class$=option]'),
		dropdownStateText: () => cy.get('[class$=singleValue]'),
		userCity: () => cy.get('#city'),
		dropdownCityOptions: () => cy.get('[class$=option]'),
		dropdownCityText: () => cy.get('[class$=singleValue]').eq(1),
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

	userSubjects(randomSubject) {
		randomSubject && this.get.userSubjects().type(randomSubject);
	}

	userSubjectChoice() {
		this.get.userSubjectChoice().click({ force: true });
	}
	userHobbies() {
		let randomCheck;
		return this.get
			.userHobbies()
			.then(laargo => {
				randomCheck = Cypress._.random(0, laargo.lenght - 1);
				this.get.userHobbies().eq(randomCheck).click({ force: true });
			})
			.then(() => {
				return randomCheck;
			});
	}

	uploadPictureButton() {
		this.get.uploadPictureButton().selectFile('cypress/fixtures/images/upexlogo.png');
	}

	selectRandomState() {
		let stateText;
		this.get.userState().click();
		return this.get
			.dropdownStateOptions()
			.then(options => {
				const randomIndex = Cypress._.random(0, options.length - 1);
				this.get
					.dropdownStateOptions()
					.eq(randomIndex)
					.then(nameSelectedOption => {
						stateText = nameSelectedOption.text();
					})
					.click({ force: true });
			})
			.then(() => {
				return stateText;
			});
	}

	selectRandomCity() {
		let cityText;
		this.get.userCity().click();
		return this.get
			.dropdownCityOptions()
			.then(options => {
				const randomIndex = Cypress._.random(0, options.lenght - 1);
				this.get
					.dropdownCityOptions()
					.eq(randomIndex)
					.then(nameSelectedOption => {
						cityText = nameSelectedOption.text();
					})
					.click({ force: true });
			})
			.then(() => {
				return cityText;
			});
	}

	userCity() {
		this.get.userCity().click();
	}
	userAddress(randomAddress) {
		randomAddress && this.get.userAddress().type(randomAddress);
	}

	invalidEmail() {
		this.get.userEmail().type('aaa.com');
	}

	invalidMobile(randomInvalidMobile) {
		randomInvalidMobile && this.get.userNumber().type(randomInvalidMobile);
	}
}
export const forms = new Forms();
