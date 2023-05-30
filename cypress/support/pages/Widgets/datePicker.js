export class DatePicker {
	constructor() {
		this.dateInput = '#datePickerMonthYearInput';
		this.yearSelect = '.react-datepicker__year-select';
	}

	currentDate() {
		const hoy = new Date();
		const opcionesFecha = { month: '2-digit', day: '2-digit', year: 'numeric' };
		return hoy.toLocaleDateString('en-US', opcionesFecha);
	}

	getYearOptions() {
		return cy
			.get(this.yearSelect)
			.find('option')
			.invoke('text')
			.then(options => {
				// Convertir el resultado en un array y guardarlo en la propiedad yearOptions
				this.yearOptions = Array.from(options);
			});
	}

	generateYearRange(fromYear, toYear) {
		const range = toYear - fromYear + 1;
		const yearOptions = Array.from({ length: range }, index => (parseInt(fromYear) + index).toString());
		return { range, yearOptions };
	}
}
