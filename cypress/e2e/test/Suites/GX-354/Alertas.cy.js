describe("ToolsQA | Alert-Frame-Window | Alerts", () => {
    
    beforeEach("Precondition: User debe estar situado en la web site", () => {
        
        cy.visit("https://demoqa.com/alerts", {pageLoadTimeout:90000})
        cy.location("protocol").should("contains", "https")
        cy.url().should("contains", "alerts")
        cy.url().should("eq", "https://demoqa.com/alerts")
        cy.location("hostname").should("eq", "demoqa.com")
    
    })

    it("GX 354| TC1| Validar que aparezca una alerta al hacer click al primer botton haz click en mi", () => {
    
        cy.alerta()
    })
    it("GX 354| TC2| Validar que aparezca una alerta al hacer click al segundo botton haz click en mi", () => {
        
        cy.alerta1()
    })

    it("GX 354| TC3| Validar que aparezca un cuadro de confirmacion al hacer click al tercer botton haz click en mi  ", () => {
        
        cy.Confirm()

    })
    it("GX 354| TC4| Validar que aparezca un cuadro de confirmacion al hacer click al tercer botton haz click en mi y cancelar la alerta ", () => {
        
        cy.ConfirmFalse()
    })
    

    it("GX 354| TC5| Validar que aparezca un cuadro de aviso al hacer click al cuarto botton haz click en mi", () => {
    
        cy.aviso()
    
    })
    it("GX 354| TC6| Validar que aparezca un cuadro de aviso al hacer click al cuarto botton haz click en mi y hacer click en cancelar", () => {
    
        cy.avisoFalse()
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