// para hacer un "hover over" del mouse
//(en inglés: "pasar el ratón por encima de", lo sé, es medio largo la traducción)
// Debemos tomar en cuenta que dependerá si el elemento contiene JQuery o no:
// Si el elemento NO contiene JQuery (poco probable), entonces debemos usar el .trigger(evento)
// Si el elemento SI contiene JQuery (Muy probable), entonces debemos usar el .invoke("trigger",evento)
// Con "evento" me refiero usar uno de las opciones para hacer el Hover:
// Podemos ejecutar uno de éstos métodos: 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'

describe('Ejemplo para demostrar cómo hacer un Mouseover', () => {
	before(() => {
		cy.visit('https://demoqa.com/tool-tips')
	})
	it('Hacer un MouseOver en el botón', () => {
		cy.get('#toolTipButton').trigger('mouseover')
		cy.get(".tooltip-inner")
			.should('be.visible')
			.and("contain.text", "You hovered over the Button")
	})
	it('Hacer un MouseOver en el Texto', () => {
		cy.get('#toolTipTextField').trigger('mouseover')
		cy.get('.tooltip-inner')
			.should('be.visible')
			.and("contain.text", "over the text field")
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