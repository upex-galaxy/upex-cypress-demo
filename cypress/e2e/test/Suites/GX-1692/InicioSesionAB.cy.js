/ <reference types="cypress" / >
    require('cypress-xpath')
import { INTERNAL_PROPERTY_NAME } from '@badeball/cypress-cucumber-preprocessor/lib/constants'
import 'cypress-file-upload'
describe("AcademyBugs | Create an Account ", () => {
    beforeEach("Precondición: Estar situado en Interactions/selectable", () => {
        cy.visit("https://academybugs.com/account/?ec_page=register")
        cy.url().should("contain", "register")
        cy.clearCookies()
        cy.clearLocalStorage()      
    })
    it("|GX-1692| TC 1: Create new user HappyPath.'", () => {
        cy.get("#ec_account_register_first_name").should("be.visible").type("Saruman")
        cy.get("#ec_account_register_last_name").should("be.visible").type("El Blanco")
        cy.get("#ec_account_register_email").should("be.visible").type("Isengard@gmail.com")
        cy.get("#ec_account_register_retype_email").should("be.visible").type("Isengard@gmail.com")
        cy.get("#ec_account_register_password").should("be.visible").type("Isengard123")
        cy.get("#ec_account_register_password_retype").should("be.visible").type("Isengard123")
        cy.get('.ec_cart_left > form > .ec_cart_button_row > .ec_account_button').should("be.visible").click({ force: true })
    })
    it("|GX-1692| TC 2: Sign In HappyPath.", () => {
        cy.fixture("DOM/AcademyBugs/InicioSesionAB").then((the) =>
        {
            cy.get(the.username.input)
                .type(the.username.data.valid)
            
            cy.get(the.password.input)
                .type(the.password.data.valid)
            
            cy.get(the.SubmitButton).click()
            cy.get('.ec_account_right > :nth-child(6) > .ec_account_dashboard_link').should("be.visible")
        })
        
    })
    it("|GX-1692| TC 3: Sign In (Incorrect form).", () => {
        cy.fixture("DOM/AcademyBugs/InicioSesionAB").then((the) =>
        {
            cy.get(the.username.input)
                .type(the.username.data.invalid)
            
            cy.get(the.password.input)
                .type(the.password.data.invalid)
            
            cy.get(the.SubmitButton).click()
            cy.get('.ec_account_error > div').should("contain.text", "The username or password you entered is incorrect. Forgot Your Password?")
                .should("have.css", "color", "rgb(153, 0, 0)")
        })    
    })
    it("|GX-1692| TC 4: Sign Up (Incorrect form).", () => {
        cy.get("#ec_account_register_first_name").should("be.visible").type("S4rum4n")
        cy.get("#ec_account_register_last_name").should("be.visible").type("El-Blanco")
        cy.get("#ec_account_register_email").should("be.visible").type("Isengard.gmail.Sauron").should("have.css", "color", "rgb(64, 64, 64)")
        cy.get("#ec_account_register_retype_email").should("be.visible").type("Isengard.gmail.Sauron").should("have.css", "color", "rgb(64, 64, 64)")
        cy.get("#ec_account_register_password").should("be.visible").type("Isengard123")
        cy.get("#ec_account_register_password_retype").should("be.visible").type("Isengard123")
        cy.get('.ec_cart_left > form > .ec_cart_button_row > .ec_account_button').should("be.visible").click({ force: true })  
    })
    it("|GX-1692| TC 5: Sign Up (Empty inputs).", () => {

        cy.get("#ec_account_register_first_name").should("be.visible")
        cy.get("#ec_account_register_last_name").should("be.visible")
        cy.get("#ec_account_register_email").should("be.visible").should("have.css", "color", "rgb(64, 64, 64)")
        cy.get("#ec_account_register_retype_email").should("be.visible")
        cy.get("#ec_account_register_password").should("be.visible")
        cy.get("#ec_account_register_password_retype").should("be.visible")
        cy.get('.ec_cart_left > form > .ec_cart_button_row > .ec_account_button').should("be.visible").click({ force: true })
        cy.contains("Please enter your First Name")
        cy.contains("Please enter a valid Email")
        cy.contains("Please enter a password of at least 6 characters")
    })
})