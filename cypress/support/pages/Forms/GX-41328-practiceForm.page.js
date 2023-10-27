import data from '@data/Form/GX-41328-practiceForm.json';
class Form {
	get = {
		imputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		radioGender: () => cy.get('div[class*="custom-radio"]'),
		radioButtonsGender: () => cy.get('input[type="radio"]'),
		inputMobile: () => cy.get('#userNumber'),
		inputDate: () => cy.get('#dateOfBirthInput'),
		selectMonth: () => cy.get('.react-datepicker__month-select'),
		selectYear: () => cy.get('.react-datepicker__year-select'),
		selectDay: () => cy.get('.react-datepicker__day'),
		checkBoxHobbies: () => cy.get('.custom-checkbox'),
		checksHobbies: () => cy.get('input[type="checkbox"]'),
		inputSubjects: () => cy.get('#subjectsContainer'),
		clickInSubjects: () => cy.get('#react-select-2-option-0'),
		inputPicture: () => cy.get('#uploadPicture'),
		textAreaCurrentAddress: () => cy.get('#currentAddress'),
		selectableState: () => cy.get('#state'),
		clickState: () => cy.get('#react-select-3-option-0'),
		selectableCity: () => cy.get('#city'),
		clickCity: () => cy.get('#react-select-4-option-0'),
		buttonSubmit: () => cy.get('#submit'),
		submitAssert: () => cy.get('.modal-content'),
	};

	typeFirstname(randomFirstname) {
		this.get.imputFirstName().type(randomFirstname);
	}
	typeLastName(randomLastName) {
		this.get.inputLastName().type(randomLastName);
	}
	typeEmail(randomEmail) {
		this.get.inputEmail().type(randomEmail);
	}
	selectGender(randomGender) {
		this.get.radioGender().eq(randomGender).click();
	}
	typeMobile(randomPhoneNumber) {
		this.get.inputMobile().type(randomPhoneNumber);
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

	selectHobbies(randomHobbies) {
		this.get.checkBoxHobbies().eq(randomHobbies).click();
	}
	selectSubjects() {
		this.get.inputSubjects().type(data.subjects);
		this.get.clickInSubjects().click();
	}
	selectPicture() {
		this.get.inputPicture().click();
		this.get.inputPicture().selectFile('cypress/fixtures/images/upexgalaxy.gif');
	}
	typeCurrentAddress(randomAddress) {
		this.get.textAreaCurrentAddress().type(randomAddress);
	}
	selectState() {
		this.get.selectableState().type(data.state);
		this.get.clickState().click();
	}
	selectCity() {
		this.get.selectableCity().type(data.city);
		this.get.clickCity().click();
	}
	clickSubmit() {
		this.get.buttonSubmit().click();
	}
}
export const formPage = new Form();
