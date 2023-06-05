import dataPicker from '@data/GX2-3197-datePicker.json';

class DatePicker {
	constructor() {
		this.dateInput = '#datePickerMonthYearInput';
		this.yearSelect = '.react-datepicker__year-select';
		this.myRangeYears = [];
		this.monthSelect = '.react-datepicker__month-select';
		this.yearDataPicker = 'select[class*="year"]';
		this.textHeaderCalendar = 'div[class*="hasYearDropdown"]';
		this.monthDataPicker = 'select[class*="month"]';
		this.daysComponent = 'div[class="react-datepicker__month"]';
		this.daysOutsideMonth = 'div[class$= "day--outside-month"]';
		this.daySelected = 'div[class$="__day--selected"]';
		this.buttonNavigationBack = 'button[aria-label="Previous Month"]';
		this.buttonNavigationNext = 'button[aria-label="Next Month"]';

		this.dateAndTimeInput = '#dateAndTimePickerInput';
		this.timeList = 'ul[class$="time-list"]';
	}

	currentDate() {
		const hoy = new Date();
		const opcionesFecha = { month: '2-digit', day: '2-digit', year: 'numeric' };
		return hoy.toLocaleDateString('en-US', opcionesFecha);
	}

	getNextMonth(month) {
		if (month == 'December') return 'January';
		const months = dataPicker.monthsExpected;
		return months[months.indexOf(month) + 1];
	}

	getPreviousMonth(month) {
		if (month == 'January') return 'December';
		const months = dataPicker.monthsExpected;
		return months[months.indexOf(month) - 1];
	}

	setRandomYearDropdown(fromYear, toYear) {
		cy.get(this.dateInput).click();
		const randomValue = Cypress._.random(fromYear, toYear);
		cy.get(this.yearSelect).select(randomValue.toString());
		return randomValue.toString();
	}

	setRandomMonthDropdown() {
		cy.get(this.dateInput).click();
		const randomMonth = Cypress._.random(0, 11);
		cy.log('Random Month:', randomMonth);
		const randomMonthValue = dataPicker.monthsExpected[randomMonth];
		cy.get(this.monthDataPicker).select(randomMonthValue);
		return randomMonthValue;
	}

	getCurrentYearMonth() {
		return new Cypress.Promise(resolve => {
			cy.get(this.dateInput).click();
			// Obtengo el mes y año seleccionado actualmente
			cy.get(this.textHeaderCalendar)
				.invoke('text')
				.then(text => {
					const [month, year] = text.trim().split(' ');
					resolve({ month, year });
				});
		});
	}

	setRandomDay() {
		this.getCurrentYearMonth().then(result => {
			const { month, year } = result;

			const daysInMonth = new Date(year, dataPicker.monthsExpected.indexOf(month) + 1, 0).getDate();
			cy.log(`El mes de ${month} en el año ${year} tiene ${daysInMonth} días.`);

			// hacer un random que de los dias del mes seleccionado // ej 1 al 30
			const randomDay = Cypress._.random(1, daysInMonth);
			cy.log(`El día aleatorio dentro del mes es: ${randomDay}`);

			// hacer click en el div que tenga el dia random seleccionado, que no tenga la clase outside-month
			cy.get(this.daysComponent).contains(`div:not(${this.daysOutsideMonth})`, randomDay).click();
		});
	}

	navigationBack() {
		cy.get(this.buttonNavigationBack).click();
	}

	navigationNext() {
		cy.get(this.buttonNavigationNext).click();
	}

	setRandomTime() {
		cy.get(this.dateAndTimeInput).click();
		const horas = Cypress._.random(0, 23);
		const minutos = [0, 15, 30, 45];
		const randomMinutos = Cypress._.sample(minutos);
		const randomTime = `${horas.toString().padStart(2, '0')}:${randomMinutos.toString().padStart(2, '0')}`;
		cy.get(this.timeList).scrollIntoView().find('li').contains(randomTime).click();
	}

	//----- Quizas tenga que borrar este approach :(
	getYearArray() {
		cy.get(this.dateInput).click();
		return cy.document().then(doc => {
			const yearSelectDom = doc.querySelector(this.yearSelect);
			return cy.wrap(Array.from(yearSelectDom.options).map(option => option.value.toString()));
		});
	}

	generateYearRange(fromYear, toYear) {
		this.range = toYear - fromYear + 1;
		this.myRangeYears = Array.from({ length: this.range }, (_, index) => (parseInt(fromYear) + index).toString());
	}

	getMonths() {
		cy.get(this.dateInput).click();
		return cy.document().then(doc => {
			const monthsSelectDom = doc.querySelector(this.monthSelect);
			const months = Array.from(monthsSelectDom.options).map(option => option.textContent);
			return months;
		});
	}
}
export const datePicker = new DatePicker();
