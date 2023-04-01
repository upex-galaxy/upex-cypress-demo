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
		registerForm: () => cy.get('[class*=modal-content]'),
		searchBox: () => cy.get('#searchBox'),
		rowsTable: () => cy.get('[class*=rt-tr-group]'),
		firstRowTable: () => cy.get('[class*=rt-tr-group]').eq(0),
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
	addMultiplesUsers() {
		this.get.addButton().click();
		this.get.firstName().type('Pedro');
		this.get.lastName().type('Martinez');
		this.get.userAge().type('22');
		this.get.userEmail().type('pedromartinez152@gmail.com');
		this.get.salary().type('1400');
		this.get.department().type('Insurance');
		this.get.registrationSubmit().click();
		//d
		this.get.addButton().click();
		this.get.firstName().type('Maria');
		this.get.lastName().type('Guzman');
		this.get.userAge().type('28');
		this.get.userEmail().type('Mariaguzman123@gmail.com');
		this.get.salary().type('2000');
		this.get.department().type('legal');
		this.get.registrationSubmit().click();
		//d
		this.get.addButton().click();
		this.get.firstName().type('Jose');
		this.get.lastName().type('Perez');
		this.get.userAge().type('21');
		this.get.userEmail().type('JosePe@gmail.com');
		this.get.salary().type('2211');
		this.get.department().type('legal');
		this.get.registrationSubmit().click();
		//d
		this.get.addButton().click();
		this.get.firstName().type('Juan');
		this.get.lastName().type('Hernandez');
		this.get.userAge().type('23');
		this.get.userEmail().type('juanhernandez16@gmail.com');
		this.get.salary().type('2500');
		this.get.department().type('Insurance');
		this.get.registrationSubmit().click();
		//d
		this.get.addButton().click();
		this.get.firstName().type('Joel');
		this.get.lastName().type('Perdomo');
		this.get.userAge().type('19');
		this.get.userEmail().type('joelPerdomo@gmail.com');
		this.get.salary().type('1400');
		this.get.department().type('legal');
		this.get.registrationSubmit().click();
		//d
		this.get.addButton().click();
		this.get.firstName().type('Flor');
		this.get.lastName().type('Bolivar');
		this.get.userAge().type('30');
		this.get.userEmail().type('florbolivar1@gmail.com');
		this.get.salary().type('2500');
		this.get.department().type('Insurance');
		this.get.registrationSubmit().click();
	}
	typeSearchBox(text) {
		this.get.searchBox().type(text);
	}
	firstRowOnTable() {
		this.get.rowsTable().eq(0);
	}
}
export const WebTables = new webTables();
