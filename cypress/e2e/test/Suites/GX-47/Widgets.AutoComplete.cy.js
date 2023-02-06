import {AutoCompletePage} from "./pages/AutoCompletePage"

describe("US GX-47 | ToolsQA | Widgets | Auto-Complete", () => {

    const autoCompletePage = new AutoCompletePage();
    
    beforeEach("Precondicion: El usuario debe de estar en la pagina: https://demoqa.com/auto-complete", () => {
        cy.visit("https://demoqa.com/auto-complete")
        cy.url().should("contain","auto-complete")
    
    })

    //FOR: Type Multiple color names Input

    it("US-GX-47 | TC1: Validar que la lista de opciones haga match con la letra ingresada en el input “Type Multiple color names”", () => {
        //Ingresar Letra
        autoCompletePage.typeMultipleColor("a")
        //Validar que la letra ingresada haga match
        autoCompletePage.elements.listOfColorNames().each((element) => {
            let colores = element.text()
            cy.wrap(colores.toLowerCase()).as("colores")

            for (let i = 0; i < colores.length; i++){
                cy.get("@colores").should("contain", "a")
            }
        })

    })

    it("US-GX-47 | TC2: Validar seleccionar un color del input “Type Multiple color names”", () => {
        //Color
        autoCompletePage.typeMultipleColor("e")
        autoCompletePage.elements.listOfColorNames().should("contain", "White").contains("White").click()
        //Assert
        autoCompletePage.elements.colorTagContainer().should("contain","White")
    })

    it("US-GX-47 | TC3:  Validar seleccionar 2 colores del input “Type Multiple color names”", () => {
        //Color1
        autoCompletePage.typeMultipleColor("b")
        autoCompletePage.elements.listOfColorNames().should("contain", "Black").contains("Black").click()
        autoCompletePage.elements.inputs.multipleColorName().should("have.text", "Black")
        //Color2
        autoCompletePage.typeMultipleColor("e")
        autoCompletePage.elements.listOfColorNames().should("contain", "White").contains("White").click()
        //Validar que tiene 2 elementos
        autoCompletePage.elements.colorTagContainer().should("contain","White").and("contain","Black")
    })

    it("US-GX-47 | TC4: Validar eliminar 1 color ya seleccionado del campo “Type Multiple color names”", () => {
        autoCompletePage.typeMultipleColor("b")
        autoCompletePage.elements.listOfColorNames().should("contain", "Blue").contains("Blue").click()
        autoCompletePage.elements.inputs.multipleColorName().should("have.text", "Blue")
        autoCompletePage.elements.deleteColorIcon().click()
        autoCompletePage.elements.colorTagContainer().should("not.exist")
    })

    it("US-GX-47 | TC5: Validar eliminar el primer color cuando el input “Type Multiple color names” tiene 2 colores seleccionados", () => {
        //Color 1
        autoCompletePage.typeMultipleColor("b")
        autoCompletePage.elements.listOfColorNames().should("contain", "Blue").contains("Blue").click()
        autoCompletePage.elements.inputs.multipleColorName().should("have.text", "Blue")
        //Color 2
        autoCompletePage.typeMultipleColor("r")
        autoCompletePage.elements.listOfColorNames().should("contain", "Red").contains("Red").click()
        autoCompletePage.elements.inputs.multipleColorName().should("contain", "Red")
        //Delete Color
        autoCompletePage.elements.deleteAllColorsIcon().click()
        autoCompletePage.elements.colorTagContainer().should("not.exist")
        
    })

    it("US-GX-47 | TC6: Validar eliminar todos los colores seleccionados cuando el input “Type Multiple color names” tiene 2 colores seleccionados", () => {
         //Color 1
        autoCompletePage.typeMultipleColor("b")
        autoCompletePage.elements.listOfColorNames().should("contain", "Blue").contains("Blue").click()
        autoCompletePage.elements.inputs.multipleColorName().should("have.text", "Blue")
        //Color 2
        autoCompletePage.typeMultipleColor("r")
        autoCompletePage.elements.listOfColorNames().should("contain", "Red").contains("Red").click()
        autoCompletePage.elements.inputs.multipleColorName().should("contain", "Red")
        // Delete All Colors
        autoCompletePage.elements.deleteAllColorsIcon().click()

        //Assert
        autoCompletePage.elements.colorTagContainer().should("not.exist")
    })

    //FOR: Type single color name Input

    it("US-GX-47 | TC7: Validar que la lista de opciones haga match con la letra ingresada en el input “Type single color name”", () => {
            //Ingresar Letra
            autoCompletePage.typeSingleColor("a")
            //Validar que la letra ingresada haga match
            autoCompletePage.elements.listOfColorNames().each((element) => {
                let colores = element.text()
                cy.wrap(colores.toLowerCase()).as("colores")
                for (let i = 0; i < colores.length; i++){
                    cy.get("@colores").should("contain", "a")
                }
            })
    })

    it("US-GX-47 | TC8: Validar seleccionar un color del input “Type single color name”", () => {
        autoCompletePage.typeSingleColor("e")
        autoCompletePage.elements.listOfColorNames().should("contain", "White").contains("White").click()
    })

    it("US-GX-47 | TC9: Validar que el input “Types single color name” no permita ingresar mas de 1 color", () => {
        autoCompletePage.typeSingleColor("b")
        autoCompletePage.elements.listOfColorNames().should("contain", "Blue").contains("Blue").click()
        autoCompletePage.typeSingleColor("b")
        autoCompletePage.elements.listOfColorNames().should("contain", "Black").contains("Black").click()
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