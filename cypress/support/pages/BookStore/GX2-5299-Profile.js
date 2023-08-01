class Profile {
	get = {
		profileWrapper: () => cy.get('[class="container playgound-body"]'),
		profileHeader: () => cy.get('[class="pattern-backgound playgound-header"]'),
		booksWrapper: () => cy.get('[id="books-wrapper"]'),
		userNameLogged: () => cy.get('[id="userName-value"]'),
		logOutButton: () => cy.get('[class="btn btn-primary"]').first(),
		bottomButtonsWrapper: () => cy.get('[class="mt-2 buttonWrap row"]'),
		deleteAccountButton: () => cy.get('button').contains('Delete Account'),
		modalWrapper: () => cy.get('[class="modal-content"]'),
		modalText: () => cy.get('[class="modal-body"]'),
		deleteOKBbutton: () => cy.get('[id = "closeSmallModal-ok"]'),
	};
	clickOnLogOut() {
		this.get.logOutButton().should('exist').click();
	}
	clickOnDeleteAccount() {
		this.get.deleteAccountButton().click();
	}
	clickOKdelete() {
		this.get.deleteOKBbutton().click();
	}
}
export const profile = new Profile();
