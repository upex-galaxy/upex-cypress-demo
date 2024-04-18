import { faker } from '@faker-js/faker';
// eslint-disable-next-line @typescript-eslint/naming-convention
class dateSelectorPage {
	get= {
		selectDate: () => cy.get ('#datePickerMonthYearInput'),
		selectMonth:() => cy.get ('.react-datepicker__month-select'),
		selectYear:() => cy.get ('.react-datepicker__year-select'),
		selectDay:() => cy.get('.react-datepicker__day'),
	};

	selectDatePicker() {
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
}
export const datePicker = new dateSelectorPage();