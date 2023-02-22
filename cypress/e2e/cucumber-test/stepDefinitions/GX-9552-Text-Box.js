import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { textBox } from '@pages/GX-9552-Text-Box/Text-Box'

const textBoxPage = Cypress.env('endpoint').textBox

context('Feature: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	describe('Estar en la seccion de Text Box de la pagina', () => {
		Given('QA aprendiz esta en la seccion Text Box', () => {
		})
	})
})

describe('9553 | TC1: Validar que al no ingresar datos en Name, Current Address, Permanent Address y Email no se muestre nada', () => {
	When('el aprendiz QA no ingresa datos en los campos "Name", "Current Address", "Permanent Address" y "Email"', () => {})
	And('hace click en el boton de "Submit"', () => {})
	Then('no aparecer ningun mensaje', () => {})
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
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}
