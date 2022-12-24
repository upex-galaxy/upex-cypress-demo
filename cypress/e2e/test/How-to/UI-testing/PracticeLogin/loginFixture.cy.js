describe("Login", () =>
{
    beforeEach("Precondición: Ir a la Página", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("contain","login")
    })
    it("US # | TC1: Validar Iniciar sesión exitosamente con credenciales válidas", () =>
    {
        cy.fixture("DOM/orange/Login.Page").then((the) =>
        {
            cy.get(the.input.username)
                .type(the.data.username)
            
            cy.get(the.input.password)
                .type(the.data.password)
            
            cy.get(the.button).click()

            cy.url().should("contain","dashboard")
        })
    })
    it("US # | TC2: Validar No poder Iniciar sesión cuando Username es inválido", () =>
    {
        cy.fixture("DOM/orange/Login.Page").then((the) =>
        {
            cy.get(the.input.username)
                .type(the.data.invname)
            
            cy.get(the.input.password)
                .type(the.data.password)
            
            cy.get(the.button).click()
            
            cy.contains(the.Message.invalid).should("be.visible")
        })
    })
    it("US # | TC3: Validar No poder Iniciar sesión cuando Password es inválido", () =>
    {
        cy.fixture("DOM/orange/Login.Page").then((the) =>
        {
            cy.get(the.input.username)
                .type(the.data.username)
            
            cy.get(the.input.password)
                .type(the.data.invpassw)
            
            cy.get(the.button).click()
            
            cy.contains(the.Message.invalid).should("be.visible")
        })
    })
})