import { datePicker } from '../../../support/pages/GX3-3126-DatePicker.page';
describe ('GX3-3126 | ToolsQA | Widgets | Date Picker', () => {
	beforeEach (() => {
		cy.visit ('https://demoqa.com/date-picker');
	});
});
it ('GX3-3127 | TC1: Validar poder seleccionar fecha actual en formato correcto', () => {
	datePicker.selectDatePicker();
});