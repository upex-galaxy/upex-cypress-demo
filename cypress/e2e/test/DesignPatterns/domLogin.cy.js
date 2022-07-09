describe("US 123 | TS 123 | TC1: CÓMO USAR LAS VARIABLES DE FIXTURE COMO EL DOM", () =>
{
    it("Precondición: Usuario debe tener acceso y estar en la pag de Login", () =>
    {
        cy.visit("https://www.saucedemo.com/")
    })
    it("Iniciar sesión correctamente con nombre y contraseña de usuario válido", () =>
    {
        cy.fixture("DOM/sauce/loginPage").then((the) =>
        {
            cy.get(the.input.username).type(the.data.user)
                .should("have.value", the.data.user)        
            cy.get(the.input.password).type(the.data.password)
                .should("have.value", the.data.password)            
            cy.contains("Login").click()
        })
    })
    it("Debería cargar la página de PLP como usuario ingresado", () =>
    {
        cy.url().should("include", "inventory")
    })
})