import { DatePicker } from '@pages/datePickerLeo.Page';

describe('GX-1908', () => {
	beforeEach('Precondition', () => {
		cy.visit('/date-picker');
	});

	it('TC1: Validate input month/year when select random values', () => {
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
	it('TC2: Validate input day selected contain random number select', () => {
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
	it('TC3: Validate that input date is equal to selected random date', () => {
		const randomDate = DatePicker.SelectRandomDate();
		DatePicker.get
			.selectDateInput()
			.invoke('val')
			.then(dateValue => {
				expect(randomDate.toString()).to.deep.equal(dateValue);
			});
	});
	it('TC4: Validate that actual date is equal to default date input', () => {
		const actualDate = DatePicker.getActualDate();
		DatePicker.get
			.selectDateInput()
			.invoke('val')
			.then(dateValue => {
				expect(actualDate[0]).to.deep.equal([dateValue]);
			});
	});
	it('TC5: Validate that input month is equal to selected month (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const selectedMonth = DatePicker.selectRandomMonthDateAndTimeInput();
		DatePicker.get.selectedMonth().then(monthValue => {
			expect(selectedMonth).to.deep.equal(monthValue.text());
		});
	});
	it('TC6: Validate that input year is equal to selected year (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const selectedYear = DatePicker.selectRandomYearDateAndTimeInput();
		DatePicker.get.selectedYear().then(yearValue => {
			expect(selectedYear).to.deep.equal([yearValue.text()]);
		});
	});
	it('TC7: Validate that input month/year is equal to selected month/year (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const selectedYear = DatePicker.selectRandomYearDateAndTimeInput();
		const selectedMonth = DatePicker.selectRandomMonthDateAndTimeInput();
		DatePicker.get.inputMonthYear().then(monthYear => {
			const monthYearSelected = `${selectedMonth} ${selectedYear}`;
			expect(monthYearSelected).to.deep.equal(monthYear.text());
		});
	});
	it('TC8: Validate that input day is equal to selected day (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const Month = DatePicker.selectRandomMonthDateAndTimeInput();
		cy.get('*').then(() => {
			const selectedDay = DatePicker.selectRandomDay(Month);
			DatePicker.get.daySelected().then(dayInput => {
				expect([dayInput.text()]).to.deep.equal(selectedDay);
			});
		});
	});
	it('TC9: Validate that input time is equal to selected time (Date And Time)', () => {
		DatePicker.get.selectDateAndTimeInput().click();
		const timeSelected = DatePicker.selectRandomTime();
		DatePicker.get.selectDateAndTimeInput().click(); // repet line command because need reopen DatePicker
		DatePicker.get.inputSelectedTime().then(timeInput => {
			expect(timeSelected).to.deep.equal([timeInput.text()]);
		});
	});

	it('TC10: Validate that input date and time is equal to selected random date and time', () => {
		const randomDateTime = DatePicker.selectRandonDateAndTimeInput();
		DatePicker.get
			.selectDateAndTimeInput()
			.invoke('val')
			.then(dateTimeValueInput => {
				expect(randomDateTime).to.deep.equal([dateTimeValueInput]);
			});
	});
	it('TC11: Validate that input date and time default is equal to actual date time', () => {
		const actualDateTimeValue = DatePicker.getActualDate();
		DatePicker.get
			.selectDateAndTimeInput()
			.invoke('val')
			.then(dateTimeValueInput => {
				expect([dateTimeValueInput]).to.deep.equal(actualDateTimeValue[1]);
			});
	});
});
import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
