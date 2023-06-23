class ModalForm {
	get = {
		modal: () => cy.get('.modal-content'),
		modalTitle: () => cy.get('.modal-title'),
		closeBtn: () => cy.get('#closeLargeModal'),
		rows: () => cy.get('tbody > tr'),
		name: () => cy.get('tbody > tr:nth-child(1) > td:nth-child(2)'),
		email: () => cy.get('tbody > tr:nth-child(2) > td:nth-child(2)'),
		gender: () => cy.get('tbody > tr:nth-child(3) > td:nth-child(2)'),
		mobile: () => cy.get('tbody > tr:nth-child(4) > td:nth-child(2)'),
		birth: () => cy.get('tbody > tr:nth-child(5) > td:nth-child(2)'),
		subjects: () => cy.get('tbody > tr:nth-child(6) > td:nth-child(2)'),
		hobbies: () => cy.get('tbody > tr:nth-child(7) > td:nth-child(2)'),
		picture: () => cy.get('tbody > tr:nth-child(8) > td:nth-child(2)'),
		address: () => cy.get('tbody > tr:nth-child(9) > td:nth-child(2)'),
		stateCity: () => cy.get('tbody > tr:nth-child(10) > td:nth-child(2)'),
	};

	closeBtnClick() {
		this.get.closeBtn().click();
	}
}
export const modal = new ModalForm();
