describe("[GX-1341] ✅ToolsQA | Forms | Practice Form", () =>
{ 
    beforeEach("Precondición: Visitar la pagina de Practice Form.", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.url().should("contain", "practice-form")
        cy.viewport(550, 750)
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

    it("TC05 Validar registro de formulario con campo email invalido(No contiene Mínimo 1 carácter alfanumérico despues del '@') y campos necesarios validos.", () => { 
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("#userEmail").type("ghiano.gian@")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("1234567890")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get("#submit").click({ force: true })
        cy.get("#userEmail").should("have.css", "border-color", "rgb(220, 53, 69)")
    })

    it("TC06 Validar registro de formulario con campo email invalido(No contiene Mínimo 1 carácter alfanumérico antes del '@') y campos necesarios validos.", () => { 
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("#userEmail").type("@gmail.com")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("1234567890")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get("#submit").click({ force: true })
        cy.get("#userEmail").should("have.css", "border-color", "rgb(220, 53, 69)")
    })

    it("TC07 Validar registro de formulario con campo email invalido(No contiene '.' después de 1 carácter alfanumérico después del '@') y campos necesarios validos.", () => { 
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("#userEmail").type("ghianogian@gmailcom")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("1234567890")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get("#submit").click({ force: true })
        cy.get("#userEmail").should("have.css", "border-color", "rgb(220, 53, 69)")
    })

    it("TC08 Validar registro de formulario con campo email invalido(No contiene mínimo 2 caracteres alfanuméricos después del '.') y campos necesarios validos.", () => { 
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("#userEmail").type("ghianogian@gmail.a")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("1234567890")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get("#submit").click({ force: true })
        cy.get("#userEmail").should("have.css", "border-color", "rgb(220, 53, 69)")
    })

    it("TC09 Validar que el mensaje Pop-Up contenga la data correspondiente luego de enviar el formulario con todos los inputs validos.", () => { 
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
        cy.get("#example-modal-sizes-title-lg").should("contain", "Thanks for submitting the form")
        cy.contains('td','Gianfranco')
        cy.contains('td','Ghiano')
        cy.contains('td','ghiano.gian@gmail.com')
        cy.contains('td', 'Male')
        cy.contains('td', '1234567890')
        cy.contains('td', '27 March,1994')
        cy.contains('td', 'English')
        cy.contains('td', 'Sports')
        cy.contains('td', 'upexlogo')
        cy.contains('td', 'Buenos Aires, Argentina')
        cy.contains('td', 'Haryana Karnal')
    })

    it("TC10 Validar registro de formulario con campo Mobile number invalido (Caracteres alfabético) y campos necesarios validos.", () => { 
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("abcdefg")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get('#userForm').submit()
        cy.get("#userNumber").should("have.css", "border-color", "rgb(220, 53, 69)")
    })
    

    it("TC10 Validar registro de formulario con campo Mobile number invalido (Menos de 10 Caracteres numéricos) y campos necesarios validos.", () => { 
        cy.get("#firstName").type("Gianfranco")
        cy.get("#lastName").type("Ghiano")
        cy.get("[for='gender-radio-1']").click()
        cy.get("#userNumber").type("2134 ")
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("March")
        cy.get(".react-datepicker__year-select").select("1994")
        cy.get(".react-datepicker__day.react-datepicker__day--027").eq(1).click()
        cy.get('#submit').type("{enter}")
        cy.get("#userNumber").should("have.css", "border-color", "rgb(220, 53, 69)")
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