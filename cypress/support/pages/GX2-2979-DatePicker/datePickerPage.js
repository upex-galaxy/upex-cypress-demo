class DatePicker {
	get = {
		selectDatePicker: () => cy.get('#datePickerMonthYearInput'),
		yearInput: () => cy.get('select[class="react-datepicker__year-select"]'),
		monthInput: () => cy.get('.react-datepicker__month-select'),
		previousMonth: () => cy.contains('button', 'Previous Month'),
		nextMonth: () => cy.contains('button', 'Next Month'),
		dateAndTimePicker: () => cy.get('#dateAndTimePickerInput'),
		yearList: () => cy.get('.react-datepicker__year-read-view'),
		yearSelected: () => cy.get('.react-datepicker__year-option--selected'),
		monthDropdown: () => cy.get('[class^="react-datepicker__month-dropdown-container"]'),
		monthOptions: () => cy.get('.react-datepicker__month-option'),
		selectedMonth: () => cy.get('[class*="react-datepicker__month-option--selected_month"]'),
		printedMonth: () => cy.get('.react-datepicker__month-read-view--selected-month'),
		daySelected: () => cy.get('[class*="react-datepicker__day--selected "]'),
		timeBoxList: () => cy.get('.react-datepicker__time-box > ul >li'),
		timeSelected: () => cy.get('[class*="react-datepicker__time-list-item--selected"]'),
	};

	clickSelectDatePicker() {
		this.get.selectDatePicker().click({ force: true });
	}
	clicklistOfYear() {
		this.get.yearInput().trigger('click');
	}

	getDatePickerValue() {
		return this.get
			.selectDatePicker()
			.invoke('val')
			.then($valor => {
				Cypress.env('date', $valor);
			});
	}
	getDateAndTimePickerValue() {
		return this.get
			.dateAndTimePicker()
			.invoke('val')
			.then($valor => {
				Cypress.env('dateAndTime', $valor);
			});
	}
	clickDateAndTimePicker() {
		return this.get.dateAndTimePicker().click({ force: true });
	}
	clickYearList() {
		this.get.yearList().click();
	}
	clickMonthDropdown() {
		return this.get.monthDropdown().click();
	}
	clickTimeBoxList() {
		this.get.timeBoxList().eq(5).click();
	}
	clickPreviousMonthDate() {
		return datePicker.get
			.previousMonth()
			.click({ force: true })
			.then(() => {
				cy.get('.react-datepicker__month-select')
					.invoke('val')
					.then($valor2 => {
						cy.wrap($valor2)
							// el valor = 3 ... data.mon
							.should('be.a', 'string')
							.then(parseInt)
							.should('be.a', 'number')
							.then($texto2 => {
								Cypress.env('text2', $texto2);
							});
					});
			});
	}
	clickNextMonthDate() {
		return datePicker.get
			.nextMonth()
			.click({ force: true })
			.then(() => {
				cy.get('.react-datepicker__month-select')
					.invoke('val')
					.then($valor2 => {
						cy.wrap($valor2)
							// el valor = 3 ... data.mon
							.should('be.a', 'string')
							.then(parseInt)
							.should('be.a', 'number')
							.then($texto2 => {
								Cypress.env('text2', $texto2);
							});
					});
			});
	}
	clickNextMonthDT() {
		return datePicker.get
			.nextMonth()
			.click({ force: true })
			.then(() => {
				datePicker.get
					.printedMonth()
					.invoke('text')
					.then($texto => {
						Cypress.env('text', $texto);
					});
			});
	}
	clickPreviousMonthDT() {
		return datePicker.get
			.previousMonth()
			.click({ force: true })
			.then(() => {
				datePicker.get
					.printedMonth()
					.invoke('text')
					.then($texto => {
						Cypress.env('text', $texto);
					});
			});
	}
	randomIndexYear() {
		let indexMin = 1;
		let indexMax = 12;
		let randomYear = Math.floor(Math.random() * (indexMax - indexMin) + indexMin);
		return cy
			.get('[class*="react-datepicker__year-dropdown-container')
			.get('.react-datepicker__year-dropdown')
			.find('.react-datepicker__year-option')
			.eq(randomYear)
			.click();
	}
}

export const datePicker = new DatePicker();
