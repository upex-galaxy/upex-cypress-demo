//US https://upexgalaxy0.atlassian.net/browse/GX-34
//ToolsQA | Elements | Links

describe("ToolsQA | Elements | Links", () => {
    const US = "US-GX-34"
    //const TS = "TS 283"
    /**beforeEach("Precondición: Ir a la página de Links", () =>
    {
    cy.visit("https://demoqa.com/links")
    })*/

    it(`${US} | TC1: Validar que al hacer click en el link "Home" abra un nuevo tab y dirija al Home de la página ToolsQA `, () =>
    {
        cy.visit("https://demoqa.com/links")
    })

    it(`${US} | TC2: Validar que al hacer click en el link "HomeV0rTZ" abra un nuevo tab y dirija al Home de la página ToolsQA  `, () =>
    {
        cy.visit("https://demoqa.com/links")
    })

    it(`${US} | TC3: Validar que al hacer click en el link "Created" aparezca al final de la lista de links el texto correcto según la BRS `, () =>
    {
        cy.visit("https://demoqa.com/links")
    })
    it(`${US} | TC4: Validar que al hacer click en el link "No Content" aparezca al final de la lista de links el texto correcto según la BRS `, () =>
    {
        cy.visit("https://demoqa.com/links")
    })
    it(`${US} | TC5: Validar que al hacer click en el link "Bad Request" aparezca al final de la lista de links el texto correcto según la BRS `, () =>
    {
        cy.visit("https://demoqa.com/links")
    })
    it(`${US} | TC6: Validar que al hacer click en el link "Unauthorized" aparezca al final de la lista de links el texto correcto según la BRS `, () =>
    {
        cy.visit("https://demoqa.com/links")
    })
    it(`${US} | TC7: Validar que al hacer click en el link "Forbidden" aparezca al final de la lista de links el texto correcto según la BRS `, () =>
    {
        cy.visit("https://demoqa.com/links")
    })
    it(`${US} | TC8: Validar que al hacer click en el link "Not Found" aparezca al final de la lista de links el texto correcto según la BRS `, () =>
    {
        cy.visit("https://demoqa.com/links")
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