import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor'

context('Feature: Login', () => {
	// (Given = Precondición) Dado que: el usuario está en la página de Login...
	Given('User is signed up', () => {
		expect(1).eq(1)
	})
	And('User is at the login page', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/')
	})

	describe('US 2 | TS 3 | TC1: Check the Login correctly to Orange CRM Website', () => {
		// (When = Acción) Cuando: el usuario inserta un NombreDeUsuario como X y una Contraseña como X...
		When('User enters username as {string} and password as {string} and clicks on login button', (username, password) => {
			cy.get('[placeholder="Username"]').type(username)
			cy.get('[placeholder="Password"]').type(password)
			cy.get('[type="submit"]').click()
		})
		// (Then = Resultado Esperado) Entonces: el usuario DEBERÍA poder iniciar sesión en la Website.
		Then('User should be able to login to the Website', () => {
			cy.get(".oxd-userdropdown").should('be.visible')
		})
		// (And = Extensión) Y Entonces: debería visualizarse un mensaje amigable como "bla bla bla"
		And('should display a friendly message as {string}', (msg) => {
			// Ejemplo de assertion usando parámetro del mismo Gherkin:
			expect(msg).equal('User has successfully logged in')
		})
	})
	describe('US 2 | TS 3 | TC2: Check the Login is not possible when user enters invalid credentials', () => {
		// (When = Acción) Cuando: el usuario inserta un NombreDeUsuario como X y una Contraseña como X...
		When('User enters invalid username as {string} and password as {string} and clicks on login button', (username, password) => {
			cy.get('[placeholder="Username"]').type(username)
			cy.get('[placeholder="Password"]').type(password)
			cy.get('[type="submit"]').click()
		})
		// (Then = Resultado Esperado) Entonces: el usuario DEBERÍA poder iniciar sesión en la Website.
		Then('User should NOT be able to login to the Website', () => {
			cy.get(".oxd-userdropdown").should('not.exist')
		})
		// (And = Extensión) Y Entonces: debería visualizarse un mensaje amigable como "bla bla bla"
		And('should display an error message as {string}', (msg) => {
			// Ejemplo de assertion usando parámetro del mismo Gherkin:
			expect(msg).equal('Please, insert a valid value')
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