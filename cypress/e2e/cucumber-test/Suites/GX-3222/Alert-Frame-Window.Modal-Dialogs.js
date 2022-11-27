import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

context("ToolsQA | Alert-Frame-Window | Modal Dialogs", ()=>
{
		// #@PREC_GX-3362
    // Background: precondition

    Given("the user must be located in the Modal Dialogs section of QAtools", ()=>
    {
        cy.visit("https://demoqa.com/modal-dialogs")    
    })

	// @TC_GX-3360 @TS_GX-3222
	describe(" 3222 | TC1:  Validate being able to click on the Small Modal button.",()=>
    {
        When("the user presses the Small modal button", ()=>
        {
            cy.get("#showSmallModal")
                .click()
        })
    
        Then("a Small Modal appears", ()=> 
        {
            cy.get("[class='modal-header']")
                .as("cabecera-modal")
                .within( ()=> 
            {
                    cy.get("[class='modal-title h4']")
                        .should('have.text', 'Small Modal')
                        .click()    
            })
        })        
        And("press the 'X' button to close the modal",()=>
        {
            cy.get ("@cabecera-modal")
                .within(()=>
                {
                    cy.get("[aria-hidden='true']")
                        .should('be.visible')
                        .click()   
                })
        })
    })
        // @TC_GX-3361 @TS_GX-3222
	describe("3222 | TC2:  Validate being able to click on the “Large Modal” button.",()=>
    {
        When("the user presses the 'Large modal' button", ()=>
        {
            cy.get('#showLargeModal')
                .click()
        })    
        Then("a Large Modal appears", ()=>
        {
            cy.get ("[class='modal-header']")
                .within( ()=> 
                {
                    cy.get("[class='modal-title h4']")
                        .should('have.text', 'Large Modal')
                        .click()
                })
        })        
        And("press the 'Close' button to close the modal", ()=>
        {
            cy.get ("#closeLargeModal")
                .should('have.text', 'Close')
                .click()
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
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}
