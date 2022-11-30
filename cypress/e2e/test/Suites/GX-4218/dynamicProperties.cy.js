const the = require('../../../../fixtures/DOM/toolsqa/Elements/dynamicProperties.Page.json')
describe(the.Test.US, () => {
	beforeEach(() => {
		cy.visit(the.url)
		cy.url().should('contain', 'dynamic')
	})
	it(the.Test.TC1, () => {
		cy.get(the.element.willEnable, {timeout: 5000}).should(the.Assertion.willEnable, 'disable')
	})
	it(the.Test.TC2, () => {
		cy.get(the.element.colorChange, {timeout: 6000}).should(the.Assertion.colorChange, 'color', 'rgb(220, 53, 69)')
	})
	it(the.Test.TC3, () => {
		cy.get(the.element.visibleAfter, {timeout: 5000}).should(the.Assertion.visibleAfter)
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
