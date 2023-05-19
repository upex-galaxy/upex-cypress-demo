import { datepicker } from './DatePicker.Page';

class DatePicker {
	get = {
		firstDateInput: () => cy.get('[id = "datePickerMonthYearInput"]'),
		secondDateInput: () => cy.get('[id = "dateAndTimePickerInput"]'),
		yearFirst: () => cy.get('.react-datepicker__year-select'),
		monthFirst: () => cy.get('.react-datepicker__month-select'),
		monthFirstSelected: () => cy.get('.react-datepicker__month-select option:selected'),
		previousMonth: () => cy.get("[aria-label = 'Previous Month']"),
		nextMonth: () => cy.get("[aria-label= 'Next Month']"),
		actualMonth: () =>
			cy.get(
				'.react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown.react-datepicker__current-month--hasMonthDropdown'
			),
		daySelectedFirst: () => cy.get('div[class*="selected"]'),
		timeOptions: () => cy.get('.react-datepicker__time-list li'),
		timeSelect: () => cy.get('.react-datepicker__time-list'),
		selectYear: () => cy.get('[class=react-datepicker__year-read-view]'),
		yearsDropdown: () => cy.get('[class$=year-dropdown]'),
		monthDropdown: () => cy.get("[class= 'react-datepicker__month-read-view']"),
		onlyMonths: () => cy.get("[class= 'react-datepicker__month-dropdown'] :not(span)"),
		onlyYears: () => cy.get('[class$=year-dropdown] [class*=year-option]:not(:first-child):not(:last-child)'),
		monthSelected: () => cy.get("[class$='selected_month']"),
		yearSelected: () => cy.get("[class$='selected_year']"),
	};

	firstInputDate() {
		this.get
			.firstDateInput()
			.invoke('attr', 'value')
			.then(today => {
				cy.writeFile('../../fixtures/data/datePicker.json', { varToday: today });
			});
	}

	secondInputDate() {
		this.get
			.secondDateInput()
			.invoke('attr', 'value')
			.then(today => {
				cy.writeFile('../../fixtures/data/datePicker.json', { varToday: today });
			});
	}

	enterSecondInput() {
		this.get.secondDateInput().click();
	}

	clickYearFirst() {
		this.get.firstDateInput().click();
		this.get.yearFirst().select(0);
	}

	clickMonthFirst() {
		this.get.firstDateInput().click();
		this.get.monthFirst().select(0);
	}

	validatePreviousMonth() {
		this.get.firstDateInput().click();
		this.get.monthFirstSelected().invoke('val').then(parseInt).as('monthInit');

		this.get.previousMonth().click();

		this.get.monthFirstSelected().invoke('val').then(parseInt).as('monthFinal');
	}

	clickPreviousMonth() {
		this.get.firstDateInput().click();
		this.get.previousMonth().click();
	}

	clickNextMonth() {
		this.get.firstDateInput().click();
		this.get.nextMonth().click();
	}

	selectTime() {
		this.get.timeOptions();
	}

	validateMonth() {
		this.get.secondDateInput().click();
		this.get.monthDropdown().click();

		let monthArray = [];
		let monthArrayLength;
		let randomMonth;
		this.get.onlyMonths().then($monthList => {
			$monthList.each($monthList => {
				monthArray.push($monthList);
			});

			monthArrayLength = monthArray.length;
			randomMonth = Cypress._.random(0, monthArrayLength - 1);

			this.get.onlyMonths().eq(randomMonth).click();
		});
		cy.log(monthArray);
	}

	selectRandomMonth() {
		datePicker.get.secondDateInput().click();
		datePicker.get.monthDropdown().click();

		let monthArray = [];

		datePicker.get.onlyMonths().then($monthList => {
			$monthList.each((index, $monthList) => {
				monthArray.push($monthList);
			});
			let monthArrayLength = monthArray.length;
			let randomMonth = Cypress._.random(0, monthArrayLength - 1);

			this.get.onlyMonths().eq(randomMonth).click();
		});
	}

	selectRandomYear() {
		this.get.secondDateInput().click();
		this.get.selectYear().click();
		this.get.yearsDropdown();

		let yearsArray = [];

		this.get.onlyYears().then($yearsList => {
			$yearsList.each((index, $yearsList) => {
				yearsArray.push($yearsList);
			});
			let yearsArrayLength = yearsArray.length;
			let randomYears = Cypress._.random(0, yearsArrayLength - 1);

			this.get.onlyYears().eq(randomYears).click();
		});
	}

	selectRandomTime() {
		this.get.secondDateInput().click();
		let arrayHours = [];
		let lengthArrayHours;
		let random;
		let selectedHour;
		cy.get('.react-datepicker__time-list li')
			.as('listHours')
			.each($hours => {
				const hora = $hours.text();
				arrayHours.push(hora);
			})
			.then(arrayHoras => {
				lengthArrayHours = arrayHoras.length;
				random = Cypress._.random(0, lengthArrayHours - 1);

				cy.get('@listHours').eq(random).invoke('text').as('a');
				cy.get('@listHours').eq(random).click();

				// otra forma de hacerlo, que continua en el commentario de abajo
				// .then($selectedHour => {
				// 	selectedHour = $selectedHour.text();
				// 	Cypress.env('random', random);
				// 	cy.log(selectedHour);
				//});
				//ACA PRUEBO USANDO UN cy.then (no anda con el alias) pero si no lo uso al llamar la env("random") random no esta definido aun
				// cy.then(() => {
				// 	const envRandom = Cypress.env('random');
				// 	datePicker.get.secondDateInput().click();
				// 	cy.get('@listHours').eq(random).should('have.text', selectedHour);
				// });
			});
	}
}

export const datePicker = new DatePicker();
