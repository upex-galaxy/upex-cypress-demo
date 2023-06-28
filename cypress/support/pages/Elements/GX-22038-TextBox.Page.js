//Elementos
class form {
    get = {
        fullnameImput: () => cy.get("#userName"),
        EmailInput: () => cy.get("#userEmail"),
        currentAddressInput: () => cy.get("#currentAddress"),
        permanentAddressInput: () => cy.get("#permanentAddress"),
        submitBtn: () => cy.get("#submit"),
        textBox: () => cy.get('.mb-1')
    }
    // Accionables de cypress   
    enterName(value) {
        this.get.fullnameImput().type(value);
    }
    enterEmail(value) {
        this.get.EmailInput().type(value);
    }
    enterCurrentAddress(value) {
        this.get.currentAddressInput().type(value)
    }
    enterPermanentAddress(value) {
        this.get.permanentAddressInput().type(value)
    }

}
export const textForm = new form()