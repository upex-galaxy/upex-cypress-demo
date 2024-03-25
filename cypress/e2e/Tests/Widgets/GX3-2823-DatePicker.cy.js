import { datePickerPage } from '../../../support/pages/GX3-2823-DatePicker.Page';

describe('GX3-2823 | ToolsQA | Widgets | Date Picker', () => {
	beforeEach(() => {
		cy.visit('/date-picker');
		cy.url().should('include', 'date-picker');;
	});
	it('2824 | TC1: Check that the Select Date input shows today´s date', () => {
		datePickerPage.getSelectDate.datePickerInput().invoke('val').should('equal', datePickerPage.getFormattedDateIntl());
	});
	it('2824 | TC2: Check that the Date And Time input shows today´s date and time', () => {
	 	datePickerPage.getDateAndTime.dateAndTimePickerInput().invoke('val').should('equal', datePickerPage.getFormattedDateTimeIntl());
	});
	it('2824 | TC3: Check that a random date can be selected', () => {
		datePickerPage.clickOnElement('getSelectDate', 'datePickerInput');
		datePickerPage.selectRandomDate();
		cy.get('@formattedDates').then(({ dateFormat, monthAndYearFormat }) => {
			datePickerPage.getSelectDate.datePickerInput().invoke('val').should('equal', dateFormat);
			datePickerPage.clickOnElement('getSelectDate', 'datePickerInput');
			datePickerPage.getSelectDate.dateHeader().invoke('text').should('equal', monthAndYearFormat);
			datePickerPage.getSelectDate.selectedDay().should($selectedDay => {
				const bgColor = $selectedDay.css('background-color');
				expect(bgColor).to.eq('rgb(33, 107, 165)');
			});
		});
	});
	it('2824 | TC4: Check that the left arrow shows the previous month', () => {
		datePickerPage.clickOnElement('getSelectDate', 'datePickerInput');
		datePickerPage.selectRandomDate();
		datePickerPage.clickOnElement('getSelectDate', 'datePickerInput');
		datePickerPage.verifyMonthNavigation('previous', '@selectedMonth').then( ({ expectedPreviousMonthName }) => {
			datePickerPage.getSelectDate.dateHeader().invoke('text').should('include', expectedPreviousMonthName);
		});
	});
	it('2824 | TC5: Check that the right arrow shows the next month', () => {
		datePickerPage.clickOnElement('getSelectDate', 'datePickerInput');
		datePickerPage.selectRandomDate();
		datePickerPage.clickOnElement('getSelectDate', 'datePickerInput');
		datePickerPage.verifyMonthNavigation('next','@selectedMonth').then( ({ expectedNextMonthName }) => {
			datePickerPage.getSelectDate.dateHeader().invoke('text').should('include', expectedNextMonthName);
		});;
	});
	it('2824 | TC6: Check that the user can type in a date', () => {
		datePickerPage.getSelectDate.datePickerInput().clear().should('be.visible').and('be.empty');
		let randomDate = datePickerPage.generateRandomDate();
		datePickerPage.getSelectDate.datePickerInput().type(randomDate).type('{enter}');
		datePickerPage.getSelectDate.datePickerInput().invoke('val').should('equal',randomDate);
	});
	it('2824 | TC7: Check that a random date and time can be selected', () => {
		datePickerPage.clickOnElement('getDateAndTime', 'dateAndTimePickerInput');
		datePickerPage.selectRandomDateAndTime();
		cy.get('@formattedDateAndTime').then((formattedDateAndTime) => {
			datePickerPage.getDateAndTime.dateAndTimePickerInput().invoke('val').should('equal', formattedDateAndTime);
			datePickerPage.clickOnElement('getDateAndTime', 'dateAndTimePickerInput');
			datePickerPage.getDateAndTime.selectedTime().should($selectedTime => {
				const bgColor = $selectedTime.css('background-color');
				expect(bgColor).to.eq('rgb(33, 107, 165)');
			});
			datePickerPage.clickOnElement('getDateAndTime', 'monthDropdown');
			datePickerPage.getDateAndTime.selectedMonth().should('contain', '✓');
			datePickerPage.clickOnElement('getDateAndTime', 'dateAndTimePickerInput');
			datePickerPage.clickOnElement('getDateAndTime', 'yearDropdown');
			datePickerPage.getDateAndTime.selectedYear().should('contain', '✓');
		});
	});
	it('2824 | TC8: Check that the right arrow shows the next month', () => {
		datePickerPage.clickOnElement('getDateAndTime', 'dateAndTimePickerInput');
		datePickerPage.selectRandomMonthDropdown();
		datePickerPage.verifyMonthNavigation('next', '@selectedMonthDropdown').then( ({ expectedNextMonthName }) => {
			datePickerPage.getSelectDate.dateHeader().invoke('text').should('include', expectedNextMonthName);
		});
	});
	it('2824 | TC9: Check that the left arrow shows the previous month', () => {
		datePickerPage.clickOnElement('getDateAndTime', 'dateAndTimePickerInput');
		datePickerPage.selectRandomMonthDropdown();
		datePickerPage.verifyMonthNavigation('previous', '@selectedMonthDropdown').then( ({ expectedPreviousMonthName }) => {
			datePickerPage.getSelectDate.dateHeader().invoke('text').should('include', expectedPreviousMonthName);
		});
	});
});
