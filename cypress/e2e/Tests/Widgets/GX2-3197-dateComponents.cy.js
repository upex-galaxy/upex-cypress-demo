import { datePicker } from '@pages/Widgets/GX2-3197-datePicker';
import dataPicker from '@data/GX2-3197-datePicker.json';

describe('In Select Date, select a random Date', () => {
	beforeEach('', () => {
		cy.visit('/date-picker');
	});

	// Set a range of years you want to validate
	const fromYear = '1900';
	const toYear = '2100';

	it('3849 | TC1: Validar en Select Date: Creación random de Dia, Mes y año', () => {
		// verify before start the default date and if his format is correct ${Month}/${Day}/${Year}
		datePicker.get.dateInput().invoke('val').should('equal', datePicker.currentDate());

		//----------- Select a random Year -----------//
		const randomYear = datePicker.setRandomYearDropdown(fromYear, toYear);

		//------------- Accersions ----------/
		//Check if the random year setted was between range expected (1900-2100)
		datePicker.get.textHeaderCalendar().should('contain', randomYear);

		//Check the range valid of years be expected (1900-2100)
		datePicker.generateYearRange(fromYear, toYear);
		datePicker.getYearArray().should('have.length', datePicker.range);
		datePicker.getYearArray().then(years => {
			expect(years).to.deep.equal(datePicker.myRangeYears);
		});

		//----------- Select a random Month -----------//
		const randomMonth = datePicker.setRandomMonthDropdown();

		//------------- Accersions ----------/
		//Check if the random Month setted was between range expected (Jen to Dec)
		datePicker.get.textHeaderCalendar().should('contain', randomMonth);

		//left arrow button: goes to the previus month
		datePicker.getCurrentYearMonth().then(result => {
			const { month: initialMonth, year: initialYear } = result;
			datePicker.navigationBack();
			datePicker.getCurrentYearMonth().then(result => {
				const { month: currentMonth, year: currentYear } = result;

				const { month: previousMonth, year: previousYear } = datePicker.getPreviousMonthYear(initialMonth, initialYear);
				expect(currentYear).to.equal(previousYear);
				expect(currentMonth).to.equal(previousMonth);
			});
		});

		//right arrow button: goes to the next month
		datePicker.getCurrentYearMonth().then(result => {
			const { month: initialMonth, year: initialYear } = result;
			datePicker.navigationNext();
			datePicker.getCurrentYearMonth().then(result => {
				const { month: currentMonth, year: currentYear } = result;

				// Calculamos el mes y año siguiente
				const { month: nextMonth, year: nextYear } = datePicker.getNextMonthYear(initialMonth, initialYear);
				expect(currentMonth).to.equal(nextMonth);
				expect(currentYear).to.equal(nextYear);
			});
		});

		//Check the range valid of moths be expected
		datePicker.getMonths().then(months => {
			expect(months).to.have.length(dataPicker.monthsExpected.length);
			expect(months).to.deep.equal(dataPicker.monthsExpected);
		});

		//----------- Select a random Day -----------//
		datePicker.setRandomDay();

		//------------- Accersions ----------/
		//Selected date: the day selected  background color is blue
		datePicker.get.dateInput().click();
		datePicker.get.daySelected().should('have.css', 'background-color', 'rgb(33, 107, 165)');
	});
});

describe('Select Date and Time', () => {
	beforeEach('', () => {
		cy.visit('/date-picker');
	});
	// Set a range of years you want to validate
	const fromYear = '1900';
	const toYear = '2100';
	it('3850 | TC2: Validar en Select Date and Time: Creación random de Dia, Mes, año y Tiempo', () => {
		// Check defaul values. Current date and time and validate format month, day, year and time
		datePicker.get.dateAndTimeInput().invoke('val').should('equal', datePicker.currentDateAndTime());

		// ------------- Select a random Time
		datePicker.setRandomTime();

		//Selected time: the time selected background color is blue
		datePicker.get.dateAndTimeInput().click();
		datePicker.get.timeItemSelected().should('have.css', 'background-color', 'rgb(33, 107, 165)');

		// ------------- Select a random month
		const randomMonthDateTimePicker = datePicker.setRandomMonthDropdownDateTime();

		//The selected month is marked with a check
		datePicker.get.monthDateTimeDropDown().click();
		datePicker.get.monthSelected().should('contain', '✓');

		//Check if the random Month setted was between range expected (Jen to Dec)
		datePicker.get.textHeaderCalendar().should('contain', randomMonthDateTimePicker);

		//left arrow button: goes to the previus month
		datePicker.getCurrentYearMonth().then(result => {
			const { month: initialMonth, year: initialYear } = result;
			datePicker.navigationBack();
			datePicker.getCurrentYearMonth().then(result => {
				const { month: currentMonth, year: currentYear } = result;

				const { month: previousMonth, year: previousYear } = datePicker.getPreviousMonthYear(initialMonth, initialYear);
				expect(currentYear).to.equal(previousYear);
				expect(currentMonth).to.equal(previousMonth);
			});
		});

		//right arrow button: goes to the next month
		datePicker.getCurrentYearMonth().then(result => {
			const { month: initialMonth, year: initialYear } = result;
			datePicker.navigationNext();
			datePicker.getCurrentYearMonth().then(result => {
				const { month: currentMonth, year: currentYear } = result;

				// Calculo el mes y año siguiente
				const { month: nextMonth, year: nextYear } = datePicker.getNextMonthYear(initialMonth, initialYear);
				expect(currentMonth).to.equal(nextMonth);
				expect(currentYear).to.equal(nextYear);
			});
		});

		// Select a random day
		datePicker.setRandomDay();

		//Selected date: the day selected  background color is blue
		datePicker.get.dateAndTimeInput().click();
		datePicker.get.daySelected().should('have.css', 'background-color', 'rgb(33, 107, 165)');

		// ------------- Select a random year
		datePicker.setRandomYearDropwonDateAndTime(fromYear, toYear).then(result => {
			//------------- Accersions ----------/
			//Check if the random year setted was between range expected (1900-2100)
			datePicker.get.textHeaderCalendar().should('contain', result);
			//have a check in selected year
			datePicker.get.yearDropDown().click();
			datePicker.get.yearSelected().should('contain', '✓');
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
