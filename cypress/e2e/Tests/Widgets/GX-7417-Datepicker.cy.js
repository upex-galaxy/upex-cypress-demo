describe('✅ToolsQA | Widgets | Date Picker', () => {
    let month, day, year 
	before('go to page', () => {
		cy.visit('https://demoqa.com/date-picker')
		cy.url().should('include', 'date')
	})
	it('TC1: Validar seleccionar correctamente fecha', () => {
        cy.get('#datePickerMonthYearInput').click()
        
        cy.get("select[class*='month-select']").children().then(($month) => {
            cy.randomNumber($month.length).then(($monthNumber) => {
                cy.get("select[class*='month-select']").select($monthNumber)
					cy.wrap($month).eq($monthNumber).then(($monthText) => {
                        cy.wrap($monthText).invoke('val').then(($resp)=>{
                            cy.log($resp)
                            month = parseInt($resp) + 1
                            cy.log(month)
                            if(month < 10) {
                                month = `0${month}`
                            }
                            cy.log(month)
                            //cy.get("[class*='hasMonthDropdown']").should('contain.text', $resp)
                        })
					})
				})
			

                cy.get("select[class*='year-select']")
                .children()
                .then(($year) => {
                    cy.randomNumber($year.length).then(($yearNumber) => {
                        cy.get("select[class*='year-select']").select($yearNumber)
                        cy.wrap($year).eq($yearNumber).then(($yearText) => {
						cy.wrap($yearText).invoke('text').then(($resp)=>{
                            year = $resp
                            cy.log(year)
                            cy.get("[class*='hasMonthDropdown']").should('contain.text', $resp)
                            })
                        })
                    })
                })

                cy.get('.react-datepicker__day').then(($day) => {
                    cy.randomNumber($day.length).then(($dayNumber) => {
                        cy.wrap($day).eq($dayNumber).click().then(($dayText)=>{
                            day = $dayText.text()
                            if(day < 10) {
                                day = `0${day}`
                            }
                            cy.get('#datePickerMonthYearInput').should('not.have.class', 'react-datepicker-ignore-onclickoutside')
                            cy.log($dayText.text())
                        })
                    })
                })
            }).then(()=>{
                cy.get('#datePickerMonthYearInput').should('have.value', `${month}/${day}/${year}`)
            })
	})

	it('TC2: Validar seleccionar correctamente fecha y hora', function () {
		// cy.get('#dateAndTimePickerInput').click()
		// cy.get("li[class='react-datepicker__time-list-item ']")
		// 	.should('have.length.greaterThan', 0)
		// 	.its('length')
		// 	.then((n) => Cypress._.random(0, n - 1))
		// 	.then((k) => {
		// 		cy.get("li[class*='time-list-item']").eq(k).click()
		// 	})
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
