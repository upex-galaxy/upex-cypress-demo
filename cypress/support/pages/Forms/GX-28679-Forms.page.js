class Form {
	get = {
		firstNameInput: () => cy.get('#firstName'),
		lastNameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		genderContain: () => cy.get('.custom-control.custom-radio.custom-control-inline'),
		movilNumber: () => cy.get('#userNumber'),
		calendar: () => cy.get('#dateOfBirthInput'),
		year: () => cy.get('.react-datepicker__year-select'),
		month:() => cy.get('.react-datepicker__month-select'),
	};
	firstNameField(name) {
		this.get.firstNameInput().type(name);	
	}
	lastNameField(name) {
		this.get.lastNameInput().type(name);
	}
	emailField(email) {
		this.get.emailInput().type(email);
	}
	selectGenderOption() {
		const randomIndex = Math.floor(Math.random() * 3);
		this.get.genderContain().eq(randomIndex).click();
	}
	RandomPhoneNumber() {
		const minPhoneNumber = 1000000000;
		const maxPhoneNumber = 9999999999;
		const randomNumber = Math.floor(Math.random() * (maxPhoneNumber - minPhoneNumber + 1)) + minPhoneNumber;
		return randomNumber.toString();
	}
	numberField(number) {
		this.get.movilNumber().type(number);
	}
	dateOfBirth() {
		this.get.calendar().click();
	}
	SelectYear() {
		const randomIndex = Math.floor(Math.random() * 200);
		this.get.year().eq(randomIndex).select();
	}
	SelectMonth() {
		const randomIndex = Math.floor(Math.random() * 11);
		this.get.month().eq(randomIndex).select();
	}
}
export const form = new Form();