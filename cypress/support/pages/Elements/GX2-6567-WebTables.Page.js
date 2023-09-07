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
}
export const webTables = new Webtables();
