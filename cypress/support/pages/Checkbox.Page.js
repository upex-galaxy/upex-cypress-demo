class Checkbox {
    get = {
        selectedAllButton:()=> cy.get('button[title="Expand all"]'),
        collapseAllButton:()=> cy.get('button[title="Collapse all"]'),
        rootCheckbox:()=> cy.get('#tree-node-home'),
        expandToggle:()=> cy.get('button[title="Toggle"]'),
        labelTitle:()=> cy.get('span[class="rct-title"]'),
        allLabel:()=> cy.get('label[for*="tree-node"]')

    }

    checkFolder(){ 
        this.get.rootCheckbox().check({force: true})
    }

    clickSelectedAll(){
        this.get.selectedAllButton().click()
    }
};

export const checkbox = new Checkbox();