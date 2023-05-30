class practiceRegistration {
	get = {
		//row: nE => cy.get(`${nE}`), //nE=nameElement
		insideRegister: nE => cy.get(`${nE}>div`),
		insideForm: eF => cy.get(`${eF}-wrapper`),
	};
	//method: Inside register by row, in the future select any
	/*rowRegister() {
		this.get.row(row);
	}*/
	insideForm(i) {
		return this.get.insideRegister(row).eq(i);
	}
	getChildrenForm(i) {
		return this.get.insideForm(form).eq(i);
	}
}
const form = 'practice-form';
const row = 'div[class="row"]';
export const practiceForm = new practiceRegistration();
