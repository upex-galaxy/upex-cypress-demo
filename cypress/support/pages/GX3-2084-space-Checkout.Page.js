class check{
    get={
        expandAll :()=> cy.get('[title="Expand all"]'),
        collapseAll: ()=> cy.get('[title="Collapse all"]'),
        uncheckedCheckBoxes: ()=> cy.get('[for^="tree-node"]'),
        allCheckBoxs: ()=> cy.get('[type = "checkbox"]'),
        checkBoxesSelected: ()=> cy.get('[for^="tree-node"]:has(.rct-icon-check)'),
        textSuccess:()=> cy.get('#result .text-success')
    };

    clickExpandCheck(){
        this.get.expandAll().click();
    }

    clickCollapseCheck(){
        this.get.collapseAll().click()
    }
}

export const checkboxPage = new check
