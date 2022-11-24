describe("GX-2996 | ToolsQA | Elements | Radio Buttons",() => {
	beforeEach("Test the Radio button", () => {

		cy.visit("https://demoqa.com/radio-button")
        cy.url().should("contain","radio-button")
	
	})
    it("2996 | TC:1 Validar poder selccionar RB Yes | Validar que fue selccionado |",()=>{
		cy.contains("Do you like the site?").should("be.visible")
		cy.get("[type='radio']").eq(0).click({force:true})
			.should("be.checked")
		cy.get(".mt-3").should("have.text", "You have selected Yes")
    })
	it("2996 | TC:2 Validar poder selccionar RB Impressive | Validar que fue selccionado |",()=>{
		cy.get("[type='radio']").eq(1).click({force:true})
			.should("be.checked")
		cy.get(".mt-3").should("have.text", "You have selected Impressive")
    })
	it("2996 | TC:1 Validar no poder selccionar RB No | Validar que no fue selccionado |",()=>{

		cy.get("[type='radio']").eq(2).click({force:true})
			.should("be.disabled")
		cy.get(".mt-3").should("not.exist")
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

// ** COPIA Y PEGA EN CADA SUITE QUE SE REALICE CON UN SUT DE MUCHO FETCH Y XHR O PROBLEMAS DE EXCEPCIÓN 
