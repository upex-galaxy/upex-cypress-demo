let datePicker;

// const day = Math.floor(Math.random() * (30 - 0 + 1) + 0);
// const month = Math.floor(Math.random() * (11) + 1);
const year = Math.floor(Math.random() * (200) + 1);



describe('GX-2404 ✅ToolsQA | Widgets | Date Picker', () => {

    beforeEach(() => {
        cy.fixture('DOM/toolsqa/Widgets/datePicker.Page').then(DPdate => { datePicker = DPdate });
        cy.viewport(1920, 1080)
        cy.visit('/date-picker');
    })

    it('2405 | TC1:  Validar la selección del día, mes y año en el sección “Select Date”', () => {

        cy.get(datePicker.selectDate).click();
        cy.get(datePicker.selectDateYear)
            .select(year)
            .should('have.length', 1);
        cy.get(datePicker.month).then(($Months) => {
            cy.log($Months)
            const list = $Months.children().length - 1
            const monthRandom = Math.floor(Math.random() * list)
            cy.log(monthRandom)
            cy.wrap($Months).should('have.length', 1).then(($Month) => {
                // cy.log($Month)
                // const month = $Month.text().split(',')
                cy.wrap($Months).should('have.length', 1).select(4)
                    // .invoke("show").click({ force: true })
                    .then((miau) => {
                        cy.log(miau.children())
                        const miaus = miau.children().text()
                        cy.wrap(miau).should('have.text', miaus)
                        cy.get(`[aria-label*="May"]`).then(($daysMonth) => {
                            const list = $daysMonth.length - 1
                            const daysRandom = Math.floor(Math.random() * list)
                            cy.wrap($daysMonth).should('have.length', list + 1).eq(daysRandom).then(($Day) => {
                                const day = $Day.text()
                                cy.log(day)
                                cy.wrap($Day).should('have.text', day).click()
                            })
                        })
                    })

            })
        })

    })
    it('2405 | TC2:  Validar la selección del día, mes, año y hora en el sección “Date And Time”', () => {
        cy.get(datePicker.dateAndTimeInput).click();
        cy.get(datePicker.downArrowDT).click();
        cy.get(datePicker.dropdownDT).children().should('have.length', 13).eq(10).click();
        cy.get(datePicker.downArrowDTmoth).click();
        cy.get(datePicker.dropdownDTmonth).children().should('have.length', 12).eq(4).click().then(($month) => {
            const mes = $month.text()
            cy.log(mes)
            cy.get(`[aria-label*="${mes}"]`).then(($daysMonth) => {
                const list = $daysMonth.length - 1
                const daysRandom = Math.floor(Math.random() * list)
                cy.wrap($daysMonth).should('have.length', list + 1).eq(daysRandom).then(($Day) => {
                    const day = $Day.text()
                    cy.log(day)
                    cy.wrap($Day).should('have.text', day).click()
                })
            })
        })
        const timeRandom = Math.floor(Math.random() * 96)
        cy.get('.react-datepicker__time-list').children().should('have.length', 96).eq(timeRandom)

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
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
}