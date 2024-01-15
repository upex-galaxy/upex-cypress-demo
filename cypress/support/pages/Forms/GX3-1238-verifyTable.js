class VerifyTable {
	verifyText(tdId, tdText) {
		cy.get('tbody').contains('td', tdId).next('td').should('have.text', tdText);
	}
	verifyGender() {
		cy.get('@Gender').then(gender => {
			cy.get('tbody').contains('td', 'Gender').next('td').should('have.text', gender);
		});
	}
	verifySubjects() {
		cy.get('@subject').then(subject => {
			cy.get('tbody').contains('td', 'Subjects').next('td').should('have.text', subject);
		});
	}
	verifyHobbies(hobbies) {
		hobbies.forEach(hobby => {
			cy.get('tbody').contains('td', 'Hobbies').next('td').invoke('text').should('include', hobby);
		});
	}
	verifyStateAndCity() {
		cy.get('@state').then(state => {
			cy.get('tbody').contains('td', 'State and City').next('td').invoke('text').should('include', state);
		});
		cy.get('@city').then(city => {
			cy.get('tbody').contains('td', 'State and City').next('td').invoke('text').should('include', city);
		});
	}
	verifyClose() {
		cy.get('table').should('not.exist');
	}
	clicClose() {
		cy.get('#closeLargeModal').click();
	}
}

export default VerifyTable;
