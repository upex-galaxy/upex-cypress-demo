import data from '../../../fixtures/data/GX3-706-PracticeForm.json';
class Formulario {
	get = {
		inputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputMail: () => cy.get('#userEmail'),
		selectGender: () => cy.get('[class*="custom-radio"]'),
		inputMobile: () => cy.get('#userNumber'),
		selectDate: () => cy.get('#dateOfBirthInput'),
		selectMonth: () => cy.get('.react-datepicker__month-select'),
		selectYear: () => cy.get('.react-datepicker__year-select'),
		selectDay: () => cy.get('.react-datepicker__day'),
		inputSubjects: () => cy.get('#subjectsContainer'),
		selectSubject: () => cy.get('[id*="react-select-2-option"]'),
		selectHobbie: () => cy.get('div[class*="custom-control-inline"]'),
		inputPicture: () => cy.get('#uploadPicture'),
		inputAddress: () => cy.get('#currentAddress'),
		selectState: () => cy.get('#state .css-tlfecz-indicatorContainer'),
		selectOneState: () => cy.get('#react-select-3-input'),
		selectCity: () => cy.get('#city .css-tlfecz-indicatorContainer'),
		selectOneCity: () => cy.get('#react-select-4-option-'),
		submitButton: () => cy.get('#submit'),
		completeForm: () => cy.get('.modal-content'),
		completeFormMessage: () => cy.get('#example-modal-sizes-title-lg'),
	};

	typeFirstName(randomFirstName) {
		randomFirstName && this.get.inputFirstName().type(randomFirstName);
	}
	typeLastName(randomLastName) {
		randomLastName && this.get.inputLastName().type(randomLastName);
	}
	typeEmail(ramdomEmail) {
		ramdomEmail && this.get.inputMail().type(ramdomEmail);
	}
	selectGender(randomGender) {
		this.get.selectGender().eq(randomGender).click();
	}
	typeMobile(randomMobile) {
		this.get.inputMobile().type(randomMobile);
	}
	selectBirthDay() {
		return this.get.selectDate().invoke('val');
	}
	typeSubjects(randomSubject) {
		this.get.inputSubjects().type(randomSubject);
		this.get.selectSubject().then(i => {
			const r = Cypress._.random(0, i.length - 1);
			cy.wrap(i).eq(r).click();
		});
	}
	selectRandomSubjects(randomSelectSubject) {
		randomSelectSubject && this.get.selectSubject().click();
	}
	selectRandomGender(randomOneSubject) {
		randomOneSubject && this.get.selectSubject().type(randomOneSubject);
		this.get.selectSubject().click();
	}
	selectRandomHobbie(randomHobbies) {
		this.get.selectHobbie().eq(randomHobbies).click();
	}
	selectPicture() {
		this.get.inputPicture().click();
		this.get.inputPicture().selectFile(data.picture.file);
	}
	typeAdress(randomAddress) {
		randomAddress && this.get.inputAddress().type(randomAddress);
	}
	selectRandomState(randomState) {
		this.get.selectState().click();
		cy.get('#react-select-3-option-' + randomState).click({ force: true });
	}

	selectRandomCity(randomCity) {
		this.get.selectCity().click();
		cy.get('#react-select-4-option-' + randomCity).click({ force: true });
	}
	selectSubmit() {
		this.get.submitButton().click();
	}
}
export const formPage = new Formulario();
