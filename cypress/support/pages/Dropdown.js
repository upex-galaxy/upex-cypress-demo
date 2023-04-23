class Dropdown {
//("[id='withOptGroup'] [id^='react-select']:not([id*='heading'])") 
    elements = {
        valueMenu: () => cy.get("#withOptGroup"),
        reactMenu: () => cy.get("#selectOne"),
        oldMenu: () => cy.get("#oldSelectMenu"),
        multiselectMenu: () => cy.get(".css-1wa3eu0-placeholder").eq(2),
        multiselectMenuColors: () => cy.get(".css-1hwfws3").eq(2),
        standardMenu: ()=> cy.get("#cars"), 
        removeAllMultiselect: () => cy.get(".css-19bqh2r").eq(6),
        removeOneMultiselect: () => cy.get(".css-xb97g8").eq(0),     
        optionGroup1: () => cy.contains("Group 1, option 2"),
        optionGroup2: () => cy.contains("Group 2, option 1"),
        optionReact1: () => cy.contains("Other"),
        optionReact2: () => cy.contains("Prof."),  
        widgetButton: () => cy.contains("Widgets"),
        selectMenuButton: () => cy.contains("Select Menu"),
    }
    
    enterWidget() {
        this.elements.widgetButton().click()
    }

    enterSelectMenu() {
        this.elements.selectMenuButton().click()
    }

    clickValueMenu(){
        this.elements.valueMenu().click()
    }
    clickGroup1(){
        this.elements.optionGroup1().click({ force: true })
    }

    clickGroup2(){
        this.elements.optionGroup2().click({ force: true })
    }

    clickReactMenu(){
        this.elements.reactMenu().click()
    }
    clickOther(){
        this.elements.optionReact1().click({ force: true })
    }
    clickProf(){
        this.elements.optionReact2().click({ force: true })
    }
    
    selectOldMenu(array) {
        this.elements.oldMenu().select(array)
    }
 

    clickMultiselectMenu() {
        this.elements.multiselectMenuColors().click()
    }

    selectColors() {
        this.elements.multiselectMenu().click().type("Green{enter}Blue{enter}Black{enter}Red{enter}")
    }
    
    removeAll() {
        this.elements.removeAllMultiselect().click()
    }
    removeGBB() {
        this.elements.removeOneMultiselect().click()
    }
    removeRed() {
        this.elements.removeAllMultiselect().click()
    }
    selectSaab() {
        this.elements.standardMenu().select("Saab")
    }
     selectCars() {
        this.elements.standardMenu().select(["Saab", "Volvo", "Audi"], {force : true})
    }  
    
    
}

export const dropdown = new Dropdown();
export const ag = new Dropdown();
