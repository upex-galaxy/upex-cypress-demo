class DatePicker {
	get = {
		firstDateInput: () => cy.get("[id = 'datePickerMonthYearInput']"),
		yearFirst: () => cy.get('.react-datepicker__year-select'),
		monthFirst: () => cy.get('.react-datepicker__month-select'),
		monthFirstSelected: () => cy.get('.react-datepicker__month-select option:selected'),
		previousMonth: () => cy.get("[aria-label = 'Previous Month']"),
		nextMonth: () => cy.get("[aria-label= 'Next Month']"),
		actualMonth: () =>
			cy.get(
				'.react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown.react-datepicker__current-month--hasMonthDropdown'
			),
	};

	firstInputDate() {
		this.get
			.firstDateInput()
			.invoke('attr', 'value')
			.then(today => {
				cy.writeFile('../../fixtures/data/datePicker.json', { varToday: today });
			});
	}

	clickYearFirst() {
		this.get.firstDateInput().click();
		this.get.yearFirst().select(0);
	}

	clickMonthFirst() {
		this.get.firstDateInput().click();
		this.get.monthFirst().select(0);
	}

	clickPreviousMonth() {
		this.get.firstDateInput().click();
		this.get.previousMonth().click();
	}

	clickNextMonth() {
		this.get.firstDateInput().click();
		this.get.nextMonth().click();
	}
}

export const datePicker = new DatePicker();
