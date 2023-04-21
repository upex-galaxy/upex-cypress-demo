const { checkbox } = require("@pages/Checkbox.Page");
const {dropdown} = require ("../../../support/pages/GX-13889-Dropdown/Dropdown")

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
        cy.get("#withOptGroup").should("contain", "Group 1, option 2")
    });
  
    it("TC2: Validate one option of Group 2 is selected in the “Select Value” dropdown", () => {
        dropdown.clickValueMenu()
        dropdown.clickGroup2()
        cy.get("#withOptGroup").should("contain", "Group 2, option 1")
    });
    
    it("TC3: Validate one option is selected in the “React” dropdown", () => {
        dropdown.clickReactMenu()
        dropdown.clickOther()
        cy.get("#selectOne").should("contain", "Other")
    });
    
    it("TC4: Validate cannot be selected two options at the same time in the “React” dropdown", () => {
        dropdown.clickReactMenu()
        dropdown.clickOther()
        cy.get("#selectOne").should("contain", "Other")
        dropdown.clickReactMenu()
        dropdown.clickProf()
        cy.get("#selectOne").should("contain", "Prof.")
    })

    
    it("TC5: Validate one option is selected in the “Old style select menu” dropdown ", () => {

        cy.get("#oldSelectMenu").select(5)
            .should("have.value", "5")
    })
/*
    it("TC6: Validate cannot be selected two options at the same time in the “Old style select menu” dropdown", () => {
        dropdown.selectOldMenu()
            .should("have.value", "5")
        cy.get("#oldSelectMenu").select(6)
            .should("have.value", "6")
    })

    it("TC7: Validate each single option of the “Multiselect” dropdown are added to the selection", () => {
        cy.get(".css-yk16xz-control").eq(2).click()
            .type("Green{enter}")
            .type("Blue{enter}")
            .type("Black{enter}")
            .type("Red{enter}")
    })

    it("TC8: Validate options are displayed in the “Multiselect” dropdown when all of them are deselected at the same time", () => {
        cy.get(".css-yk16xz-control").eq(2).click()
            .type("Green{enter}")
            .type("Blue{enter}")
            .type("Black{enter}")
            .type("Red{enter}")
        cy.get(".css-19bqh2r").eq(6).click()
        
    });

    it("TC9: Validate each single option is displayed in the “Multiselect” dropdown when it is deselected" , () => {
        cy.get(".css-yk16xz-control").eq(2).click()
            .type("Green{enter}")
            .type("Blue{enter}")
            .type("Black{enter}")
            .type("Red{enter}")
        cy.get(".css-xb97g8").eq(0).click()
        cy.get(".css-xb97g8").eq(0).click()
        cy.get(".css-xb97g8").eq(0).click()
        cy.get(".css-19bqh2r").eq(2).click()
    });

    it("TC10: Validate one option is selected in the “Standard multiselect” dropdown", () => {
        cy.get("#cars").select("Saab")
               

    })

      it("TC11: Validate select two ore more slots at the same time in the “Standard multiselect” combo box", () => {
        cy.get("#cars").select("Saab")
        cy.get("#cars").select(["Saab", "Volvo", "Audi"], {force : true})
    })
*/
});