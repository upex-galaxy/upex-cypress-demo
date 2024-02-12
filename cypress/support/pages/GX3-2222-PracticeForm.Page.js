class Form {
	get = {
		firstName : () => cy.get('#firstName'),
		lastName : () => cy.get('#lastName'),
		email : () => cy.get('#userEmail'),
		mobile : () => cy.get('#userNumber'),
		calendar : () => cy.get('#dateOfBirthInput'),
		monthSelector : () => cy.get('.react-datepicker__month-select'),
		yearSelector : () => cy.get('.react-datepicker__year-select'),
		validDaysSelector : () => cy.get('.react-datepicker__week > div:not(.react-datepicker__day--outside-month)'),
		subjects : () => cy.get('#subjectsInput'),
		currentAddress : () => cy.get('#currentAddress'),
		gender : () => cy.get('.custom-radio'),
		hobbies : () => cy.get('.custom-checkbox'),
		uploadFile : () => cy.get('#uploadPicture'),
		state : () => cy.get('#state'),
		city : () => cy.get('#city'),
		stateAndCityOptions : () => cy.get('[class$=option]'),
		submitButton : () => cy.get('#submit'),
	};

	completeInputs(firstName, lastName, email, mobile, subjects, address) {
		this.get.firstName().clear().type(firstName);
		this.get.lastName().clear().type(lastName);
		this.get.email().clear().type(email);
		this.get.mobile().clear().type(mobile);
		this.get.subjects().type(subjects);
		this.get.currentAddress().clear().type(address);
	}
	selectRandomOption(option) {
		return option().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return option().eq(randomOption).click({ force: true });
		});
	}
	selectAllHobbies() {
		return this.get.hobbies().then($options => {
			$options.each((index,hobbie) => {
				cy.wrap(hobbie).click();
			});
		});
	}
	getRandomDateOfBirth() {
		this.get.calendar().click();
		this.getMonth();
		this.getYear();
		this.getDay();
	}
	getMonth() {
		return this.get.monthSelector().then($selectMonth => {
			const optionsCount = $selectMonth.find('option').length;
			const randomOption = Math.floor(Math.random() * optionsCount);
			return cy.wrap($selectMonth).select(randomOption);
		});
	}
	getYear() {
		const currentYear = new Date().getFullYear();
		return this.get.yearSelector().then($selectYear => {
			const arrayOfYears = $selectYear.find('option').toArray();
			const validYears = arrayOfYears.filter(years => parseInt(years.text) <= currentYear);
			const randomOption = Math.floor(Math.random() * validYears.length);
			return cy.wrap($selectYear).select(randomOption);
		});
	}
	getDay() {
		return this.get.validDaysSelector().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.validDaysSelector().eq(randomOption).click();
		});
	}
	selectFile() {
		this.get.uploadFile().selectFile('cypress/fixtures/images/upexlogo.png');
	}
	selectState(option) {
		this.get.state().click();
		return this.selectRandomOption(option);
	}
	selectCity(option) {
		this.get.city().click();
		return this.selectRandomOption(option);
	}
	submitForm() {
		this.get.submitButton().click({force:true});
	}


}
export const formPage = new Form();