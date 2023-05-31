export class DatePicker {
	constructor() {
		this.dateInput = '#datePickerMonthYearInput';
		this.yearSelect = '.react-datepicker__year-select';
		this.myRangeYears = [];
		this.monthSelect = '.react-datepicker__month-select';
	}

	currentDate() {
		const hoy = new Date();
		const opcionesFecha = { month: '2-digit', day: '2-digit', year: 'numeric' };
		return hoy.toLocaleDateString('en-US', opcionesFecha);
	}

	getYearOptions() {
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
