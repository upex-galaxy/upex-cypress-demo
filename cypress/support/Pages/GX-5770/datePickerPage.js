class DatePickerPage {
	get = {
		// Obtener cada elemento de la presente página:
		datePicker1: () => cy.get('[id="datePickerMonthYearInput"]'),
		datePicker2: () => cy.get('#dateAndTimePickerInput'),
		monthSelect: () => cy.get('.react-datepicker__month-select'),
		previuosMonth: () => cy.get('.react-datepicker__navigation--previous'),
		nextMonth: () => cy.get('button[class$="react-datepicker__navigation--next"]'),
		selectedMonthDatePicker1: () => cy.get('div[class$="hasMonthDropdown"]'),
		yearSelectPicker1: () => cy.get('.react-datepicker__year-select'),
	}

	verifyFormatOnDatePicker1() {
		this.get.datePicker1()
			.invoke('val')
			.should('match', /\d\d\/\d\d\/\d\d\d\d/i)
		cy.log(`FORMAT HAS BEEN VERIFIED ON DATE PICKER 1`)
	}

	verifyCurrentDayOnDatePicker1(day) {
		this.get.datePicker1().invoke('val').should('eq', `${day}`)
		cy.log(`CURRENT DAY HAS BEEN VERIFIED ON DATE PICKER 1`)
	}

	verifyDatePicker2(monthName, dd2, yyyy, currentTime) {
		this.get.datePicker2().invoke('val').should('eq', `${monthName} ${dd2}, ${yyyy} ${currentTime}`)
		cy.log(`CURRENT DATE AND FORMAT HAVE BEEN VERIFIED ON DATE PICKER 2`)
	}

	clickOnDatePicker1() {
		this.get.datePicker1().click()
	}

	verifyMonthsOnDatePicker1(months) {
		for (let index = 0; index < months.length; index++) {
			const nameOfMonth = months[index]
			this.get.monthSelect().select(index)
			this.get
				.monthSelect()
				.select(nameOfMonth)
				.then(() => {
					cy.get(`select.react-datepicker__month-select option:selected`).should('have.text', nameOfMonth)
				})

			cy.log(`The selected month is:  ${nameOfMonth}`)
		}
	}

	clickPreviousMonthOnDatePicker1() {
		this.get.previuosMonth().click()
	}

	clickNextMonthOnDatePicker1() {
		this.get.nextMonth().click()
	}

	verifyPreviousMonthOnDatePicker1(previous, year) {
		if (previous == 'December') {
			this.get.selectedMonthDatePicker1()
				.invoke('text')
				.should('eq', `${previous} ${year - 1}`)
		} else {
			cy.contains(`${previous} ${year}`)
		}
	}

	verifyNextMonthOnDatePicker1(next, year) {
		if (next == 'January') {
			this.get.selectedMonthDatePicker1()
				.invoke('text')
				.should('eq', `${next} ${year + 1}`)
		} else {
			this.get.selectedMonthDatePicker1().invoke('text').should('eq', `${next} ${year}`)
		}
	}

	verifyYearsOnDatePicker1() {

		for (let index = 1980; index < 2025; index++) {
			index = index.toString()
			this.get.yearSelectPicker1().select(index).invoke('val').should('eq', index)
		}
	}
}

export const datePickerPage = new DatePickerPage()
