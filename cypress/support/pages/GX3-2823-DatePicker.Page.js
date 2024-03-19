class DatePicker {
	get = {
		datePickerInput: () => cy.get('#datePickerMonthYearInput'),
		dateAndTimePickerInput: () => cy.get('#dateAndTimePickerInput'),
	};
	getTodayDateFormatted() {
		const today = new Date();
		const day = String(today.getDate()).padStart(2, '0');
		const month = String(today.getMonth()+ 1 ).padStart(2, '0');
		const year = today.getFullYear();
		const formattedDate = `${month}/${day}/${year}`;

		return formattedDate;
	}
	getFormattedDateTimeIntl() {
		const now = new Date();

		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true // Use 12-hour time format with AM/PM
		};
		// Generate the formatted string
		let formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(now);

		// Remove the 'at' if it exists
		formattedDateTime = formattedDateTime.replace(' at ', ' ');

		return formattedDateTime;
	}
}
export const DatePickerPage = new DatePicker();