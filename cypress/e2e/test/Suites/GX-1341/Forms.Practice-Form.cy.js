describe("[GX-1341] ✅ToolsQA | Forms | Practice Form", () =>
{ 
    beforeEach("Precondición: Visitar la pagina de Practice Form.", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.url().should("contain", "practice-form")
    })

    it("TC01 Validar registro de formulario con todos los Inputs y su data valida.", () => {
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("#userEmail").type("ghiano.gian@gmail.com")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("1234567890")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get("#subjectsInput").type("English").type('{enter}')
        cy.get("[for='hobbies-checkbox-1']").click()
        cy.get("#uploadPicture")
        cy.fixture("DOM/toolsqa/Elements/UploadPicture.Page").then((the) =>
        {
            const filepath = "images/upexlogo";
            cy.get("#uploadPicture").attachFile(filepath);
        });
        cy.get("#currentAddress").type("Buenos Aires, Argentina")
        cy.get(".css-1hwfws3").eq("1").type("Haryana{enter}")
        cy.get(".css-1hwfws3").eq("2").type("Karnal{enter}")
        cy.get("#submit").click({ force: true })
        cy.get("#example-modal-sizes-title-lg").should("contain","Thanks for submitting the form")
    })  
    
    it("TC02 Validar registro de formulario con todos los campos nulos.", () => {
        cy.get("#submit").click({ force: true })
        cy.get("#firstName").should("have.css", "border-color", "rgb(220, 53, 69)")
        cy.get("#lastName").should("have.css", "border-color", "rgb(220, 53, 69)")
        cy.get("#userNumber").should("have.css", "border-color", "rgb(220, 53, 69)")
        cy.get("[for='gender-radio-1']").should("have.css", "border-color", "rgb(220, 53, 69)")
        cy.get("[for='hobbies-checkbox-1']").should("have.css", "border-color", "rgb(40, 167, 69)")
        cy.get("#userEmail").should("have.css", "border-color", "rgb(40, 167, 69)")
        cy.get("#currentAddress").should("have.css", "border-color", "rgb(40, 167, 69)")
    })  

    it("TC03 Validar registro de formulario con los campos necesarios(First name/Last name/Gender/Mobile number/Date of birth).", () => {
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("#userEmail").type("ghiano.gian@gmail.com")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("1234567890")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get("#submit").click({ force: true })
        cy.get("#example-modal-sizes-title-lg").should("contain","Thanks for submitting the form")
    })  

    it("TC04 Validar registro de formulario con campo email invalido(no contiene '@'') y campos necesarios validos.", () => { 
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("#userEmail").type("ghiano.giangmail.com")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("1234567890")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get("#submit").click({ force: true })
        cy.get("#userEmail").should("have.css", "border-color", "rgb(220, 53, 69)")



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