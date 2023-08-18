import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import the from '@data/GX2-5413-DatePicker.json';
import { DatePicker } from '@pages/Widgets/GX2-5413-DatePicker.Page';
import { DateAndTimePicker } from '@pages/Widgets/GX2-5413-DatePicker.Page';

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
				expect(Month).to.equal(Cypress.env('ActualMonth').toString());
			});
		//Seleccionamos un Día random
		DatePicker.SelectRandomDay();
		//Validamos que la fecha seleccionada no es igual a la fecha default
		DatePicker.get
			.SelectDate()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.equal(DatePicker.ExpectedArrowButtonDate());
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
				expect(Month).to.equal(Cypress.env('ActualMonth').toString());
			});
		//Seleccionamos un Día random
		DatePicker.SelectRandomDay();
		//Validamos que la fecha fue seleccionada correctamente
		DatePicker.get
			.SelectDate()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.contain(DatePicker.ExpectedArrowButtonDate());
			});
	});
	it('5414 | TC04: Validar tipear un fecha valida en “Select Date” y que quede seleccionada', () => {
		// Antes de tipear vaciamos el input
		DatePicker.get.SelectDate().clear();
		//Validamos que el input esté vacío
		DatePicker.get.SelectDate().should('be.visible').and('be.empty');
		//Creamos una fecha random
		let RandomDate = DatePicker.RandomDate();
		//Tipeamos la fecha random
		DatePicker.get.SelectDate().type(RandomDate).type('{enter}');
		//Validamos que la fecha random se ha ingresado correctamente
		DatePicker.get.SelectDate().should('have.value', RandomDate);
	});
	it('5414 | TC05: Validar no ingresar fecha cuando se tipea un formato invalido en “Select Date” (texto)', () => {
		// Antes de tipear vaciamos el input
		DatePicker.get.SelectDate().clear();
		//Validamos que el input esté vacío
		DatePicker.get.SelectDate().should('be.visible').and('be.empty');
		//Tipeamos algo que no sea una fecha
		DatePicker.get.SelectDate().type(DatePicker.RandomText()).type('{enter}');
		//Validamos que la fecha random se ha ingresado correctamente
		DatePicker.get.SelectDate().should('be.visible').and('be.empty');
	});
	it('5414 | TC06: Validar seleccionar una fecha aleatoria del campo “Date And Time”.', () => {
		//Validamos que la fecha por default es la fecha actual
		DateAndTimePicker.get.DateAndTime().should('have.value', DateAndTimePicker.currentDateAndTime());
		//Seleccionamos Date and Time
		DateAndTimePicker.ClickOnDateAndTime();
		//Seleccionamos una Año random
		DateAndTimePicker.ClickOnYear();
		DateAndTimePicker.SelectedRandomYear();
		//Validamos que el Año random esté  seleccionado
		DateAndTimePicker.get
			.Year()
			.invoke('text')
			.then(Year => {
				expect(Year).to.equal(Cypress.env('DateYear').toString());
			});
		DateAndTimePicker.ClickOnYear();
		DateAndTimePicker.get.YearSelect().should('contain', the.checkMark).click();
		//Seleccionamos un Mes random
		DateAndTimePicker.SelectedRandomMonth();
		//Validamos que el Mes random esté seleccionado
		DateAndTimePicker.get
			.Month()
			.invoke('text')
			.then(Month => {
				expect(Month).to.equal(Cypress.env('DateMonth').toString());
			});
		DateAndTimePicker.get.Month().click();
		DateAndTimePicker.get.MonthSelect().should('contain', the.checkMark).click();
		//Seleccionamos un Día random
		DateAndTimePicker.SelectedRandomDay();
		//Validamos que el Día random esté seleccionado
		DateAndTimePicker.get.Day().then(() => {
			DateAndTimePicker.get
				.Day()
				.contains(Cypress.env('DateDay'))
				.should('contain.class', the.selectedDay)
				.and('contain.text', Cypress.env('DateDay').toString())
				.and('be.visible')
				.click();
		});
		//Seleccionamos una Hora random
		DateAndTimePicker.SelectedRandomTime();
		//Validamos que la Hora esté seleccionada
		DateAndTimePicker.ClickOnDateAndTime();
		DateAndTimePicker.get.TimeList().then(() => {
			DateAndTimePicker.get
				.TimeItem()
				.contains(Cypress.env('DateTime'))
				.should('contain.class', the.selectedTime)
				.and('contain.text', Cypress.env('DateTime').toString())
				.and('be.visible')
				.click();
		});
		//Validamos que la fecha aleatoria seleccionada se visualiza correctamente
		DateAndTimePicker.get
			.DateAndTime()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.contain(DateAndTimePicker.ExpectedDate());
			});
	});
	it('5414 | TC07: Validar seleccionar una fecha aleatoria del campo “Date And Time” usando el botón “right arrow button”.', () => {
		DateAndTimePicker.ClickOnDateAndTime();
		DateAndTimePicker.ClickOnRightArrow();
		//Validamos que el se selecciono el mes con el Button right arrow
		DateAndTimePicker.get
			.Month()
			.invoke('text')
			.then(Month => {
				expect(Month).to.equal(Cypress.env('ActualMonth').toString());
			});
		//Seleccionamos un Día random
		DateAndTimePicker.SelectedRandomDay();
		//Seleccionamos una Hora random
		DateAndTimePicker.SelectedRandomTime();
		//Validamos que la fue seleccionada correctamente
		DateAndTimePicker.get
			.DateAndTime()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.equal(DateAndTimePicker.ExpectedArrowButtonDate());
			});
	});
	it('5414 | TC08: Validar seleccionar una fecha aleatoria del campo “Date And Time” usando el botón “left arrow button”.', () => {
		DateAndTimePicker.ClickOnDateAndTime();
		DateAndTimePicker.ClickOnLeftArrow();
		//Validamos que el se selecciono el mes con el Button Left arrow
		DateAndTimePicker.get
			.Month()
			.invoke('text')
			.then(Month => {
				expect(Month).to.equal(Cypress.env('ActualMonth').toString());
			});
		//Seleccionamos un Día random
		DateAndTimePicker.SelectedRandomDay();
		//Seleccionamos una Hora random
		DateAndTimePicker.SelectedRandomTime();
		//Validamos que la fue seleccionada correctamente
		DateAndTimePicker.get
			.DateAndTime()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.equal(DateAndTimePicker.ExpectedArrowButtonDate());
			});
	});
	it('5414 | TC09: Validar seleccionar una fecha aleatoria del campo “Date And Time” usando el botón “up year”', () => {
		DateAndTimePicker.ClickOnDateAndTime();
		DateAndTimePicker.ClickOnYear();
		DateAndTimePicker.ListOfTheYear();
		DateAndTimePicker.ClickOnUpYear();
		DateAndTimePicker.SelectedRandomYear();
		//Validamos que la lista de años a seleccionar han cambiado
		DateAndTimePicker.ActualListYear();
		DateAndTimePicker.get.YearOption().then(() => {
			expect(Cypress.env('ActualList')).to.not.equal(Cypress.env('DefaultList'));
		});
	});
	it('5414 | TC10: Validar seleccionar una fecha aleatoria del campo “Date And Time” usando el botón “down year”', () => {
		DateAndTimePicker.ClickOnDateAndTime();
		DateAndTimePicker.ClickOnYear();
		DateAndTimePicker.ListOfTheYear();
		DateAndTimePicker.ClickOnDownYear();
		DateAndTimePicker.SelectedRandomYear();
		//Validamos que la lista de años a seleccionar han cambiado
		DateAndTimePicker.ActualListYear();
		DateAndTimePicker.get.YearOption().then(() => {
			expect(Cypress.env('ActualList')).to.not.equal(Cypress.env('DefaultList'));
		});
	});
});
