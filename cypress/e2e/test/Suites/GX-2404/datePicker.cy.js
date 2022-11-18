let datePicker;

// const day = Math.floor(Math.random() * (30 - 0 + 1) + 0);
// const month = Math.floor(Math.random() * (11) + 1);
const year = Math.floor(Math.random() * (200) + 1);



describe('GX-2404 ✅ToolsQA | Widgets | Date Picker', () => {

    before(() => {
        cy.fixture('DOM/toolsqa/Widgets/datePicker.Page').then(DPdate => { datePicker = DPdate });
        cy.visit('/date-picker');
    })

    it('2405 | TC1:  Validar la selección del día, mes y año en el sección “Select Date”', () => {

        cy.get(datePicker.selectDate).click();
        cy.get(datePicker.selectDateYear)
            .select(year)
            .should('have.length', 1);
        cy.get(datePicker.month).children().then(($Months) => {
            cy.log($Months)
            const list = $Months.length - 1
            const monthRandom = Math.floor(Math.random() * list)
            cy.log(monthRandom)
            cy.wrap($Months).should('have.length', 12).then(($Month) => {
                cy.log($Month)
                const month = $Month.text()
                cy.wrap($Months).should('have.length', 12).eq(monthRandom).invoke("show").click({ force: true })
                cy.get(`[aria-label*="${month}"]`).then(($daysMonth) => {
                    const list = $daysMonth.length - 1
                    const daysRandom = Math.floor(Math.random() * list)
                    cy.wrap($daysMonth).should('have.length', list).eq(daysRandom).then(($Day) => {
                        const day = $Day.text()
                        cy.log(day)
                        cy.wrap($Day).click()
                    })
                })
            })
        })

    })
    // xit('2405 | TC2:  Validar la selección del día, mes, año y hora en el sección “Date And Time”', () => {
    //     cy.get(datePicker.dateAndTimeInput).click();
    //     cy.get(datePicker.selectDateYear)
    //         .select(year)
    //         .should('have.length', 1);
    //     cy.get(datePicker.month)
    //         .select(month)

    //     cy.get('.react-datepicker__month').eq(0)
    //         .within((asd) => {
    //             cy.log(asd)
    //         })


    // })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
}