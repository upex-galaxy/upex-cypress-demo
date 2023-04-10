class WebTable {
	elements = {
		addbutton: () => cy.get('[id="addNewRecordButton"]'),
		modal: () => cy.get('[class="modal-content"]'),
	};
	clickAdd() {
		this.elements.addbutton().click();
	}
}
export const webtable = new WebTable();
