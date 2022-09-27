import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("US 756 | TS 757 | TC1:  Validar iniciar sesión exitosamente", () =>
{
    When("the user enters a existing credentials as {string} and {string} in the form", (username, password) =>
    {
        // Given: 
        cy.visit("https://demo.testim.io/")
        cy.contains("Log in").click()
        // When:
        cy.get("[tabindex='1']").type(username)
        cy.get("[tabindex='2']").type(password)
    })
    And("clicks on the Log In button", () =>
    {
        cy.get("[tabindex='3']").click()
    })
    Then("the user must be logged in and moved to the home page", () =>
    {
        cy.url().should("contain","demo.testim.io")
    })
    And("the Login link of the navigation bar should display a welcome msg as {string}", (msg) =>
    {
        cy.contains(msg).should("be.visible")
    })

})