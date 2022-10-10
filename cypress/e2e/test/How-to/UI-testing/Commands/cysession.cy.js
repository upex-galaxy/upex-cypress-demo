describe("Login with Session", () =>
{
    beforeEach(() =>
    {
        cy.SignIn("Admin","admin123")
    })
    it("Test de Session", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory")
        cy.url().should("contain","viewDirectory")
        cy.wait(3000)
    })
    it("Test de Session", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview")
        cy.url().should("contain","searchEvaluatePerformanceReview")
        cy.wait(3000)
    })
    it("Test de Session", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.url().should("contain","viewSystemUsers")
        cy.wait(3000)
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