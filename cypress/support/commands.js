// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

Cypress.Commands.add("buttonDoubleClickMe", () =>
{    
    cy.fixture('DOM/toolsqa/Elements/Buttons.Page').then((the) =>
    {
        cy.contains(the.button.double).dblclick({ force: true });
        cy.contains(the.output.double).should('contain.text', 'You have done a double click');
    });
});

Cypress.Commands.add("buttonRightClickMe", () =>
{
    cy.fixture('DOM/toolsqa/Elements/Buttons.Page').then((the) =>
    {
        cy.contains(the.button.right).rightclick({ force: true });
        cy.contains(the.output.right).should('contain.text', 'You have done a right click');
    });
});

Cypress.Commands.add("buttonClickMe", () =>
{
    cy.fixture('DOM/toolsqa/Elements/Buttons.Page').then((the) =>
    {
        cy.get(the.button.click).eq(3).click({ force: true });
        cy.contains(the.output.click).should('contain.text', 'You have done a dynamic click');
    });
});

Cypress.Commands.add("Login", () =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.input.username).type(the.data.user)
            .should("have.value", the.data.user)
        
            cy.get(the.input.password).type(the.data.password)
            .should("have.value", the.data.password)
        
            cy.contains("Login").click()
        })
})
Cypress.Commands.add("CustomLogin", (user,password) =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.input.username).type(user)
            .should("have.value", user)
        
            cy.get(the.input.password).type(password)
            .should("have.value", password)
        
            cy.contains("Login").click()
        })
})
Cypress.Commands.add("ErrorCard", () =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.error)
                .should("be.visible")
                .and("contain.text",
                    "Epic sadface: Username and password do not match any user in this service")
        })
})
Cypress.Commands.add("DragDrop", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: ${X}px; top: ${Y}px;`)
})
Cypress.Commands.add("DragDropX", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: ${X}px; top: 0px;`)
})
Cypress.Commands.add("DragDropY", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: 0px; top: ${Y}px;`)
})

Cypress.Commands.add("LoginAdmin", () => {
    cy.fixture("DOM/orange/Login.Page").then((the) =>
        {
            cy.get(the.input.username)
                .type(the.data.username)
                .should("have.value", the.data.username)
            
            cy.get(the.input.password)
                .type(the.data.password)
                .should("have.value", the.data.password)
            
            cy.get(the.button).click()

            cy.url().should("contain","viewEmployeeList")
        })
})
Cypress.Commands.add("LoginCustom", (username, password) => {
    cy.fixture("DOM/orange/Login.Page").then((the) =>
        {
            cy.get(the.input.username)
                .type(username)
                .should("have.value", username)
            
            cy.get(the.input.password)
                .type(password)
                .should("have.value", password)
            
            cy.get(the.button).click()

            cy.contains(the.Message.invalid).should("be.visible")
        })
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })