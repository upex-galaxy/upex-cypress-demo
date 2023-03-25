export const form = new Form();

class Form {
    visit() {
        cy.visit(`${baseUrl}`)
    }

    fillForm(userName, userEmail, currentAddress, permanentAddress) {
        cy.get('#userName').type(userName)
        cy.get('#userEmail').type(userEmail)
        cy.get('#currentAddress').type(currentAddress)
        cy.get('#permanentAddress').type(permanentAddress)
    }

    submitForm() {
        cy.contains('Submit').click()
    }
}

