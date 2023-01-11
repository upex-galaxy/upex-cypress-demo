class inputs{
    get = {
        fullname: ()=> cy.get('#userName'),
        email: ()=> cy.get('#userEmail'),
        currentAddress: ()=> cy.get('#currentAddress'),
        permanentAddress: ()=> cy.get('#permanentAddress'),
        submit: ()=> cy.get('#submit'),
        output: ()=> cy.get('#output'),
    }
    typeFullName(name){
        this.get.fullname().type(name)
    }
    typeEmail($email){
        this.get.email().clear().type($email)
    }
    typeCurrentAddress(CA){
        this.get.currentAddress().type(CA)
    }
    typePermanentAddress(PA){
        this.get.permanentAddress().type(PA)
    }
    clickSubmit(){
        this.get.submit().click()
    }
}

export const Inputs = new inputs()