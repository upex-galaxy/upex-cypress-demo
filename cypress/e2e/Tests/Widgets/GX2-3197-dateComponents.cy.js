import { DatePicker } from '@pages/Widgets/datePicker';
const { baseUrl } = Cypress.env();

describe('In Select Date, select a random Date', () => {
	const datePicker = new DatePicker();

	beforeEach('', () => {
		cy.intercept({ resourceType: /xhr|fetch/ });
		cy.visit('https://demoqa.com/date-picker');
	});

	it('verify before start the default date and his format is correct ${Month}/${Day}/${Year}', () => {
		cy.get(datePicker.dateInput).invoke('val').should('equal', datePicker.currentDate());
	});

	it('Select a random Day', () => {
		//Selected date: the day selected  background color is blue
	});

	it('Select a random Year', () => {
		//Check the range valid of years be expected (1900-2100)
		const fromYear = '1900';
		const toYear = '2100';
		datePicker.generateYearRange(fromYear, toYear);
		datePicker.getYearOptions().should('have.length', datePicker.range);
		datePicker.getYearOptions().then(years => {
			expect(years).to.deep.equal(datePicker.myRangeYears);
		});

		//Select a random Year
	});

	it('Select a random Month', () => {
		//Check the range valid of moths be expected
		const monthsExpected = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		datePicker.getMonths().then(months => {
			expect(months).to.have.length(monthsExpected.length);
			expect(months).to.deep.equal(monthsExpected);
		});

		//left arrow button: goes to the previus month
		//right arrow button: goes to the next month
		//Select a random Month
	});
});

describe('Select Date and Time', () => {
	it('valid format month, day, year and time', () => {});
	it('varify current date and time as a default value', () => {});
	it('have a check in selected year', () => {});

	it('List of months in the year (January-December)', () => {});

	it('The selected month is marked with a check', () => {});
	it('left arrow button: goes to the previus month', () => {});
	it('right arrow button: goes to the next month', () => {});

	it('Selected date: the day selected  background color is blue', () => {});
	it('Selected time: the time selected background color is blue', () => {});
	it('Time range of 00:00 to 23:45', () => {});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
