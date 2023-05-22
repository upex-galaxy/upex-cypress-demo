class SelectMenus {

        element = {

                selectValue: () => cy.get('#withOptGroup'),
                selectGroup2Option2: () => cy.get('#react-select-2-option-1-1'),
                selectOne: () => cy.get('#selectOne'),
                selectMs: () => cy.get('#react-select-3-option-0-3'),
                oldStyleSelectMenu: () => cy.get('#oldSelectMenu'),
                multiselectDropdown: () => cy.contains('Multiselect drop down').parent().next(),
                selectGreenColor: () => cy.get('#react-select-4-option-0'),
                selectBlueColor: () => cy.get('#react-select-4-option-1'),
                selectBlackColor: () => cy.get('#react-select-4-option-2'),
                selectRedColor: () => cy.get('#react-select-4-option-3'),
                standardMultiSelect: () => cy.get('[name="cars"]'),
                
        }
        
        clickSelectValue() {
                this.element.selectValue().click()
        }       
        clickGroup2Option2() {
                this.element.selectGroup2Option2().click()
        }
        clickSelectOne() {
                this.element.selectOne().click()
        }
        clickMs() {
                this.element.selectMs().click()
        }
        selectOldStyleSelectMenu(color) {
                this.element.oldStyleSelectMenu().select(color)
        }
        clickMultiselectDropdown() {
                this.element.multiselectDropdown().click()
        }
        clickAllColors() {
                this.element.selectGreenColor().click()
                this.element.selectBlueColor().click()
                this.element.selectBlackColor().click()
                this.element.selectRedColor().click()
        }
        selectStandardMultiSelect(car) {
                this.element.standardMultiSelect().select(car)
        }
}

export const selectMenus = new SelectMenus()