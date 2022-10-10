describe("Login", () =>
{
    beforeEach("Precondición: Ir a la Página", () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("contain","login")
    })

    it("US # | TC1: Validar Iniciar sesión exitosamente con credenciales válidas", () =>
    {
        cy.get("[name='username']") // Username
            .type("Admin")
        
        cy.get("[name='password']") // Password
            .type("admin123")
        
        cy.get("button") // Login Button
            .click()
        
        cy.url().should("contain","viewEmployeeList")
    })
    it("US # | TC2: Validar No poder Iniciar sesión cuando Username es inválido", () =>
    {
        cy.get("[name='username']") // Username
            .type("Adminj")
        
        cy.get("[name='password']") // Password
            .type("admin123")
        
        cy.get("button") // Login Button
            .click()
        
         // EXPECTED RESULT:
        cy.contains("Invalid credentials").should("be.visible")
    })
    it("US # | TC3: Validar No poder Iniciar sesión cuando Password es inválido", () =>
    {
        cy.get("[name='username']") // Username
            .type("Admin")
        
        cy.get("[name='password']") // Password
            .type("admin1234")
        
        cy.get("button") // Login Button
            .click()
        
        // EXPECTED RESULT:
        cy.contains("Invalid credentials").should("be.visible")
    })

})