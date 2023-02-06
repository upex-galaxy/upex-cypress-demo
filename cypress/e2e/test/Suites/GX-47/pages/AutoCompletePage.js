export class AutoCompletePage {

    elements = {

        "listOfColorNames": () => cy.get('.auto-complete__menu-list.css-11unzgr div'),
        "deleteColorIcon": () => cy.get(':nth-child(1) > .css-xb97g8 > .css-19bqh2r'),
        "colorTagContainer": () => cy.get("div.auto-complete__value-container.auto-complete__value-container--is-multi.auto-complete__value-container--has-value.css-1hwfws3"),
        "deleteAllColorsIcon": () => cy.get('.auto-complete__indicator > .css-19bqh2r > path'),

        span: {
            "typeMultipleColorNames": () => cy.get("#autoCompleteMultiple > span"),
            "typeSingleColorName": () => cy.get("#autoCompleteSingle > span")
        },

        inputs: {
            "multipleColorName": () => cy.get('#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container'),
            "singleColorName": () => cy.get('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container')
        }

    }

    typeMultipleColor(color1, color2) {
        this.elements.inputs.multipleColorName().type(color1)
    }

    typeSingleColor(color) {
        this.elements.inputs.singleColorName().type(color)
    }


}