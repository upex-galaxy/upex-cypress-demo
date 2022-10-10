describe("Login", () => {
    beforeEach("Precondición: Ir a la Página", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("contain", "login")
    })
    it("US # | TC1: Validar Iniciar sesión exitosamente con credenciales válidas", () => {
        cy.LoginAdmin()
    })
    it("US # | TC#2: Validar Iniciar sesión exitosamente con credenciales Inválidas", () => {
        cy.LoginCustom("Leon","Tigre")
    })
})