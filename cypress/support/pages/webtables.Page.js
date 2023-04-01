class webTables {
	get = {
		addButton: () => cy.get('#addNewRecordButton'),
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		userEmail: () => cy.get('#userEmail'),
		userAge: () => cy.get('#age'),
		salary: () => cy.get('#salary'),
		department: () => cy.get('#department'),
		registrationSubmit: () => cy.get('#submit'),
		dataTable: () => cy.get('[class*=rt-tbody]'),
	};
	addNewPeople() {
		this.get.addButton().click();
	}
	registrationSubmit() {
		this.get.registrationSubmit().click();
	}
	typeFirstname(text) {
		this.get.firstName().type(text);
	}
	typeLastname(text) {
		this.get.lastName().type(text);
	}
	typeUserEmail(text) {
		this.get.userEmail().type(text);
	}
	typeUserAge(text) {
		this.get.userAge().type(text);
	}
	typeSalary(text) {
		this.get.salary().type(text);
	}
	typeDepartment(text) {
		this.get.department().type(text);
	}
}
export const WebTables = new webTables();
