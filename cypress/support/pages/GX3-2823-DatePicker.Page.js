class DatePicker {
	get = {
		datePickerInput: () => cy.get('#datePickerMonthYearInput'),
		dateAndTimePickerInput: () => cy.get('#dateAndTimePickerInput'),
		monthSelector: () => cy.get('.react-datepicker__month-select'),
		yearSelector: () => cy.get('.react-datepicker__year-select'),
		daySelector: () => cy.get('.react-datepicker__week > div:not(.react-datepicker__day--outside-month)'),
		dateHeader : () => cy.get('.react-datepicker__current-month'),
		previousMonth : () => cy.get('.react-datepicker__navigation--previous'),
		nextMonth : () => cy.get('.react-datepicker__navigation--next')
	};
	getFormattedDateIntl() {
		const now = new Date();

		const options = {
			year: 'numeric',
			month: '2-digit', // Ensures the month is always represented with two digits
			day: '2-digit', // Ensures the day is always represented with two digits
		};

		// The 'en-US' locale typically uses slashes as separators for dates
		return new Intl.DateTimeFormat('en-US', options).format(now);
	}
	getFormattedDateTimeIntl() {
		const now = new Date();

		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true // Use 12-hour time format with AM/PM
		};
		// Generate the formatted string
		let formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(now);

		// Remove the 'at' if it exists
		formattedDateTime = formattedDateTime.replace(' at ', ' ');

		return formattedDateTime;
	}
	selectRandomMonth() {
		this.get.monthSelector().then($months => {
			const monthNamesArray = $months.find('option').map((index, option) => Cypress.$(option).text()).get();
			const randomMonthIndex = Math.floor(Math.random() * monthNamesArray.length);
			cy.wrap($months).select(randomMonthIndex).then(() => {
				const monthName = $months.find('option:selected').text();
				const monthValue = randomMonthIndex + 1;
				 cy.wrap({ randomMonthIndex, monthName, monthValue, monthNamesArray }).as('selectedMonth');
			});
		});
	}
	selectRandomYear() {
		this.get.yearSelector().then($years => {
			const yearCount = $years.find('option').length;
			const randomYear = Math.floor(Math.random() * yearCount);
			cy.wrap($years).select(randomYear).then(() => {
				const year = $years.find('option:selected').val();
				cy.wrap(year).as('selectedYear');
			});
		});
	}
	selectRandomDay() {
		this.get.daySelector().then($days => {
			const dayCount = $days.length;
			const randomDay = Math.floor(Math.random() * dayCount);
			const selectedDay = $days.eq(randomDay).click().text();
			cy.wrap(selectedDay).as('selectedDay');
		});
	}
	selectRandomDate() {
		this.selectRandomMonth();
		this.selectRandomYear();
		cy.get('@selectedMonth').then(({ monthValue }) => {
			this.selectRandomDay();
			cy.get('@selectedDay').then((selectedDay) => {
				cy.get('@selectedYear').then((selectedYear) => {
					const formattedDate1 = `${monthValue.toString().padStart(2, '0')}/${selectedDay.padStart(2, '0')}/${selectedYear}`;
					cy.get('@selectedMonth').then(({ monthName }) => {
						const formattedDate2 = `${monthName} ${selectedYear}`;
						cy.wrap({ formattedDate1, formattedDate2 }).as('formattedDates');
					});
				});
			});
		});
	}

}
export const DatePickerPage = new DatePicker();