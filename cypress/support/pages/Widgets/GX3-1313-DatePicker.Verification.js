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
}

export default Verification;
