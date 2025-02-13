class FormsPage {
	elementos = {
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),

		email: () => cy.get('#userEmail'),
		genderRadio: () => cy.get('[class*=custom-radio]'),
		genders: () => cy.get('[type="radio"]'),

		mobilNumber: () => cy.get('#userNumber'),

		dateOfBirth: () => cy.get('#dateOfBirthInput'),
		reacPicker: () => cy.get('[class*= month-container]'),
		selectDateMonth: () => cy.get('select[class*= month-select]'),
		selectDateYear: () => cy.get('select[class*= year-select]'),
		selectDateDay: () => cy.get('[role="listbox"] [role="option"]:not([class*= --outside-month])'),

		subjects: () => cy.get('#subjectsContainer'),

		selectArchivo: () => cy.get('#uploadPicture'),

		textareaCurrentAddress: () => cy.get('#currentAddress')
	};

	typeInputFirstName(inputFirstName) {
		this.elementos.firstName().type(inputFirstName);
	}
	typeInputLastName(inputLastName) {
		this.elementos.lastName().type(inputLastName);
	}
	typeInputEmail(inputEmail) {
		this.elementos.email().type(inputEmail);
	}
	checkRadioGender() {
		this.elementos.genderRadio();
		this.genderRadio.genders().check();
	}
	typeMobilNumber(inputMobilNumber) {
		this.elementos.mobilNumber().type(inputMobilNumber);
	}
	clickSubjects() {
		this.elementos.subjects().click();
	}
	typeCurrentAddress(currentAddress) {
		this.elementos.textareaCurrentAddress().type(currentAddress);
	}
	openDatePicker() {
		this.elementos.dateOfBirth().click();
		this.elementos.reacPicker().should('be.visible');
	}

	selectDatePicker(year, month, day) {
		const yearValue = year.toString();
		const monthIndex = month - 1;
		const dayValue = day.toString();

		this.elementos.selectDateMonth().select(monthIndex.toString());
		this.elementos.selectDateYear().select(yearValue);
		return this.elementos
			.selectDateDay()
			.contains(dayValue)
			.then(day => {
				cy.wrap(day).click();
				return cy
					.wrap(day)
					.invoke('attr', 'aria-label')
					.then(labelText => labelText);
			});
	}
}

export const formsPage = new FormsPage();
