class PracticeForm {
	get = {
		inputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		genderMale: () => cy.get('#gender-radio-1'),
		genderFemale: () => cy.get('#gender-radio-2'),
		genderOther: () => cy.get('#gender-radio-3'),
		inputMobileNumber: () => cy.get('#userNumber'),
		dateDay: () => cy.get('.react-datepicker__day'),
		dateMonth: () => cy.get('.class="react-datepicker__month-select"'),
		dateYear: () => cy.get('.react-datepicker__year-select'),
		inputSubject: () => cy.get('#subjectsContainer'),
		hobbiesSports: () => cy.get('#hobbies-checkbox-1'),
		hobbiesReading: () => cy.get('#hobbies-checkbox-2'),
		hobbiesMusic: () => cy.get('#hobbies-checkbox-3'),
		selectPicture: () => cy.get('#uploadPicture'),
		inputCurrentAddress: () => cy.get('#currentAddress'),
		selectState: () => cy.get('#state'),
		selectCity: () => cy.get('#city'),
		button: () => cy.get('submit')
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
}
export const formPage = new PracticeForm();
