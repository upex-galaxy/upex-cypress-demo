import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("Login to Orange CRM Website", () =>
{
    Given('User is at the login page', () =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    When('User enters username as {string} and password as {string}', (username, password) =>
    {
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
    })

    And('User clicks on login button', () =>
    {
        cy.get('#btnLogin').click()
    })

    Then('User is able to successfully login to the Website', () =>
    {
        cy.get('#welcome').should('be.visible', {timeout: 10000})
    })
})




//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
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