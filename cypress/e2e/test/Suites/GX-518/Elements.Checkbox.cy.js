describe("US GX-518 | TS ✅ToolsQA | Elements | Check Box", () => {
    beforeEach("visit ToolsQA page", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.visit(the.urlCheckbox)
            cy.url().should("include", "checkbox")
            cy.wait(2000)
        })
    })
    it.skip("TC1 | User expands all the options with the “+” button", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.expandAll).click()
            cy.get(the.label.checkbox).each((element) => {
                expect(element).to.be.visible
            })
        })
    })
    it.skip("TC2 | User expands a section of options with an arrow button (right)", () => {
        cy.fixture("DOM/toosqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.toggle).click()
            cy.get(the.label.checkbox).should("have.length","4")
        })
    })
    it.skip("TC3 | User collapse all the possibilities with the “-” button", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.expandAll).click()
            cy.get(".rct-text").siblings('ol').should("be.visible")
            cy.get(the.collapseAll).click()
            cy.get(".rct-text").siblings('ol').should("not.exist")
        })
    })
    it("TC4 | User collapse a selection of options with an arrow button (down)", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.expandAll).click()
            cy.contains("WorkSpace").parent().within(() => {
                cy.get(the.label.checkbox).click()
            })
            cy.get(the.checkboxIs.Check).should("exist")
            cy.get(the.checkboxIs.halfCheck).should("exist")
        })
    })
    it.skip("TC5 | User select all the options with the Home checkbox ", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            
        })
    })
    it.skip("TC6 | User select a selection of options from a section checkbox ", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            
        })
    })
    it.skip("TC7 | User selects one checkbox from a section ", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            
        })
    })
    it.skip("TC8 | User selects more than one checkbox from different sections", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            
        })
    })
    it.skip("TC9 | User selects more than one checkbox from the same section", () => {
        cy.feature("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            
        })
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