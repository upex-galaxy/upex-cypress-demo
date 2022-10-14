
describe("US GX-1421 | TS: ✅ToolsQA | Interactions | Selectable", () => {
    beforeEach("Go to Selectable Url", () => 
        cy.fixture("DOM/toolsqa/Iterations/Selectable.Page").then((the) => {
            cy.visit(the.SelectedUrl)
            cy.url().should("include","selectable")
        })
    )
    it("US GX-1421 | TS GX-1422 | TC1: Validate select a list item", () => 
        cy.fixture("DOM/toolsqa/Iterations/Selectable.Page").then((the) => 
            cy.SelectItemRandom(the.itemCountTab.list).then(() => {
                cy.get(the.tab.grid).click().then(() =>
                cy.getItemSelected().should("not.be.visible"))
                cy.get(the.tab.list).click().then(()=>
                cy.getItemSelected().should("be.visible"))
            })
        )
    )
    it("US GX-1421 | TS GX-1422 | TC2: Validate select a grid item ", () => {
        cy.fixture("DOM/toolsqa/Iterations/Selectable.Page").then((the) => 
            cy.get(the.tab.grid).click().then(()=>
                cy.SelectItemRandom(the.itemCountTab.grid).then(() => {
                    cy.get(the.tab.list).click().then(() =>
                    cy.getItemSelected().should("not.be.visible"))
                    
                    cy.get(the.tab.grid).click().then(()=>
                    cy.getItemSelected().should("be.visible"))
                }))
        )
    })
    it("US GX-1421 | TS GX-1422 | TC3: Validate unselect a list item ", () => {
        cy.fixture("DOM/toolsqa/Iterations/Selectable.Page").then((the) => {
            cy.SelectItemRandom(the.itemCountTab.list).then(() => {
                cy.getItemSelected().click().then(() =>
                    cy.getItemSelected().should("not.exist"))
            })
        })
    })
    it("US GX-1421 | TS GX-1422 | TC4: Validate unselect a grid item", () => {
        cy.fixture("DOM/toolsqa/Iterations/Selectable.Page").then((the) => {
            cy.get(the.tab.grid).click()
            cy.SelectItemRandom(the.itemCountTab.grid).then(() => {
                cy.getItemSelected().click().then(() =>
                    cy.getItemSelected().should("not.exist"))
            })
        })
    })
})
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