import {registerPage} from "./pages/registerPage.js"
import {loginPage} from "./pages/loginPage.js"

describe("US GX-726 | ToolsQA | Book Store Applications | Register", () => {
    

    let the;
    const time = 1;
    before("Load Data", () => {
        cy.fixture("DOM/toolsqa/BookStoreApplications/register.Page.json").then((data) => {
            the = data;
        })
    })

    beforeEach("Precondicion: El Usuario No debe estar registrado", () => {
        cy.visit(the.url) 
        cy.url().should("contain", "/register")
        registerPage.elements.registerHeading().should("contain.text","Register")
    })

    it("US-GX-726 | TS-727 | TC1:  Validar registrar usuario con credenciales válidas", () => {
        //User Register Successfully.
        registerPage.typeFirstname(the.firstname)
        registerPage.typeLastname(the.lastname)
        registerPage.typeUsername(registerPage.getUsername())
        registerPage.typePassword(the.validPassword)
        cy.confirmCaptcha()
        cy.wait(time)
        registerPage.elements.registerBtn().click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal("User Register Successfully.")
        })
    })

    it("US-GX-726 | TS-727 | TC2:  Validar mensaje “please verify reCaptcha to register” al registrar usuario sin hacer click en el Captcha", () => {
        registerPage.typeFirstname(the.firstname)
        registerPage.typeLastname(the.lastname)
        registerPage.typeUsername(the.username)
        registerPage.typePassword(the.validPassword)
        registerPage.elements.registerBtn().click()
        registerPage.elements.message().should("be.visible").and("have.text","Please verify reCaptcha to register!")
    })

    it("US-GX-726 | TS-727 | TC3:  Validar que no permita registrar usuario al dejar el input “UserName” vacío", () => {
        registerPage.typeFirstname(the.firstname)
        registerPage.typeLastname(the.lastname)
        registerPage.typePassword(the.validPassword)
        cy.confirmCaptcha()
        cy.wait(time)
        registerPage.elements.registerBtn().click({force:true})
        registerPage.elements.username_input().should("not.have.value").and("have.css","border-color",the.redColor)
    })

    it("US-GX-726 | TS-727 | TC4: Validar comportamiento de los inputs “Fisrt Name” , “Last Name”, “Username”, “Password” al registrar usuario con campos vacíos", () => {
        cy.confirmCaptcha()
        cy.wait(time)
        registerPage.elements.registerBtn().click({force:true})
        registerPage.elements.firstname_input().should("not.have.value").and("have.css","border-color",the.redColor)
        registerPage.elements.lastname_input().should("not.have.value").and("have.css","border-color",the.redColor)
        registerPage.elements.username_input().should("not.have.value").and("have.css","border-color",the.redColor)
        registerPage.elements.password_input().should("not.have.value").and("have.css","border-color",the.redColor)
    })

    it("US-GX-726 | TS-727 | TC5:  Validar que no permita registrar usuario con Password de menos de 8 caracteres", () => {
        registerPage.typeFirstname(the.firstname)
        registerPage.typeLastname(the.lastname)
        registerPage.typeUsername(the.username)
        registerPage.typePassword("Az5#") // Password de menos de 8 caracteres
        registerPage.elements.password_input().should("have.lengthOf.lessThan",8)
        cy.confirmCaptcha()
        cy.wait(time)
        registerPage.elements.registerBtn().click({force:true})
        registerPage.elements.message().should("be.visible")
        //assertion skipped by recaptcha
        //.and("have.text",the.invalidPasswordMessage)
    })

    it("US-GX-726 | TS-727 | TC6:  Validar que no permita registrar usuario con Password sin un carácter en mayúscula (A-Z)", () => {
        registerPage.typeFirstname(the.firstname)
        registerPage.typeLastname(the.lastname)
        registerPage.typeUsername(the.username)
        registerPage.typePassword("ilovetesting1#") // Password sin carácter en mayúscula (A-Z)
        cy.confirmCaptcha()
        cy.wait(time)
        registerPage.elements.registerBtn().click({force:true})
        registerPage.elements.message().should("be.visible")
        //assertion skipped by recaptcha
        //.and("have.text",the.invalidPasswordMessage)
    })

    it("US-GX-726 | TS-727 | TC7: Validar que no permita registrar usuario con Password sin un carácter en minúscula (a-z)", () => {
        registerPage.typeFirstname(the.firstname)
        registerPage.typeLastname(the.lastname)
        registerPage.typeUsername(the.username)
        registerPage.typePassword("PRUEBA123#") // Password sin carácter en minúscula (a-z)
        cy.confirmCaptcha()
        cy.wait(time)
        registerPage.elements.registerBtn().click({force:true})
        registerPage.elements.message().should("be.visible")
        //assertion skipped by recaptcha
        //.and("have.text",the.invalidPasswordMessage)
    })

    it("US-GX-726 | TS-727 | TC8: Validar que no permita registrar usuario con Password sin un carácter especial (!@#$*=+)", () => {
        registerPage.typeFirstname(the.firstname)
        registerPage.typeLastname(the.lastname)
        registerPage.typeUsername(the.username)
        registerPage.typePassword("Master123") // Password sin carácter especial (!@#$*=+)
        cy.confirmCaptcha()
        cy.wait(time)
        registerPage.elements.registerBtn().click({force:true})
        registerPage.elements.message().should("be.visible")
        //assertion skipped by recaptcha
        //.and("have.text",the.invalidPasswordMessage)
    })

    it("US-GX-726 | TS-727 | TC9:  Validar que no permita registrar usuario previamente registrado", () => {
        //User exists!
        registerPage.typeFirstname(the.firstname)
        registerPage.typeLastname(the.lastname)
        registerPage.typeUsername(the.registeredUser)
        registerPage.typePassword(the.validPassword)
        cy.confirmCaptcha()
        cy.wait(time)
        registerPage.elements.registerBtn().click({force:true})
        registerPage.elements.message().should("be.visible")
        //assertion skipped by recaptcha
        //.and("have.text","User exists!")
    })

    it("US-GX-726 | TS-727 | TC10: Validar ir a la pagina de Login", () => {
        registerPage.elements.backToLoginBtn().click()
        cy.url().should("contain", "/login")
        loginPage.elements.loginHeading().should("be.visible").and("have.text","Login")
    })



})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}