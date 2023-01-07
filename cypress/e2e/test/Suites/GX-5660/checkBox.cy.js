import { CheckBox, Toggle } from "@pages/GX-5660/checkBox.js"

describe('GX-5660 | ✅ToolsQA | Elements | Check Box', () => {

    beforeEach('', () => {
        cy.viewport(1440, 900)
        cy.visit('/checkbox')
        cy.url().should('contain', 'checkbox')
    })

    it('5661 | Validate being to able expand all', () => {
        Toggle.clickToggle()
        Toggle.collapse.assertToggle().eq(2).should('be.visible').and('contain','Notes')
        Toggle.collapse.assertToggle().eq(5).should('be.visible').and('contain','WorkSpace')
        Toggle.collapse.assertToggle().eq(8).should('be.visible').and('contain','Veu')
        Toggle.collapse.assertToggle().eq(12).should('be.visible').and('contain','Classified')
        Toggle.collapse.assertToggle().eq(15).should('be.visible').and('contain','Word File.doc')
    })

    it('5661 | Validate being to able collapse all', () => {
        Toggle.clickToggle()
        Toggle.collapse.assertToggle().should('have.length',17)
        Toggle.clickToggle2()
        Toggle.collapse.assertToggle().should('have.length',1)
        
    })

    it('5661 | Validate autocheck behavior', () => {
        Toggle.clickToggle()
        Toggle.collapse.assertToggle().should('have.length',17)
        CheckBox.clickCheckbox()
        CheckBox.CB.assertCB().should('have.length','5').and('contain','private')
    })

    it('5661 | TC4:  Validate random checkbox and the success message',()=>{
        //the assertion is in the POM
        cy.randomValue()
        
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