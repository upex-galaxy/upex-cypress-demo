describe("ToolsQA | Elements | Radio Buttons", () =>
{
    beforeEach("Precondition: Estar situado en la pagina", () =>
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit("https://demoqa.com/radio-button")
    })

    it("US - GX-41 | TC1 : Validar que haya un total de 3 Radio Buttons (RB)", () =>
    {
        cy.get("[type='radio']").then((the) =>
        {
            expect(the.length).to.equal(3)
        })
        
    })
    
    it("US - GX-41 | TC2:  Validar hacer click en el RB  “Yes“ ", () =>
    {
        cy.get("#yesRadio")
            .click({force:true}) // deberia ser clikeable
            .should("have.attr", "type", "radio")
        cy.get("div label").first()
            .should("contain", "Yes")
        cy.get(".mt-3")
            .should("contain.text", "You have selected Yes")
        })
    
    
    it("US - GX-41 | TC3:  Validar hacer Click en el RB “Impressive” ", () =>
    {
        cy.get("#impressiveRadio")
        .click({force:true}) // deberia ser clikeable
        .should("have.attr", "type", "radio")
        cy.get("div label").eq(1)
            .should("contain", "Impressive")
        cy.get(".mt-3")
            .should("contain.text", "You have selected Impressive")
    })

    it("US - GX-41 | TC4: Intentar Validar hacer Click  en el RB  “No” estando inhabilitado ", () =>
    {
        cy.get("#noRadio")
            .should("be.disabled")
        cy.get("div label").eq(2)
            .should("contain", "No")
    })
        
    })
    

   
   
   
   
   

   
   
   
   

   
   
   
   
   
   
   
   
   
   

   
   
   
   
   
   
   
   

   
   

   
   
   
   
   
   
   
   
