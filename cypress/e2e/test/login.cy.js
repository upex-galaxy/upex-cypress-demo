describe("US 123 | TS 123 | TC1: Validar iniciar sesión correctamente", () =>
{
    it("Precondición: Usuario debe tener acceso y estar en la pag de Login", () =>
    {
        cy.visit("https://www.saucedemo.com/")
    })
    it("Ingresar nombre y contraseña de usuario correctamente", () =>
    {
        cy.get("#user-name").type("standard_user")
            .should("have.value", "standard_user")
        
        cy.get("#password").type("secret_sauce")
        .should("have.value","secret_sauce")
    })
    it("Hacer click en el botón LOGIN", () =>
    {
        cy.contains("Login").click()
    })
    it("Debería cargar la página de PLP como usuario ingresado", () =>
    {
        cy.url().should("include", "inventory")
        cy.get(".inventory_list").should("be.visible")
    })
})
