class StateCity {
    
    selectState(){
        cy.get('#state').click()
        cy.get('#react-select-3-option-0').click()
        //cy.get('#state').click({force: true})
        //cy.get("div").contains('NCR').click()
        //cy.get('#react-select-3-option-0').click()
        //cy.get('#close-fixedban').click()
    }

    selectCity(){
        cy.get('#city').click()
        cy.get('#react-select-4-option-0').click()
        //cy.get('div[id="react-select-4-option-0"]').click({force: true})

    }
}

export const statecity = new StateCity