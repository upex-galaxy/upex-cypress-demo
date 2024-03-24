import { DatePickerPage } from '../../../support/pages/GX3-2823-DatePicker.Page';

describe('ToolsQA | Widgets | Date Picker', () => {
	beforeEach(() => {
		cy.visit('/date-picker');
		cy.url().should('include', 'date-picker');;
	});
	it('2823 | TC1: Check that the Select Date input shows today´s date', () => {
		DatePickerPage.getSelectDateAndTime.datePickerInput().invoke('val').should('equal', DatePickerPage.getFormattedDateIntl());
	});
	it('2823 | TC2: Check that the Date And Time input shows today´s date and time', () => {
	 	DatePickerPage.getDateAndTime.dateAndTimePickerInput().invoke('val').should('equal', DatePickerPage.getFormattedDateTimeIntl());
	});
	it('2823 | TC3: Check that a random date can be selected', () => {
		DatePickerPage.getSelectDateAndTime.datePickerInput().click();
		DatePickerPage.selectRandomDate();
		cy.get('@formattedDates').then(({ dateFormat, monthAndYearFormat }) => {
			DatePickerPage.getSelectDateAndTime.datePickerInput().invoke('val').should('equal', dateFormat);
			DatePickerPage.getSelectDateAndTime.datePickerInput().click();
			DatePickerPage.getSelectDateAndTime.dateHeader().invoke('text').should('equal', monthAndYearFormat);
		});
	});
	it('2823 | TC4: Check that the left arrow shows the previous month', () => {
		DatePickerPage.verifyMonthNavigation('previous').then( ({ expectedPreviousMonthName }) => {
			DatePickerPage.getSelectDateAndTime.dateHeader().invoke('text').should('include', expectedPreviousMonthName);
		});
	});
	it('2823 | TC5: Check that the right arrow shows the next month', () => {
		DatePickerPage.verifyMonthNavigation('next').then( ({ expectedNextMonthName }) => {
			DatePickerPage.getSelectDateAndTime.dateHeader().invoke('text').should('include', expectedNextMonthName);
		});;
	});
	it('2823 | TC6: Check that the user can type in a date', () => {
		DatePickerPage.getSelectDateAndTime.datePickerInput().clear().should('be.visible').and('be.empty');
		let randomDate = DatePickerPage.generateRandomDate();
		DatePickerPage.getSelectDateAndTime.datePickerInput().type(randomDate).type('{enter}');
		DatePickerPage.getSelectDateAndTime.datePickerInput().invoke('val').should('equal',randomDate);
	});
	it.only('2823 | TC7: Check that a random date and time can be selected', () => {
		DatePickerPage.getDateAndTime.dateAndTimePickerInput().click();
		// DatePickerPage.selectRandomDate();
		// cy.get('@formattedDates').then(({ dateFormat, monthAndYearFormat }) => {
		// 	DatePickerPage.getSelectDateAndTime.datePickerInput().invoke('val').should('equal', dateFormat);
		// 	DatePickerPage.getSelectDateAndTime.datePickerInput().click();
		// 	DatePickerPage.getSelectDateAndTime.dateHeader().invoke('text').should('equal', monthAndYearFormat);
		// });
	});
});