class WebTable {
	elements = {
		addbutton: () => cy.get('[id="addNewRecordButton"]'),
		modal: () => cy.get('[class="modal-content"]'),
		nameInput: () => cy.get('[id="firstName"]'),
		lasnameInput: () => cy.get('[id="lastName"]'),
		mailInput: () => cy.get('[id="userEmail"]'),
		ageInput: () => cy.get('[id="age"]'),
		salaryInput: () => cy.get('[id="salary"]'),
		departmentInput: () => cy.get('[id="department"]'),
		submitbutton: () => cy.get('[id="submit"]'),
		deletebutton3: () => cy.get('[id="delete-record-3"]'),
		searchbox: () => cy.get('[id="searchBox"]'),
		editrecord1: () => cy.get('[id="edit-record-1"]'),
		nextbutton: () => cy.get('[class="-next"]'),
	};
	clickAdd() {
		this.elements.addbutton().click();
	}
	typeName(name) {
		this.elements.nameInput().type(name);
	}
	typeLastname(lastname) {
		this.elements.lasnameInput().type(lastname);
	}
	typeMail(email) {
		this.elements.mailInput().type(email);
	}
	typeAge(age) {
		this.elements.ageInput().type(age);
	}
	typeSalary(salary) {
		this.elements.salaryInput().type(salary);
	}
	typeDepartment(department) {
		this.elements.departmentInput().type(department);
	}
	clickSubmit() {
		this.elements.submitbutton().click();
	}
	clickonDelete3() {
		this.elements.deletebutton3().click();
	}
	typeFirst2letters(letters) {
		this.elements.searchbox().type(letters);
	}
	clickEdit1() {
		this.elements.editrecord1().click();
	}
	clickNext() {
		this.elements.nextbutton().click();
	}
}
export const webtable = new WebTable();
