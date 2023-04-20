import { faker } from '@faker-js/faker';
class WebTable {
	elements = {
		addbutton: () => cy.get('[id="addNewRecordButton"]'),
		modal: () => cy.get('[class="modal-content"]'),
		modaltitle: () => cy.get('[id="registration-form-modal"]'),
		nameInput: () => cy.get('[id="firstName"]'),
		lastnameInput: () => cy.get('[id="lastName"]'),
		mailInput: () => cy.get('[id="userEmail"]'),
		ageInput: () => cy.get('[id="age"]'),
		salaryInput: () => cy.get('[id="salary"]'),
		departmentInput: () => cy.get('[id="department"]'),
		submitbutton: () => cy.get('[id="submit"]'),
		oddColumn: () => cy.get('div.rt-tr.-odd'),
		evenColumn: () => cy.get('div.rt-tr.-even'),
		deletebutton3: () => cy.get('[id="delete-record-3"]'),
		searchbox: () => cy.get('[id="searchBox"]'),
		editrecord1: () => cy.get('[id="edit-record-1"]'),
		nextbutton: () => cy.get('[class="-next"] button'),
		previousbutton: () => cy.get('[class="-previous"]'),
		namebutton: () => cy.get('div.rt-resizable-header-content').first(),
		surnamebutton: () => cy.get('div.rt-resizable-header-content').eq(1),
		emailbutton: () => cy.get('div.rt-resizable-header-content').eq(3),
		salarybutton: () => cy.get('div.rt-resizable-header-content').eq(4),
		departmentbutton: () => cy.get('div.rt-resizable-header-content').eq(5),
		grid: () => cy.get('div.rt-td'),
		actualpage: () => cy.get('[type="number"]'),
		totalpages: () => cy.get('[class="-totalPages"]'),
		rowSelector: () => cy.get('[aria-label="rows per page"]'),
		row: () => cy.get('[class="rt-tr-group"]'),
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
		this.elements.namebutton().first().click();
	}
	clickOnSurname() {
		this.elements.surnamebutton().click();
	}
	clickOnEmailbutton() {
		this.elements.emailbutton().click();
	}
	clickOnSalarybutton() {
		this.elements.salarybutton().click();
	}
	clickOnDepartmentbutton() {
		this.elements.departmentbutton().click();
	}
	visit() {
		cy.visit('https://demoqa.com/webtables');
	}
	clickRowselector(option) {
		this.elements.rowSelector().select(option);
	}
	addUsertoTable() {
		const rn = Cypress._.random(10, 100);
		const info = {
			name: faker.name.firstName(),
			surname: faker.name.lastName(),
			mail: faker.internet.email(),
			age: Cypress._.random(18, 65),
			salary: rn * 1000,
			department: faker.company.bs(),
		};

		this.elements.nameInput().type(info.name);
		this.elements.lastnameInput().type(info.surname);
		this.elements.mailInput().type(info.mail);
		this.elements.ageInput().type(info.age);
		this.elements.salaryInput().type(info.salary);
		this.elements.departmentInput().type(info.department);
	}
}
export const webtable = new WebTable();
export const form = new WebTable();
