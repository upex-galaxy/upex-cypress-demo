class WebTable {
	elements = {
		addbutton: () => cy.get('[id="addNewRecordButton"]'),
		modal: () => cy.get('[class="modal-content"]'),
		nameInput: () => cy.get('[id="firstName"]'),
		lastnameInput: () => cy.get('[id="lastName"]'),
		mailInput: () => cy.get('[id="userEmail"]'),
		ageInput: () => cy.get('[id="age"]'),
		salaryInput: () => cy.get('[id="salary"]'),
		departmentInput: () => cy.get('[id="department"]'),
		submitbutton: () => cy.get('[id="submit"]'),
		deletebutton3: () => cy.get('[id="delete-record-3"]'),
		searchbox: () => cy.get('[id="searchBox"]'),
		editrecord1: () => cy.get('[id="edit-record-1"]'),
		nextbutton: () => cy.get('[class="-next"]'),
		previousbutton: () => cy.get('[class="-previous"]'),
		headerbuttons: () => cy.get('div.rt-resizable-header-content'),
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
	searchForname(name) {
		this.elements.searchbox().type(name);
	}
	clickEdit1() {
		this.elements.editrecord1().click();
	}
	clickNext() {
		this.elements.nextbutton().click();
	}
	clickPrevious() {
		this.elements.previousbutton().click();
	}
	clickOnfirstName() {
		this.elements.headerbuttons().first().click();
	}
	visit() {
		cy.visit('https://demoqa.com/webtables');
	}
	addUsertoTable(name, surname, mail, age, salary, department) {
		this.elements.nameInput().type(name);
		this.elements.lastnameInput().type(surname);
		this.elements.mailInput().type(mail);
		this.elements.ageInput().type(age);
		this.elements.salaryInput().type(salary);
		this.elements.departmentInput().type(department);
	}
}
export const webtable = new WebTable();
export const form = new WebTable();
