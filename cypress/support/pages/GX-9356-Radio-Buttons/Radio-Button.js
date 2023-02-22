class RadioButton{

    elements = {
        yesRadioButton:()=> cy.get("#yesRadio"),
        impressiveRadioButton:()=> cy.get("#impressiveRadio"),
        noRadioButton:()=> cy.get("#noRadio"),
        labelRadioButton:()=> cy.get(".mt-3")
    }

    selectYesRadioButton() {
        this.elements.yesRadioButton().check({force: true})
    }

    selectImpressiveRadioButton(){
        this.elements.impressiveRadioButton().check({force: true})
    }

    selectNoRadioButton(){
        return this.elements.noRadioButton()
    }

    selectTextLabelRadioButton(){
        return this.elements.labelRadioButton()
    }

}

export const radioButton = new RadioButton()