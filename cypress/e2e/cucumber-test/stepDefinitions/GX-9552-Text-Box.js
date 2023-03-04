import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { textBox } from '@pages/GX-9552-Text-Box/Text-Box'
import { faker } from '@faker-js/faker'

const textBoxPage = Cypress.env('endpoint').textBox

const dataNameFaker = faker.internet.userName()
const dataEmailFaker = faker.internet.email()
const dataCurrentAddressFaker = faker.address.streetAddress()
const dataPermanentAddressFaker = faker.address.streetAddress()

context('Feature: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	describe('Estar en la sección de Text Box de la pagina', () => {
		Given('QA aprendiz esta en la sección Text Box', () => {
			cy.visit('/' + textBoxPage)
			cy.url().should('contain', textBoxPage)
		})
	})

	describe('9553 | TC1: Validar que al no ingresar datos en Name, Current Address, Permanent Address y Email no se muestre nada', () => {
		When('el aprendiz QA no ingresa datos en los campos "Name", "Current Address", "Permanent Address", "Email" y envía los datos', () => {
			textBox.clearAllInput()
			textBox.clickSubmitBtn()
		})
		Then('no aparece ningún mensaje', () => {
			textBox.elements.fullNameMessage().should('not.exist')
			textBox.elements.emailMessage().should('not.exist')
			textBox.elements.currentAddressMessage().should('not.exist')
			textBox.elements.permanentAddressMessage().should('not.exist')
		})
	})

	describe('9553 | TC2: Validar que al ingresar datos en Name, Current Address, Permanent Address y Email se muestre los datos', () => {
		When('el aprendiz QA ingresa datos en los campos de Name, Current Address, Permanent Address, Email y envía los datos', () => {
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

	describe('9553 | TC3: Validar que al no ingresar {string} en el Email se muestre el borde en color rojo', () => {
		When('el aprendiz QA ingresa el email sin {string}', (datos) => {
			switch (datos) {
				case '@':
					const dataEmailDontAtFaker = faker.internet.email().replace(/@/g, '')
					textBox.typeEmailInput(dataEmailDontAtFaker)
					break
				case '1 carácter alfanumérico antes del “@“':
					const dataEmailDontLetterBeforeAtFaker = "@" + faker.internet.email().split('@')[1]
					textBox.typeEmailInput(dataEmailDontLetterBeforeAtFaker)
					break
				case '1 carácter alfanumérico después del “@“':
					const dataEmailDontLetterAfterAtFaker = faker.internet.email().replace(/@.*?\./, '@.')
					textBox.typeEmailInput(dataEmailDontLetterAfterAtFaker)
					break
				case '“.“ y 1 carácter alfanumérico después del “@“':
					const dataEmailDontDotAndLetterAfterFaker = faker.internet.email().replace(/@.*?\./, '@')
					textBox.typeEmailInput(dataEmailDontDotAndLetterAfterFaker)
					break
				case '2 caracteres alfanuméricos después del “.“':
					const dataEmailDontLetterAfterDotFaker = faker.internet.email().replace(/\.[^.]*$/, '.')
					textBox.typeEmailInput(dataEmailDontLetterAfterDotFaker)
					break
			}
			textBox.clickSubmitBtn()
		})
		Then('cambia a rojo el borde del campo Email', () => {
			textBox.elements.emailInput().should('have.class', 'mr-sm-2 field-error form-control')
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
