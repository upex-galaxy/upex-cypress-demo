import { faker } from '@faker-js/faker';

class Action {
	clic(input) {
		cy.get(input).click();
	}

	getOrdinalSuffix(day) {
		if (day >= 11 && day <= 13) {
			return 'th';
		} else {
			switch (day % 10) {
				case 1:
					return 'st';
				case 2:
					return 'nd';
				case 3:
					return 'rd';
				default:
					return 'th';
			}
		}
	}

	navigateMonths(comparisonDate) {
		let currentDate;

		cy.get('.react-datepicker__current-month')
			.invoke('text')
			.then(text => {
				currentDate = new Date(text);
			});

		cy.get('.react-datepicker__current-month')
			.should('be.visible')
			.then(() => {
				if (currentDate.getTime() !== comparisonDate.getTime()) {
					if (currentDate < comparisonDate) {
						cy.log('Clicking Next Month');
						cy.get('[aria-label="Next Month"]').should('be.visible').click();
					} else {
						cy.log('Clicking Previous Month');
						cy.get('.react-datepicker__navigation--previous').should('be.visible').click();
					}
				}

				if (currentDate.getTime() !== comparisonDate.getTime()) {
					this.navigateMonths(comparisonDate);
				}
			});
	}

	selectMonthAndYear(rango, menu) {
		this.clic('#datePickerMonthYearInput');

		var randomDate;
		const today = new Date();
		const monthToDay = (today.getMonth() + 1).toString().padStart(2, '0');
		const dayToday = today.getDate().toString();
		const yearToday = today.getFullYear().toString();

		if (menu == 'YearAndMonth') {
			if (rango == 'mayor') {
				randomDate = faker.date.between(`${yearToday}-${monthToDay}-${dayToday}`, '2034-12-31');
			} else {
				randomDate = faker.date.between('2014-01-01', `${yearToday}-${monthToDay}-${dayToday}`);
			}
		} else {
			if (rango == 'mayor') {
				randomDate = faker.date.between(`${yearToday}-${monthToDay}-${dayToday}`, '2100-12-31');
			} else {
				randomDate = faker.date.between('1900-01-01', `${yearToday}-${monthToDay}-${dayToday}`);
			}
		}

		const year = randomDate.getFullYear().toString();
		const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(randomDate);
		const monthSlice = month.charAt(0).toUpperCase() + month.slice(1);
		const monthNumber = (randomDate.getMonth() + 1).toString().padStart(2, '0');
		const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const dayOfWeekNumber = randomDate.getDay();
		const dayOfWeek = daysOfWeek[dayOfWeekNumber];
		const day = randomDate.getDate().toString().padStart(2, '0');

		if (menu == 'YearAndMonth') {
			const comparisonDate = new Date(`${month}, ${year}`);
			this.navigateMonths(comparisonDate);
		} else {
			cy.get('.react-datepicker__year-select').should('be.visible').select(year);
			cy.get('.react-datepicker__month-select').should('be.visible').select(monthSlice);
		}
		cy.get(`[aria-label="Choose ${dayOfWeek}, ${monthSlice} ${parseInt(day)}${this.getOrdinalSuffix(parseInt(day))}, ${year}"]`)
			.should('be.visible')
			.click();

		return `${monthNumber}/${day}/${year}`;
	}
}

export default Action;
