import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import the from '@data/GX2-5413-DatePicker.json';
import { DatePicker } from '@pages/Widgets/GX2-5413-DatePicker.Page';

describe('GX2-5413-✅-tools-qa-widgets-date-picker', () => {
	beforeEach('Usuario debería estar situado en la pagina en DatePicker', () => {
		cy.visit(the.url);
		cy.url().should('include', the.url);
	});
	it('5414 | TC01: Validar seleccionar una fecha aleatoria del campo “Select Date”', () => {
		//Validamos que la fecha por default es la fecha actual
		DatePicker.get.SelectDate().should('have.value', DatePicker.CurrentDate());
		//Abrimos el Select Date
		DatePicker.ClickOnSelectDate();
		//Seleccionamos una Año random
		DatePicker.SelectRandomYear();
		//Validamos que el Año random esté  seleccionado
		DatePicker.get
			.Year()
			.invoke('val')
			.then(Year => {
				expect(Year).to.equal(Cypress.env('RandomYear').toString());
			});
		//Seleccionamos un Mes random
		DatePicker.SelectRandomMonth();
		//Validamos que el Mes random esté seleccionado
		DatePicker.get
			.Month()
			.invoke('val')
			.then(Month => {
				expect(Month).to.equal(Cypress.env('SelectedMonth').toString());
			});
		//Seleccionamos un Día random
		DatePicker.SelectRandomDay();
		//Validamos que el Día random esté seleccionado
		DatePicker.ClickOnSelectDate();
		DatePicker.get.Day().then(() => {
			DatePicker.get
				.Day()
				.contains(Cypress.env('RandomDay'))
				.should('contain.class', the.selectedDay)
				.and('contain.text', Cypress.env('RandomDay').toString())
				.and('be.visible')
				.click();
		});
		//Validamos que la fecha aleatoria seleccionada se visualiza correctamente
		DatePicker.get
			.SelectDate()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.equal(DatePicker.ExpectedDate());
			});
	});
	it('5414 | TC02: Validar seleccionar una fecha aleatoria del campo “Select Date” usando el botón “right arrow button”.', () => {
		DatePicker.ClickOnSelectDate();
		DatePicker.ClickOnRightArrow();
		//Validamos que el se selecciono el mes con el Button right arrow
		DatePicker.get
			.Month()
			.invoke('val')
			.then(Month => {
				expect(Month).to.equal(Cypress.env('NextsMonth').toString());
			});
		//Seleccionamos un Día random
		DatePicker.SelectRandomDay();
		//Validamos que el Día random esté seleccionado
		DatePicker.ClickOnSelectDate();
		DatePicker.get.Day().then(() => {
			DatePicker.get
				.Day()
				.contains(Cypress.env('RandomDay'))
				.should('contain.class', the.selectedDay)
				.and('contain.text', Cypress.env('RandomDay').toString())
				.and('be.visible')
				.click();
		});
		//Validamos que la fecha seleccionada no es igual a la fecha default
		DatePicker.get
			.SelectDate()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.not.equal(DatePicker.CurrentDate());
			});
	});
	it('5414 | TC03: Validar seleccionar una fecha aleatoria del campo “Select Date” usando el botón “left arrow button”.', () => {
		DatePicker.ClickOnSelectDate();
		DatePicker.ClickOnLeftArrow();
		//Validamos que el se selecciono el mes con el Button right arrow
		DatePicker.get
			.Month()
			.invoke('val')
			.then(Month => {
				expect(Month).to.equal(Cypress.env('PreviousMonth').toString());
			});
		//Seleccionamos un Día random
		DatePicker.SelectRandomDay();
		//Validamos que el Día random esté seleccionado
		DatePicker.ClickOnSelectDate();
		DatePicker.get.Day().then(() => {
			DatePicker.get
				.Day()
				.contains(Cypress.env('RandomDay'))
				.should('contain.class', the.selectedDay)
				.and('contain.text', Cypress.env('RandomDay').toString())
				.and('be.visible')
				.click();
		});
		//Validamos que la fecha seleccionada no es igual a la fecha default
		DatePicker.get
			.SelectDate()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.not.equal(DatePicker.CurrentDate());
			});
	});
});
