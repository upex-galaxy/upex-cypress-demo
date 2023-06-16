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
		SubjectsInput: () => cy.get('#subjectsInput'),
		//SubjectValue: () => cy.get('.css-12jo7m5.subjects-auto-complete__multi-value__label').eq(0),
		sportHobbieLabelElement: () => cy.get("label[for='hobbies-checkbox-1']"),
		readingHobbieLabelElement: () => cy.get("label[for='hobbies-checkbox-2']"),
		musicHobbieLabelElement: () => cy.get("label[for='hobbies-checkbox-3']"),
		fileInput: () => cy.get('#uploadPicture'),
		currentAddressInput: () => cy.get('#currentAddress'),
		dropdownSelect_State: () => cy.get('input#react-select-3-input'),
		Select_StateAndCityValue: () => cy.get('.css-1uccc91-singleValue'),
		dropdownSelect_City: () => cy.get('input[autocorrect="off"]').eq(2),
		Select_City_Container: () => cy.get('#city'),
		submitButton: () => cy.get('#submit'),
		PopupValuesSelector: () => cy.get('.table.table-dark.table-striped.table-bordered.table-hover tbody tr td'),
		modal: () => cy.get('.modal-content'),
		modalTitle: () => cy.get('.modal-title'),
	};

	typeFirstName(data) {
		data && this.get.firstNameInput().type(data).type('{enter}', { force: true });
	}

	typeLastName(data) {
		data && this.get.lastNameInput().type(data).type('{enter}', { force: true });
	}

	enterEmail(data) {
		this.get.emailInput().type(data).type('{enter}', { force: true });
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

	EnterSubjects(data) {
		this.get.SubjectsInput().type(data, { force: true }).type('{enter}');
	}

	sportHobbieLabel() {
		this.get.sportHobbieLabelElement().click();
	}

	readingHobbieLabel() {
		this.get.readingHobbieLabelElement().click();
	}

	musicHobbieLabel() {
		this.get.musicHobbieLabelElement().click();
	}

	chooseFile(file) {
		this.get.fileInput().click().attachFile(file);
	}

	CurrentAddress(data) {
		this.get.currentAddressInput().type(data);
	}

	Select_City(data) {
		this.get.dropdownSelect_City().click({ force: true }).type(data).type('{enter}');
	}

	Select_State(data) {
		this.get.dropdownSelect_State().click({ force: true }).type(data).type('{enter}');
	}

	submitClick() {
		this.get.submitButton().click({ force: true });
	}

	PopupValues(index) {
		return this.get.PopupValuesSelector().eq(index);
	}
}

export const form = new PracticeForm();
