import dataPicker from '@data/GX2-3197-datePicker.json';

class DatePicker {
	constructor() {
		this.yearSelect = '.react-datepicker__year-select';
		this.myRangeYears = [];
		this.monthSelect = '.react-datepicker__month-select';
		this.daysOutsideMonth = 'div[class$= "day--outside-month"]';
	}

	get = {
		monthSelected: () => cy.get('div[class$="_month-option--selected_month"]'),
		dateAndTimeInput: () => cy.get('#dateAndTimePickerInput'),
		monthOptionDateTimePicker: () => cy.get('.react-datepicker__month-option'),
		monthDateTimeDropDown: () => cy.get('div[class$="month-read-view"]'),
		daySelected: () => cy.get('div[class$="__day--selected"]', { timeout: 5000 }),
		yearDropDown: () => cy.get('div[class*="year-dropdown-container"]'),
		yearSelected: () => cy.get('div[class*="-selected_year"]'),
		dateInput: () => cy.get('#datePickerMonthYearInput'),
		yearSelect: () => cy.get('.react-datepicker__year-select'),
		monthSelect: () => cy.get('.react-datepicker__month-select'),
		yearDataPicker: () => cy.get('select[class*="year"]'),
		textHeaderCalendar: () => cy.get('div[class*="hasYearDropdown"]'),
		monthDataPicker: () => cy.get('select[class*="month"]'),
		daysComponent: () => cy.get('div[class="react-datepicker__month"]'),
		daysOutsideMonth: () => cy.get('div[class$= "day--outside-month"]'),
		buttonNavigationBack: () => cy.get('button[aria-label="Previous Month"]'),
		buttonNavigationNext: () => cy.get('button[aria-label="Next Month"]'),
		timeList: () => cy.get('ul[class$="time-list"]'),
		timeItemSelected: () => cy.get('li[class$="item--selected"]', { timeout: 5000 }),
		monthDateTimePicker: () => cy.get('div[class$="month-dropdown"]'),
	};

	currentDate() {
		const hoy = new Date();
		const opcionesFecha = { month: '2-digit', day: '2-digit', year: 'numeric' };
		return hoy.toLocaleDateString('en-US', opcionesFecha);
	}
	currentDateAndTime() {
		const hoy = new Date();
		const opcionesFecha = { month: 'long', day: 'numeric', year: 'numeric' };
		const opcionesHora = { hour: 'numeric', minute: 'numeric', hour12: true };
		const fechaActual = hoy.toLocaleDateString('en-US', opcionesFecha);
		const horaActual = hoy.toLocaleTimeString('en-US', opcionesHora);
		return `${fechaActual} ${horaActual}`;
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
		this.get.dateInput().click();
		const randomValue = Cypress._.random(fromYear, toYear);
		this.get.yearSelect().select(randomValue.toString());
		return randomValue.toString();
	}

	setRandomMonthDropdown() {
		this.get.dateInput().click();
		const randomMonth = Cypress._.random(0, 11);
		cy.log('Random Month:', randomMonth);
		const randomMonthValue = dataPicker.monthsExpected[randomMonth];
		this.get.monthDataPicker().select(randomMonthValue);
		return randomMonthValue;
	}

	setRandomMonthDropdownDateTime() {
		this.get.dateAndTimeInput().click();
		const randomMonth = Cypress._.random(0, 11);
		cy.log('Random Month:', randomMonth);
		this.get
			.monthDateTimeDropDown()
			.click()
			.then(() => {
				this.get.monthOptionDateTimePicker().eq(randomMonth).click();
			});
		const randomMonthValue = dataPicker.monthsExpected[randomMonth];
		return randomMonthValue;
	}

	getCurrentYearMonth() {
		return new Cypress.Promise(resolve => {
			// Obtengo el mes y año seleccionado actualmente
			this.get
				.textHeaderCalendar()
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
			this.get.daysComponent().contains(`div:not(${this.daysOutsideMonth})`, randomDay).click();
		});
	}

	navigationBack() {
		this.get.buttonNavigationBack().click();
	}

	navigationNext() {
		this.get.buttonNavigationNext().click();
	}

	setRandomTime() {
		this.get.dateAndTimeInput().click();
		const horas = Cypress._.random(0, 23);
		const minutos = [0, 15, 30, 45];
		const randomMinutos = Cypress._.sample(minutos);
		const randomTime = `${horas.toString().padStart(2, '0')}:${randomMinutos.toString().padStart(2, '0')}`;
		this.get.timeList().scrollIntoView().find('li').contains(randomTime).click();
	}

	//----- Quizas tenga que borrar este approach :(
	getYearArray() {
		this.get.dateInput().click();
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
		this.get.dateInput().click();
		return cy.document().then(doc => {
			const monthsSelectDom = doc.querySelector(this.monthSelect);
			const months = Array.from(monthsSelectDom.options).map(option => option.textContent);
			return months;
		});
	}
}
export const datePicker = new DatePicker();
