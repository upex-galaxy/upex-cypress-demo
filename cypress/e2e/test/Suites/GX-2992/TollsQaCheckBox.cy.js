describe("GX-2992 | ToolsQA | Elements | Check Box", () => {

    beforeEach("Test the checkboxes", () => {
		cy.visit("https://demoqa.com/checkbox")
        cy.url().should("contain","checkbox") 
	})
    it("TC1 | I want to test the checkboxe | Expand All |",()=>{

        cy.contains("Home").should("be.visible")
        cy.get("[aria-label='Expand all']").click()
        cy.get(".rct-icon.rct-icon-expand-open").should("be.visible")
        cy.get(".rct-icon.rct-icon-expand-close").should("be.not.exist")

    })
    it("TC2 | I want to test the checkboxe | Collapse All |",()=>{

        cy.contains("Home").should("be.visible")
        cy.get("[aria-label='Expand all']").click()
        cy.get("[aria-label='Collapse all']").click()
        cy.get(".rct-icon.rct-icon-expand-close").should("be.exist")
        cy.get(".rct-icon.rct-icon-expand-open").should("be.not.exist")

    })
    it("TC3 | I want to test the checkboxe | Select CheckBox All | Select UnCheckBox All",()=>{

        cy.contains("Home").should("have.text", "Home")
        cy.get("[aria-label='Expand all']").click()
        cy.get(".rct-icon.rct-icon-expand-open").should("be.visible")
        cy.get(".rct-icon.rct-icon-uncheck").eq(0).click()
        cy.get(".rct-icon.rct-icon-check").eq(0).click()
        cy.get(".rct-icon.rct-icon-check").should("be.not.exist")
        cy.get(".rct-icon.rct-icon-uncheck").should("be.exist")
        
    })
    /* it("TC4 | I want to test the checkboxe | Each toggle |",()=>{

        cy.get("[type='checkbox']").click(0)
        cy.get("[type='checkbox']").click(1)
        cy.get("[for='tree-node-note']").click()
        cy.get(".rct-icon.rct-icon-check").click()
        cy.get("#result").should("contain.text","note")
    })
    it("TC5 | I want to test the checkboxe | Each checkbox |",()=>{

    }) */
})