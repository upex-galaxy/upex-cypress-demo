class PracticePage {
	fillFirstName(value) {
		cy.get('#firstName').type(value);
	}

	fillLastName(value) {
		cy.get('#lastName').type(value);
	}

	fillEmail(value) {
		cy.get('#userEmail').type(value);
	}

	fillMobileNumber(value) {
		cy.get('#userNumber').type(value);
	}

	fillSubjects(value) {
		cy.get('.subjects-auto-complete__value-container').type(value);
	}

	fillCurrentAddress(value) {
		cy.get('#currentAddress').type(value);
	}

	selectGender(value) {
		cy.get(`#genterWrapper input[value="${value}"]`).check();
	}

	clickSubmit() {
		cy.get('#submit').click();
	}
}

export default PracticePage;
