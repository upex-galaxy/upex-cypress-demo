//elementos



class form {
    get = {
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        radioGenderInput: () => cy.get('#genterWrapper [class="custom-control-input"]'),
        mobileInput: () => cy.get('#userNumber'),
        dateOfBirthInput: () => cy.get('#dateOfBirthInput'),
        dateOfBirthOptions: () => cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)'),
        subjectsInput: () => cy.get('.subjects-auto-complete__value-container'),
        radioHobbieInput: () => cy.get('[id^="hobbies-checkbox"]'),
        labelHobbieInput: () => cy.get('#hobbiesWrapper [class="custom-control-label"]'),
        addressInput: () => cy.get('#currentAddress'),
        stateSelecter: () => cy.get('#state'),
        stateOptions: () => cy.get('[id^="react-select-3-option"]'),
        citySelecter: () => cy.get('#city'),
        cityOptions: () => cy.get('[id^="react-select-4-option"]'),
        submitButton: () => cy.get('#submit'),
        formTable: () => cy.get('.table.table-dark'),

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
    selectRandomGender() {
        let randomInput
        return this.get.radioGenderInput().then(largo => {
                randomInput = Cypress._.random(0, largo.length - 1)
                this.get.radioGenderInput().eq(randomInput).click({force:true});
        }).then(() => {
            return randomInput
        })
    }
    enterMobile(value) {
        this.get.mobileInput().type(value);
    }
    
    selectRandomDateOfBirth() {
        this.get.dateOfBirthInput().click();
        let randomMonth;
        cy.get('.react-datepicker__month-select').find('option').then((largo) => {
            // Aquí puedes hacer lo que desees con el valor de length
            cy.log(largo);
            randomMonth = Cypress._.random(0, largo.length - 1)
            cy.get('.react-datepicker__month-select').select(randomMonth);
        });
        let randomYear;
        cy.get('.react-datepicker__year-select').find('option').then((largo) => {
            // Aquí puedes hacer lo que desees con el valor de length
            cy.log(largo);
            randomYear = Cypress._.random(0, largo.length - 1)
            cy.get('.react-datepicker__year-select').select(randomYear);
        });
        let randomInput
        return this.get.dateOfBirthOptions().then(largo => {
                randomInput = Cypress._.random(0, largo.length - 1)
                this.get.dateOfBirthOptions().eq(randomInput).click();
        }).then(() => {
            return randomInput
        })
    }
    enterSubjects(value) {
        this.get.subjectsInput().type('Maths{enter}');

    }
    selectRandomHobbie() {
        let randomInput
        return this.get.radioHobbieInput().then(largo => {
                randomInput = Cypress._.random(0, largo.length - 1)
                this.get.radioHobbieInput().eq(randomInput).click({force:true});
        }).then(() => {
            return randomInput
        })
    }
    enterAddress(value) {
        this.get.addressInput().type(value);
    }
    selectRandomStateOption() {
        let randomInput
        return this.get.stateOptions().then(largo => {
                randomInput = Cypress._.random(0, largo.length - 1)
                this.get.stateOptions().eq(randomInput).click();
        }).then(() => {
            return randomInput
        })
    }
    selectRandomCityOption() {
        let randomInput
        return this.get.cityOptions().then(largo => {
                randomInput = Cypress._.random(0, largo.length - 1)
                this.get.cityOptions().eq(randomInput).click();
        }).then(() => {
            return randomInput
        })
    }

}

export const textForm = new form();
