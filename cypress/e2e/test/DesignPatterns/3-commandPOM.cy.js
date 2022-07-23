// Esto no es PageObjectModel como tal, pero es prácticamente lo mismo.
// Cypress usa Commands como acciones más simples y fáciles de interpretar.

describe("US 123 | TS 123 | TC1: CÓMO USAR LOS COMANDOS CUSTOM DE CYPRESS COMO PAGE-OBJECT-MODEL", () =>
{
    it("Precondición: Usuario debe tener acceso y estar en la pag de Login", () =>
    {
        cy.visit("/")
    })
    it("Iniciar sesión correctamente con nombre y contraseña de usuario válido", () =>
    {
        cy.Login()
    })
    it("Debería cargar la página de PLP como usuario ingresado", () =>
    {
        cy.url()
            .should("include", "inventory")
    })
})
describe("US 123 | TS 123 | TC2: CÓMO USAR LOS COMANDOS CUSTOM DE CYPRESS COMO PAGE-OBJECT-MODEL", () =>
{
    it("Precondición: Usuario debe tener acceso y estar en la pag de Login", () =>
    {
        cy.visit("/")
    })
    it("Intentar hacer login con nombre y contraseña de usuario incorrecto", () =>
    {
        cy.CustomLogin("UPEX", "Galaxy")
    })
    it("Debería desplegarse un mensaje de error correspondiente", () =>
    {
        cy.ErrorCard()
    })
})