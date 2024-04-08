/* eslint-disable no-trailing-spaces */
import { faker } from '@faker-js/faker';

class Form {
	get = {
		inputName: () => cy.get('#firstName'),
		inputLast: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		//inputGender: valueGender => cy.get(`[for$='gender-radio-${valueGender}']`),
		inputGender: () => cy.get('[for="gender-radio-3"]'),
		inputNumber: () => cy.get('#userNumber'),
		inputDate: () => cy.get('#dateOfBirthInput'),
		inputSubject: () => cy.get('#subjectsContainer'),
		inputHobbies: () => cy.get('[for="hobbies-checkbox-1"]'),
		upPicture: () => cy.get('#uploadPicture'),
		upText: () => cy.get('#currentAddress'),
		state: () => cy.get('#state'),
		//selectState: valueState => cy.get(`[id$='react-select-3-option-${valueState}']`),
		selectState: () => cy.get('#react-select-3-option-1'),
		city: () => cy.get('#city'),
		selectCity: () => cy.get('#react-select-4-option-2'),
		submit: () => cy.get('#submit'),
		document: () => cy.get('.modal-content'),
	};

	enterData() {
		const randomName = faker.person.firstName('female' | 'male');
		const randomLastName = faker.person.lastName();
		const newEmail = faker.internet.email();
		const newNumber = faker.string.numeric(10);

		this.get.inputName().type(randomName);
		this.get.inputLast().type(randomLastName);
		this.get.inputEmail().type(newEmail);
		this.get.inputNumber().type(newNumber);
	}

	selectInputGender() {
		this.get.inputGender().click();
	}
	newInputDate() {

		const newDate = faker.date.birthdate();
		this.get.inputDate().type(newDate);
	}
	selectValueState() {
		this.get.state().click();
		this.get.selectState().then(arrayValues => {
			const num = Cypress._.random(0, arrayValues.length -1);
			const textValue = arrayValues[num].innerText;
			Cypress.env('textValue', textValue);
			cy.wrap(arrayValues).eq(num).click();
		});
	}
	selectInputHobbies() {
		this.get.inputHobbies().click();
	}

}

export const formPage = new Form;