describe("AcademyBugs | Create an Account ", () => {
    beforeEach("Precondición: Estar situado en Interactions/selectable", () => {
        cy.visit("https://academybugs.com/account/?ec_page=register")
        cy.url().should("contain", "register")
        cy.clearCookies()
        cy.clearLocalStorage()      
    })
    it("|GX-1692| TC 1: Create new user HappyPath.'", () => {
        cy.fixture("DOM/AcademyBugs/InicioSesionAB").then((the) =>
        {
            cy.get(the.register.firstName)
                .should(the.assert)
                .type("Saruman")
            cy.get(the.register.lastName)
                .should(the.assert)
                .type("El Blanco")
            cy.get(the.register.email)
                .should(the.assert)
                .type(the.username.data.valid)
            cy.get(the.register.reEmail)
                .should(the.assert)
                .type(the.username.data.valid)
            cy.get("#ec_account_register_password")
                .type(the.password.data.valid)
            cy.get("#ec_account_register_password_retype")
                .type(the.password.data.valid)
            cy.get(the.register.button)
                .should(the.assert)
                .click({ force: true })
        })
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
        cy.fixture("DOM/AcademyBugs/InicioSesionAB").then((the) =>
        {
            cy.get(the.register.firstName)
                .should(the.assert)
                .type("S4rum4n")
            cy.get(the.register.lastName)
                .should(the.assert)
                .type("El-Blanco")
            cy.get("#ec_account_register_email")
                .should(the.assert)
                .type(the.username.data.incorrect).should("have.css", "color", "rgb(64, 64, 64)")
            cy.get("#ec_account_register_retype_email")
                .should(the.assert)
                .type(the.username.data.incorrect).should("have.css", "color", "rgb(64, 64, 64)")
            cy.get("#ec_account_register_password")
                .type(the.password.data.valid)
            cy.get("#ec_account_register_password_retype")
                .type(the.password.data.valid)
            cy.get(the.register.button)
                .should(the.assert)
                .click({ force: true })
        })
    })
    it("|GX-1692| TC 5: Sign Up (Empty inputs).", () => {
        cy.fixture("DOM/AcademyBugs/InicioSesionAB").then((the) =>
        {
            cy.get(the.register.firstName)
                .should(the.assert)
            cy.get(the.register.lastName)
                .should(the.assert)
            cy.get(the.register.email)
                .should(the.assert)
                .should("have.css", "color", "rgb(64, 64, 64)")
            cy.get(the.register.reEmail)
                .should(the.assert)
                .should("have.css", "color", "rgb(64, 64, 64)")
            cy.get("#ec_account_register_password")
            cy.get("#ec_account_register_password_retype")
            cy.get(the.register.button)
                .should(the.assert)
                .click({ force: true })
                cy.contains("Please enter your First Name")
                cy.contains("Please enter a valid Email")
                cy.contains("Please enter a password of at least 6 characters")    
        })
    })
})