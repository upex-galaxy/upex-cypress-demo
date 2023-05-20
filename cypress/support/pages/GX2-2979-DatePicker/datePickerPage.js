class DatePicker {
	get = {
		datePicker: () => cy.get('#datePickerMonthYearInput'),
		yearInput: () => cy.get('select[class="react-datepicker__year-select"]'),
	};

	clicklistOfYear() {
		cy.get('[class="react-datepicker__year-select"').trigger('click');
	}
	checkValuesYear() {
		let arrayYear = [];
		cy.get('.react-datepicker__year-select').within(() => {
			cy.get('option').each(($option, index) => {
				cy.wrap($option)
					.invoke('text')
					.should('be.a', 'string')
					.then(parseInt)
					.should('be.a', 'number')
					.then(valor => {
						arrayYear.push(valor);
						expect(array[index]).to.be.equal(1900 + index);
					});
			});
		});
	}
}

export const datePicker = new DatePicker();
