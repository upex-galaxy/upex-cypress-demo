export class DatePickerPage {
	constructor() {
		this.datePicker1 = '#datePickerMonthYearInput'
		this.datePicker2 = '#dateAndTimePickerInput'
		this.monthSelect = '.react-datepicker__month-select'
		this.previuosMonth = 'Previous Month'
        this.nextMonth = 'Next Month'
		this.selectedMonthDatePicker1 = '/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]'
		// xpath /html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]

		// css  #datePickerMonthYear > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__header > div.react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown.react-datepicker__current-month--hasMonthDropdown

        this.yearSelectPicker1 = '.react-datepicker__year-select'
	}

	verifyFormatOnDatePicker1() {
		cy.get(this.datePicker1)
			.invoke('val')
			.should('match', /\d\d\/\d\d\/\d\d\d\d/i)
		cy.log(`FORMAT HAS BEEN VERIFIED ON DATE PICKER 1`)
	}

	verifyCurrentDayOnDatePicker1(day) {
		cy.get(this.datePicker1).invoke('val').should('eq', `${day}`)
		cy.log(`CURRENT DAY HAS BEEN VERIFIED ON DATE PICKER 1`)
	}

	// Verify format and current day on datePicker2
	verifyDatePicker2(monthName, dd2, yyyy, currentTime) {
		cy.get(this.datePicker2).invoke('val').should('eq', `${monthName} ${dd2}, ${yyyy} ${currentTime}`)
		cy.log(`CURRENT DATE AND FORMAT HAVE BEEN VERIFIED ON DATE PICKER 2`)
	}

	clickOnDatePicker1() {
		cy.get(this.datePicker1).click()
	}

	verifyMonthsOnDatePicker1(months) {
		for (let index = 0; index < months.length; index++) {
			const nameOfMonth = months[index]
			cy.get(this.monthSelect).select(index)
			cy.get(this.monthSelect)
				.select(nameOfMonth)
				.then(() => {
					cy.get(`select${this.monthSelect} option:selected`).should('have.text', nameOfMonth)
				})
			cy.log(`The selected month is:  ${nameOfMonth}`)
		}
	}

	clickPreviousMonthOnDatePicker1() {
		cy.contains(this.previuosMonth).click()
	}

    clickNextMonthOnDatePicker1() {
		cy.contains(this.nextMonth).click()
	}

	verifyPreviousMonthOnDatePicker1(previous, year) {
		if (previous == 'December') {
			cy.xpath(this.selectedMonthDatePicker1)
				.invoke('text')
				.should('eq', `${previous} ${year - 1}`)
			// sin usar XPATH
			/*
            cy.get('.react-datepicker__month-container').within(() =>{
                cy.get('.react-datepicker__header').children(1).invoke('text').should('eq',previous)
            })
            */
		} else {
			cy.contains(`${previous} ${year}`)
		}
	}


    verifyNextMonthOnDatePicker1(next, year) {
		if (next == 'January') {
			cy.xpath(this.selectedMonthDatePicker1)
				.invoke('text')
				.should('eq', `${next} ${year + 1}`)
			// sin usar XPATH
			/*
            cy.get('.react-datepicker__month-container').within(() =>{
                cy.get('.react-datepicker__header').children(1).invoke('text').should('eq',previous)
            })
            */
		} else {
			cy.xpath(this.selectedMonthDatePicker1)
				.invoke('text')
				.should('eq', `${next} ${year}`)
		}
	}

    verifyYearsOnDatePicker1() {
		for (let index = 1980; index < 2025; index++) {
			//const nameOfMonth = months[index]
            index = index.toString()
            // select(index) is text or value ?
			cy.get(this.yearSelectPicker1).select(index).invoke("val").should("eq", index)
		}
	}


}
