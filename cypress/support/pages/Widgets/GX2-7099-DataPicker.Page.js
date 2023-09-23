const date = new Date();
import data from '@data/GX2-7099-DataPicker.json';
class DataPick {
	get = {
		inputSelectDate: () => cy.get('[id="datePickerMonthYearInput"]'),
		DropDownDateAndTime: () => cy.get('[class*="month-dropdown-container"]'),
		DropDownMonthDateAndTime: () => cy.get('[class*="month-dropdown"]'),
		ButtonNextMonth: () => cy.get('[aria-label="Next Month"]'),
		ButtonPreviousMonth: () => cy.get('[aria-label="Previous Month"]'),
		CurrentMonthAndYear: () => cy.get('[class~="react-datepicker__current-month"]'),
		inputDateAndTime: () => cy.get('[id="dateAndTimePickerInput"]'),
		AttrDayOptions: () => cy.get('[role="option"]'),
		DropDownSelectDateMonth: () => cy.get('[class*="month-select"]'),
		DropDownSelectDateYear: () => cy.get('[class*="year-select"]'),
		ElementHourAndMinutes: () => cy.get('[class="react-datepicker__time-list"] li'),
	};

	selectDateDefaultValues() {
		return new Promise(resolve => {
			let month = (date.getMonth() + 1).toString().padStart(2, '0');
			let day = date.getDate().toString().padStart(2, '0');
			let year = date.getFullYear();

			resolve([month, day, year]);
		});
	}

	SelectDateRandom() {
		this.get.inputSelectDate().click();
		const randomMonth = Math.floor(Math.random() * 2);
		const months = [6, 0];
		const monthIndex = months[randomMonth];

		const monthValue = (monthIndex + 1).toString().padStart(2, '0');

		this.get.DropDownSelectDateMonth().select(monthIndex);
		monthValue.toString().padStart(2, '0');
		let yearValue, dayValue;

		return this.get
			.DropDownSelectDateYear()
			.children()
			.then(yearOptions => {
				const randomYear = Cypress._.random(0, yearOptions.length);
				this.get.DropDownSelectDateYear().select(randomYear);
				return cy.wrap(yearOptions[randomYear].innerText);
			})
			.then(year => {
				yearValue = year;
			})
			.then(() => {
				this.get.AttrDayOptions().then(DayOption => {
					const randomDay = Cypress._.random(0, DayOption.length);
					this.get.AttrDayOptions().eq(randomDay).click();
					return cy.wrap(DayOption[randomDay].innerText);
				});
			})
			.then(day => {
				dayValue = day.toString().padStart(2, '0');
			})
			.then(() => {
				return [monthValue, dayValue, yearValue];
			});
	}

	TypeSelectDate({ year: year }) {
		let Month = date.getMonth().toString().padStart(2, '0');
		let Day = date.getDate().toString().padStart(2, '0');

		this.get.inputSelectDate().clear().type(`${Month}/${Day}/${year}`);
		return this.get.inputSelectDate().invoke('val');
	}

	ValidateFunctionalityButtonMonth(Button) {
		this.get.inputSelectDate().click();
		return this.get
			.CurrentMonthAndYear()
			.invoke('text')
			.then(PrevMonth => {
				let BeforeMonth = PrevMonth.split(' ')[0];
				let MonthBeforeButton = parseInt(data.MonthDataAndTime[BeforeMonth], 10);

				Button == 'Next' ? this.get.ButtonNextMonth().click() : this.get.ButtonPreviousMonth().click();

				this.get
					.CurrentMonthAndYear()
					.invoke('text')
					.then(NextMonth => {
						let AfterMonth = NextMonth.split(' ')[0];
						let MonthAfterButton = parseInt(data.MonthDataAndTime[AfterMonth], 10);

						return [MonthBeforeButton, MonthAfterButton];
					});
			});
	}

	ValidateColorBlue() {
		this.get.inputSelectDate().click();
		let day = Cypress._.random(0, this.get.AttrDayOptions().length);
		this.get.AttrDayOptions().eq(day);
		this.get.inputSelectDate().click();
		return cy.get('[class*="day--selected"]');
	}
}

export const dataPickerPage = new DataPick();
