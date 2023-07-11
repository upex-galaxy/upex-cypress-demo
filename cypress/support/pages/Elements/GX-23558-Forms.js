class Forms {
	get = {
		mainTitle: () => cy.get('.playgound-header'),
		firstName: () => cy.get('#firstName'),
		submitButton: () => cy.get('#submit'),
		genderCheck: () => cy.get('#genterWrapper [class=custom-control-label]'),
		genderChecked: () => cy.get('#genterWrapper [class=custom-control-input]'),
	};

	selectRandomGender() {
		let randomIndex;
		return this.get
			.genderChecked()
			.then(largo => {
				randomIndex = Cypress._.random(0, largo.length - 1);
				this.get.genderChecked().eq(randomIndex).click({ force: true });
			})
			.then(() => {
				return randomIndex;
			});
	}
}
export const forms = new Forms();
