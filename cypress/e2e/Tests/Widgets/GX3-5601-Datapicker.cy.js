import { datePickerPage } from '../../../support/pages/GX3-5601-Datepicker.Page';

describe('GX3-5601 | ToolsQA | Widgets | Date Picker', () => {
	const opcionesMes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
	const randomOptionMes = opcionesMes[Math.floor(Math.random() * opcionesMes.length)];
	const opcionesAño = Array.from({ length: 2100 - 1900 + 1 }, (v, i) => (1900 + i).toString());
	const randomOptionAño = opcionesAño[Math.floor(Math.random() * opcionesAño.length)];
	const opcionesMes2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const randomOptionMes2 = opcionesMes2[Math.floor(Math.random() * opcionesMes.length)];
	const startYear = 1900;
	const endYear = 2100;
	function getRandomYear() {
		return Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
	}
	function selectYear(randomYear) {
		cy.get('.react-datepicker__year-read-view').then($yearView => {
			const currentYear = parseInt($yearView.text());
			const yearDifference = randomYear - currentYear;
			if (yearDifference > 0) {
				for (let i = 0; i < yearDifference; i++) {
					cy.get('.react-datepicker__navigation--years-upcoming').click();
				}
			} else if (yearDifference < 0) {
				for (let i = 0; i < Math.abs(yearDifference); i++) {
					cy.get('.react-datepicker__navigation--years-previous').click();
				}
			}
			cy.get('.react-datepicker__year-option').contains(randomYear.toString()).click();
		});
	}

	beforeEach(() => {
		cy.visit('https://demoqa.com/date-picker');
		cy.url().should('include', '/date-picker');
		cy.get('h1.text-center').should('have.text', 'Date Picker');
	});

	it('GX3-5606 | TC1: Validar tipear datos manualmente en los Data Picker.', () => {
		datePickerPage.get.selectDateInput().clear().type('04/17/1984 {enter}').click();
		datePickerPage.get.daysSelected().should('contain', '17');
		datePickerPage.get.selectMonthDate().should('contain', 'April');
		datePickerPage.get.selectYearDate().should('contain', '1984');
		cy.get('body').click(0, 0);
		datePickerPage.get.dateAndTimeInput().clear().type('April 17, 1984 14:45 PM {enter}').click();
		datePickerPage.get.selectDaysOption().should('contain', '17');
		datePickerPage.get.selectMonthDateAndTime().should('contain', 'April');
		datePickerPage.get.selectYearDateAndTime().should('contain', '1984');
		datePickerPage.get.selectTimeOption().should('contain', '14:45');
	});
	it('GX3-5606 | TC2: Validar que se pueda elegir una fecha aleatoria en Select Date.', () => {
		datePickerPage.get.selectDateInput().click();
		datePickerPage.get.selectMonthDate().select(randomOptionMes).should('have.value', randomOptionMes);
		datePickerPage.get.selectYearDate().select(randomOptionAño).should('have.value', randomOptionAño);
		datePickerPage.get.selectDaysOption().then($days => {
			const randomIndex = Math.floor(Math.random() * $days.length);
			const selectedDays = $days[randomIndex];
			const selectedDaysText = selectedDays.textContent.trim();
			cy.wrap(selectedDays).click();
			datePickerPage.get.selectDateInput().click().should('contain.value', selectedDaysText);
		});
	});
	it('GX3-5606 | TC3: Validar que los botones de flecha mes anterior y posterior funcionen en Select Date.', () => {
		datePickerPage.openDatePicker();
		datePickerPage.get.navigationPrevious().click();
		datePickerPage.get.headerMonth().should('contain', 'October');
		datePickerPage.get.navigationNext().dblclick();
		datePickerPage.get.headerMonth().should('contain', 'December');
	});
	it('GX3-5606 | TC4: Validar que se pueda elegir una fecha aleatoria en Select Date and Time.', () => {
		datePickerPage.get.dateAndTimeInput().click();
		//seleccion mes
		datePickerPage.get.selectMonthDateAndTime().click();
		datePickerPage.get.optionMonthDateAndTime().contains(randomOptionMes2).click();
		datePickerPage.get.headerMonth().should('contain.text', randomOptionMes2);
		//seleccion año
		const randomYear = getRandomYear();
		datePickerPage.get.dateAndTimeInput().click();
		datePickerPage.get.selectYearDateAndTime().click();
		selectYear(randomYear);
		datePickerPage.get.headerMonth().should('contain', randomYear.toString());
		//seleccion dia
		datePickerPage.get.selectDaysOption().then($days => {
			const randomIndex = Math.floor(Math.random() * $days.length);
			const selectedDays = $days[randomIndex];
			const selectedDaysText = selectedDays.textContent.trim();
			cy.wrap(selectedDays).click();
			datePickerPage.get.dateAndTimeInput().click().should('contain.value', selectedDaysText);
		});
		//seleccion hora
		datePickerPage.get.selectTimeOption().then($time => {
			const randomIndex = Math.floor(Math.random() * $time.length);
			const selectedTime = $time[randomIndex];
			cy.wrap($time[randomIndex]).click();
			datePickerPage.get.dateAndTimeInput().click();
			datePickerPage.get.selectTimeOption().should('be.visible', selectedTime);
		});
	});
	it('GX3-5606 | TC5: Validar que los botones de flecha mes anterior y posterior funcionen en Select Date and Time.', () => {
		datePickerPage.openDateAndTimePicker();
		datePickerPage.get.navigationPrevious().click();
		datePickerPage.get.headerMonth().should('contain', 'October');
		datePickerPage.get.navigationNext().dblclick();
		datePickerPage.get.headerMonth().should('contain', 'December');
	});
	it('GX3-5606 | TC6: Validar ingresar datos fuera del rango de opciones en los Data Picker.', () => {
		const expectedDateTime = 'April 17, 2101 9:48 PM';
		datePickerPage.get.selectDateInput().clear().type('04/17/1899 {enter}').should('have.value', '04/17/1899');
		datePickerPage.get.dateAndTimeInput().clear().type('April 17, 2101 21:48 {enter}').should('have.value', expectedDateTime);
	});
	it('GX3-5606 | TC7: Validar el formato correcto en los Data Picker.', () => {
		datePickerPage.get
			.selectDateInput()
			.invoke('val')
			.then(dateValue => {
				const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
				expect(dateValue).to.match(dateFormat);
			});
		datePickerPage.get
			.dateAndTimeInput()
			.invoke('val')
			.then(dateValue => {
				const dateAndTimeFormat = /^[A-Za-z]+ \d{1,2}, \d{4} \d{1,2}:\d{2} (AM|PM)$/;
				expect(dateValue).to.match(dateAndTimeFormat);
			});
	});
});
