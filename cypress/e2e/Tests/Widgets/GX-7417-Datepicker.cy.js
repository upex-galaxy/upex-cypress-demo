import { datepicker } from '@pages/DatePicker.Page.js';
describe('✅ToolsQA | Widgets | Date Picker', () => {
	beforeEach('go to page', () => {
		cy.visit('https://demoqa.com/date-picker');
		cy.url().should('include', 'date');
	});
	//! FLAKY TEST DETECTED ! it must be skipped until review.
	it.skip('TC1: Validar seleccionar correctamente fecha', () => {
		datepicker.clickOnDate();
		datepicker.get
			.monthSelect()
			.children()
			.then(($month) => {
				cy.randomNumber($month.length).then(($monthNumber) => {
					datepicker.selectMonth($monthNumber);
					cy.wrap($month)
						.eq($monthNumber)
						.then(($monthText) => {
							cy.wrap($monthText)
								.invoke('text')
								.then(($resp) => {
									datepicker.get.currentMonthAndYearText().should('contain.text', $resp);
								});
						});
				});
			});

		datepicker.get
			.yearSelect()
			.children()
			.then(($year) => {
				cy.randomNumber($year.length).then(($yearNumber) => {
					datepicker.selectYear($yearNumber);
					cy.wrap($year)
						.eq($yearNumber)
						.then(($yearText) => {
							cy.wrap($yearText)
								.invoke('text')
								.then(($resp) => {
									datepicker.get.currentMonthAndYearText().should('contain.text', $resp);
								});
						});
				});
			});

		datepicker.get.daySelect().then(($day) => {
			cy.randomNumber($day.length).then(($dayNumber) => {
				cy.wrap($day)
					.eq($dayNumber)
					.click()
					.then(($dayText) => {
						let day = $dayText.text();
						day = parseInt(day);
						if (day < 10) {
							day = `0${day}`;
						} else {
							day = `${day}`;
						}

						datepicker.get.dateInput().should('not.have.class', 'react-datepicker-ignore-onclickoutside');
						datepicker.get.dateInput().then(($input) => {
							cy.wrap($input)
								.invoke('val')
								.then(($inputVal) => {
									let input = $inputVal.split('/');
									let cadena = input[1];
									expect(day).to.equal(cadena);
								});
						});
					});
			});
		});
	});
	//! FLAKY TEST DETECTED ! it must be skipped until review.
	it.skip('TC2: Validar seleccionar correctamente fecha y hora', () => {
		datepicker.clickOnDateAndTime();

		let fecha = new Date();
		let dayF = fecha.getDate();
		let mesLetra = fecha.toLocaleDateString('en-EN', { month: 'long' });
		let yearF = fecha.getFullYear();
		cy.log(`${mesLetra} ${dayF}, ${yearF}`);

		datepicker.get
			.timeSelect()
			.children()
			.then(($time) => {
				cy.randomNumber($time.length).then(($timeNumber) => {
					cy.wrap($time)
						.eq($timeNumber)
						.then(($timeText) => {
							cy.wrap($timeText).click();
							cy.wrap($timeText)
								.invoke('text')
								.then(($resp) => {
									let cadena = $resp.split(':');
									let number = parseInt(cadena[0]);
									let cade2 = cadena[1];
									let modo = 'AM';
									cy.log(number);
									if (number >= 12) {
										number = Math.abs(number - 12);
										modo = 'PM';
									}
									if (number === 0) {
										number = Math.abs(number - 12);
										modo = 'AM';
									}
									datepicker.get
										.dateAndTimeInput()
										.should('have.value', `${mesLetra} ${dayF}, ${yearF} ${number}:${cade2} ${modo}`);
								});
						});
				});
			});
	});
});

Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
