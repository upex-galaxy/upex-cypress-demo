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
}
export const webtable = new WebTable();
