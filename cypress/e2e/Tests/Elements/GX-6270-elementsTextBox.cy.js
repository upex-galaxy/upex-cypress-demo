import { Inputs } from "@pages/textBox.Page.js"
const data = require("../../../fixtures/DOM/Elements/TextBoxKenny.Page.json")

describe ('GX-6270 | ToolsQA | Elements | Text Box: Fill form and Submit',()=>{

    beforeEach('User must be in TextBox page',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.viewport(1440,900)
        cy.visit('/text-box')
        cy.url().should('contain','text-box')
    })

    it('6271 | TC1: Validate form behavior when is empty',()=>{
        Inputs.clickSubmit()
        Inputs.get.output().should('not.be.visible')
    })

    it('6271 | TC2: Validate email form behavior when is invalid',()=>{
        //Email does not contain “@”
        Inputs.typeEmail(data.email.error1)
        Inputs.clickSubmit()
        Inputs.get.email().should('have.class','mr-sm-2 field-error form-control')
        //email does not contain (minimum) 1 alphanumeric character before “@”
        Inputs.typeEmail(data.email.error2)
        Inputs.clickSubmit()
        Inputs.get.email().should('have.class','mr-sm-2 field-error form-control')
        //email does not contain (minimum) 1 alphanumeric character after “@”
        Inputs.typeEmail(data.email.error3)
        Inputs.clickSubmit()
        Inputs.get.email().should('have.class','mr-sm-2 field-error form-control')
        //email does not contain “.” after: 1 alphanumeric character after “@”.
        Inputs.typeEmail(data.email.error4)
        Inputs.clickSubmit()
        Inputs.get.email().should('have.class','mr-sm-2 field-error form-control')
    })

    it('6271 | TC3: Validate form behavior when is correctly filled',()=>{

    
        Inputs.typeFullName(data.fullName)
        Inputs.typeEmail(data.email.validEmail)
        Inputs.typeCurrentAddress(data.currentAddress)
        Inputs.typePermanentAddress(data.permanentAddress)
        Inputs.clickSubmit()
        Inputs.get.output().should('be.visible')
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