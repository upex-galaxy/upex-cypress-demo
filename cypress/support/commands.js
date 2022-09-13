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

//Inicio Commands para el componente Element|TextBox
Cypress.Commands.add("SubmitTextBoxFormSuccessfull", (name,email,currentAdr,permanentAdr) => {
    cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => {
        //Si los datos name , currenAdr y permanent son null no se escribiran en el campo
        name && cy.get(the.fullName.input)
            .type(name)
        email && cy.get(the.email.input)
            .type(email)
        currentAdr && cy.get(the.currentAdr.input)
            .type(currentAdr)
        permanentAdr && cy.get(the.permanentAdr.input)
            .type(permanentAdr)
        cy.get(the.SubmitBtn)
            .click()
        //Si el nombre es nulo no deberia aparecer en la respuesta
        name && cy.get(the.Submit.Sucess.name).should('be.visible')
        //Si el currentAdr es nulo no deberia aparecer en la respuesta
        currentAdr && cy.get(the.Submit.Sucess.currentAdr).should('be.visible')
        //Si el permanentAdr es nulo no deberia aparecer en la respuesta
        permanentAdr && cy.get(the.Submit.Sucess.permanentAdr). should('be.visible')
        //Si el email es nulo no deberia aparecer en la respuesta
        email && cy.get(the.Submit.Sucess.email)
    })
})
Cypress.Commands.add("FailSubmitTextBoxForm", (name, email, currentAdr, permanentAdr) => {
    cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => {
        //Si los datos name , currenAdr y permanent son null no se escribiran en el campo
        name && cy.get(the.fullName.input)
            .type(name)
        email && cy.get(the.email.input)
            .type(email)
        currentAdr && cy.get(the.currentAdr.input)
            .type(currentAdr)
        permanentAdr && cy.get(the.permanentAdr.input)
            .type(permanentAdr)
        cy.get(the.SubmitBtn)
            .click()
        cy.get(the.Submit.Fail).should('be.visible')
    })
})
//Fin Commands para el componente Element|TextBox

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