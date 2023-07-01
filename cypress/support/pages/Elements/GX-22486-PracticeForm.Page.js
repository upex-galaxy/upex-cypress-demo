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
        labelGenderInput: () => cy.get('#genterWrapper [class="custom-control-label"]'),
        radioGenderInput: () => cy.get('#genterWrapper [class="custom-control-input"]'),

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
    enterSubjects(value) {
        this.get.subjectsInput().type(value); 
    }
    selectRandomGender() {
        let randomInput
        return this.get.labelGenderInput().then(largo => {
                randomInput = Cypress._.random(0, largo.length - 1)
                this.get.labelGenderInput().eq(randomInput).click();
        }).then(() => {
            return randomInput
        })
    }
}

export const textForm = new form();
