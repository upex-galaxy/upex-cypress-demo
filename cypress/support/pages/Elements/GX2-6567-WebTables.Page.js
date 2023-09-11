import { faker } from '@faker-js/faker';
class Webtables {
	elements = {
		addButtonClick: () => cy.get('#addNewRecordButton'),
		inputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		inputAge: () => cy.get('#age'),
		inputSalary: () => cy.get('#salary'),
		inputDepartment: () => cy.get('#department'),
		summitClick: () => cy.get('#submit'),
	};
	addNewRecord() {
		const randomName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const randomEmail = faker.internet.email();
		const randomAge = faker.datatype.number({ min: 18, max: 100 });
		const randomSalary = faker.datatype.number({ min: 1000, max: 50000 });
		const randomDepartment = faker.word.noun();

		this.elements.inputFirstName().type(randomName);
		this.elements.inputLastName().type(randomLastName);
		this.elements.inputEmail().type(randomEmail);
		this.elements.inputAge().type(randomAge);
		this.elements.inputSalary().type(randomSalary);
		this.elements.inputDepartment().type(randomDepartment);

		return randomName, randomLastName, randomEmail, randomAge, randomSalary, randomDepartment;
	}
}
export const webTables = new Webtables();
