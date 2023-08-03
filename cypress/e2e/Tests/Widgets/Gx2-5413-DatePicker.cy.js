import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import the from '@data/GX2-5413-DatePicker.json';
import { DatePicker } from '@pages/Widgets/GX2-5413-DatePicker.Page';

describe('GX2-5413-✅-tools-qa-widgets-date-picker', () => {
	beforeEach('Usuario debería estar situado en la pagina en DatePicker', () => {
		cy.visit(the.url);
		cy.url().should('contain', the.url);
	});
	it('5414 | TC01: Validar seleccionar una fecha aleatoria del campo “Select Date”', () => {
		//Validamos que la fecha por default es la fecha actual
		DatePicker.get.SelectDate().should('have.value', DatePicker.CurrentDate());
		//Seleccionamos una Fecha aleatoria
		DatePicker.ClickOnSelectDate();
		DatePicker.SelectRandomYear();
		DatePicker.SelectRandomMonth();
		DatePicker.SelectRandomDay();
		//Validamos que la fecha aleatoria seleccionada se visualiza correctamente
		DatePicker.get
			.SelectDate()
			.invoke('val')
			.then(dateValue => {
				expect(dateValue).to.equal(DatePicker.ExpectedDate());
			});
	});
});
