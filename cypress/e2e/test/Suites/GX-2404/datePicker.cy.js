let datePicker;

const day = Math.floor(Math.random() * (30 - 0 + 1) + 0);
const month = Math.floor(Math.random() * (11 - 0) + 1);
const year = Math.floor(Math.random() * (201 - 0) + 0);


describe('GX-2404 ✅ToolsQA | Widgets | Date Picker', () => {

    before(() => {
        cy.fixture('DOM/toolsqa/Widgets/datePicker.Page').then(DPdate => { datePicker = DPdate });
        cy.visit('/date-picker');
    })

    it('tc1', () => {
        cy.log(day)
        cy.log(month)
        cy.log(year)
        cy.get(datePicker.selectDate).click();
        cy.get(datePicker.selectDateYear).find('option').should('have.length', 201).within(() => {
            cy.get(year)
        });
        cy.get(datePicker.month).find('option').should('have.length', 12)
        cy.get('[role="listbox"]').find('.react-datepicker__day').not('.react-datepicker__day--outside-month').should('have.length', 30)


    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
}