/* eslint-disable no-trailing-spaces */
import { faker } from '@faker-js/faker';

class Form {
	get = {
		inputName: () => cy.get('#firstName'),
		inputLast: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		inputGender: () => cy.get('[for*="gender-radio"]'),
		inputNumber: () => cy.get('#userNumber'),
		inputDate: () => cy.get('#dateOfBirthInput'),
		inputSubject: () => cy.get('#subjectsContainer'),
		selectSubject: () => cy.get('[id*="react-select-2-option"]'),
		inputHobbies: () => cy.get('[for*="hobbies-checkbox"]'),
		upPicture: () => cy.get('#uploadPicture'),
		addText: () => cy.get('#currentAddress'),
		state: () => cy.get('#state'),
		selectState: () => cy.get('[id*="react-select-3-option"]'),	
		city: () => cy.get('#city'),
		selectCity: () => cy.get('[id*="react-select-4-option"]'),
		submit: () => cy.get('#submit'),
		document: () => cy.get('.modal-content'),
	};

	enterData() {
		const randomName = faker.person.firstName('female' | 'male');
		const randomLastName = faker.person.lastName();
		const newEmail = faker.internet.email();
		const newNumber = faker.string.numeric(10);
		const rGender = Cypress._.random(0, 2);
		const rHobbies = Cypress._.random(0, 2);

		this.get.inputName().type(randomName);
		this.get.inputLast().type(randomLastName);
		this.get.inputEmail().type(newEmail);
		this.get.inputGender().eq(rGender).click();
		this.get.inputNumber().type(newNumber);
		this.get.inputDate().invoke('val', '12 Feb 1995');
		this.selectInputSubject();
		this.get.inputHobbies().eq(rHobbies).click();
		this.get.upPicture().selectFile('cypress/fixtures/images/upexgalaxy.gif');
		this.get.addText().type('I live in my house');
		this.rState();
		this.rCity();
		this.get.submit().click();

	}

	selectInputSubject() {

		const randomSubject = faker.string.alpha({ count: 1, casing: 'upper', exclude: ['Q','Ñ','K','J','F','X','W','Z'] });
		if (typeof randomSubject === 'string') {
			this.get.inputSubject().type(randomSubject);
			this.get.selectSubject().then(i => {
				const r = Cypress._.random(0, i.length - 1);
				cy.wrap(i).eq(r).click();
			});
		}
	}
	
	rState() {
		const rState = Cypress._.random(0,3);
		this.get.state().click();
		this.get.selectState().eq(rState).click();
	}

	rCity() {
		const rCity = Cypress._.random();
		this.get.city().click();
		this.get.selectCity().eq(rCity).click();
	}

}

export const formPage = new Form;