import data from 'cypress/fixtures/data/Forms/GX3-2449-PracticeForm.json';
class Formulario {
	get = {
		inputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputMail: () => cy.get('#userEmail'),
		selectGender: () => cy.get('[class*="custom-radio"]'),
		inputMobile: () => cy.get('#userNumber'),
		selectDate: () => cy.get('#dateOfBirthInput'),
		dateInput: () => cy.get('[class="react-datepicker-wrapper"]'),
		selectMonth: () => cy.get('.react-datepicker__month-select'),
		selectMonthOptions: () => cy.get('[class="react-datepicker__month-select"] option'),
		selectYear: () => cy.get('.react-datepicker__year-select'),
		selectYearOptions: () => cy.get('[class="react-datepicker__year-select"] option'),
		selectDay: () => cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])'),
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
		firstNameFormResult: () => cy.get('tr').eq(1),
		lastNameFormResult: () => cy.get('tr').eq(1),
		mailFormResult: () => cy.get('tr').eq(2),
		genderFormResult: () => cy.get('tr').eq(3),
		mobileFormResult: () => cy.get('tr').eq(4),
		birthDayFormResult: () => cy.get('tr').eq(5),
		subjectFormResult: () => cy.get('tr').eq(6),
		hobbiesFormResult: () => cy.get('tr').eq(7),
		imageFormResult: () => cy.get('tr').eq(8),
		addressFormResult: () => cy.get('tr').eq(9),
		stateAndCityFormResult: () => cy.get('tr').eq(10),
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
		this.get.selectDate().click();
		this.selectRandomYear();
		this.selectRandomMonth();
		this.selectRandomDay();
	}

	selectRandomYear() {
		this.get.selectYear().then(selectYearOptions => {
			if (selectYearOptions.length > 1900) {
				const randomYear = Cypress._.random(1900, selectYearOptions.length - 2024);
				this.get.selectYear().select(randomYear.toString());
			}
		});
	}

	selectRandomMonth() {
		const randomMonth = Cypress._.random(0, 11);
		this.get.selectMonth().select(randomMonth.toString());
		this.get
			.selectMonth()
			.invoke('text')
			.then(selectedMonth => {
				cy.log(selectedMonth);
			});
	}

	selectRandomDay() {
		this.get.selectDay().then(selectedDay => {
			const day = selectedDay.length;
			cy.log('day');
			const randomDay = Cypress._.random(0, day - 1);
			cy.log(randomDay);

			cy.wrap(selectedDay.eq(randomDay))
				.invoke('text')
				.then(selectedDayText => {
					cy.wrap(selectedDay.eq(randomDay)).click();
					cy.log(selectedDayText);
				});
		});
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
		randomOneSubject && this.get.selectGender().type(randomOneSubject).click();
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
		const selectedStateText = cy
			.get(`#react-select-3-option-${ randomState}`)
			.invoke('text')
			.then(text => text.trim());
		cy.get(`#react-select-3-option-${ randomState}`).click({ force: true });
		return selectedStateText;
	}

	selectRandomCity(randomCity) {
		this.get.selectCity().click();
		const selectedCityText = cy
			.get(`#react-select-4-option-${ randomCity}`)
			.invoke('text')
			.then(text => text.trim());
		cy.get(`#react-select-4-option-${ randomCity}`).click({ force: true });
		return selectedCityText;
	}

	getStateAndCityText(randomSelectState, randomSelectCity) {
		return `State and City${randomSelectState.toString()} ${randomSelectCity.toString()}`;
	}

	selectSubmit() {
		this.get.submitButton().click();
	}
}
export const formPage = new Formulario();