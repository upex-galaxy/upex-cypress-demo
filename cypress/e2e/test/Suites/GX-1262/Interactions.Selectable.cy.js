///<reference types = "Cypress"/>

describe("Tools QA | Interactions | Selectable",{ keystrokeDelay: 800 }, () =>
{ 
	let the;
    before("Load Data", () => {
        cy.fixture("DOM/toolsqa/Iterations/Selectable1262.Page.json").then((data) => {
            the = data;
        })
    })
	
	
	beforeEach("Precondición: Estar situado en Tools QA | Interactions | Selectable", () =>
    {
        cy.getUrl(the.url, the.contain)
        
    })

	it("US-GX-1262 | TS-GX-1263 | TC1:  Validar vista por defecto de los tabs List y Grid", () => {
		cy.get(the.list.tab).should("be.visible") 
		.should("have.attr", "aria-selected", "true")

		cy.get(the.grid.tab).should("be.visible")
		.should("have.attr", "aria-selected", "false")
	})

	it("US-GX-1262 | TS-GX-1263 | TC2: Verificar Tab List ", () => {
		cy.recorrerTabList()
		cy.deseleccionarTabList()
		
	})

	it("US-GX-1262 | TS-GX-1263 | TC3: Verificar Tab Grid ", () => {
		cy.get(the.grid.tab).click()
		cy.recorrerTabGrid()
		cy.deseleccionarTabGrid()
		
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
