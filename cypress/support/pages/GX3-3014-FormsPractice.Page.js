/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-trailing-spaces */
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
		addAddress: () => cy.get('#currentAddress'),
		state: () => cy.get('#state'),
		selectState: () => cy.get('[id*="react-select-3-option"]'),
		city: () => cy.get('#city'),
		selectCity: () => cy.get('[id*="react-select-4-option"]'),
		submit: () => cy.get('#submit'),
		document: () => cy.get('.modal-title'),
		
	    //Result
		resultFirtsName: () => cy.get('tr').eq(1),
		resultLastName: () => cy.get('tr').eq(1),
		resultEmail: () => cy.get('tr').eq(2),
		resultGender: () => cy.get('tr').eq(3),
	};

	typeInputName(randomName) {
		this.get.inputName().type(randomName);
	}
	typeInputLast(randomLastName) {
		this.get.inputLast().type(randomLastName);
	}
	typeInputEmail(randomEmail) {
		this.get.inputEmail().type(randomEmail);
	}
	selectInputGender(randomGender) {
		this.get.inputGender().eq(randomGender).click();
	}
	typeInputNumber(randomNumber) {
		this.get.inputNumber().type(randomNumber);
	}
	typeAddAddress(randomAddress) {
		this.get.addAddress().type(randomAddress);
	}

	typeInputHobbies(randomHobbies) {
		this.get.inputHobbies().eq(randomHobbies).click();

	}
	selectUpPicture() {
		this.get.upPicture().selectFile('cypress/fixtures/images/upexgalaxy.gif');

	}

	selectInputSubject(randomSubject) {		
		this.get.inputSubject().type(randomSubject);
		this.get.selectSubject().then(i => {
			const r = Cypress._.random(0, i.length - 1);
			cy.wrap(i).eq(r).click();
		});
		
	}

	selectInputDate() {
		this.get.inputDate().invoke('val', '12 Feb 1995');

	}

	randomState(randomState) {
		this.get.state().click();
		this.get.selectState().eq(randomState).click();
	}

	randomCity(randomCity) {
		this.get.city().click();
		this.get.selectCity().eq(randomCity).click();
	}

	btnSubmit() {
		this.get.submit().click();

	}
}

export const formPage = new Form();
