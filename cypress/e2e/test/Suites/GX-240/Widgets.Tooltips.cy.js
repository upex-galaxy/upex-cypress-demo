describe("Radio Button", () =>
{
    const US = "US-GX-27"
    const TS = "TS 27"
    beforeEach("Precondición: Ir a la página de Radio Button", () =>
    {
        cy.visit("https://demoqa.com/radio-button")
        cy.url().should("contain","radio-button")
    })
    it(`${US} | ${TS} | TC1: Validar hacer click en el RB “yes”`, () =>
    {
        cy.get("#yesRadio").click({force:true})
            .should("be.checked")
        
        cy.get(".text-success").should("include.text","Yes")
    })

    it(`${US} | ${TS} | TC2: Validar hacer click en el RB “impressive”`, () =>
    {
        cy.get("#impressiveRadio").click({force:true})
            .should("be.checked")
        
        cy.get(".text-success").should("include.text","Impressive")
    })
})