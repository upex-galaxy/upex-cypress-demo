describe("Upload a file", () =>
{
    before("open the website", () =>
    {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.clearCookies()
    })
    it("Choose a file and upload it", () =>
    {
        cy.get("#uploadPicture").attachFile("images/Picture.png")
    })
})

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
