class DatePicker {
	constructor() {
		this.dateInput = '#datePickerMonthYearInput';
		this.yearSelect = '.react-datepicker__year-select';
		this.myRangeYears = [];
		this.monthSelect = '.react-datepicker__month-select';
		this.yearDataPicker = '.react-datepicker__year-dropdown-container';
	}

	currentDate() {
		const hoy = new Date();
		const opcionesFecha = { month: '2-digit', day: '2-digit', year: 'numeric' };
		return hoy.toLocaleDateString('en-US', opcionesFecha);
	}

	getYearArray() {
		cy.get(this.dateInput).click();
		return cy.document().then(doc => {
			const yearSelectDom = doc.querySelector(this.yearSelect);
			return cy.wrap(Array.from(yearSelectDom.options).map(option => option.value.toString()));
		});
	}

	setRandomYearDropdown() {
		return this.getYearArray().then(years => {
			const randomIndex = Math.floor(Math.random() * years.length);
			const randomValue = years[randomIndex];

			// hacerle click al valor random
			cy.select(this.yearSelect).click();
			cy.get(this.yearDataPicker).click();

			cy.get(this.getYearArray()).should('contain', randomValue).click();

			// Asignar el valor aleatorio al div con la clase --hasYearDropdown
			//yearDropdownDiv.textContent = `June ${randomValue}`;
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
