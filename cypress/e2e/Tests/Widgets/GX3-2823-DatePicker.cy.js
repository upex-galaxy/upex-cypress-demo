import { DatePickerPage } from '../../../support/pages/GX3-2823-DatePicker.Page';

describe('ToolsQA | Widgets | Date Picker', () => {
	beforeEach(() => {
		cy.visit('/date-picker');
	});
	it('2823 | TC1: Check that the Select Date input shows today´s date', () => {
		DatePickerPage.get.datePickerInput().invoke('val').should('equal', DatePickerPage.getTodayDateFormatted());
	});
	it('2823 | TC2: Check that the Date And Time input shows today´s date and time', () => {
	 	DatePickerPage.get.dateAndTimePickerInput().invoke('val').should('equal', DatePickerPage.getFormattedDateTimeIntl());
	});
});