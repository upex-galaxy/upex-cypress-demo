import dataPicker from '@data/GX2-3197-datePicker.json';

class DatePicker {
	constructor() {
		this.yearSelect = '.react-datepicker__year-select';
		this.myRangeYears = [];
		this.monthSelect = '.react-datepicker__month-select';
		this.daysOutsideMonth = 'div[class$= "day--outside-month"]';
		this.yearOption = 'div[class$="_year-option"]';
		this.yearSelected = 'div[class*="-selected_year"]';
	}

	get = {
		monthSelected: () => cy.get('div[class$="_month-option--selected_month"]'),
		dateAndTimeInput: () => cy.get('#dateAndTimePickerInput'),
		monthOptionDateTimePicker: () => cy.get('.react-datepicker__month-option'),
		monthDateTimeDropDown: () => cy.get('div[class$="month-read-view"]'),
		daySelected: () => cy.get('div[class$="__day--selected"]', { timeout: 6000 }),
		yearDropDown: () => cy.get('div[class*="year-dropdown-container"]'),
		yearSelected: () => cy.get('div[class*="-selected_year"]'),
		dateInput: () => cy.get('#datePickerMonthYearInput', { timeout: 2000 }),
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
		yearDropDownDateAndTimePicker: () => cy.get('div[class$="__year-read-view"]'),
		yearContainerDateAndTimePicker: () => cy.get('div[class="react-datepicker__year-dropdown"]'),
		yearOptionsPicker: () => cy.get('.react-datepicker__year-dropdown .react-datepicker__year-option'),
		yearOption: () => cy.get('div[class$="_year-option"]'),
		scrollTopYear: () => cy.get('.react-datepicker__navigation--years-upcoming'),
		scrollBottomYear: () => cy.get('.react-datepicker__navigation--years-previous'),
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

	getNextMonthYear(month, year) {
		if (month == 'December') return { month: 'January', year: parseInt(year) + 1 };
		const months = dataPicker.monthsExpected;
		return { month: months[months.indexOf(month) + 1], year: year };
	}

	getPreviousMonthYear(month, year) {
		if (month == 'January') return { month: 'December', year: parseInt(year) - 1 };
		const months = dataPicker.monthsExpected;
		return { month: months[months.indexOf(month) - 1], year: year };
	}

	setRandomYearDropdown(fromYear, toYear) {
		this.get.dateInput().click();
		const randomValue = Cypress._.random(fromYear, toYear);
		this.get.yearSelect().select(randomValue.toString());
		return randomValue.toString();
	}

	setRandomYearDropwonDateAndTime(fromYear, toYear) {
		return new Cypress.Promise(resolve => {
			const randomValue = Cypress._.random(fromYear, toYear);
			cy.log(`The random year selected is: ${randomValue}`);

			this.get.yearDropDownDateAndTimePicker().click();
			cy.log(this.get.yearOptionsPicker().first());

			const currentYear = new Date().getFullYear();
			const gapBetween = 5; // cantidad de años para arriba o para abajo del año seleccionado
			const firstYearAppear = currentYear + gapBetween; // primer año que aparece en el date picker
			const lastYearAppear = currentYear - gapBetween; // ultimo año que aparece en el date picker

			// Los años van de mayor a menor

			if (firstYearAppear < randomValue) {
				// Si el primer numero es mayor al random value significa que hay que hacer scroll para arriba
				// cuando hacer srollpara arriba? la diferencia entre los dos numeros
				const quantityScroll = randomValue - firstYearAppear;

				// click sobre el scroll hasta que renderice el elemento randomValue
				for (let i = 0; i < quantityScroll; i++) {
					this.get.scrollTopYear().click();
				}
			} else if (lastYearAppear > randomValue) {
				// Si el ultimo numero es menor al random value significa que hay que hacer scroll para abajo
				// cuando hacer scroll para arriba? la diferencia entre los dos numeros
				const quantityScroll = lastYearAppear - randomValue;

				// click sobre el scroll hasta que renderice el elemento randomValue
				for (let i = 0; i < quantityScroll; i++) {
					this.get.scrollBottomYear().click();
				}
			}
			// busca entre todos los elementos hasta encontrar el random year
			this.get
				.yearContainerDateAndTimePicker()
				.children()
				.each($element => {
					const text = $element.text().trim();
					cy.log($element);
					cy.log(`Current year: ${text}`);
					if (text === randomValue.toString()) {
						cy.log(`Found random year: ${text}`);
						cy.wrap($element).click();
						resolve(randomValue);
					}
				});
		});
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
