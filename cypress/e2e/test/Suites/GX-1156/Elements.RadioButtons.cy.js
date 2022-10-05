describe("US GX-1156 | ToolsQA | Elements | Radio Buttons", () => {
    
    beforeEach("Precondición: Ir al página de Radio Buttons", () => {
        cy.visit('https://demoqa.com/radio-button')
        cy.url().should("contain", "radio-button")
        cy.clearCookies()
        cy.clearLocalStorage()

    })

    it("TC01: Validar seleccionar RB ‘Yes’ mensaje 'You have selected Yes' ", ()=>{
        cy.get('[for ="yesRadio"]').should("have.text", "Yes")
        cy.get("#yesRadio").click({force:true}).should("be.checked")
        cy.get('.mt-3').should("have.text", "You have selected Yes")

    })

    it("TC02: Validar seleccionar RB ‘Impressive’ mensaje 'You have selected Impressive' ", ()=>{
        cy.get('[for ="impressiveRadio"]').should("have.text", "Impressive")
        cy.get("#impressiveRadio").click({force:true}).should("be.checked")
        cy.get('.mt-3').should("have.text", "You have selected Impressive")

    })

    it("TC03: Validar que NO pueda seleccionarse el RB ‘No’ ", ()=>{
        cy.get('[for ="noRadio"]').should("have.text", "No")
        cy.get("#noRadio").should("be.disabled")
        cy.get('.mt-3').should("not.exist")

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