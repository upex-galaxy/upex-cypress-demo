import { datePicker } from '@pages/Widgets/GX2-3197-datePicker';
import dataPicker from '@data/GX2-3197-datePicker.json';

describe('In Select Date, select a random Date', () => {
	beforeEach('', () => {
		cy.visit('/date-picker');
	});

	// Set a range of years you want to validate
	const fromYear = '1900';
	const toYear = '2100';

	it('Select a random Day Month and Year', () => {
		// verify before start the default date and if his format is correct ${Month}/${Day}/${Year}
		cy.get(datePicker.dateInput).invoke('val').should('equal', datePicker.currentDate());

		//----------- Select a random Year -----------//
		const randomYear = datePicker.setRandomYearDropdown(fromYear, toYear);

		//------------- Aserciones ----------/
		//Check if the random year setted was between range expected (1900-2100)
		cy.get(datePicker.textHeaderCalendar).should('contain', randomYear);

		//Check the range valid of years be expected (1900-2100)
		datePicker.generateYearRange(fromYear, toYear);
		datePicker.getYearArray().should('have.length', datePicker.range);
		datePicker.getYearArray().then(years => {
			expect(years).to.deep.equal(datePicker.myRangeYears);
		});

		//----------- Select a random Month -----------//
		const randomMonth = datePicker.setRandomMonthDropdown();

		//------------- Aserciones ----------/
		//Check if the random Month setted was between range expected (Jen to Dec)
		cy.get(datePicker.textHeaderCalendar).should('contain', randomMonth);

		//left arrow button: goes to the previus month
		datePicker.getCurrentYearMonth().then(result => {
			const { month: initialMonth, year: initialYear } = result;
			datePicker.navigationBack();
			datePicker.getCurrentYearMonth().then(result => {
				const { month, year } = result;

				expect(month).to.equal(datePicker.getPreviousMonth(initialMonth));
				expect(year).to.equal(initialYear);
			});
		});

		//right arrow button: goes to the next month
		datePicker.getCurrentYearMonth().then(result => {
			const { month: initialMonth, year: initialYear } = result;
			datePicker.navigationNext();
			datePicker.getCurrentYearMonth().then(result => {
				const { month, year } = result;

				expect(month).to.equal(datePicker.getNextMonth(initialMonth));
				expect(year).to.equal(initialYear);
			});
		});

		//Check the range valid of moths be expected
		datePicker.getMonths().then(months => {
			expect(months).to.have.length(dataPicker.monthsExpected.length);
			expect(months).to.deep.equal(dataPicker.monthsExpected);
		});

		//----------- Select a random Day -----------//
		datePicker.setRandomDay();
		//------------- Aserciones ----------/
		//Selected date: the day selected  background color is blue
		cy.get(datePicker.dateInput).click().wait(1000);
		cy.get(datePicker.daySelected).should('have.css', 'background-color', 'rgb(33, 107, 165)');
	});
});

describe('Select Date and Time', () => {
	beforeEach('', () => {
		cy.visit('/date-picker');
	});
	it.only('Select a random Day, Month, Year and Time', () => {
		datePicker.setRandomTime();
		//verify current date and time as a default value
		//valid format month, day, year and time
		//Selected date: the day selected  background color is blue
		//valid format month, day, year and time
		//List of months in the year (January-December)
		//The selected month is marked with a check
		//left arrow button: goes to the previus month
		//right arrow button: goes to the next month
		//have a check in selected year
		//Selected time: the time selected background color is blue
		// valid Time range of 00:00 to 23:45
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
