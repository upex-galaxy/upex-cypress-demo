import { Given, Then, When, And } from '@badeball/cypress-cucumber-preprocessor'
import { textBox } from '@pages/GX-9552-Text-Box/Text-Box'
import { faker } from '@faker-js/faker'

const textBoxPage = Cypress.env('endpoint').textBox
const dataNameFaker = faker.internet.userName()
const dataEmailFaker = faker.internet.email()
const dataCurrentAddressFaker = faker.address.streetAddress()
const dataPermanentAddressFaker = faker.address.streetAddress()

context('Feature: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	describe('Estar en la seccion de Text Box de la pagina', () => {
		Given('QA aprendiz esta en la seccion Text Box', () => {
			cy.visit(textBoxPage)
			cy.url().should('contain', textBoxPage)
		})
	})

	describe('9553 | TC1: Validar que al no ingresar datos en Name, Current Address, Permanent Address y Email no sem uestre nada', () => {
		When('el aprendiz QA no ingresa datos en los campos "Name", "Current Address", "Permanent Address", "Email" y envia los datos', () => {
			textBox.clearAllInput()
			textBox.clickSubmitBtn
		})
		Then('no aparece ningun mensaje', () => {
			textBox.elements.messageFullName().should('not.exist')
			textBox.elements.messageEmail().should('not.exist')
			textBox.elements.messageCurrentAddress().should('not.exist')
			textBox.elements.messagePermanentAddress().should('not.exist')
		})
	})

	describe('9553 | TC2: Validar que al ingresar datos en Name, Current Address, Permanent Address y Email se muestre los datos', () => {
		When('el aprendiz QA ingresa datos en los campos de Name, Current Address, Permanent addresss, Email y envia los datos', () => {
			textBox.typeFullNameInput(dataNameFaker)
			textBox.typeEmailInput(dataEmailFaker)
			textBox.typeCurrentAddressInput(dataCurrentAddressFaker)
			textBox.typePermanentAddressInput(dataPermanentAddressFaker)
			textBox.clickSubmitBtn()
		})
		Then('muestra un mensaje con los datos que se ingreso', () => {
			textBox.elements
				.fullNameMessage()
				.invoke('text')
				.should('equal', 'Name:' + dataNameFaker)
			textBox.elements
				.emailMessage()
				.invoke('text')
				.should('equal', 'Email:' + dataEmailFaker)
			textBox.elements
				.currentAddressMessage()
				.invoke('text')
				.should('equal', 'Current Address :' + dataCurrentAddressFaker + ' ')
			textBox.elements
				.permanentAddressMessage()
				.invoke('text')
				.should('equal', 'Permananet Address :' + dataPermanentAddressFaker)
		})
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
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}
