class DatePickerPage {
	get = {
		// Obtener cada elemento de la presente página:
		datePicker1: () => cy.get('[id="datePickerMonthYearInput"]'),
		datePicker2: () => cy.get('#dateAndTimePickerInput'),
		monthSelect: () => cy.get('.react-datepicker__month-select'),
		previuosMonth: () => cy.get('.react-datepicker__navigation--previous'),
		nextMonth: () => cy.get('button[class$="react-datepicker__navigation--next"]'),
		selectedMonthPicker1: () => cy.get('div[class$="hasMonthDropdown"]'),
		yearSelectPicker1: () => cy.get('.react-datepicker__year-select'),
		daySelectedPicker1: () => cy.get('div[class$="react-datepicker__day--today"]'),

		yearArrowPicker2: () => cy.get('.react-datepicker__year-read-view--selected-year'),
		yearSelectedPicker2: () => cy.get('.react-datepicker__year-option--selected'),

		
		
		monthSelecDownArrow2: () => cy.get('.react-datepicker__month-read-view--down-arrow'),
		selectedMonthPicker2: () => cy.get('div[class$="react-datepicker__current-month--hasMonthDropdown"]'),
		monthSelect2options: () => cy.get('.react-datepicker__month-option'),
		monthWithCheckMarkPicker2: () => cy.get('div[class$="react-datepicker__month-option--selected_month"]')

	}

	clickOnDatePicker1() {
		this.get.datePicker1().click()
	}
	clickOnDatePicker2() {
		this.get.datePicker2().click()
	}

	clickPreviousMonthOnDatePicker1() {
		this.get.previuosMonth().click()
	}

	clickNextMonthOnDatePicker1() {
		this.get.nextMonth().click()
	}

	
}

export const datePickerPage = new DatePickerPage()
