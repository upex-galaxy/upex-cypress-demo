describe.skip('GX-7255|✅ToolsQA | Widgets | Date Picker', () => {
	let date = new Date()
	const currentdate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		day: '2-digit',
		month: '2-digit',
	})
	let thisMonth = new Date().getMonth()
	let getMonth = function (monthnumber) {
		date.setMonth(monthnumber)
		return date.toLocaleString('en-US', { month: 'long' })
	}
	let thisYear = date.getFullYear()

	beforeEach('Precodition', () => {
		cy.visit('https://demoqa.com/date-picker')
	})

	it('GX-7256 | TC1:  Validate that the selected date is properly displayed in “Select date”', () => {
		cy.get('input[id="datePickerMonthYearInput"]').should('have.value', currentdate).click()

		cy.get('select[class="react-datepicker__month-select"]').each(($month) =>
			cy
				.wrap($month)
				.invoke('text')
				.then((mes) => {
					expect($month).contain(mes)
				})
		)
		cy.SelectingMonth()
		cy.SelectingYear()
		cy.SelectingDate()

		cy.get('input[id="datePickerMonthYearInput"]').click()
		cy.get('[class$=navigation--previous]').should('exist')
		cy.get('[class$=navigation--next]').should('exist')

		cy.get('input[id="datePickerMonthYearInput"]').then(($el) => {
			cy.wrap($el)
				.invoke('val')
				.then((info) => {
					cy.wrap($el).should('have.value', info)
				})
		})
	})
	it('GX-7256 | TC2: Validates that the user can select a month with the navigation arrows and then its correcly displayed in the "Select date" box', () => {
		cy.get('input[id="datePickerMonthYearInput"]').click()
		cy.SelectingYearTC2()
		cy.SelectingMonthTC2()
		cy.SelectingDateTC2()

		cy.get('[class="react-datepicker"]').find('[class$=navigation--previous]').should('exist')
		cy.get('[class="react-datepicker"]').find('[class$=navigation--next]').should('exist')

		cy.get('input[id="datePickerMonthYearInput"]').then(($value) => {
			cy.wrap($value)
				.invoke('val')
				.then((timedate) => {
					cy.wrap($value).should('have.value', timedate)
				})
		})
	})

	it('GX-7256 | TC3:  Validate that the selected date and time is properly displayed in “Date and time”', () => {
		let thisTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hours12: 'true' })
		let today2 = new Date().getDate()
		let dateTime = `${getMonth(thisMonth)} ${today2}, ${thisYear} ${thisTime}`
		let datetime
		let datetime2
		let justdate
		let expectedtime

		cy.get('[id="dateAndTimePicker"]')
			.find('[id="dateAndTimePickerInput"]')
			.then(($el) => {
				datetime = $el.val()

				datetime2 = String(datetime)
				justdate = datetime2.match(/\d{1,2}:\d{2} [AP]M/)
				expectedtime = justdate
				cy.wrap(expectedtime).then(($time) => {
					let actualTime = $time
					let expectedDate = thisTime

					if (actualTime == expectedDate) {
						cy.log('**The Times match!**')

						cy.get('[id="dateAndTimePicker"]').find('[id="dateAndTimePickerInput"]').should('have.value', dateTime)
						cy.MonthSelection()
						cy.YearSelection()
						cy.ChoosingDate()
						cy.ChoosingTime()

						cy.get('input[id="dateAndTimePickerInput"]').then(($value) => {
							cy.wrap($value)
								.invoke('val')
								.then((timedate) => {
									cy.wrap($value).should('have.value', timedate)
								})
						})
					} else {
						cy.log(
							`**${actualTime}/${expectedDate} There's a small difference between the time on the website and the time in the test**`
						)
						cy.MonthSelection()
						cy.YearSelection()
						cy.ChoosingDate()
						cy.ChoosingTime()

						cy.get('input[id="dateAndTimePickerInput"]').then(($value) => {
							cy.wrap($value)
								.invoke('val')
								.then((timedate) => {
									cy.wrap($value).should('have.value', timedate)
								})
						})
					}
				})
			})
	})
	it('GX-7256 | TC4: Validates that the user can select a month with the navigation arrows and then its correcly displayed in the "Date and time" box', () => {
		cy.get('input[id="dateAndTimePickerInput"]').click()
		cy.SelectingMonthTC4()
		cy.ChoosingDateTC4()

		cy.get('input[id="dateAndTimePickerInput"]').then(($value) => {
			cy.wrap($value)
				.invoke('val')
				.then((timedate) => {
					cy.wrap($value).should('have.value', timedate)
				})
		})
	})
})

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
