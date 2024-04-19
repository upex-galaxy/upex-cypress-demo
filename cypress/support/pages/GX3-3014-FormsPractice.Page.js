/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-trailing-spaces */
class Form {
	get = {

		inputName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		inputGender: () => cy.get('[for*="gender-radio"]'),
		inputCheckGender: () => cy.get('[id*=gender-radio]'),
		inputNumber: () => cy.get('#userNumber'),
		inputDate: () => cy.get('#dateOfBirthInput'),
		inputDay: () => cy.get('[class*="react-datepicker__day react-datepicker__day--"]:not([class$="outside-month"])'),
		inputMonth: () => cy.get('.react-datepicker__month-select'),
		inputYear: () => cy.get('.react-datepicker__year-select'),
		inputSubject: () => cy.get('#subjectsContainer'),
		selectSubject: () => cy.get('[id*="react-select-2-option"]'),
		inputHobbies: () => cy.get('[for*="hobbies-checkbox"]'),
		inputCheckHobbies: () => cy.get('[id*="hobbies-checkbox"]'),
		upPicture: () => cy.get('#uploadPicture'),
		addAddress: () => cy.get('#currentAddress'),
		state: () => cy.get('#state'),
		selectState: () => cy.get('[id*="react-select-3-option"]'),
		singleState: () => cy.get('[class$="singleValue"]'),
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
	fillInput(input, value) {
		this.get[input]().type(value);
	}
	clickOnRadioBtn(button, value) {
		this.get[button]().eq(value).click();
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
	 	this.get.inputDate().click();
	
	}
	selectDay() {
		
		this.get.inputDay().then(selectDay => {
			const day = selectDay.length;
			const randomDay = Cypress._.random(0, day - 1);
			cy.wrap(selectDay).eq(randomDay).click();
		});
	}
	selectMonth() {
		const randomMonth = Cypress._.random(0, 11);
		this.get.inputMonth().select(randomMonth.toString());
	}
	selectYear() {
		const randomYear = Cypress._.random(1990, 2100);
		this.get.inputYear().select(randomYear.toString());
	}
	clickOnSelectBtn(selector, value) {
		
		if(selector === 'selectState') {

			this.get.state().click();

		} else if(selector === 'selectCity') {

			this.get.city().click();
		
		}
		this.get[selector]().eq(value).click();

	}
	btnSubmit() {
		this.get.submit().click();

	}
}

export const formPage = new Form();
