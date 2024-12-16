class DatePickerPage {
	get = {
		selectDateInput: () => cy.get('#datePickerMonthYearInput'),
		dateAndTimeInput: () => cy.get('#dateAndTimePickerInput'),

		selectMonthDate: () => cy.get('.react-datepicker__month-select'),
		selectMonthDateAndTime: () => cy.get('.react-datepicker__month-read-view'),
		optionMonthDateAndTime: () => cy.get('.react-datepicker__month-dropdown'),
		selectYearDate: () => cy.get('.react-datepicker__year-select'),
		selectYearDateAndTime: () => cy.get('.react-datepicker__year-read-view'),
		optionYearDateAndTime: () => cy.get('.react-datepicker__year-option'),
		selectDaysOption: () => cy.get('[role="listbox"] [role=option]:not([class*=--outside-month])'),
		daysSelected: () => cy.get('.react-datepicker__day--selected'),
		headerMonth: () => cy.get('.react-datepicker__header'),
		navigationPrevious: () => cy.get('.react-datepicker__navigation--previous'),
		navigationNext: () => cy.get('.react-datepicker__navigation--next'),
		selectTimeOption: () => cy.get('[class*=time-list-item]'),

		reactPicker: () => cy.get('[class*=month-container]')
	};
	openDatePicker() {
		this.get.selectDateInput().click();

		this.get.reactPicker().should('be.visible');
	}
	openDateAndTimePicker() {
		this.get.dateAndTimeInput().click();

		this.get.reactPicker().should('be.visible');
	}
}
export const datePickerPage = new DatePickerPage();
