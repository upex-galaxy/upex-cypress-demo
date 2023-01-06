
import {datePickerPage} from '@pages/GX-5770/datePickerPage.js'


describe('GX-5770 | ToolsQA | Widgets | Date Picker', () => {

	let today = new Date()
	let currentDay = new Date()

	currentDay.setMonth(currentDay.getMonth() - 1)
	const previousMonth = currentDay.toLocaleString('default', {month: 'long'})
	// Calculate Next Month
	currentDay.setMonth(currentDay.getMonth() + 2)
	const nextMonth = currentDay.toLocaleString('default', {month: 'long'})

	let dd = String(today.getDate()).padStart(2, '0')
	let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
	let dd2 = String(today.getDate())
	let yyyy = today.getFullYear()
	let hour = today.getHours()
	let mins = today.getMinutes()
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	let monthName = months[today.getMonth()]
	currentDay = mm + '/' + dd + '/' + yyyy
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
		datePickerPage.get
			.datePicker1()
			.invoke('val')
			.should('match', /\d\d\/\d\d\/\d\d\d\d/i)
		cy.log(`FORMAT HAS BEEN VERIFIED ON DATE PICKER 1`)
		datePickerPage.get.datePicker1().invoke('val').should('eq', `${currentDay}`)
		cy.log(`CURRENT DAY HAS BEEN VERIFIED ON DATE PICKER 1`)
		datePickerPage.get.datePicker2().invoke('val').should('eq', `${monthName} ${dd2}, ${yyyy} ${currentTime}`) // Aveces falla porque durante la ejecucion cambia de minuto
		cy.log(`CURRENT DATE AND FORMAT HAVE BEEN VERIFIED ON DATE PICKER 2`)

	})

	it('5772 | TC2: Date Picker 1 - Month Selection - Left arrow', () => {
		datePickerPage.clickOnDatePicker1()
		datePickerPage.clickPreviousMonthOnDatePicker1()
		cy.log(`Current Month: ${monthName} Previous Month: ${previousMonth}`).then(() => {
			if (previousMonth == 'December') {
				datePickerPage.get
					.selectedMonthPicker1()
					.invoke('text')
					.should('eq', `${previousMonth} ${yyyy - 1}`)
			} else {
				cy.contains(`${previousMonth} ${yyyy}`)
			}
		})
	})

	it('5772 | TC3: Date Picker 1 - Month Selection - Right arrow', () => {
		cy.log(`Current Month: ${monthName}`)
		cy.log(`Previous Month: ${nextMonth}`)
		datePickerPage.clickOnDatePicker1()
		datePickerPage.clickNextMonthOnDatePicker1()
		cy.then(() => {
			if (nextMonth == 'January') {
				datePickerPage.get
					.selectedMonthPicker1()
					.invoke('text')
					.should('eq', `${nextMonth} ${yyyy + 1}`)
			} else {
				datePickerPage.get.selectedMonthPicker1().invoke('text').should('eq', `${nextMonth} ${yyyy}`)
			}
		})
	})

	it('5772 | TC4: Date Picker 1 - Month Selection', () => {
		datePickerPage.clickOnDatePicker1()
		cy.then(() => {
			for (let index = 0; index < months.length; index++) {
				const nameOfMonth = months[index]
				datePickerPage.get
					.monthSelect()
					.select(nameOfMonth)
					.then(() => {
						cy.get(`select.react-datepicker__month-select option:selected`).should('have.text', nameOfMonth)
					})
				cy.log(`The selected month is:  ${nameOfMonth}`)
			}
		})
	})

	it('5772 | TC5: Date Picker 1 - Year Selection', () => {
		datePickerPage.clickOnDatePicker1()
		cy.then(() =>{
			for (let index = 1980; index < 2025; index++) {
				index = index.toString()
				datePickerPage.get.yearSelectPicker1().select(index).invoke('val').should('eq', index)
			}
		})
	})

	it('5772 | TC6: Date Picker 1 - Current date - The day selected background color is blue', () => {
		datePickerPage.clickOnDatePicker1()
		datePickerPage.get.daySelectedPicker1().should('have.css', 'background-color', 'rgb(33, 107, 165)')
	})

	it('5772 | TC7: Date Picker 2 - Year selection - The selected year is marked with a √', () => {
		datePickerPage.clickOnDatePicker2()
		datePickerPage.get.yearArrowPicker2().click()
		datePickerPage.get.yearSelectedPicker2().invoke('text').should('eq','✓')
	})

	it('5772 | TC8: Date Picker 2 - Month Selection', () => {
		datePickerPage.clickOnDatePicker2()
		cy.then(() => {
			for (let index = 0; index < months.length; index++) {
				const nameOfMonth = months[index]
				datePickerPage.get.monthSelecDownArrow2().click()
				datePickerPage.get.monthSelect2options().eq(index).click()
				datePickerPage.get.selectedMonthPicker2().invoke('text').should('eq',`${nameOfMonth} ${yyyy}`)
				cy.log(`The selected month is:  ${nameOfMonth}`)
			}
		})
	})

	it('5772 | TC9: Date Picker 2 - The selected month is marked with a √', () => {
		datePickerPage.clickOnDatePicker2()
		cy.then(() => {

				datePickerPage.get.monthSelecDownArrow2().click({ force: true })
				datePickerPage.get.monthWithCheckMarkPicker2()
				.children('span').invoke('text').should('eq','✓')
			
		})
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
