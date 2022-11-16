describe("GX-2992 | ToolsQA | Elements | Check Box", () => {

    beforeEach("Test the checkboxes", () => {
		cy.visit("https://demoqa.com/checkbox")
        cy.url().should("contain","checkbox") 
	})
    it("TC 1 | I want to test the checkboxe | Expand All |",()=>{

        cy.get("[title='Expand all']").click()
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon > path').check()
    })
    it("TC 2 | I want to test the checkboxe | Collapse All |",()=>{
        cy.get("[title='Expand all']").click()
        cy.get("[title='Collapse all']").click()
    
    })
    it("TC 3 | I want to test the checkboxe | Each toggle |",()=>{

    })
    it("TC 4 | I want to test the checkboxe | Each checkbox |",()=>{

    })
}) 