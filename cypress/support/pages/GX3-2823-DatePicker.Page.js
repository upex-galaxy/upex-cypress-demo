/* eslint-disable @typescript-eslint/no-unsafe-assignment */
class DatePicker {
	getSelectDateAndTime = {
		datePickerInput: () => cy.get('#datePickerMonthYearInput'),
		monthSelector: () => cy.get('.react-datepicker__month-select'),
		yearSelector: () => cy.get('.react-datepicker__year-select'),
		daySelector: () => cy.get('.react-datepicker__week > div:not(.react-datepicker__day--outside-month)'),
		dateHeader : () => cy.get('.react-datepicker__current-month'),
		previousMonth : () => cy.get('.react-datepicker__navigation--previous'),
		nextMonth : () => cy.get('.react-datepicker__navigation--next')
	};
	getDateAndTime = {
		dateAndTimePickerInput: () => cy.get('#dateAndTimePickerInput'),
		monthSelector: () => cy.get('.react-datepicker__month-dropdown'),
		// yearSelector: () => cy.get('.react-datepicker__year-select'),
		// daySelector: () => cy.get('.react-datepicker__week > div:not(.react-datepicker__day--outside-month)'),
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
	generateRandomDate() {
		const startYear = 1900;
		const endYear = 2100;
		// Generate a random year within the range [startYear, endYear]
		const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;

		// Generate a random month (1 to 12)
		const month = Math.floor(Math.random() * 12) + 1;

		// Generate a random day (1 to 28 to simplify and ensure a valid date)
		const day = Math.floor(Math.random() * 28) + 1;

		// Format the date into MM/DD/YYYY
		const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

		return formattedDate;
	}
	selectRandomMonth() {
		this.getSelectDateAndTime.monthSelector().then($months => {
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
		this.getSelectDateAndTime.yearSelector().then($years => {
			const yearCount = $years.find('option').length;
			const randomYear = Math.floor(Math.random() * yearCount);

			cy.wrap($years).select(randomYear).then(() => {
				const year = $years.find('option:selected').val();
				cy.wrap(year).as('selectedYear');
			});
		});
	}
	selectRandomDay() {
		this.getSelectDateAndTime.daySelector().then($days => {
			const dayCount = $days.length;
			const randomDay = Math.floor(Math.random() * dayCount);
			const selectedDay = $days.eq(randomDay).text();
			cy.wrap($days).eq(randomDay).click();
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
					// Format: 03/22/20204
					const dateFormat = `${monthValue.toString().padStart(2, '0')}/${selectedDay.padStart(2, '0')}/${selectedYear}`;
					cy.get('@selectedMonth').then(({ monthName }) => {
						 // Format: March 2024
						const monthAndYearFormat = `${monthName} ${selectedYear}`;
						cy.wrap({ dateFormat, monthAndYearFormat }).as('formattedDates');
					});
				});
			});
		});
	}
	verifyMonthNavigation(direction) {
		this.getSelectDateAndTime.datePickerInput().click();
		this.selectRandomDate();
		this.getSelectDateAndTime.datePickerInput().click();
		return new Promise(resolve => {
			let expectedPreviousMonthName;
			let expectedNextMonthName;
			cy.get('@selectedMonth').then(({ randomMonthIndex, monthNamesArray }) => {
				if (direction === 'previous') {
					this.getSelectDateAndTime.previousMonth().click();
					const expectedPreviousMonthIndex = randomMonthIndex === 0 ? 11 : randomMonthIndex - 1;
					expectedPreviousMonthName = monthNamesArray[expectedPreviousMonthIndex];
				} else if (direction === 'next') {
					this.getSelectDateAndTime.nextMonth().click();
					const expectedNextMonthIndex = randomMonthIndex === 11 ? 0 : randomMonthIndex + 1;
					expectedNextMonthName = monthNamesArray[expectedNextMonthIndex];
				}
				resolve({ expectedPreviousMonthName, expectedNextMonthName });
			});
		});
	}

}
export const DatePickerPage = new DatePicker();