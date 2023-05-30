import { DatePicker } from '@pages/Widgets/datePicker';
const { baseUrl } = Cypress.env();

describe('Select Date', () => {
	const datePicker = new DatePicker();

	beforeEach('', () => {
		cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
		cy.visit('https://demoqa.com/date-picker');
	});

	it('verify the current date and format ${Month}/${Day}/${Year} ', () => {
		cy.get(datePicker.dateInput).should('equal', datePicker.currentDate());
	});

	it('range valid of years to select', () => {
		const fromYear = '1900';
		const toYear = '2100';

		datePicker.getYearOptions().should('have.length', range);
		datePicker.getYearOptions().should('deep.equal', datePicker.generateYearRange(fromYear, toYear).yearOptions);
	});

	it('range valid of moths to select', () => {});

	it('left arrow button: goes to the previus month', () => {});

	it('right arrow button: goes to the next month', () => {});

	it('Selected date: the day selected  background color is blue', () => {});
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
