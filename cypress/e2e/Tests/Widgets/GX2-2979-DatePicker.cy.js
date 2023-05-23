import { removeLogs } from '@helper/RemoveLogs';
import { datePicker } from '@pages/GX2-2979-DatePicker/datePickerPage';
import dayjs from 'dayjs';
removeLogs();

describe('GX2-2979 | ToolsQA | Widgets | Date Picker', () => {
	let data;
	const actualMonth = dayjs().get('month');
	const actualDay = dayjs().format('MM/DD/YYYY');
	const actualDateAndTime = dayjs().format('MMM DD, YYYY h:mm A');

	before('fixture', () => {
		cy.fixture('data/datePicker').then(dato => {
			data = dato;
		});
	});
	beforeEach('User must be situated in the website', () => {
		cy.visit('https://demoqa.com/date-picker');
	});
	it('2980 | TC2: Validate the default value of the date and time is the current day (Date and Time) ', () => {
		datePicker.getDateAndTimePickerValue().then(() => {
			cy.wait(600);
			expect(Cypress.env('dateAndTime')).to.be.equal(actualDateAndTime);
		});
	});
	it('2980 | TC1: Validate the default value of the date is the current day(Select Date) ', () => {
		datePicker.getDatePickerValue().then(() => {
			expect(Cypress.env('date')).to.be.equal(actualDay);
		});
	});

	it('2980 | TC3:Validate the input day format is ${Month}/${Day}/${Year}', () => {
		datePicker.getDatePickerValue().then(() => {
			expect(Cypress.env('date')).to.match(/^\d{2}\/\d{2}\/\d{4}$/);
		});
	});
	it('2980 | TC4:Validate the list of years (1900-2100)', () => {
		let arrayYear = [];
		datePicker.clickSelectDatePicker();
		datePicker.clicklistOfYear();
		datePicker.get.yearInput().within(() => {
			cy.get('option').each(($option, index) => {
				cy.wrap($option)
					.invoke('text')
					.should('be.a', 'string')
					.then(parseInt)
					.should('be.a', 'number')
					.then(valor => {
						arrayYear.push(valor);
						expect(arrayYear[index]).to.be.equal(1900 + index);
					});
			});
		});
	});
	it('2980 | TC5:Validate the list of months in the year (January-December) / (Selected Date)', () => {
		datePicker.clickSelectDatePicker();
		datePicker.get.monthInput().within(() => {
			cy.get('option').each(($option, index) => {
				cy.wrap($option)
					.invoke('text')
					.then(text => {
						expect(text).to.be.equal(data.months[index]);
					});
			});
		});
	});
	it('2980 | TC6:Validate the left arrow button goes to the next month (Selected Date)', () => {
		datePicker.clickSelectDatePicker();
		datePicker.clickPreviousMonthDate().then(() => {
			if (actualMonth === 0) {
				expect(data.months[Cypress.env('text2')]).to.be.equal(data.months[11]);
			} else {
				expect(data.months[Cypress.env('text2')]).to.be.equal(data.months[actualMonth - 1]);
			}
		});
	});
	it('2980 | TC7:Validate the right arrow button goes to the next month (Selected Date)', () => {
		datePicker.clickSelectDatePicker();
		datePicker.clickNextMonthDate().then(() => {
			if (actualMonth === 0) {
				expect(data.months[Cypress.env('text2')]).to.be.equal(data.months[11]);
			} else {
				expect(data.months[Cypress.env('text2')]).to.be.equal(data.months[actualMonth + 1]);
			}
		});
	});

	it('2980 | TC8: Validate the input day format is ${Month} ${Day} , ${Year} ${Time} ${acronym for time}', () => {
		datePicker.getDateAndTimePickerValue().then(() => {
			expect(Cypress.env('dateAndTime')).to.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{1,2}, \d{4} \d{1,2}:\d{2} (AM|PM)/);
		});
	});

	it('2980 | TC9: Validate the selected year is marked with a √', () => {
		datePicker.clickDateAndTimePicker();
		datePicker.clickYearList();
		datePicker.get.yearSelected().should('exist').and('contain', '✓');
	});
	it('2980 | TC10:Validate list of months in the year (January-December) and the selected month is marked with a √', () => {
		datePicker.clickDateAndTimePicker();
		datePicker.clickMonthDropdown().within(() => {
			datePicker.get
				.monthOptions()
				.each(($option, index) => {
					cy.wrap($option)
						.invoke('text')
						.then(text => {
							let splitText = text.split(' ')[0].replace(/✓/g, '');
							expect(splitText).to.be.equal(data.months[index]);
						});
				})
				.then(() => {
					datePicker.get.selectedMonth().should('contain', '✓');
				});
		});
	});
	it('2980 | TC11:Validate the left arrow button goes to the next month (Date and Time)', () => {
		datePicker.clickDateAndTimePicker();
		datePicker.clickPreviousMonthDT().then(() => {
			if (actualMonth === 0) {
				expect(Cypress.env('text')).to.be.equal(data.months[11]);
			} else {
				expect(Cypress.env('text')).to.be.equal(data.months[actualMonth - 1]);
			}
		});
	});
	it('2980 | TC12:Validate the right arrow button goes to the next month (Date and Time)', () => {
		datePicker.clickDateAndTimePicker();
		datePicker.clickNextMonthDT().then(() => {
			if (actualMonth === 0) {
				expect(Cypress.env('text')).to.be.equal(data.months[11]);
			} else {
				expect(Cypress.env('text')).to.be.equal(data.months[actualMonth + 1]);
			}
		});
	});
	it('2980 | TC13: Validate the selected day background color is blue in "Selected Date" and "Date and Time" Input', () => {
		datePicker.clickSelectDatePicker().then(() => {
			datePicker.get.daySelected().should('have.css', 'background-color').and('eq', 'rgb(33, 107, 165)');
		});
		datePicker.clickDateAndTimePicker().then(() => {
			datePicker.get.daySelected().should('have.css', 'background-color').and('eq', 'rgb(33, 107, 165)');
		});
	});
	it('2980 | TC14: Validate the time selected background color is blue (Date and Time)', () => {
		datePicker.clickDateAndTimePicker();
		datePicker.clickTimeBoxList();
		datePicker.clickDateAndTimePicker();
		datePicker.get.timeSelected().should('have.css', 'background-color').and('eq', 'rgb(33, 107, 165)');
	});
	it('2980 | TC15: Validate the time range is from 00:00 to 23:45', () => {
		let arrayTime = [];
		datePicker.clickDateAndTimePicker();
		datePicker.get.timeBoxList().each(($li, index) => {
			cy.wrap($li)
				.invoke('text')
				.then(valor => {
					arrayTime.push(valor);
					expect(arrayTime[index]).to.be.equal(arrayTime[index]);
				});
		});
	});
});
