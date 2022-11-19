describe("", ()=>{
beforeEach("Precondicon: El usuario debe estar situado en la página a testear",()=>{
    cy.visit("https://demoqa.com/webtables");
    cy.url().should("contain","webtables")

})

    it("GX-2522  | TC1:  Validar el registro de un nuevo usuario.",()=>{
       cy.get("[id='addNewRecordButton']").click();
       //validación del formulario vacio
       cy.get("#firstName-label").contains("First Name");
       cy.get("#lastName-label").contains("Last Name");
       cy.get("#userEmail-label").contains("Email");
       cy.get("#age-label").contains("Age");
       //validar campos vacios 
       cy.get("#salary-label").contains("Salary");
       cy.get("#department-label").contains("Department");
       cy.get("#firstName").should("be.empty")
       cy.get("#lastName").should("be.empty")
       cy.get("#userEmail").should("be.empty")
       cy.get("#age").should("be.empty")
       cy.get("#salary").should("be.empty")
       cy.get("#department").should("be.empty")

        //validar texto
        
        cy.get("#salary-label").contains("Salary");
       cy.get("#department-label").contains("Department");
       cy.get("#firstName").should("be.empty")
       cy.get("#lastName").should("be.empty")
       cy.get("#userEmail").should("be.empty")
       cy.get("#age").should("be.empty")
       cy.get("#salary").should("be.empty")
       cy.get("#department").should("be.empty")
       cy.get("#firstName").type("123344") 
       cy.get("#firstName").contains("/^[A-Za-záéíóúñ]{2,}([s][A-Za-záéíóúñ]{2,})+$/");

       


    })


})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	//returning false here prevents Cypress from
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