class Practiceform {
	get = {
		firtName : () => cy.get('#firstName'),
		lastName : () => cy.get('#lastName'),
		dataEmail : () => cy.get('#userEmail'),
		genderName : () => cy.get('[name="gender"]'),
		genderButton : () => cy.get('[for^="gender-radio"]'),
		genderContainer : () => cy.get('#genterWrapper'),
		numberMobile : () => cy.get('#userNumber'),
		currentAddress : () => cy.get('#currentAddress'),
		inputDateBirth : () => cy.get('#dateOfBirthInput'),
		dropdownMonth : () => cy.get('.react-datepicker__month-select'),
		dropdownYears : () => cy.get('.react-datepicker__year-select'),
		randomDays : () => cy.get('[class="react-datepicker"] [class*="datepicker__day--"]:not([class*="outside-month"]'),
		subjectContainer : () => cy.get('#subjectsContainer'),
		subjectAutoCompleteMenu : () => cy.get('[id^="react-select-2-option"]'),
		hobbiesContainer : () => cy.get('#hobbiesWrapper'),
		hobbiesButton : () => cy.get('[for^="hobbies-checkbox"]'),
		hobbiesName : () => cy.get('[type="checkbox"]'),
		uploadPicture : () => cy.get('#uploadPicture'),
		state : () => cy.get('#state'),
		stateOption : () => cy.get('[id^="react-select-3-option"]'),
		city : () => cy.get('#city'),
		cityOption : () => cy.get('[id^="react-select-4-option"]'),
		submitButton : () => cy.get('#submit'),

	};
	inputsComplete(name, lastName, email, number, address) {
		this.get.firtName().type(name);
		this.get.lastName().type(lastName);
		this.get.dataEmail().type(email);
		this.get.numberMobile().type(number);
	    this.get.currentAddress().type(address);
	}
	genderSelect() {
		this.get.genderContainer().then(() => {
			const genderRandom = Cypress._.random(0, 2);
		 this.get.genderButton().eq(genderRandom).click();
		});
	}
	selectRandomDate() {
		this.get.inputDateBirth().click();
		this.get.dropdownMonth().then(monthArray => {
			const randomMonth = Cypress._.random(0,monthArray.length -1);
			cy.wrap(monthArray).select(randomMonth);
		});
		this.get.dropdownYears().then(yearsArray => {
			const randomYears = Cypress._.random(0,yearsArray.length -1);
			cy.wrap(yearsArray).select(randomYears);
		});
		this.get.randomDays().then(daysArray => {
			const randomDay = Cypress._.random(0, daysArray.length -1);
			cy.wrap(daysArray).eq(randomDay).click();
		});
	}
	autoCompleteSubject(value) {
	    this.get.subjectContainer().type(value);
		this.get.subjectAutoCompleteMenu().then(arraySubject => {
			const randomSelectSubject = Cypress._.random(0, arraySubject.length -1);
			cy.wrap(arraySubject).eq(randomSelectSubject).click();
		});

	}
	hobbiesCheckbox() {
		this.get.hobbiesContainer().then(() => {
			const hobbiesRandom = Cypress._.random(0, 2);
			this.get.hobbiesButton().eq(hobbiesRandom).click();
		}
		);
	}
	selectFile() {
		this.get.uploadPicture().selectFile('cypress/fixtures/images/upexgalaxy.gif');
	}
	selectState() {
		this.get.state().click();
		this.get.stateOption().then(arrayState => {
			const randomState = Cypress._.random(0, arrayState.length -1);
			cy.wrap(arrayState).eq(randomState).click();
		}
		);
	}
	selectCity() {
		this.get.city().click();
		this.get.cityOption().then(arrayCity => {
			const randomCity = Cypress._.random(0, arrayCity.length -1);
			cy.wrap(arrayCity).eq(randomCity).click();
		}
		);
	}
	clickButtonSubmit() {
		this.get.submitButton().click();
	}

}
export const formpractice = new Practiceform();