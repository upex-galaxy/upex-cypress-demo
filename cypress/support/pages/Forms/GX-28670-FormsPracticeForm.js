class majorRecord {
	get = {
		firstNameInput: () => cy.get('#firstName'), //nombre
		lastNameInput: () => cy.get('#lastName'), //apellido
		email: () => cy.get('#userEmail'), //correo
		genteWrapper: () => cy.get('#genterWrapper [class*="custom-radio"]'), //genero
		genderRadio: () => cy.get('[id*=gender-radio]'), //selecionar genero
		mobile: () => cy.get('#userNumber'), //numero
		birthInput: () => cy.get('#dateOfBirthInput'), //fecha de cumple
		subjectsSelect: () => cy.get('#subjectsContainer'), //asignatura
		subjectsOptions: () => cy.get('[id*="react-select-2-option"]'), //elegir una opccion
		selectSubjects: () => cy.get('[class*="subjects-auto-complete__multi-value__label"]'), //selecionar asignatura
		hobbiesWrapper: () => cy.get('#hobbiesWrapper [class*="custom-checkbox"]'), //pasatiempo
		hobbiescheckbox: () => cy.get('[id*=hobbies-checkbox]'), //selecionar pasatiempo
		address: () => cy.get('#currentAddress'), //direccion
		stateInput: () => cy.get('#state'), //estado
		OptionDropdown: () => cy.get('[id*=react-select-3-option]'), // despliegue de estado
		stateSelected: () => cy.get('#state [class*=singleValue]'), // selecionado estado
		cityInput: () => cy.get('#city'), // cuidad
		cityOptionDropdown: () => cy.get('[id*=react-select-4-option]'), //opciones de ciudad
		selectedCity: () => cy.get('#city [class*=singleValue]'), //selecionado ciudad
		submitButton: () => cy.get('#submit'),
	};
	inputsFillForm({ firstName: value, lastName: value1, email: value2, mobile: value3, address: value4 }) {
		value && this.get.firstNameInput().type(value);
		value1 && this.get.lastNameInput().type(value1);
		value2 && this.get.email().type(value2);
		value3 && this.get.mobile().type(value3);
		value4 && this.get.address().type(value4);
	}
	clickSubmitButton() {
		this.get.submitButton().click();
	}
}
export const recordStudent = new majorRecord();
