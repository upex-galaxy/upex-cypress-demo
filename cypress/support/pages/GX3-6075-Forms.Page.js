class FormsPage {
	elementos = {
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),

		email: () => cy.get('#userEmail'),
		gender1: () => cy.get('label[for="gender-radio-1"]'), //no lo se usar
		gender2: () => cy.get('label[for="gender-radio-2"]'), //no lo se usar
		gender3: () => cy.get('label[for="gender-radio-3"]'), //no lo se usar

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

	selectDatePicker(month, year, day) {
		const monthIndex = month - 1; // Ajuste porque los meses en JavaScript van de 0 a 11
		const yearValue = year.toString(); // Convertimos el año a string
		const dayValue = day.toString(); // Convertimos el día a string

		// Seleccionamos el mes en el select
		this.elementos.selectDateMonth().select(monthIndex.toString());

		// Seleccionamos el año en el select
		this.elementos.selectDateYear().select(yearValue);

		// Buscamos el día en el calendario y hacemos clic
		return this.elementos
			.selectDateDay()
			.contains(dayValue)
			.then(day => {
				cy.wrap(day).click();

				// Extraemos el atributo "aria-label" del día seleccionado
				return cy
					.wrap(day)
					.invoke('attr', 'aria-label')
					.then(labelText => labelText);
			});
	}
}

export const formsPage = new FormsPage();
