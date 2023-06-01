import { datePicker } from '@pages/Widgets/GX2-3197-datePicker';
import dataPicker from '@data/GX2-3197-datePicker.json';

describe('In Select Date, select a random Date', () => {
	beforeEach('', () => {
		cy.visit('/date-picker');
	});

	it.only('Select a random Day Month and Year', () => {
		//Select a random Day

		//Select a random Year
		datePicker.setRandomYearDropdown();

		//Select a random Month

		//------------- Aserciones ----------/
		//Check if the random year setted was between range expected (1900-2100)

		//Check the range valid of years be expected (1900-2100)
		const fromYear = '1900';
		const toYear = '2100';
		datePicker.generateYearRange(fromYear, toYear);
		datePicker.getYearArray().should('have.length', datePicker.range);
		datePicker.getYearArray().then(years => {
			expect(years).to.deep.equal(datePicker.myRangeYears);
		});
		//------------------------
		//Check the range valid of moths be expected
		datePicker.getMonths().then(months => {
			expect(months).to.have.length(dataPicker.monthsExpected.length);
			expect(months).to.deep.equal(dataPicker.monthsExpected);
		});

		//left arrow button: goes to the previus month
		//right arrow button: goes to the next month

		//-----------------------
		// Default assertions

		// verify before start the default date and his format is correct ${Month}/${Day}/${Year}
		cy.get(datePicker.dateInput).invoke('val').should('equal', datePicker.currentDate());

		//Selected date: the day selected  background color is blue
	});
});

describe('Select Date and Time', () => {
	it('Select a random Day, Month, Year and Time', () => {
		//verify current date and time as a default value
		//valid format month, day, year and time
		//Selected date: the day selected  background color is blue
		//valid format month, day, year and time
		//List of months in the year (January-December)
		//The selected month is marked with a check
		//left arrow button: goes to the previus month
		//right arrow button: goes to the next month
		//valid format month, day, year and time
		//have a check in selected year
		//valid format month, day, year and time
		//Selected time: the time selected background color is blue
		// valid Time range of 00:00 to 23:45
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
