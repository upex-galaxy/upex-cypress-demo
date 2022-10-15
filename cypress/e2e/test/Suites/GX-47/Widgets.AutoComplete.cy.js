import AutoCompletePage from "./pages/AutoCompletePage"

describe("US GX-47 | ToolsQA | Widgets | Auto-Complete", () => {

    
    beforeEach("Precondicion: El usuario debe de estar en la pagina: https://demoqa.com/auto-complete", () => {
        cy.visit("https://demoqa.com/auto-complete")
        cy.url().should("contain","auto-complete")
    
    })

    //FOR: Type Multiple color names Input

    it("US-GX-47 | TC1: Validar que la lista de opciones haga match con la letra ingresada en el input “Type Multiple color names”", () => {
        //Ingresar Letra
        AutoCompletePage.typeMultipleColor("a")
        //Validar que la letra ingresada haga match
        AutoCompletePage.elements.listOfColorNames().each((element) => {
            let colores = element.text()
            cy.wrap(colores.toLowerCase()).as("colores")

            for (let i = 0; i < colores.length; i++){
                cy.get("@colores").should("contain", "a")
            }
        })

    })

    it("US-GX-47 | TC2: Validar seleccionar un color del input “Type Multiple color names”", () => {
        //Color
        AutoCompletePage.typeMultipleColor("e")
        AutoCompletePage.elements.listOfColorNames().should("contain", "White").contains("White").click()
        //Assert
        AutoCompletePage.elements.colorTagContainer().should("contain","White")
    })

    it("US-GX-47 | TC3:  Validar seleccionar 2 colores del input “Type Multiple color names”", () => {
        //Color1
        AutoCompletePage.typeMultipleColor("b")
        AutoCompletePage.elements.listOfColorNames().should("contain", "Black").contains("Black").click()
        AutoCompletePage.elements.inputs.multipleColorName().should("have.text", "Black")
        //Color2
        AutoCompletePage.typeMultipleColor("e")
        AutoCompletePage.elements.listOfColorNames().should("contain", "White").contains("White").click()
        //Validar que tiene 2 elementos
        AutoCompletePage.elements.colorTagContainer().should("contain","White").and("contain","Black")
    })

    it("US-GX-47 | TC4: Validar eliminar 1 color ya seleccionado del campo “Type Multiple color names”", () => {
        AutoCompletePage.typeMultipleColor("b")
        AutoCompletePage.elements.listOfColorNames().should("contain", "Blue").contains("Blue").click()
        AutoCompletePage.elements.inputs.multipleColorName().should("have.text", "Blue")
        AutoCompletePage.elements.deleteColorIcon().click()
        AutoCompletePage.elements.colorTagContainer().should("not.exist")
    })

    it("US-GX-47 | TC5: Validar eliminar el primer color cuando el input “Type Multiple color names” tiene 2 colores seleccionados", () => {
        //Color 1
        AutoCompletePage.typeMultipleColor("b")
        AutoCompletePage.elements.listOfColorNames().should("contain", "Blue").contains("Blue").click()
        AutoCompletePage.elements.inputs.multipleColorName().should("have.text", "Blue")
        //Color 2
        AutoCompletePage.typeMultipleColor("r")
        AutoCompletePage.elements.listOfColorNames().should("contain", "Red").contains("Red").click()
        AutoCompletePage.elements.inputs.multipleColorName().should("contain", "Red")
        //Delete Color
        AutoCompletePage.elements.deleteAllColorsIcon().click()
        AutoCompletePage.elements.colorTagContainer().should("not.exist")
        
    })

    it("US-GX-47 | TC6: Validar eliminar todos los colores seleccionados cuando el input “Type Multiple color names” tiene 2 colores seleccionados", () => {
         //Color 1
        AutoCompletePage.typeMultipleColor("b")
        AutoCompletePage.elements.listOfColorNames().should("contain", "Blue").contains("Blue").click()
        AutoCompletePage.elements.inputs.multipleColorName().should("have.text", "Blue")
        //Color 2
        AutoCompletePage.typeMultipleColor("r")
        AutoCompletePage.elements.listOfColorNames().should("contain", "Red").contains("Red").click()
        AutoCompletePage.elements.inputs.multipleColorName().should("contain", "Red")
        // Delete All Colors
        AutoCompletePage.elements.deleteAllColorsIcon().click()

        //Assert
        AutoCompletePage.elements.colorTagContainer().should("not.exist")
    })

    //FOR: Type single color name Input

    it("US-GX-47 | TC7: Validar que la lista de opciones haga match con la letra ingresada en el input “Type single color name”", () => {
            //Ingresar Letra
            AutoCompletePage.typeSingleColor("a")
            //Validar que la letra ingresada haga match
            AutoCompletePage.elements.listOfColorNames().each((element) => {
                let colores = element.text()
                cy.wrap(colores.toLowerCase()).as("colores")
                for (let i = 0; i < colores.length; i++){
                    cy.get("@colores").should("contain", "a")
                }
            })
    })

    it("US-GX-47 | TC8: Validar seleccionar un color del input “Type single color name”", () => {
        AutoCompletePage.typeSingleColor("e")
        AutoCompletePage.elements.listOfColorNames().should("contain", "White").contains("White").click()
    })

    it("US-GX-47 | TC9: Validar que el input “Types single color name” no permita ingresar mas de 1 color", () => {
        AutoCompletePage.typeSingleColor("b")
        AutoCompletePage.elements.listOfColorNames().should("contain", "Blue").contains("Blue").click()
        AutoCompletePage.typeSingleColor("b")
        AutoCompletePage.elements.listOfColorNames().should("contain", "Black").contains("Black").click()
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