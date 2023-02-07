class DatePicker {
    get = {
        dateInput:()=> cy.get('#datePickerMonthYearInput'),  
        dateAndTimeInput:()=> cy.get('#dateAndTimePickerInput'),
        monthSelect:()=> cy.get("select[class*='month-select']"),
        currentMonthAndYearText:()=> cy.get("[class*='hasMonthDropdown']"),
        yearSelect:()=> cy.get("select[class*='year-select']"),
        daySelect:()=> cy.get('.react-datepicker__day'),
        timeSelect:()=> cy.get('.react-datepicker__time-list')
    }

    clickOnDate() {
		this.get.dateInput().click()
	}

    clickOnDateAndTime() {
		this.get.dateAndTimeInput().click()
	}
    selectMonth(n){
        this.get.monthSelect().select(n)
    }
    selectYear(n){
        this.get.yearSelect().select(n)
    }

}

export const datepicker = new DatePicker()