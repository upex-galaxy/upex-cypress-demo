

class Name {

    get = {
        firstNameInput: ()=> cy.get('#firstName'),
        lastNameInput: ()=> cy.get('#lastName')
    }

    typeFirstName(fname){
        this.get.firstNameInput().type(fname)
    }

    typeLastName(lname){
        this.get.lastNameInput().type(lname)
    }
    
}
export const name = new Name 