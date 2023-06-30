//elementos

class form {
    get = {
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        genderInput: () => cy.get('.custom-control-label'),
        mobileInput: () => cy.get('#userNumber'),
        dateOfBirthInput: () => cy.get('#dateOfBirthInput'),
        subjectsInput: () => cy.get('.subjects-auto-complete__value-container'),


    }
    enterFirstName(value) {
        this.get.firstNameInput().type(value);
    }
    enterLastName(value) {
        this.get.lastNameInput().type(value);
    }
    enterEmail(value) {
        this.get.emailInput().type(value);
    }
    enterMobile(value) {
        this.get.mobileInput().type(value);
    }
}

export const textF = new form();
