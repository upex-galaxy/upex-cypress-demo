import { datePicker } from '@pages/datePicker2578.Page';

describe('', () => {
	beforeEach('', () => {
		cy.visit('/date-picker');
		//cy.fixture('../../../fixtures/data/datePickerFixture.json');
	});

	it('TC1: Validate default date is current date in the select date component', () => {
		datePicker.firstInputDate();

		let dayjs = require('dayjs');
		let actualDate = dayjs().format('MM/DD/YYYY');

		cy.readFile('../../fixtures/data/datePicker.json').then(the => {
			expect(the.varToday).to.equal(actualDate);
		});
	});

	it('TC2: Validate format of input date is ${Month}/${Day}/${Year} in the select date component', () => {
		datePicker.firstInputDate();

		cy.readFile('../../fixtures/data/datePicker.json').then(the => {
			expect(the.varToday).to.match(/^\d{2}\/\d{2}\/\d{4}$/);
		});
	});

	it('TC3: Validate list of years is correct (1900-2100) in the select date component', () => {
		datePicker.clickYearFirst();
		let years = [];
		for (let i = 1900; i <= 2100; i++) {
			years.push(i);
		}

		let lengthYears = years.length;

		yearRandom = Cypress._.random(0, lengthYears - 1);

		datePicker.get.yearFirst().select(yearRandom).should('have.value', years[yearRandom]);
	});

	it('TC4: Validate list of months of the year is correct (January-December) in the select date component', () => {
		datePicker.clickMonthFirst();
		let arrayMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		for (let i = 0; i <= 11; i++) {
			datePicker.get.monthFirst().find(`option[value="${i}"]`).invoke('text').should('eq', arrayMonths[i]);
		}
	});

	it('TC5: Validate left arrow of the month pagination goes to the previous month in the select date component', () => {
		datePicker.validatePreviousMonth();

		datePicker.get.monthFirstSelected().then(function () {
			//only works with traditional function not ()=>
			if (this.monthInit == 0) {
				//if month is january (0) compare with december (11)
				expect(this.monthFinal).to.equal(11);
			} else {
				expect(this.monthFinal).to.equal(this.monthInit - 1);
			}
		});
	});

	it('TC6: Validate right arrow of the month pagination goes to the next month in the select date component', () => {
		let monthFinal;
		let monthInit;
		//get actual month
		datePicker.get.firstDateInput().click();
		datePicker.get
			.monthFirstSelected()
			.invoke('val')
			.then(value => {
				monthInit = parseInt(value);
			});

		datePicker.clickNextMonth();

		//validates after click right arrow the month goes next month
		datePicker.get
			.monthFirstSelected()
			.invoke('val')
			.then(value => {
				monthFinal = parseInt(value);
				if (monthInit == 11) {
					//if month is january (0) compare with december (11)
					expect(monthFinal).to.equal(0);
				} else {
					expect(monthFinal).to.equal(monthInit + 1);
				}
			});
	});

	it('TC7: Validate background color of day changes to blue when it is selected in the select date component', () => {
		datePicker.get.firstDateInput().click();
		datePicker.get.daySelectedFirst().should('have.css', 'background-color', 'rgb(33, 107, 165)');
	});

	it('TC8: Validate format of input date is ${Month} ${Day}, ${Year} ${Time} ${acronym for time} in the date and time component', () => {
		datePicker.secondInputDate();

		cy.readFile('../../fixtures/data/datePicker.json').then(the => {
			expect(the.varToday).to.match(
				/(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4} \d{1,2}:\d{2} (AM|PM)/
			);
		});
	});

	it('TC9: Validate acronym for time is AM for morning and PM for the rest of the day in the date and time component', () => {
		//seleccionar el elemento horas
		datePicker.enterSecondInput();
		let timeArray = [];
		datePicker.get.timeOptions().then($time => {
			$time.each((index, $time) => {
				timeArray.push($time);
			});
			let arrayLength = timeArray.length;

			let random = Cypress._.random(0, arrayLength - 1);

			let randomTime = timeArray[random];

			datePicker.enterSecondInput();
			datePicker.get.timeOptions().eq(random).click();

			if (random < 48) {
				datePicker.get.secondDateInput().invoke('val').should('contain', 'AM');
			} else {
				datePicker.get.secondDateInput().invoke('val').should('contain', 'PM');
			}
		});
	});

	it('TC10: Validate default date is current date in the the date and time component', () => {
		datePicker.secondInputDate();

		let dayjs = require('dayjs');
		let actualDate = dayjs().format('MMMM DD, YYYY h:mm A');

		cy.readFile('../../fixtures/data/datePicker.json').then(the => {
			expect(actualDate).to.be.equal(the.varToday);
		});
	});

	it('TC11: Validate the selected year is marked with a √ in the the date and time component', () => {
		datePicker.selectRandomYear();

		datePicker.get.selectYear().click();
		datePicker.get.yearsDropdown().children("[class$='selected_year']").should('contain', '✓');
	});

	it('TC12: Validate the selected month is marked with a √ in the the date and time component', () => {
		datePicker.selectRandomMonth();
		datePicker.get.monthDropdown().click().siblings().find("[class$='selected_month']").should('contain', '✓');
	});

	it('TC13: Validate select time randomly in the range of 00:00 to 23:45 in the the date and time component', () => {
		datePicker.selectRandomTime();

		datePicker.get.secondDateInput().click();

		cy.get('@a').then(a => {
			cy.get('.react-datepicker__time-list').find("[class$='selected']").should('contain', a);
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
