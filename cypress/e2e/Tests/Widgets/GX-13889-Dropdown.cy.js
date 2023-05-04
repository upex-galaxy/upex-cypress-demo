//const { dropdown } = require("../../../support/pages/GX-13889-Dropdown/Dropdown")
import { dropdown, ag } from "@pages/GX-13889-Dropdown/Dropdown";

const selectMenuPage = Cypress.env('endpoint').selectMenu

describe("GX-13889 | Dropdown - Select Menu", () => {
   
    beforeEach("PRC - User must be in select-menu section", () => {
        cy.visit("/")
        dropdown.enterWidget()
        dropdown.enterSelectMenu()
        cy.url().should("contain", selectMenuPage);
    });

    it("TC1: Validate one option of Group 1 is selected in the “Select Value” dropdown", () => {        
        dropdown.clickValueMenu()
        dropdown.clickGroup1()
        dropdown.elements.valueMenu().should("contain", "Group 1, option 2")        
    });
 
    it("TC2: Validate one option of Group 2 is selected in the “Select Value” dropdown", () => {
        dropdown.clickValueMenu()
        dropdown.clickGroup2()
        dropdown.elements.valueMenu().should("contain", "Group 2, option 1")  
    });
    
    it("TC3: Validate one option is selected in the “React” dropdown", () => {
        dropdown.clickReactMenu()
        dropdown.clickOther()
        dropdown.elements.reactMenu().should("contain", "Other")
    });
    
    it("TC4: Validate cannot be selected two options at the same time in the “React” dropdown", () => {
        dropdown.clickReactMenu()
        dropdown.clickOther()
        dropdown.elements.reactMenu().should("contain", "Other")
        dropdown.clickReactMenu()
        dropdown.clickProf()
        dropdown.elements.reactMenu().should("contain", "Prof.")
    })

    // hacerlo random
    it("TC5: Validate one option is selected in the “Old style select menu” dropdown ", () => {
        var array = ['red', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Definimos el array
        var indiceAleatorio = Math.floor(Math.random() * array.length); // Generamos un índice aleatorio que corresponde a un elemento del array
        var oldRandom = array[indiceAleatorio]; 
        dropdown.selectOldMenu(oldRandom);
        dropdown.elements.oldMenu()
            .should("have.value", oldRandom)
    });

    it("TC6: Validate cannot be selected two options at the same time in the “Old style select menu” dropdown", () => {
        // selecciona primera opción randomly
        var array = [ 'red', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; 
        var indiceAleatorio = Math.floor(Math.random() * array.length);
        var oldRandom = array[indiceAleatorio]; 
        dropdown.selectOldMenu(oldRandom)
        dropdown.elements.oldMenu()
            .should("have.value", oldRandom)
        
        // selecciona segunda opción random 
        var indiceAleatorio = Math.floor(Math.random() * array.length); 
        var oldRandomNew = array[ indiceAleatorio ]; 

        // y chequea que no sea igual a la anterior
        while (oldRandomNew === oldRandom) {
        var indiceAleatorio = Math.floor(Math.random() * array.length); 
        var oldRandomNew = array[ indiceAleatorio ]; 
        }

        dropdown.selectOldMenu(oldRandomNew)
        dropdown.elements.oldMenu()
            .should("have.value", oldRandomNew)
            .should("not.have.value", oldRandom)
    })

    it("TC7: Validate each single option of the “Multiselect” dropdown are added to the selection", () => {
        dropdown.selectColors();
        dropdown.elements.multiselectMenuColors().should("have.text", "GreenBlueBlackRed")
    })

    it("TC8: Validate options are displayed in the “Multiselect” dropdown when all of them are deselected at the same time", () => {
        dropdown.selectColors();
        dropdown.removeAll();
        dropdown.elements.multiselectMenu().should("contain", "Select...")
    });

    it("TC9: Validate each single option is displayed in the “Multiselect” dropdown when it is deselected" , () => {
        dropdown.selectColors();
        dropdown.removeGBB();
        dropdown.removeRed();
        dropdown.elements.multiselectMenu().should("contain", "Select...")
    });

    it("TC10: Validate one option is selected in the “Standard multiselect” dropdown", () => {
        dropdown.selectSaab();  
        dropdown.elements.standardMenu()
            .find("option:selected")
            .should("contain", "Saab")
    })

    it("TC11: Validate select two ore more slots at the same time in the “Standard multiselect” combo box", () => {
        dropdown.selectCars();
        dropdown.elements.standardMenu()
            .find("option:selected")
            .should("contain", "Volvo")
            .should("contain", "Saab")
            .should("contain", "Audi")
            .should("not.contain", "Opel")
    })
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();