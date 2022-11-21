let datePicker;
const year = Math.floor(Math.random() * 201);

describe('GX-2404 ✅ToolsQA | Widgets | Date Picker', () => {

    beforeEach(() => {
        cy.fixture('DOM/toolsqa/Widgets/datePicker.Page').then(DPdate => { datePicker = DPdate });
        cy.viewport(1920, 1080);
        cy.visit('/date-picker');
        cy.url().should('contain', 'date-picker');
    });

    it('2405 | TC1:  Validar la selección del día, mes y año en el sección “Select Date”', () => {

        cy.get(datePicker.selectDate.input).click();
        // Selección de Año aleatorio
        cy.log('Select Year');
        cy.get(datePicker.selectDate.year).children().should('have.length', 201).then(($year) => {
            const listYear = $year.length - 1;
            const yearRandom = Math.floor(Math.random() * listYear);
            cy.get(datePicker.selectDate.year).select(yearRandom).should('have.length', 1);
        })
        // Selección de Mes aleatorio
        cy.log('Select Month');

        cy.get(datePicker.selectDate.month).then(($Months) => {
            cy.log($Months)
            const list = $Months.children().length - 1
            const monthRandom = Math.floor(Math.random() * list)
            cy.log(monthRandom)
            cy.wrap($Months).should('have.length', 1).select(4).then(($Month) => {
                cy.log($Month)
                const monthName = $Month.text()
                cy.log(monthName)

                // Selección de Día aleatorio
                cy.log('Select Day');
                cy.get(`[aria-label*="May"]`).then(($daysMonth) => {
                    const list = $daysMonth.length - 1;
                    const daysRandom = Math.floor(Math.random() * list);
                    cy.wrap($daysMonth).should('have.length', list + 1).eq(daysRandom).then(($Day) => {
                        const day = $Day.text();
                        cy.log(day);
                        cy.wrap($Day).should('have.text', day).click();

                    });
                });
            });
        });
    });



    it('2405 | TC2:  Validar la selección del día, mes, año y hora en el sección “Date And Time”', () => {
        cy.get(datePicker.dateAndTime.input).click().should('be.visible');
        // Selección de Año aleatorio
        cy.log('Select Year');
        cy.get(datePicker.dateAndTime.downArrowDT).click();
        cy.get(datePicker.dateAndTime.dropdownDT).children().should('have.length', 13).eq(10).click();
        // Selección de Mes aleatorio
        cy.log('Select Month');
        cy.get(datePicker.dateAndTime.downArrowDTmoth).click();
        cy.get(datePicker.dateAndTime.dropdownDTmonth).children().should('have.length', 12).eq(4).click().then(($month) => {
            const mes = $month.text();
            // Selección de Día aleatorio
            cy.log('Select Day');
            cy.get(`[aria-label*="${mes}"]`).then(($daysMonth) => {
                const list = $daysMonth.length - 1;
                const daysRandom = Math.floor(Math.random() * list);
                cy.wrap($daysMonth).should('have.length', list + 1).eq(daysRandom).then(($Day) => {
                    const day = $Day.text();
                    cy.wrap($Day).should('have.text', day).click();
                });
            });
        });
        // Selección de Hora aleatorio
        cy.log('Select Hour');
        const timeRandom = Math.floor(Math.random() * 96);
        cy.get('.react-datepicker__time-list').children().should('have.length', 96).eq(timeRandom);

    });
});

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