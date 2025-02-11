class FormsPage {
	elementos = {
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),

		email: () => cy.get('#userEmail'),
		gender1: () => cy.get('label[for="gender-radio-1"]'),
		gender2: () => cy.get('label[for="gender-radio-2"]'),
		gender3: () => cy.get('label[for="gender-radio-3"]'),
		mobilNumber: () => cy.get('#userNumber'),

		dateOfBirth: () => cy.get('#dateOfBirthInput'),
		selectDatePickerMonth: () => cy.get('select.react-datepicker__month-select'),
		selectDatePickerYear: () => cy.get('selec.react-datepicker__year-select'),
		selectDatePickerDay: () => cy.get('.reactt-datepicker__day')
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
	typeMobilNumber(inputMobilNumber) {
		this.elementos.mobilNumber().type(inputMobilNumber);
	}
}

export const formsPage = new FormsPage();
