import { faker } from '@faker-js/faker';
class datePicker {
	get = {
		SelectDate: () => cy.get('[id="datePickerMonthYearInput"]'),
		Year: () => cy.get('[class$="year-select"]'),
		Month: () => cy.get('[class$="month-select"]'),
		Day: () => cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])'),
	};

	CurrentDate() {
		const dayDate = faker.date.between().toString().split(' ', '4');
		const Month = dayDate[1];
		const optionMonth = {
			Jan: '01',
			Feb: '02',
			Mar: '03',
			Apr: '04',
			May: '05',
			Jun: '06',
			Jul: '07',
			Aug: '08',
			Sep: '09',
			Oct: '10',
			Nov: '11',
			Dec: '12',
		};
		let selectMonth = optionMonth[Month];
		const CurrentDate = selectMonth + '/' + dayDate[2] + '/' + dayDate[3];
		cy.log(CurrentDate);
		return CurrentDate;
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
				this.get
					.Year()
					.select(randomYear)
					.invoke('val')
					.then(value => {
						cy.log(value);
						Cypress.env('RandomYear', value);
					});
			});
	}

	SelectRandomMonth() {
		let randomMonth = Cypress._.random(0, 11);
		this.get.Month().select(randomMonth);
		randomMonth = randomMonth + 1;
		cy.log(randomMonth);
		Cypress.env('RandomMonth', randomMonth);
	}

	SelectRandomDay() {
		this.get.Day().then(length => {
			let randomDay = Cypress._.random(1, length.length);
			cy.log(randomDay);
			this.get.Day().contains(randomDay).click();
			Cypress.env('RandomDay', randomDay);
		});
	}

	ExpectedDate() {
		const MonthSelect = Cypress.env('RandomMonth').toString().padStart(2, 0);
		const DaySelect = Cypress.env('RandomDay').toString().padStart(2, 0);
		const expectedDate = MonthSelect + '/' + DaySelect + '/' + Cypress.env('RandomYear');
		return expectedDate;
	}

	/* Moverse con el botón de mes siguiente
        let clicks = Cypress._.random(1, 12);
		cy.log(clicks);
		let i = 0;
		while (i < clicks) {
			cy.get('[class$="navigation--next"]').click();
			i = i + 1;
		}*/
}

export const DatePicker = new datePicker();
