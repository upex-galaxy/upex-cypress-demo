/// <reference types="cypress" />

import {DatePickerPage} from '../../../../support/Pages/GX-5770/datePickerPage'

describe('GX-5770 | ToolsQA | Widgets | Date Picker', () => {
	const datepickerPage = new DatePickerPage()

	let today = new Date()
	let currentDay = new Date()

	// Calculate Previous Month 
	currentDay.setMonth(currentDay.getMonth() - 1)
	const previousMonth = currentDay.toLocaleString('default', {month: 'long'})
	// Calculate Next Month
	currentDay.setMonth(currentDay.getMonth()+2)
	const nextMonth = currentDay.toLocaleString('default', {month: 'long'})

	let dd = String(today.getDate()).padStart(2, '0')
	let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
	let dd2 = String(today.getDate())
	let yyyy = today.getFullYear()
	let hour = today.getHours()
	let mins = today.getMinutes()
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	// Get the name of the current month
	let monthName = months[today.getMonth()]
	// Get current day in format mm/dd/yyyy
	currentDay = mm + '/' + dd + '/' + yyyy
	// Get current time in format XX:XX AM/PM
	currentTime = dateTOAMORPM(today)
	function dateTOAMORPM() {
		var AMPM = hour >= 12 ? 'PM' : 'AM'
		hour = hour % 12
		hour = hour ? hour : 12
		mins = mins < 10 ? '0' + mins : mins
		var result = hour + ':' + mins + ' ' + AMPM
		return result
	}

	beforeEach('User must be in the Date Picker page', () => {
		cy.visit('/date-picker')
		cy.url().should('contain', 'date-picker')
	})

	it('5772 | TC1: Date Picker 1 and 2 must display the current Date (2 different formats)', () => {
		cy.log(`Date: ${currentDay} Time: ${currentTime} Month Name: ${monthName} Previous Month: ${previousMonth} Next Month: ${nextMonth}`) //debugging

		datepickerPage.verifyFormatOnDatePicker1()
		datepickerPage.verifyCurrentDayOnDatePicker1(currentDay)
		datepickerPage.verifyDatePicker2(monthName, dd2, yyyy, currentTime)

		cy.log(`Previous Month is:  ${previousMonth}`)
	})

	it('5772 | TC2: Date Picker 1 - Month Selection - Left arrow', () => {
		//monthName = months[today.getMonth()]
		cy.log(`Current Month: ${monthName}`)
		cy.log(`Previous Month: ${previousMonth}`)
		datepickerPage.clickOnDatePicker1()
		datepickerPage.clickPreviousMonthOnDatePicker1()
		datepickerPage.verifyPreviousMonthOnDatePicker1(previousMonth, yyyy)
	})

	it('5772 | TC3: Date Picker 1 - Month Selection - Right arrow', () => {
		//monthName = months[today.getMonth()]
		cy.log(`Current Month: ${monthName}`)
		cy.log(`Previous Month: ${nextMonth}`)
		datepickerPage.clickOnDatePicker1()
		datepickerPage.clickNextMonthOnDatePicker1()
		datepickerPage.verifyNextMonthOnDatePicker1(nextMonth, yyyy)
	})

	it('5772 | TC4: Date Picker 1 - Month Selection', () => {
		datepickerPage.clickOnDatePicker1()
		datepickerPage.verifyMonthsOnDatePicker1(months)
	})

	it.only('5772 | TC5: Date Picker 1 - Year Selection', () => {
		datepickerPage.clickOnDatePicker1()
		datepickerPage.verifyYearsOnDatePicker1()
	})

	//


})

//----------------------------------------------------------

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}
