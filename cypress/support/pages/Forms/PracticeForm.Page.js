class PracticeForm {
	elements = {
		first_nameInput: () => cy.get('#firstName'),
		last_nameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		numberPhoneInput: () => cy.get('#userNumber'),
		radioButton: () => cy.get("[type='radio']"),
		dataPickButton: () => cy.get('#dateOfBirthInput'),
		yearSelectDropdown: () => cy.get('.react-datepicker__year-select'),
		monthSelectDropdown: () => cy.get('.react-datepicker__month-select'),
		DaySelectDropdown: () => cy.get('.react-datepicker__month div'),
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
	};

	enterFirst_name(data) {
		data && this.elements.first_nameInput().type(data).type('{enter}', { force: true });
	}

	enterLast_name(data) {
		data && this.elements.last_nameInput().type(data).type('{enter}', { force: true });
	}

	enterEmail(data) {
		this.elements.emailInput().type(data).type('{enter}', { force: true });
	}

	enterNumbrePhone(data) {
		data && this.elements.numberPhoneInput().type(data);
	}

	RadiobttnSelect(data) {
		this.elements.radioButton().eq(data).click({ force: true }); //Index 0, 1, 2
	}

	dataPickButton() {
		this.elements.dataPickButton().click({ force: true });
	}

	yearSelect(data) {
		this.elements.yearSelectDropdown().select(data);
	}

	monthSelect(data) {
		this.elements.monthSelectDropdown().select(data);
	}

	DaySelect(index) {
		this.elements.DaySelectDropdown().eq(index).click();
	}

	EnterSubjects(data) {
		this.elements.SubjectsInput().type(data, { force: true }).type('{enter}');
	}

	sportHobbieLabel() {
		this.elements.sportHobbieLabelElement().click();
	}

	readingHobbieLabel() {
		this.elements.readingHobbieLabelElement().click();
	}

	musicHobbieLabel() {
		this.elements.musicHobbieLabelElement().click();
	}

	chooseFile(file) {
		this.elements.fileInput().click().attachFile(file);
	}

	CurrentAddress(data) {
		this.elements.currentAddressInput().type(data);
	}

	Select_City(data) {
		this.elements.dropdownSelect_City().click({ force: true }).type(data).type('{enter}');
	}

	Select_State(data) {
		this.elements.dropdownSelect_State().click({ force: true }).type(data).type('{enter}');
	}

	submit() {
		this.elements.submitButton().click({ force: true });
	}

	PopupValues(index) {
		return this.elements.PopupValuesSelector().eq(index);
	}
}

export const form = new PracticeForm();
