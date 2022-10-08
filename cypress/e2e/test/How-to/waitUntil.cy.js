describe("cy.waitUntil Test: Validate Waiting for an Element or Action shows up", () =>
{
    before(() =>
    {
        cy.getUrl("https://www.saucedemo.com/", "sauce")
    })
    it("Login with Delayed Session should assert element after page is uploaded", () =>
    {
        cy.get("[data-test='username']").type("performance_glitch_user") 
        cy.get("[data-test='password']").type("secret_sauce")
        cy.get("#login-button").click()
        
        cy.waitUntil(() =>
            cy.get(".title").then(obj => expect(obj.text()).to.eq("Products")))
    })
})  