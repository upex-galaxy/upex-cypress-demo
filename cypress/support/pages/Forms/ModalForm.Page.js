class ModalForm {
	get = {
		title: () => cy.get('.modal-title]'),
		table: () => cy.get('.table]'),
	};
}

export const modal = new ModalForm();
