import { DatePicker } from '@pages/datePickerLeo.Page';

describe('GX-1908', () => {
	beforeEach('Precondition', () => {
		cy.visit('/date-picker');
	});

	it('TC1: Validate month selection with random month', () => {
		DatePicker.get.selectDateInput().click();
		const monthIndex = DatePicker.getRandomMonth();
		const RandomMonthName = DatePicker.selectRandomMonth(monthIndex);
		DatePicker.get.monthInput().then(monthValue => {
			expect(monthValue.text()).to.contains(RandomMonthName.toString());
		});
	});
	it('TC2: Validate year selection with random year', () => {
		DatePicker.get.selectDateInput().click();
		const randomYear = DatePicker.selectRandomYear();
		DatePicker.get.yearInput().then(yearValue => {
			expect(yearValue.text()).to.contains(randomYear);
		});
	});
	it('TC3: Validate input month/year when select random values', () => {
		DatePicker.get.selectDateInput().click();
		const monthIndex = DatePicker.getRandomMonth();
		const RandomMonthName = DatePicker.selectRandomMonth(monthIndex);
		const randomYear = DatePicker.selectRandomYear();
		DatePicker.get.yearInput().then(inputMonthYear => {
			const randomMonthValue = RandomMonthName.toString();
			const randomYearSelected = randomYear.toString();
			const monthYearValue = `${randomMonthValue} ${randomYearSelected}`;
			expect(inputMonthYear.text()).to.deep.equal(monthYearValue);
		});
	});
	it('TC4: Validate input day selected contain random number select', () => {
		DatePicker.get.selectDateInput().click();
		const monthIndex = DatePicker.getRandomMonth();
		const monthName = DatePicker.selectRandomMonth(monthIndex);
		cy.get('*').then(() => {
			const randomDay = DatePicker.selectRandomDay(monthName);
			DatePicker.get.selectDateInput().click(); //I need to reopen Select date input for check day selected
			DatePicker.get.daySelected().then(dayValue => {
				expect(randomDay.toString()).to.deep.equal(dayValue.text());
			});
		});
	});
	it('TC5: Validate that input date is equal to selected random date', () => {
		const randomDate = DatePicker.SelectRandomDate();
		const dateValueInInput = DatePicker.getDateInInput();
		cy.get('*').then(() => {
			expect(randomDate).to.deep.equal(dateValueInInput);
		});
	});
	it('TC6: Validate that actual date is equal to default date input', () => {
		const dateValueInInput = DatePicker.getDateInInput();
		const actualDate = DatePicker.getActualDate();
		cy.get('*').then(() => {
			expect(actualDate[0]).to.deep.equal(dateValueInInput);
		});
	});
	it('TC7: Validate that input month is equal to selected month (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const selectedMonth = DatePicker.selectRandomMonthDateAndTimeInput();
		const inputSelectMonth = DatePicker.getMonthInputValue();
		cy.get('*').then(() => {
			expect(selectedMonth).to.deep.equal(inputSelectMonth.toString());
		});
	});
	it('TC8: Validate that input year is equal to selected year (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const selectedYear = DatePicker.selectRandomYearDateAndTimeInput();
		const inputSelectYear = DatePicker.getYearInputValue();
		cy.get('*').then(() => {
			expect(selectedYear).to.deep.equal(inputSelectYear);
		});
	});
	it('TC9: Validate that input month/year is equal to selected month/year (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const selectedYear = DatePicker.selectRandomYearDateAndTimeInput();
		const selectedMonth = DatePicker.selectRandomMonthDateAndTimeInput();
		const inputMonthYear = DatePicker.getMonthYearInputValue();
		cy.get('*').then(() => {
			const monthYearValue = `${selectedMonth} ${selectedYear}`;
			expect(inputMonthYear.toString()).to.deep.equal(monthYearValue);
		});
	});
	it('TC10: Validate that input day is equal to selected day (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const Month = DatePicker.selectRandomMonthDateAndTimeInput();
		cy.get('*').then(() => {
			const selectedDay = DatePicker.selectRandomDay(Month);
			const dayInput = DatePicker.getDaySelectedInput();
			cy.get('*').then(() => {
				expect(selectedDay).to.deep.equal(dayInput);
			});
		});
	});
	it('TC11: Validate that input time is equal to selected time (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const timeSelected = DatePicker.selectRandomTime();
		DatePicker.get.selectDateAndTimeInput().click(); // repet line command because need reopen DatePicker
		const timeInput = DatePicker.getTimeSelectedInput();
		cy.get('*').then(() => {
			expect(timeSelected).to.deep.equal(timeInput);
		});
	});

	it('TC12: Validate that input date and time is equal to selected random date and time', () => {
		const randomDateTime = DatePicker.selectRandonDateAndTimeInput();
		const dateValueInInput = DatePicker.getDateAndTimeInput();
		cy.get('*').then(() => {
			expect(randomDateTime).to.deep.equal(dateValueInInput);
		});
	});
	it('TC13: Validate that input date and time default is equal to actual date time', () => {
		const dateTimeInputValue = DatePicker.getDateAndTimeInput();
		const actualDateTimeValue = DatePicker.getActualDate();
		cy.get('*').then(() => {
			expect(dateTimeInputValue).to.deep.equal(actualDateTimeValue[1]);
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
