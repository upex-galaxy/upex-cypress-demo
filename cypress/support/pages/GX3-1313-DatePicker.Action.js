import DateGenerator from './GX3-1313-DataPicker.GeneratorDate';

class Action {
	clic(input) {
		cy.get(input).click();
	}

	get = {
		DatePickerYearAndDateYearList: () => cy.get('.react-datepicker__year-dropdown'),
		DatePickerYearAndDateYearListOption: () => cy.get('.react-datepicker__year-option'),
		DatePickerYearAndDateYearListPreviousButton: () => cy.get('.react-datepicker__navigation--years-previous'),
		DatePickerYearAndDateYearListUpcomingButton: () => cy.get('.react-datepicker__navigation--years-upcoming'),
		DatePickerCurrentMonth: () => cy.get('.react-datepicker__current-month'),
		DatePickerNexMonth: () => cy.get('[aria-label="Next Month"]'),
		DatePicketPreviousMonth: () => cy.get('[aria-label="Previous Month"]'),
		DatePickerMonthYearInputYearSelect: () => cy.get('.react-datepicker__year-select'),
		DatePickerMonthYearInputMonthSelect: () => cy.get('.react-datepicker__month-select'),
		DatePickerDateAndTimePickerInputYearSelect: () => cy.get('.react-datepicker__year-read-view--selected-year'),
		DatePickerDateAndTimePickerInputMonthSelect: () => cy.get('.react-datepicker__month-read-view--selected-month'),
		DatepickerTimerListItem: () => cy.get('.react-datepicker__time-list-item'),
	};

	getOrdinalSuffix(day) {
		if (day >= 11 && day <= 13) {
			return 'th';
		} else {
			switch (day % 10) {
				case 1:
					return 'st';
				case 2:
					return 'nd';
				case 3:
					return 'rd';
				default:
					return 'th';
			}
		}
	}

	navigateYears(year) {
		let yearArray = [];
		let math = false;

		this.get.DatePickerYearAndDateYearList().within(() => {
			this.get.DatePickerYearAndDateYearListOption().each($elemento => {
				let yearText = $elemento.text().replace().replace('✓', '').trim();

				if (/^\d{4}$/.test(yearText)) {
					yearArray.push(yearText);
				}
			});
		});

		cy.then(() => {
			for (let i = 0; i < yearArray.length; i++) {
				if (yearArray[i] === year) {
					math = true;
					break;
				}
			}

			switch (true) {
				case math:
					this.get.DatePickerYearAndDateYearListOption().contains(year).click();
					break;

				case yearArray[5] > year:
					for (var index = 0; index < 10; index++) {
						this.get.DatePickerYearAndDateYearListPreviousButton().click();
					}
					this.navigateYears(year);
					break;

				case yearArray[5] < year:
					for (let index = 0; index < 10; index++) {
						this.get.DatePickerYearAndDateYearListUpcomingButton().click();
					}
					this.navigateYears(year);
					break;
			}
		});
	}

	navigateMonths(comparisonDate) {
		let currentDate;

		this.get
			.DatePickerCurrentMonth()
			.invoke('text')
			.then(text => {
				currentDate = new Date(text);
			});

		this.get
			.DatePickerCurrentMonth()
			.should('be.visible')
			.then(() => {
				if (currentDate.getTime() !== comparisonDate.getTime()) {
					if (currentDate < comparisonDate) {
						this.get.DatePickerNexMonth().should('be.visible').click();
					} else {
						this.get.DatePicketPreviousMonth().should('be.visible').click();
					}
				}

				if (currentDate.getTime() !== comparisonDate.getTime()) {
					this.navigateMonths(comparisonDate);
				}
			});
	}

	selectMonthAndYear(rango, typeDateSelect, input) {
		const dateGenerator = new DateGenerator(rango, typeDateSelect);

		this.clic(input);

		if (typeDateSelect === 'YearAndMonth') {
			const comparisonDate = new Date(`${dateGenerator.month}, ${dateGenerator.year}`);
			this.navigateMonths(comparisonDate);
		} else {
			if (input === '#datePickerMonthYearInput') {
				this.get.DatePickerMonthYearInputYearSelect().should('be.visible').select(dateGenerator.year);
				this.get.DatePickerMonthYearInputMonthSelect().should('be.visible').select(dateGenerator.monthSlice);
			} else {
				this.get.DatePickerDateAndTimePickerInputMonthSelect().click();
				cy.contains('.react-datepicker__month-option', dateGenerator.monthSlice).should('be.visible').click();
				this.get.DatePickerDateAndTimePickerInputYearSelect().click();
				this.navigateYears(dateGenerator.year);
			}
		}
		cy.get(
			`[aria-label="Choose ${dateGenerator.dayOfWeek}, ${dateGenerator.monthSlice} ${parseInt(dateGenerator.day)}${this.getOrdinalSuffix(
				parseInt(dateGenerator.day)
			)}, ${dateGenerator.year}"]`
		)
			.should('be.visible')
			.click();

		if (input === '#datePickerMonthYearInput') {
			return `${dateGenerator.monthNumber}/${dateGenerator.day}/${dateGenerator.year}`;
		} else {
			this.get.DatepickerTimerListItem().contains(dateGenerator.time24h).first().click();
			return `${dateGenerator.month} ${parseInt(dateGenerator.day)}, ${dateGenerator.year} ${dateGenerator.time12h}`;
		}
	}
}

export default Action;
