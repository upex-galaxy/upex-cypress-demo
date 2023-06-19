class Profile {
	get = {
		profile: () => cy.contains('span', 'Profile'),
		noRowsFoundMsg: () => cy.get('.rt-noData'),
	};

	clickProfile() {
		this.get.profile().click({ force: true });
	}
}
export const profile = new Profile();
