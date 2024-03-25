import { DatePickerPage } from '../../../support/pages/GX3-2823-DatePicker.Page';

describe('GX3-2823 | ToolsQA | Widgets | Date Picker', () => {
	beforeEach(() => {
		cy.visit('/date-picker');
		cy.url().should('include', 'date-picker');;
	});
	it('2824 | TC1: Check that the Select Date input shows today´s date', () => {
		DatePickerPage.getSelectDate.datePickerInput().invoke('val').should('equal', DatePickerPage.getFormattedDateIntl());
	});
	it('2824 | TC2: Check that the Date And Time input shows today´s date and time', () => {
	 	DatePickerPage.getDateAndTime.dateAndTimePickerInput().invoke('val').should('equal', DatePickerPage.getFormattedDateTimeIntl());
	});
	it('2824 | TC3: Check that a random date can be selected', () => {
		DatePickerPage.getSelectDate.datePickerInput().click();
		DatePickerPage.selectRandomDate();
		cy.get('@formattedDates').then(({ dateFormat, monthAndYearFormat }) => {
			DatePickerPage.getSelectDate.datePickerInput().invoke('val').should('equal', dateFormat);
			DatePickerPage.getSelectDate.datePickerInput().click();
			DatePickerPage.getSelectDate.dateHeader().invoke('text').should('equal', monthAndYearFormat);
			DatePickerPage.getSelectDate.selectedDay().should($selectedDay => {
				const bgColor = $selectedDay.css('background-color');
				expect(bgColor).to.eq('rgb(33, 107, 165)');
			});
		});
	});
	it('2824 | TC4: Check that the left arrow shows the previous month', () => {
		DatePickerPage.getSelectDate.datePickerInput().click();
		DatePickerPage.selectRandomDate();
		DatePickerPage.getSelectDate.datePickerInput().click();
		DatePickerPage.verifyMonthNavigation('previous', '@selectedMonth').then( ({ expectedPreviousMonthName }) => {
			DatePickerPage.getSelectDate.dateHeader().invoke('text').should('include', expectedPreviousMonthName);
		});
	});
	it('2824 | TC5: Check that the right arrow shows the next month', () => {
		DatePickerPage.getSelectDate.datePickerInput().click();
		DatePickerPage.selectRandomDate();
		DatePickerPage.getSelectDate.datePickerInput().click();
		DatePickerPage.verifyMonthNavigation('next','@selectedMonth').then( ({ expectedNextMonthName }) => {
			DatePickerPage.getSelectDate.dateHeader().invoke('text').should('include', expectedNextMonthName);
		});;
	});
	it('2824 | TC6: Check that the user can type in a date', () => {
		DatePickerPage.getSelectDate.datePickerInput().clear().should('be.visible').and('be.empty');
		let randomDate = DatePickerPage.generateRandomDate();
		DatePickerPage.getSelectDate.datePickerInput().type(randomDate).type('{enter}');
		DatePickerPage.getSelectDate.datePickerInput().invoke('val').should('equal',randomDate);
	});
	it('2824 | TC7: Check that a random date and time can be selected', () => {
		DatePickerPage.getDateAndTime.dateAndTimePickerInput().click();
		DatePickerPage.selectRandomDateAndTime();
		cy.get('@formattedDateAndTime').then((formattedDateAndTime) => {
			DatePickerPage.getDateAndTime.dateAndTimePickerInput().invoke('val').should('equal', formattedDateAndTime);
			DatePickerPage.getDateAndTime.dateAndTimePickerInput().click();
			DatePickerPage.getDateAndTime.selectedTime().should($selectedTime => {
				const bgColor = $selectedTime.css('background-color');
				expect(bgColor).to.eq('rgb(33, 107, 165)');
			});
			DatePickerPage.getDateAndTime.monthDropdown().click();
			DatePickerPage.getDateAndTime.selectedMonth().should('contain', '✓');
			DatePickerPage.getDateAndTime.dateAndTimePickerInput().click();
			DatePickerPage.getDateAndTime.yearDropdown().click();
			DatePickerPage.getDateAndTime.selectedYear().should('contain', '✓');
		});
	});
	it('2824 | TC8: Check that the right arrow shows the previous month', () => {
		DatePickerPage.getDateAndTime.dateAndTimePickerInput().click();
		DatePickerPage.selectRandomMonthDropdown();
		DatePickerPage.verifyMonthNavigation('next', '@selectedMonthDropdown').then( ({ expectedNextMonthName }) => {
			DatePickerPage.getSelectDate.dateHeader().invoke('text').should('include', expectedNextMonthName);
		});
	});
	it('2824 | TC9: Check that the left arrow shows the previous month', () => {
		DatePickerPage.getDateAndTime.dateAndTimePickerInput().click();
		DatePickerPage.selectRandomMonthDropdown();
		DatePickerPage.verifyMonthNavigation('previous', '@selectedMonthDropdown').then( ({ expectedPreviousMonthName }) => {
			DatePickerPage.getSelectDate.dateHeader().invoke('text').should('include', expectedPreviousMonthName);
		});
	});
});
