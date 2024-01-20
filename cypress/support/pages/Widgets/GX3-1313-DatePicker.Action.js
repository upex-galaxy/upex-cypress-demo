import DateGenerator from './GX3-1313-DataPicker.GeneratorDate';

class Action {
	clic(input) {
		cy.get(input).click();
	}

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

		cy.get('.react-datepicker__year-dropdown').within(() => {
			cy.get('.react-datepicker__year-option').each($elemento => {
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
					cy.get('.react-datepicker__year-option').contains(year).click();
					break;

				case yearArray[5] > year:
					for (var index = 0; index < 10; index++) {
						this.clic('.react-datepicker__navigation--years-previous');
					}
					this.navigateYears(year);
					break;

				case yearArray[5] < year:
					for (let index = 0; index < 10; index++) {
						this.clic('.react-datepicker__navigation--years-upcoming');
					}
					this.navigateYears(year);
					break;
			}
		});
	}

	navigateMonths(comparisonDate) {
		let currentDate;

		cy.get('.react-datepicker__current-month')
			.invoke('text')
			.then(text => {
				currentDate = new Date(text);
			});

		cy.get('.react-datepicker__current-month')
			.should('be.visible')
			.then(() => {
				if (currentDate.getTime() !== comparisonDate.getTime()) {
					if (currentDate < comparisonDate) {
						cy.get('[aria-label="Next Month"]').should('be.visible').click();
					} else {
						cy.get('[aria-label="Previous Month"]').should('be.visible').click();
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

		if (typeDateSelect == 'YearAndMonth') {
			const comparisonDate = new Date(`${dateGenerator.month}, ${dateGenerator.year}`);
			this.navigateMonths(comparisonDate);
		} else {
			if (input == '#datePickerMonthYearInput') {
				cy.get('.react-datepicker__year-select').should('be.visible').select(dateGenerator.year);
				cy.get('.react-datepicker__month-select').should('be.visible').select(dateGenerator.monthSlice);
			} else {
				this.clic('.react-datepicker__month-read-view--selected-month');
				cy.contains('.react-datepicker__month-option', dateGenerator.monthSlice).should('be.visible').click();
				this.clic('.react-datepicker__year-read-view--selected-year');
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

		if (input == '#datePickerMonthYearInput') {
			return `${dateGenerator.monthNumber}/${dateGenerator.day}/${dateGenerator.year}`;
		} else {
			cy.get('.react-datepicker__time-list-item').contains(dateGenerator.time24h).first().click();
			return `${dateGenerator.month} ${parseInt(dateGenerator.day)}, ${dateGenerator.year} ${dateGenerator.time12h}`;
		}
	}
}

export default Action;
