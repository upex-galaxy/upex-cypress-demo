class PracticeForm {
	get = {
		firstNameInput: () => cy.get('#firstName'),
		lastNameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		numberPhoneInput: () => cy.get('#userNumber'),
		radioButton: () => cy.get("[type='radio']"),
		birthInput: () => cy.get('#dateOfBirthInput'),
		datepicker: () => cy.get('.react-datepicker__month-container'),
		yearDropdown: () => cy.get('.react-datepicker__year-select'),
		monthDropdown: () => cy.get('.react-datepicker__month-select'),
		weekSelect: () => cy.get('.react-datepicker__week'),
		daySelect: () => cy.get('.react-datepicker__day.react-datepicker__day--007.react-datepicker__day--selected'),
		subjectsInput: () => cy.get('#subjectsInput'),
		checkBox: () => cy.get("[type='checkbox']"),
		isCheckedBox: () => cy.get("[type='checkbox']:checked"),
		addressInput: () => cy.get('#currentAddress'),
		stateSelect: () => cy.get('#react-select-3-input'),
		citySelect: () => cy.get('#react-select-4-input'),
		stateContainer: () => cy.get('.css-1uccc91-singleValue'),
		cityContainer: () => cy.get('.css-1pahdxg-control > .css-1hwfws3'),
		fileInput: () => cy.get('#uploadPicture'),
		submitButton: () => cy.get('#submit'),
	};

	typeFirstName(data) {
		data && this.get.firstNameInput().type(data).type('{enter}', { force: true });
	}
	typeLastName(data) {
		data && this.get.lastNameInput().type(data).type('{enter}', { force: true });
	}
	typeNumberPhone(data) {
		data && this.get.numberPhoneInput().type(data);
	}
	selectGender(data) {
		this.get.radioButton().eq(data).click({ force: true });
	}
	clicBirthInput() {
		this.get.birthInput().click({ force: true });
	}
	yearSelect(data) {
		this.get.yearDropdown().select(data);
	}
	monthSelect(data) {
		this.get.monthDropdown().select(data);
	}
	weekClick(index) {
		this.get.weekSelect().eq(index).click();
	}
	typeEmail(data) {
		this.get.emailInput().type(data);
	}
	subjectsType(data) {
		this.get.subjectsInput().type(data, { force: true });
	}
	selectHobbies(data) {
		this.get.checkBox().eq(data).check({ force: true });
	}
	typeAddress(data) {
		this.get.addressInput().type(data, { force: true });
	}
	selectState(data) {
		this.get.stateSelect().click({ force: true }).type(data).type('{enter}');
	}
	selectCity(data) {
		this.get.citySelect().click({ force: true }).type(data).type('{enter}');
	}
	addFile(file) {
		this.get.fileInput().click().selectFile(file);
	}
	submitClick() {
		this.get.submitButton().click({ force: true });
	}
}
export const form = new PracticeForm();
