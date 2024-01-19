import Verification from './GX3-1313-DatePicker.Verification';
import Action from './GX3-1313-DatePicker.Action';

class TestSuite {
	run() {
		this.preCondition();
		this.testCase01();
		this.testCase02();
		this.testCase03();
		this.testCase04();
		this.testCase05();
		this.testCase06();
		this.testCase07();
	}

	preCondition() {
		beforeEach('acceder a la pagina https://demoqa.com/automation-practice-form', () => {
			cy.visit('https://demoqa.com/date-picker');
		});
	}

	testCase01() {
		it('1314 | TC01 Verificar valores predeterminados en el campo select date.', () => {
			const verification = new Verification();
			verification.inputDate();
		});
	}

	testCase02() {
		it('1314 | TC02 Verificar menu de selección de año en el campo select date.', () => {
			const action = new Action();
			const verification = new Verification();
			action.clic('#datePickerMonthYearInput');
			verification.selectMonth();
		});
	}

	testCase03() {
		it('1314 | TC03 Verificar menu de selección de mes en el campo select date.', () => {
			const action = new Action();
			const verification = new Verification();
			action.clic('#datePickerMonthYearInput');
			verification.selectYear();
		});
	}

	testCase04() {
		it('1314 | TC04 Verificar poder seleccionar una fecha superior a la actual usando el menu de selección de Menú de selección de mes y año.', () => {
			const action = new Action();
			const verification = new Verification();
			const date = action.selectMonthAndYear('mayor');
			verification.inputDate(date);
		});
	}

	testCase05() {
		it('1314 | TC05 Verificar poder seleccionar una fecha inferior a la actual usando el menu de selección de Menú de selección de mes y año.', () => {
			const action = new Action();
			const verification = new Verification();
			const date = action.selectMonthAndYear('menor');
			verification.inputDate(date);
		});
	}

	testCase06() {
		it('1314 | TC06 Verificar poder seleccionar una fecha superior a la actual usando la paginación del mes.', () => {
			const action = new Action();
			const verification = new Verification();
			const date = action.selectMonthAndYear('mayor', 'YearAndMonth');
			verification.inputDate(date);
		});
	}

	testCase07() {
		it('1314 | TC07 Verificar poder seleccionar una fecha inferior a la actual usando la paginación del mes.', () => {
			const action = new Action();
			const verification = new Verification();
			const date = action.selectMonthAndYear('menor', 'YearAndMonth');
			verification.inputDate(date);
		});
	}
}

export default TestSuite;
