class PracticeForm {
	get = {
		inputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		radioButtonGender: () => cy.get('div[class*="custom-radio"]'),
		radioButtonGenderSelect: () => cy.get('input[type="radio"]'),
		inputMobileNumber: () => cy.get('#userNumber'),
		inputDate: () => cy.get('#dateOfBirthInput'),
		selectMonth: () => cy.get('.react-datepicker__month-select'),
		selectYear: () => cy.get('.react-datepicker__year-select'),
		selectDay: () => cy.get('.react-datepicker__day'),
		inputSubject: () => cy.get('#subjectsContainer'),
		clickInSubjects: () => cy.get('#react-select-2-option-0'),
		checkHobbies: () => cy.get('.custom-checkbox'),
		checksHobbiesSelect: () => cy.get('input[type="checkbox"]'),
		selectPicture: () => cy.get('#uploadPicture'),
		inputCurrentAddress: () => cy.get('#currentAddress'),
		selectableState: () => cy.get('#state'),
		clickState: () => cy.get('#react-select-3-option-1'),
		selectableCity: () => cy.get('#city'),
		clickCity: () => cy.get('#city div[id*=react-select]'),
		buttonSubmit: () => cy.get('#submit'),
		submitAssert: () => cy.get('.modal-content')
	};

	typeFirstName(firstName) {
		this.get.inputFirstName().type(firstName);
	}
	typeLastName(lastName) {
		this.get.inputLastName().type(lastName);
	}
	typeEmail(email) {
		this.get.inputEmail().type(email);
	}
	typeMobileNumber(mobileNumber) {
		this.get.inputMobileNumber().type(mobileNumber);
	}
	typeCurrentAddress(currentAddress) {
		this.get.inputCurrentAddress().type(currentAddress);
	}
	selectGender(randomNumber) {
		this.get.radioButtonGender().eq(randomNumber).click();
	}
	selectHobbies(randomNumber) {
		this.get.checkHobbies().eq(randomNumber).click();
	}
	selectSubjects(letter) {
		this.get.inputSubject().type(letter);
		this.get.clickInSubjects().click();
	}
	selectPicture() {
		this.get.selectPicture().click();
		this.get.selectPicture().selectFile('cypress/fixtures/images/upexgalaxy.gif');
	}
	selectMonth(randomMonth) {
		this.get.inputDate().click();
		this.get
			.selectMonth()
			.contains(randomMonth)
			.then($option => {
				const value = $option.val();
				this.get.selectMonth().select(value);
			});
	}
	selectYear(stringYear) {
		this.get.inputDate().click();
		this.get.selectYear().select(stringYear);
	}
	selectDay(randomDay) {
		this.get.inputDate().click();
		this.get.selectDay().contains(randomDay).click();
	}
	selectState(letterState) {
		this.get.selectableState().type(letterState);
		this.get.clickState().click();
	}
	selectCity(letterCity) {
		this.get.selectableCity().type(letterCity);
		this.get.clickCity().eq(0).click();
	}
	clickSubmit() {
		this.get.buttonSubmit().click();
	}
}
export const formPage = new PracticeForm();
