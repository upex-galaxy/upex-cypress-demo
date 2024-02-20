import DateGenerator from './GX3-1313-DataPicker.GeneratorDate';

class Action {
	clic(input) {
		cy.get(input).click();
	}

	get = {
		datePickerYearAndDateYearList: () => cy.get('.react-datepicker__year-dropdown'),
		datePickerYearAndDateYearListOption: () => cy.get('.react-datepicker__year-option'),
		datePickerYearAndDateYearListPreviousButton: () => cy.get('.react-datepicker__navigation--years-previous'),
		datePickerYearAndDateYearListUpcomingButton: () => cy.get('.react-datepicker__navigation--years-upcoming'),
		datePickerCurrentMonth: () => cy.get('.react-datepicker__current-month'),
		datePickerNexMonth: () => cy.get('[aria-label="Next Month"]'),
		datePicketPreviousMonth: () => cy.get('[aria-label="Previous Month"]'),
		datePickerMonthYearInputYearSelect: () => cy.get('.react-datepicker__year-select'),
		datePickerMonthYearInputMonthSelect: () => cy.get('.react-datepicker__month-select'),
		datePickerDateAndTimePickerInputYearSelect: () => cy.get('.react-datepicker__year-read-view--selected-year'),
		datePickerDateAndTimePickerInputMonthSelect: () => cy.get('.react-datepicker__month-read-view--selected-month'),
		datepickerTimerListItem: () => cy.get('.react-datepicker__time-list-item'),
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

		this.get.datePickerYearAndDateYearList().within(() => {
			this.get.datePickerYearAndDateYearListOption().each($elemento => {
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

			//! NO USAR el Switch de esta manera! Esto no debió ser mergeado.
			switch (true) {
				case math:
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					this.get.datePickerYearAndDateYearListOption().contains(year).click();
					break;

				case yearArray[5] > year:
					for (var index = 0; index < 10; index++) {
						this.get.datePickerYearAndDateYearListPreviousButton().click();
					}
					this.navigateYears(year);
					break;

				case yearArray[5] < year:
					for (let index = 0; index < 10; index++) {
						this.get.datePickerYearAndDateYearListUpcomingButton().click();
					}
					this.navigateYears(year);
					break;
				default:
					break;
			}
		});
	}

	navigateMonths(comparisonDate) {
		let currentDate;

		this.get
			.datePickerCurrentMonth()
			.invoke('text')
			.then(text => {
				currentDate = new Date(text);
			});

		this.get
			.datePickerCurrentMonth()
			.should('be.visible')
			.then(() => {
				if (currentDate.getTime() !== comparisonDate.getTime()) {
					if (currentDate < comparisonDate) {
						this.get.datePickerNexMonth().should('be.visible').click();
					} else {
						this.get.datePicketPreviousMonth().should('be.visible').click();
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
				this.get.datePickerMonthYearInputYearSelect().should('be.visible').select(dateGenerator.year);
				this.get.datePickerMonthYearInputMonthSelect().should('be.visible').select(dateGenerator.monthSlice);
			} else {
				this.get.datePickerDateAndTimePickerInputMonthSelect().click();
				cy.contains('.react-datepicker__month-option', dateGenerator.monthSlice).should('be.visible').click();
				this.get.datePickerDateAndTimePickerInputYearSelect().click();
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
			this.get.datepickerTimerListItem().contains(dateGenerator.time24h).first().click();
			return `${dateGenerator.month} ${parseInt(dateGenerator.day)}, ${dateGenerator.year} ${dateGenerator.time12h}`;
		}
	}
}

export default Action;
