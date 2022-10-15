describe("ToolsQA | Elements | Buttons", () => {

beforeEach("Precondición: Usuario debe estar situado en el sitio web demoqa", () => {
    cy.getUrl('https://demoqa.com/buttons', "buttons")
})

it('US GX-1288 | TS 1289 | TC1: Validar que al hacer click sobre el botón Double Click con doble click se visualice el mensaje “You have done a double click', () => {
    cy.doubleClick()
})

it('US GX-1288 | TS 1289 | TC2: Validar que al hacer click sobre el botón Right Click con el botón derecho del mouse se visualice el mensaje “You have done a right click', () => {
	cy.rightClick()
})

it('US GX-1288 | TS 1289 | TC3: Validar que al hacer click sobre el botón Click con el botón izquierdo del mouse se visualice el mensaje “You have done a dynamic click', () => {
    cy.btnClick()
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