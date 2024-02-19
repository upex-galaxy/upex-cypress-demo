import Action from '../../../support/pages/GX3-1313-DatePicker.Action';
import Verification from '../../../support/pages/GX3-1313-DatePicker.Verification';
import months from '../../../fixtures/data/Widgets/GX3-1313-DataPicker.json';

//! La mayoría de los TC están mal implementados, desde el punto de vista Testing y de la lógica de Código. Se puede corregir mucho.
//! Además, el problema está en que este PR debió ser mejor corregido antes de mergearlo.
describe.skip('GX3-1313 | TS: ⚡️ToolsQA | Widgets | Date Picker', () => {
	beforeEach('acceder a la pagina https://demoqa.com/automation-practice-form', () => {
		cy.visit('https://demoqa.com/date-picker');
		cy.url('https://demoqa.com/date-picker');
	});
	it('1314 | TC01 Verificar valores predeterminados en el campo select date.', () => {
		const verification = new Verification();
		verification.inputDate().then(date => {
			cy.get('#datePickerMonthYearInput').should('have.value', date);
		});
	});
	it('1314 | TC02 Verificar menú de selección de año en el campo select date.', () => {
		const verification = new Verification();
		verification.selectMonthAndYear();
		cy.get('.react-datepicker__month-select').should('have.length', Object.keys(months).length);
		cy.get('.react-datepicker__month-select option').each((option, index) => {
			cy.wrap(option).contains(months.months[index]);
		});
	});
	it('1314 | TC03 Verificar menú de selección de mes en el campo select date.', () => {
		const verification = new Verification();
		const expectedYears = verification.selectMonthAndYear();
		cy.get('.react-datepicker__year-select option').should('have.length', expectedYears.length);
		cy.get('.react-datepicker__year-select option').each(($option, index) => {
			cy.wrap($option).should('have.value', expectedYears[index]);
		});
	});
	it('1314 | TC04 Verificar poder seleccionar una fecha superior a la actual usando el menu de selección en el campo select date.', () => {
		const action = new Action();
		const date = action.selectMonthAndYear('mayor', 'select', '#datePickerMonthYearInput');
		cy.get('#datePickerMonthYearInput').should('have.value', date);
	});
	it('1314 | TC05 Verificar poder seleccionar una fecha inferior a la actual usando el menu de selección en el campo select date.', () => {
		const action = new Action();
		const date = action.selectMonthAndYear('menor', 'select', '#datePickerMonthYearInput');
		cy.get('#datePickerMonthYearInput').should('have.value', date);
	});
	it('1314 | TC06 Verificar poder seleccionar una fecha superior a la actual usando la paginación del mes en el campo select date.', () => {
		const action = new Action();
		const date = action.selectMonthAndYear('mayor', 'YearAndMonth', '#datePickerMonthYearInput');
		cy.get('#datePickerMonthYearInput').should('have.value', date);
	});
	it('1314 | TC07 Verificar poder seleccionar una fecha inferior a la actual usando la paginación del mes en el campo select date.', () => {
		const action = new Action();
		const date = action.selectMonthAndYear('menor', 'YearAndMonth', '#datePickerMonthYearInput');
		cy.get('#datePickerMonthYearInput').should('have.value', date);
	});
	it('1314 | TC08 Verificar valores predeterminados en el campo date and timer.', () => {
		const verification = new Verification(); //! Este TC está fallando en CI, además esta validación no lo veo correcto. Este archivo no debió ser Mergeado.
		verification.inputDateAndTime().then(date => {
			cy.get('#dateAndTimePickerInput').should('have.value', date);
		});
	});
	it('1314 | TC09 Verificar menú de selección de mes en el campo date and timer.', () => {
		const verification = new Verification();
		const currentMonth = verification.selectMonthTime();
		cy.get('.react-datepicker__month-option--selected_month').should('contain', '✓').and('contain', currentMonth);
	});
	it('1314 | TC10 Verificar poder seleccionar una fecha superior a la actual usando el menu de selección en el campo date and timer.', () => {
		const action = new Action();
		const date = action.selectMonthAndYear('mayor', 'select', '#dateAndTimePickerInput');
		cy.get('#dateAndTimePickerInput').should('have.value', date);
	});
	it('1314 | TC11 Verificar poder seleccionar una fecha inferior a la actual usando el menu de selección en el campo date and timer.', () => {
		const action = new Action();
		const date = action.selectMonthAndYear('menor', 'select', '#dateAndTimePickerInput');
		cy.get('#dateAndTimePickerInput').should('have.value', date);
	});
	it('1314 | TC12 Verificar poder seleccionar una fecha superior a la actual usando la paginación del mes en el campo date and timer.', () => {
		const action = new Action();
		const date = action.selectMonthAndYear('mayor', 'YearAndMonth', '#dateAndTimePickerInput');
		cy.get('#dateAndTimePickerInput').should('have.value', date);
	});
	it('1314 | TC13 Verificar poder seleccionar una fecha inferior a la actual usando la paginación del mes en el campo date and timer.', () => {
		const action = new Action();
		const date = action.selectMonthAndYear('menor', 'YearAndMonth', '#dateAndTimePickerInput');
		cy.get('#dateAndTimePickerInput').should('have.value', date);
	});
});
