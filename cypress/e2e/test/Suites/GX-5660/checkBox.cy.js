import{checkBox} from "../../../../support/Pages/GX-5660/checkBox"
import{Toggle} from "../../../../support/Pages/GX-5660/checkBox"

describe('GX-5660 | ✅ToolsQA | Elements | Check Box',()=>{
    const checkbox = new checkBox

    beforeEach('',()=>{
        cy.viewport(1440,900)
        cy.visit('/checkbox')
        cy.url().should('contain','checkbox')
    })
    it('',()=>{
        Toggle.clickToggle()
        //cy.get('[class="rct-text"] button[title=Toggle]').eq(0).click()
        //cy.get('[class="rct-text"] button[title=Toggle]').eq(1).click()
        //cy.get('[class="rct-text"] button[title=Toggle]').eq(2).click()
        //cy.get('[class="rct-text"] button[title=Toggle]').eq(3).click()
        //cy.get('[class="rct-text"] button[title=Toggle]').eq(4).click()
        //cy.get('[class="rct-text"] button[title=Toggle]').eq(5).click()
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
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)}