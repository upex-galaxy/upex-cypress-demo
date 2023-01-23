class Submit{

    buttonSumit(){
        cy.get('#submit').contains('Submit').click({force : true})
        //cy.get("[type = 'submit']",{force : true}).contains()
    }
    
}

export const submit = new Submit
