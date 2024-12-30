class PracticeForm {
	public get = {
		inputFirstName: () => cy.get('input#firstName'),
		inputLastName: () => cy.get('input#lastName'),

		inputUserEmail: () => cy.get('input#userEmail'),
		optionsGenders: () => cy.get('label[for^="gender-radio-"]'),
		inputPhoneNumber: () => cy.get('input#userNumber'),

		inputDateOfBirth: () => cy.get('input#dateOfBirthInput'),
		selectDatePickerYear: () => cy.get('select.react-datepicker__year-select'),
		selectDatePickerMonth: () => cy.get('select.react-datepicker__month-select'),
		selectDatePickerDay: () => cy.get('.react-datepicker__day:not([class$="outside-month"])'),

		inputSubject: () => cy.get('input#subjectsInput'),
		selectSubjectOption: () => cy.get('.subjects-auto-complete__option'),
		labelSubjects: () => cy.get('.subjects-auto-complete__multi-value__label'),

		optionsHobbies: () => cy.get('[for*="hobbies-checkbox"]'),

		selectUploadFile: () => cy.get('#uploadPicture'),

		inputCurrentAddress: () => cy.get('#currentAddress'),

		selectState: () => cy.get('#state'),
		selectStateOption: () => cy.get('[id^="react-select-3-option-"]'),
		selectedStateLabel: () => cy.get('#state [class$="-singleValue"]'),

		selectCity: () => cy.get('#city'),
		selectCityOption: () => cy.get('[id^="react-select-4-option-"]'),
		selectedCityLabel: () => cy.get('#city [class$="-singleValue"]'),

		buttonSubmit: () => cy.get('#submit'),

		// 0:<tr><td>label</td>   1: <td>value</td><tr>
		resultTable: () => cy.get('.table-responsive'),

		resultName: () => this.get.resultTable().find('tbody tr td').eq(1),
		resultEmail: () => this.get.resultTable().find('tbody tr td').eq(3),
		resultGenders: () => this.get.resultTable().find('tbody tr td').eq(5),
		resultMobile: () => this.get.resultTable().find('tbody tr td').eq(7),
		resultBirth: () => this.get.resultTable().find('tbody tr td').eq(9),
		resultSubjects: () => this.get.resultTable().find('tbody tr td').eq(11),
		resultHobbies: () => this.get.resultTable().find('tbody tr td').eq(13),
		resultPicture: () => this.get.resultTable().find('tbody tr td').eq(15),
		resultAddress: () => this.get.resultTable().find('tbody tr td').eq(17),
		resultStateCity: () => this.get.resultTable().find('tbody tr td').eq(19)
	};

	public typeFirstName(pstrFirstName: string) {
		this.get.inputFirstName().as('typedFirstName').should('exist').type(pstrFirstName);
	}

	public typeLastName(pstrLastName: string) {
		this.get.inputLastName().as('typedLastName').should('exist').type(pstrLastName);
	}

	public typeEmail(pstrEmail: string) {
		this.get.inputUserEmail().as('typedEmail').should('exist').type(pstrEmail);
	}

	public selectRandomGender() {
		const INT_RANDOM = Cypress._.random(0, 2);

		this.get.optionsGenders().eq(INT_RANDOM).as('selectedOptionGender').click();
	}

	public typePhoneNumber(pstrPhoneNumber: string) {
		this.get.inputPhoneNumber().as('typedPhoneNumber').should('exist').type(pstrPhoneNumber);
	}

	public selectRandomDate() {
		/* Años bisiestos:
			- los múltiplos de 4
			- salvo los múltiplos de 100
			- a excepción de los múltiplos de 1000
			(ej. el año 2000 fue bisiesto pese a ser múltiplo de 100)
			Seleccionamos primero el año, luego el mes y por último el día,
			para cercionarnos que febrero tiene el número correcto de días
		*/

		this.get.inputDateOfBirth().as('selectedBirthDate').click();

		this.get
			.selectDatePickerYear()
			.find('option')
			.its('length')
			.then($intElem => {
				const INT_RANDOM_YEAR = Cypress._.random(0, $intElem - 1);

				this.get.selectDatePickerYear().select(INT_RANDOM_YEAR);
			});

		const INT_RANDOM_MONTH = Cypress._.random(0, 11);

		this.get.selectDatePickerMonth().select(INT_RANDOM_MONTH);

		this.get
			.selectDatePickerDay()
			.its('length')
			.then($intElem => {
				const INT_RANDOM_DAY = Cypress._.random(0, $intElem - 1);

				this.get.selectDatePickerDay().eq(INT_RANDOM_DAY).click();
			});
	}

	public typeRandomSubjects(pstrChar: string) {
		this.get.inputSubject().should('exist').type(pstrChar);

		this.get
			.selectSubjectOption()
			.should('exist')
			.its('length')
			.then($intElem => {
				const INT_RANDOM_OPTION = Cypress._.random(0, $intElem - 1);

				this.get.selectSubjectOption().eq(INT_RANDOM_OPTION).as('selectedSubject').click();
			});
	}

	public selectRandomHobbies() {
		const INT_RANDOM_OPTION = Cypress._.random(0, 2);

		this.get.optionsHobbies().eq(INT_RANDOM_OPTION).as('selectedHobby').click();
	}

	public uploadPicture(pstrFilePath: string) {
		this.get.selectUploadFile().as('selectedFileName').should('exist').selectFile(pstrFilePath);
	}

	public typeCurrentAddress(pstrAddress: string) {
		this.get.inputCurrentAddress().as('typedAddress').should('exist').type(pstrAddress);
	}

	public selectRandomState() {
		this.get.selectState().as('state').should('exist').click();

		this.get
			.selectStateOption()
			.should('exist')
			.its('length')
			.then($intElem => {
				const INT_RANDOM_OPTION = Cypress._.random(0, $intElem - 1);

				this.get.selectStateOption().eq(INT_RANDOM_OPTION).as('selectedState').click();
			});
	}

	public selectRandomCity() {
		this.get.selectCity().should('exist').click();

		this.get
			.selectCityOption()
			.should('exist')
			.its('length')
			.then($intElem => {
				const INT_RANDOM_OPTION = Cypress._.random(0, $intElem - 1);

				this.get.selectCityOption().eq(INT_RANDOM_OPTION).as('selectedCity').click();
			});
	}

	public clickSubmit() {
		this.get.buttonSubmit().should('exist').click();
	}

	public formatDate(pstrDate: string): string {
		const DATA_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		let _birthDate = new Date(pstrDate);
		let _day = _birthDate.getDate();
		let _month = DATA_MONTHS[_birthDate.getMonth()];
		let _year = _birthDate.getFullYear();
		let _formatedDate = `${_day} ${_month},${_year}`;

		return _formatedDate;
	}
}

export const objPracticeFormPage = new PracticeForm();
