import { faker } from '@faker-js/faker';
export let userDatabase = {};
export let userDatabaseArray = [];
class WebTable {
	get = {
		addButton: () => cy.get('[id="addNewRecordButton"]'),
		registrationModal: () => cy.get('[class="modal-content"]'),
		modalHeader: () => cy.get('[class="modal-header"]'),
		modalTitle: () => cy.get('[class="modal-title h4"]'),
		modalBody: () => cy.get('[class="modal-body"]'),
		nameWrapper: () => cy.get('[id="firstName-wrapper"]'),
		nameLabel: () => cy.get('[id="firstName-label"]'),
		nameForm: () => cy.get('[id="firstName"]'),
		lastNameWrapper: () => cy.get('[id="lastName-wrapper"]'),
		lastnameLabel: () => cy.get('[id="lastName-label"]'),
		surnameForm: () => cy.get('[id="lastName"]'),
		emailWrapper: () => cy.get('[id="userEmail-wrapper"]'),
		emailLabel: () => cy.get('[id="userEmail-label"]'),
		emailForm: () => cy.get('[id ="userEmail"]'),
		ageWrapper: () => cy.get('[id="age-wrapper"]'),
		ageLabel: () => cy.get('[id="age-label"]'),
		ageForm: () => cy.get('[id="age"]'),
		salaryWrapper: () => cy.get('[id="salary-wrapper"]'),
		salaryLabel: () => cy.get('[id="salary-label"]'),
		salaryForm: () => cy.get('[id ="salary"]'),
		departmentWrapper: () => cy.get('[id="department-wrapper"]'),
		departmentLabel: () => cy.get('[id="department-label"]'),
		departmentForm: () => cy.get('[id ="department"]'),
		submitButton: () => cy.get('[id ="submit"]'),

		rows: () => cy.get('[class="rt-tr-group"]'),
		evenrows: () => cy.get('[class="rt-tr -even"]'),
		cells: () => cy.get('[class="rt-td"]'),
	};
	clickAddbutton() {
		this.get.addButton().click();
	}
	typeName() {
		return this.get.nameWrapper().within(() => {
			this.get.nameLabel().then(label => Cypress.env('nameLabel', label.text()));
			const name = faker.name.firstName();
			userDatabaseArray.push(name);
			userDatabase.name = name;
			this.get.nameForm().type(name);
		});
	}
	typeSurname() {
		return this.get.lastNameWrapper().within(() => {
			this.get.lastnameLabel().then(label => Cypress.env('surnameLabel', label.text()));
			const surname = faker.name.lastName();
			userDatabaseArray.push(surname);
			this.get.surnameForm().type(surname);
		});
	}
	typeEmail() {
		return this.get.emailWrapper().within(() => {
			this.get.emailLabel().then(label => Cypress.env('emailLabel', label.text()));
			const email = faker.internet.email();
			userDatabaseArray.push(email);
			this.get.emailForm().type(email);
		});
	}
	typeAge() {
		return this.get.ageWrapper().within(() => {
			this.get.ageLabel().then(label => Cypress.env('ageLabel', label.text()));
			const age = Cypress._.random(18, 60);
			userDatabaseArray.push(age.toString());
			this.get.ageForm().type(age);
		});
	}
	typeSalary() {
		return this.get.salaryWrapper().within(() => {
			this.get.salaryLabel().then(label => Cypress.env('salaryLabel', label.text()));
			const salary = Cypress._.random(20000, 100000);
			userDatabaseArray.push(salary.toString());
			this.get.salaryForm().type(salary);
		});
	}
	typeDepartment() {
		return this.get.departmentWrapper().within(() => {
			this.get.departmentLabel().then(label => Cypress.env('departmentLabel', label.text()));
			const department = faker.commerce.department();
			userDatabaseArray.push(department);
			this.get.departmentForm().type(department);
		});
	}
	clickSubmit() {
		this.get.submitButton().click();
	}
	retrieveRowInfo() {
		return webtable.get
			.rows()
			.eq(3)
			.within(() => {
				this.get.evenrows().then(info => Cypress.env('registerInfo', info.text()));
			});
	}
}
export const webtable = new WebTable();
