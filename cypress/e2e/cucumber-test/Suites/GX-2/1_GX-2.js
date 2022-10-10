import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("US 2 | TS 3 | TC1: Check the Login correctly to Orange CRM Website", () =>
{
    // (Given = Precondición) Dado que: el usuario está en la página de Login...
    Given('User is at the login page', () =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    // (When = Acción) Cuando: el usuario inserta username y password...
    When('User enters username as {string} and password as {string}', (username, password) =>
    {
        cy.get('[placeholder="Username"]').type(username)
        cy.get('[placeholder="Password"]').type(password)
    })
    // (And = Extensión) Y Cuando: el usuario hace click sobre el botón login...
    And('User clicks on login button', () =>
    {
        cy.get('[type="submit"]').click()
    })
    // (Then = Extensión) Entonces: el usuario inicia sesión exitosamente en la Website.
    Then('User is able to successfully login to the Website', () =>
    {
        cy.url().should('include',"viewEmployeeList")
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