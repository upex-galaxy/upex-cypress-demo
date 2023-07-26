class Profile {
	get = {
		booksWrapper: () => cy.get('[id="books-wrapper"]'),
		userNameLabel: () => cy.get('[id="userName-label"]').last(),
		userNameLogged: () => cy.get('[id="userName-value"]'),
		logOutButton: () => cy.get('[class="btn btn-primary"]').first(),
	};
	clickOnLogOut() {
		this.get.logOutButton().should('exist').click();
	}
}
export const profile = new Profile();
