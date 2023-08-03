import { faker } from '@faker-js/faker';
class datePicker {
	get = {
		SelectDate: () => cy.get('[id="datePickerMonthYearInput"]'),
		Year: () => cy.get('[class$="year-select"]'),
		Month: () => cy.get('[class$="month-select"]'),
		Day: () => cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])'),
		RightArrow: () => cy.get('[class$="navigation--next"]'),
		LeftArrow: () => cy.get('[class$="navigation--previous"]'),
	};

	CurrentDate() {
		const hoy = new Date();
		const opcionesFecha = { month: '2-digit', day: '2-digit', year: 'numeric' };
		return hoy.toLocaleDateString('en-US', opcionesFecha);
	}

	ClickOnSelectDate() {
		this.get.SelectDate().click();
	}

	SelectRandomYear() {
		this.get
			.Year()
			.children()
			.then(length => {
				let randomYear = Cypress._.random(0, length.length - 1);
				cy.log(randomYear);
				this.get.Year().select(randomYear);
				randomYear = 1900 + randomYear; // El valor inicial es 1900 según las BR's
				Cypress.env('RandomYear', randomYear);
			});
	}

	SelectRandomMonth() {
		let randomMonth = Cypress._.random(0, 11);
		this.get.Month().select(randomMonth);
		Cypress.env('SelectedMonth', randomMonth);
		randomMonth = randomMonth + 1;
		cy.log(randomMonth);
		Cypress.env('RandomMonth', randomMonth);
	}

	SelectRandomDay() {
		this.get.Day().then(length => {
			let randomDay = Cypress._.random(1, length.length);
			cy.log(randomDay);
			Cypress.env('RandomDay', randomDay);
			this.get.Day().contains(randomDay).click();
		});
	}

	ExpectedDate() {
		const MonthSelect = Cypress.env('RandomMonth').toString().padStart(2, 0);
		const DaySelect = Cypress.env('RandomDay').toString().padStart(2, 0);
		const expectedDate = MonthSelect + '/' + DaySelect + '/' + Cypress.env('RandomYear');
		return expectedDate;
	}

	ClickOnRightArrow() {
		let clicks = Cypress._.random(1, 12);
		cy.log(clicks);
		let i = 0;
		while (i < clicks) {
			this.get.RightArrow().click();
			i = i + 1;
		}
		this.get
			.Month()
			.invoke('val')
			.then(Month => {
				Cypress.env('NextsMonth', Month);
			});
	}

	ClickOnLeftArrow() {
		let clicks = Cypress._.random(1, 12);
		cy.log(clicks);
		let i = 0;
		while (i < clicks) {
			this.get.LeftArrow().click();
			i = i + 1;
		}
		this.get
			.Month()
			.invoke('val')
			.then(Month => {
				Cypress.env('PreviousMonth', Month);
			});
	}
}

export const DatePicker = new datePicker();
