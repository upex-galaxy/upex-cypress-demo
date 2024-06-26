/* eslint-disable @typescript-eslint/no-unsafe-assignment */
class DatePicker {
	getSelectDate = {
		datePickerInput: () => cy.get('#datePickerMonthYearInput'),
		monthSelector: () => cy.get('.react-datepicker__month-select'),
		yearSelector: () => cy.get('.react-datepicker__year-select'),
		daySelector: () => cy.get('.react-datepicker__week > div:not(.react-datepicker__day--outside-month)'),
		selectedDay: () => cy.get('.react-datepicker__day--selected'),
		dateHeader : () => cy.get('.react-datepicker__current-month'),
		previousMonth : () => cy.get('.react-datepicker__navigation--previous'),
		nextMonth : () => cy.get('.react-datepicker__navigation--next')
	};
	getDateAndTime = {
		dateAndTimePickerInput: () => cy.get('#dateAndTimePickerInput'),
		monthDropdown: () => cy.get('.react-datepicker__month-read-view'),
		monthOptions: () => cy.get('.react-datepicker__month-dropdown > div'),
		selectedMonth: () => cy.get('.react-datepicker__month-option--selected'),
		yearDropdown: () => cy.get('.react-datepicker__year-read-view'),
		selectedYear: () => cy.get('.react-datepicker__year-option--selected_year'),
		yearOptions: () => cy.get('[class$="year-option"]'),
		timeOptions: () => cy.get('.react-datepicker__time-list > li'),
		selectedTime: () => cy.get('.react-datepicker__time-list-item--selected')
	};
	clickOnElement(getterName, elementName) {
		this[getterName][elementName]().click();
	}
	getFormattedDateIntl() {
		const now = new Date();

		const options = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		};
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
		let formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(now);
		formattedDateTime = formattedDateTime.replace(' at ', ' ');

		return formattedDateTime;
	}
	generateRandomDate() {
		const startYear = 1900;
		const endYear = 2100;
		const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
		const month = Math.floor(Math.random() * 12) + 1;
		const day = Math.floor(Math.random() * 28) + 1;
		const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

		return formattedDate;
	}
	selectRandomMonth() {
		this.getSelectDate.monthSelector().then($months => {
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
		this.getSelectDate.yearSelector().then($years => {
			const yearCount = $years.find('option').length;
			const randomYear = Math.floor(Math.random() * yearCount);

			cy.wrap($years).select(randomYear).then(() => {
				const year = $years.find('option:selected').val();
				cy.wrap(year).as('selectedYear');
			});
		});
	}
	selectRandomDay() {
		this.getSelectDate.daySelector().then($days => {
			const dayCount = $days.length;
			const randomDay = Math.floor(Math.random() * dayCount);
			const selectedDay = $days.eq(randomDay);

			cy.wrap(selectedDay).invoke('text').then(selectedDayText => {
				cy.wrap(selectedDayText).as('selectedDay');

				cy.wrap(selectedDay).click();
			});
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
	verifyMonthNavigation(direction, alias) {
		return new Promise(resolve => {
			let expectedPreviousMonthName;
			let expectedNextMonthName;
			cy.get(alias).then(({ randomMonthIndex, monthNamesArray }) => {
				if (direction === 'previous') {
					this.getSelectDate.previousMonth().click();
					const expectedPreviousMonthIndex = randomMonthIndex === 0 ? 11 : randomMonthIndex - 1;
					expectedPreviousMonthName = monthNamesArray[expectedPreviousMonthIndex];
				} else if (direction === 'next') {
					this.getSelectDate.nextMonth().click();
					const expectedNextMonthIndex = randomMonthIndex === 11 ? 0 : randomMonthIndex + 1;
					expectedNextMonthName = monthNamesArray[expectedNextMonthIndex];
				}
				resolve({ expectedPreviousMonthName, expectedNextMonthName });
			});
		});
	}
	selectRandomMonthDropdown() {
		this.getDateAndTime.monthDropdown().click();
		this.getDateAndTime.monthOptions().then($months => {
			let monthNamesArray = [];
			$months.each((index, option) => {
				const monthName = Cypress.$(option).text().replace('✓', '');
				monthNamesArray.push(monthName);
			});

			const randomMonthIndex = Cypress._.random(0, $months.length - 1);
			this.getDateAndTime.monthOptions().eq(randomMonthIndex).click().invoke('text').then(monthName => {
				const cleanedMonthName = monthName.replace('✓', '');
				cy.wrap({ cleanedMonthName, randomMonthIndex, monthNamesArray }).as('selectedMonthDropdown');
			});
		});
	}
	selectRandomYearDropdown() {
		this.getDateAndTime.yearDropdown().click();
		this.getDateAndTime.yearOptions().then($years => {
			const randomYearIndex = Cypress._.random(1, $years.length - 2);
			const randomYear = this.getDateAndTime.yearOptions().eq(randomYearIndex);
			randomYear.click().invoke('text').then(yearText => {
				cy.wrap({ yearText, randomYearIndex }).as('selectedYearDropdown');
			});
		});
	}
	selectRandomTime() {
		this.getDateAndTime.timeOptions().then($times => {
			const randomTime = Cypress._.random(0, $times.length - 1);
			const selectedTime = this.getDateAndTime.timeOptions().eq(randomTime);
			selectedTime.click().invoke('text').then(randomTime => {
				cy.wrap({ randomTime }).as('selectedTime');
			});
		});
	}
	selectRandomDateAndTime() {
		this.selectRandomMonthDropdown();
		this.selectRandomYearDropdown();
		this.selectRandomDay();
		this.selectRandomTime();
		cy.get('@selectedMonthDropdown').then(({ cleanedMonthName }) => {
			cy.get('@selectedDay').then(( selectedDayText ) => {
				cy.get('@selectedYearDropdown').then(({ yearText }) => {
					cy.get('@selectedTime').then(({ randomTime }) => {
						const formattedTime = this.formatTimeTo12Hours(randomTime);
						// Format: March 24, 2024 2:13 PM
						const formattedDateAndTime = `${cleanedMonthName} ${selectedDayText}, ${yearText} ${formattedTime}`;
						cy.log(formattedDateAndTime);
						cy.wrap( formattedDateAndTime ).as('formattedDateAndTime');
					});
				});
			});
		});
	}
	formatTimeTo12Hours(timeString) {
		const [hours24, minutes] = timeString.split(':');
		const hours = parseInt(hours24, 10);
		const ampm = hours >= 12 ? 'PM' : 'AM';
		const hours12 = hours % 12 || 12;
		return `${hours12}:${minutes} ${ampm}`;
	}
}
export const datePickerPage = new DatePicker();