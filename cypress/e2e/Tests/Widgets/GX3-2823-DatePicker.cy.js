import { DatePickerPage } from '../../../support/pages/GX3-2823-DatePicker.Page';

describe('ToolsQA | Widgets | Date Picker', () => {
	beforeEach(() => {
		cy.visit('/date-picker');
		cy.url().should('include', 'date-picker');;
	});
	it('2823 | TC1: Check that the Select Date input shows today´s date', () => {
		DatePickerPage.get.datePickerInput().invoke('val').should('equal', DatePickerPage.getFormattedDateIntl());
	});
	it('2823 | TC2: Check that the Date And Time input shows today´s date and time', () => {
	 	DatePickerPage.get.dateAndTimePickerInput().invoke('val').should('equal', DatePickerPage.getFormattedDateTimeIntl());
	});
	it('2823 | TC3: Check that a random date can be selected', () => {
		DatePickerPage.get.datePickerInput().click();
		DatePickerPage.selectRandomDate();
		cy.get('@formattedDates').then(({ formattedDate1, formattedDate2 }) => {
			DatePickerPage.get.datePickerInput().invoke('val').should('equal', formattedDate1);
			DatePickerPage.get.datePickerInput().click();
			DatePickerPage.get.dateHeader().invoke('text').should('equal', formattedDate2);
		});
	});
	it('2823 | TC4: Check that the left arrow shows the previous month', () => {
		DatePickerPage.verifyMonthNavigation('previous');
	});
	it('2823 | TC5: Check that the right arrow shows the next month', () => {
		DatePickerPage.verifyMonthNavigation('next');
	});

});