class Verification {
	get = {
		datePickerMonthYearInput: () => cy.get('#datePickerMonthYearInput'),
		dateAndTimePickerInput: () => cy.get('#dateAndTimePickerInput'),
		dateAndTimePickerSelectMonth: () => cy.get('.react-datepicker__month-read-view--selected-month'),
	};

	inputDate(date) {
		if (date === undefined) {
			const today = new Date();
			const month = (today.getMonth() + 1).toString().padStart(2, '0');
			const day = today.getDate().toString();
			const year = today.getFullYear().toString();

			date = `${month}/${day}/${year}`;
		}

		return date;
	}

	selectMonthAndYear() {
		this.get.datePickerMonthYearInput().click();
		const expectedYears = Array.from({ length: 2101 - 1900 }, (_, i) => (1900 + i).toString());
		return expectedYears;
	}

	inputDateAndTime(date) {
		if (date === undefined) {
			const currentDate = new Date();

			let currentDateString = currentDate.toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				hour12: true,
			});

			date = currentDateString.replace(' at', '');
		}

		return date;
	}

	selectMonthTime() {
		this.get.dateAndTimePickerInput().first().click();

		this.get.dateAndTimePickerSelectMonth().first().click();

		const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });

		return currentMonth;
	}
}

export default Verification;
