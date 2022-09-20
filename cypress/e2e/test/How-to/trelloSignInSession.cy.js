describe("Trello+Atlassian Login with Session and Origin", () =>
{
    beforeEach("Precondition: User login", () =>
    {
        cy.session("Login", () =>
        {
            cy.visit("https://accounts.lambdatest.com/login")
            cy.get("[href*='github']").click()
            cy.origin("https://github.com/login", () =>
            {
                cy.get("#login_field")
                    .type("saiotest")
                cy.get("#password")
                    .type("Elyer4991")
                cy.get("[type='submit']")
                    .click()
                // cy.get("[value='1']").click()
                // cy.wait(4000)
            }) 
        })
    })
    it("Open Trello", () =>
    {
        cy.visit("https://app.lambdatest.com/console/realtime/browser")
        cy.get("[data-tabs='real-browser-test__mobile-tab']").click()
        cy.get("[aria-label='Simulator']").should("be.visible")
    })
    it("Open Trello", () =>
    {
        cy.visit("https://applive.lambdatest.com/app")
        cy.wait(4000)
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