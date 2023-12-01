import data from '../../../fixtures/data/GX3-706-PracticeForm.json';
class Formulario {
	get = {
		inputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputMail: () => cy.get('#userEmail'),
		selectGenero: () => cy.get('div[class*="custom-control-inline"]'),
		inputMobile: () => cy.get('#userNumber'),
		selectDate: () => cy.get('#dateOfBirthInput'),
		selectMonth: () => cy.get('.react-datepicker__month-select'),
		selectYear: () => cy.get('.react-datepicker__year-select'),
		selectDay: () => cy.get('.react-datepicker__day'),
		inputSubjects: () => cy.get('#subjectsContainer'),
		selectHobbie: () => cy.get('div[class*="custom-control-inline"]'),
		selectFile: () => cy.get('#uploadPicture'),
		inputAddress: () => cy.get('#currentAddress'),
		selectState: () => cy.get('#state'),
		selectOneState: () => cy.get('#react-select-3-input'),
		selectCity: () => cy.get('#city'),
		selectOneCity: () => cy.get('#react-select-4-input'),
		submitButton: () => cy.get('#submit'),
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
	selectOneGenero(randomGenero) {
		randomGenero && this.get.selectGenero().type(randomGenero);
	}
	typeMobile(randomMobile) {
		randomMobile && this.get.inputMobile().type(randomMobile);
	}
	selectBirthDay() {
		this.get.selectDate().click();
		this.selectRandomMonth();
		this.selectRandomYear();
		this.selectRandomDay();
	}
	selectRandomMonth() {
		const randomMonthIndex = Cypress._.random(0, 11);
		this.get.month().select(randomMonthIndex.toString());
		this.get
			.month()
			.invoke('text')
			.then(selectedMonth => {
				cy.log(selectedMonth);
			});
	}
	selectRandomYear() {
		this.get.yearOptions().then(yearOptions => {
			if (yearOptions.length > 0) {
				const randomYearIndex = Cypress._.random(0, yearOptions.length - 1);
				cy.wrap(yearOptions[randomYearIndex])
					.invoke('text')
					.then(selectedYear => {
						this.get.year().select(selectedYear);
					});
			}
		});
	}
	selectRandomDay() {
		this.get.daysOfMonthAndYearSelected().then(selectedDay => {
			const dayLength = selectedDay.length;
			cy.log('The length of the available days is: ' + selectedDay);
			cy.log(dayLength);
			const randomDayIndex = Cypress._.random(0, dayLength - 1);
			cy.log('The selected day is: ' + randomDayIndex);

			cy.wrap(selectedDay.eq(randomDayIndex))
				.invoke('text')
				.then(selectedDayText => {
					cy.wrap(selectedDay.eq(randomDayIndex)).click();
					cy.log('The selected day is: ' + selectedDayText);
				});
		});
	}
	typeSubjects(randomSubjects) {
		this.get.inputSubjects().click();
	}
	selectOneHobbie() {
		this.get.selectHobbie().click();
	}
	selectPicture() {
		this.get.selectFile().get(data.picture.file1);
	}
	typeAdress(randomAddress) {
		randomAddress && this.get.inputAddress().type(randomAddress);
	}
	selectRandomState() {
		this.get.selectState().click();
		return cy.get(this.get.selectOneState()).then(options => {
			const randomIndex = Cypress._.random(0, options.length - 1);
			const selectedState = options.eq(randomIndex).invoke('text');
			options.eq(randomIndex).click();
			return selectedState;
		});
	}
	selectRandomCity() {
		this.get.selectCity().click();
		return cy.get(this.get.selectOneCity()).then(options => {
			const randomIndex = Cypress._.random(0, options.length - 1);
			const selectedCity = options.eq(randomIndex).invoke('text');
			options.eq(randomIndex).click();
			return selectedCity;
		});
	}
	selectSubmit() {
		this.get.submitButton().click();
	}
}
export const formPage = new Formulario();
