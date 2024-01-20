class Verification {
	inputDate(date) {
		if (date == undefined) {
			const today = new Date();
			const month = (today.getMonth() + 1).toString().padStart(2, '0');
			const day = today.getDate().toString();
			const year = today.getFullYear().toString();

			date = `${month}/${day}/${year}`;
		}

		cy.get('#datePickerMonthYearInput').should('have.value', date);
	}

	selectMonth() {
		const options = cy.get('.react-datepicker__month-select option');

		const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		options.should('have.length', monthNames.length);

		options.each(($option, index) => {
			cy.wrap($option).contains(monthNames[index]);
		});
	}

	selectYear() {
		const options = cy.get('.react-datepicker__year-select option');

		const expectedYears = Array.from({ length: 2101 - 1900 }, (_, i) => (1900 + i).toString());

		options.should('have.length', expectedYears.length);

		options.each(($option, index) => {
			cy.wrap($option).should('have.value', expectedYears[index]);
		});
	}

	inputDateAndTime(date) {
		if (date == undefined) {
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

		cy.get('#dateAndTimePickerInput').should('have.value', date);
	}

	selectMonthTime() {
		cy.get('#dateAndTimePickerInput').first().click();

		cy.get('.react-datepicker__month-read-view--selected-month').first().click();

		const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });

		cy.get('.react-datepicker__month-option--selected_month').should('contain', '✓').and('contain', currentMonth);
	}
}

export default Verification;
