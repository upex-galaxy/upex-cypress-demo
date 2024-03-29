/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { faker } from '@faker-js/faker';
import data from 'cypress/fixtures/data/Elements/CX3-2839-webTable.json';

class WebTable {
	get = {
		buttonAdd: () => cy.get(data.element.buttonAdd),
  		firstNameInput: () => cy.get(data.element.firstName),
  		lastNameInput: () => cy.get(data.element.lastName),
  		userEmailInput: () => cy.get(data.element.userEmail),
  		ageInput: () => cy.get(data.element.age),
  		salaryInput: () => cy.get(data.element.salary),
  		departmentInput: () => cy.get(data.element.department),
  		submitButton: () => cy.get(data.element.submit),
		tableHead: () => cy.get(data.element.tableHead),
		tableGroup: () => cy.get(data.element.tableGroup),
		userForm: () => cy.get(data.element.userForm),
		buttonClose: () => cy.get(data.element.buttonClose),
		searchBox: () => cy.get(data.element.searchBox),
		column: () => cy.get(data.element.columnHeader),
		columnData: (column) => cy.get(`.rt-td[role="gridcell"]:nth-child(${data.column[column]})`),
		editEmployee: () => cy.get(data.element.editButton),
		deleteEmployee: (id) => cy.get(data.element.deleteButton+id),
		selectLength: () => cy.get(data.element.selectLength),
		tableLength: () => cy.get(data.element.TableRows),
		paginationNext: () => cy.get(data.element.paginationNext),
		paginationBack: () => cy.get(data.element.paginationBack),
		pagination: () => cy.get(data.element.pagination)
	};

	employee(path) {
		let firstName;
		let lastName;
		let userEmail;
		let age;
		let salary;
		let department;

		if(path === data.path.firstName) {
			firstName = '';
		}else{
			firstName = faker.person.firstName();
		}

		if(path === data.path.lastName) {
			lastName = '';
		}else{
			lastName = faker.person.lastName();
		}

		if(path === data.path.userEmail) {
			userEmail = faker.string.alpha(10);
		}else{
			userEmail = faker.internet.email();
		}

		if(path === data.path.age) {
			age = faker.string.alpha(2);
		}else{
			age = faker.number.bigInt({ min: 18, max: 80 }).toString();
		}

		if(path === data.path.salary) {
			salary = faker.string.alpha(5);
		}else{
			salary = faker.number.bigInt({ min: 20000, max: 100000 }).toString();
		}

		if(path === data.path.department) {
			department = '';
		}else{
			department = faker.commerce.department();
		}

		if(path === data.path.edit) {
			this.get.editEmployee().click();
		}else{
			this.get.buttonAdd().click();
		}

		if(firstName !== '') { this.get.firstNameInput().clear().type(firstName); }
		if(lastName !== '') { this.get.lastNameInput().clear().type(lastName); }
		this.get.userEmailInput().clear().type(userEmail);
		this.get.ageInput().clear().type(age);
		this.get.salaryInput().clear().type(salary);
		if(department !== '') { this.get.departmentInput().clear().type(department); }

		if(path === data.path.cancel) {
			this.get.buttonClose().click();
		}else{
			this.get.submitButton().click();
		}

		return {
			firstName: firstName,
			lastName: lastName,
			userEmail: userEmail,
			age: age,
			salary: salary,
			department: department
		};
	}

	getEmployee() {
		const employee = this.employee();
		const keys = Object.keys(employee);
		const randomKey = Cypress._.sample(keys);
		this.get.searchBox().type(employee[randomKey]);
		return employee[randomKey];
	}

	deleteEmployee() {
		const id = faker.number.bigInt({ min: 1, max: 3 }).toString();

		this.get.deleteEmployee(id).click();

		return id;
	}

	organizeTable(column) {
		this.get.column().contains(data.indexTable[column]).click();
	}

	tableLength() {
		const randomIndex = faker.number.bigInt({ min: 0, max: 5 });

		return this.get.selectLength().then($select => {
			const options = $select.find('option');

			const randomOption = options[randomIndex];
			const value = randomOption.getAttribute('value');

			cy.wrap($select).select(value);

			return new Cypress.Promise(resolve => {
				resolve(value);
			});
		});
	}

	tablePaginationNex() {
		for (let index = 0; index < 10; index++) {
			this.employee();
		}
		this.get.paginationNext().click();
	}

	tablePaginationBack() {
		this.get.paginationBack().click();
	}

	tablePageInput() {
		for (let index = 0; index < 10; index++) {
			this.employee();
		}
		this.get.pagination().type('2');
	}
}

export const webTable = new WebTable();