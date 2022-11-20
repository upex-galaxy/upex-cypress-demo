describe("GX-2992 | ToolsQA | Elements | Checkbox", () => {

    beforeEach("Test the checkboxes", () => {

		cy.visit("https://demoqa.com/checkbox")
        cy.url().should("contain","checkbox") 
	})
    it("GX-2992 | TC01 | I want to test the checkboxe | Expand all |",()=>{

        cy.contains("Home").should("be.visible")
        cy.get("[aria-label='Expand all']").click()
        cy.get(".rct-icon.rct-icon-expand-open").should("be.visible")
        cy.get(".rct-icon.rct-icon-expand-close").should("be.not.exist")

    })
    it("GX-2992 | TC02 | I want to test the checkboxe | Collapse all |",()=>{

        cy.contains("Home").should("be.visible")
        cy.get("[aria-label='Expand all']").click()
        cy.get("[aria-label='Collapse all']").click()
        cy.get(".rct-icon.rct-icon-expand-close").should("be.exist")
        cy.get(".rct-icon.rct-icon-expand-open").should("be.not.exist")

    })
    it("GX-2992 | TC03 | I want to test the checkboxe | Select CheckBox All | Uncheckbox all",()=>{

        cy.contains("Home").should("have.text", "Home")
        cy.get("[aria-label='Expand all']").click()
        cy.get(".rct-icon.rct-icon-expand-open").should("be.visible")
        cy.get(".rct-icon.rct-icon-uncheck").eq(0).click()
        cy.get(".rct-icon.rct-icon-check").eq(0).click()
        cy.get(".rct-icon.rct-icon-check").should("be.not.exist")
        cy.get(".rct-icon.rct-icon-uncheck").should("be.exist")
        
    })
    it("GX-2992 | TC04 | I want to test the checkboxe | Select checkBox specific document |",()=>{

        cy.contains("Home").should("have.text", "Home")
        cy.get("[aria-label='Toggle']").eq(0).click()
        cy.get("[aria-label='Toggle']").eq(2).click()
        cy.get("[aria-label='Toggle']").eq(4).click()
        cy.get(".rct-icon.rct-icon-uncheck").eq(6).click()
        cy.get("#result").should("contain","private")

    })
    it("GX-2992 | TC05 | I want to test the checkboxe | Each toggle |",()=>{

        cy.contains("Home").should("be.visible")
        cy.get("[aria-label='Expand all']").click()
        cy.get(".rct-icon.rct-icon-uncheck").eq(6).click()
        cy.get("#result").should("contain","react")
        cy.get(".rct-icon.rct-icon-uncheck").eq(8).click()
        cy.get("#result").should("contain","classified")
        cy.get("[aria-label='Collapse all']").click()
        cy.get("[aria-label='Toggle']").eq(0).click()
        cy.get("[aria-label='Toggle']").eq(3).click()
        cy.get(".rct-icon.rct-icon-uncheck").eq(3).click()
        cy.get("#result").should("contain","excelFile")
        cy.get("[aria-label='Collapse all']").click()
        
    })

    it("GX-2992 | TC06 | I want to test the checkboxe | Each checkbox |",()=>{

        cy.contains("Home").should("have.text", "Home")
        cy.get("[aria-label='Expand all']").click()
        cy.get(".rct-icon.rct-icon-expand-open").should("be.visible")
        cy.get(".rct-icon.rct-icon-uncheck").eq(0).click()
    
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