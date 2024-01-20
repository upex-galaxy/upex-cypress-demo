import Verification from './GX3-1313-DatePicker.Verification';
import Action from './GX3-1313-DatePicker.Action';

class TestSuite {
	constructor() {
		this.testSuite = [
			'1314 | TC01 Verificar valores predeterminados en el campo select date.',
			'1314 | TC02 Verificar menú de selección de año en el campo select date.',
			'1314 | TC03 Verificar menú de selección de mes en el campo select date.',
			'1314 | TC04 Verificar poder seleccionar una fecha superior a la actual usando el menu de selección en el campo select date.',
			'1314 | TC05 Verificar poder seleccionar una fecha inferior a la actual usando el menu de selección en el campo select date.',
			'1314 | TC06 Verificar poder seleccionar una fecha superior a la actual usando la paginación del mes en el campo select date.',
			'1314 | TC07 Verificar poder seleccionar una fecha inferior a la actual usando la paginación del mes en el campo select date.',
			'1314 | TC08 Verificar valores predeterminados en el campo date and timer.',
			'1314 | TC09 Verificar menú de selección de mes en el campo date and timer.',
			'1314 | TC10 Verificar poder seleccionar una fecha superior a la actual usando el menu de selección en el campo date and timer.',
			'1314 | TC11 Verificar poder seleccionar una fecha inferior a la actual usando el menu de selección en el campo date and timer.',
			'1314 | TC12 Verificar poder seleccionar una fecha superior a la actual usando la paginación del mes en el campo date and timer.',
			'1314 | TC13 Verificar poder seleccionar una fecha inferior a la actual usando la paginación del mes en el campo date and timer.',
		];

		this.testCases = [
			[['verification.inputDate']],
			[['clic', '#datePickerMonthYearInput'], ['verification.selectMonth']],
			[['clic', '#datePickerMonthYearInput'], ['verification.selectYear']],
			[['action.selectMonthAndYear', 'mayor', 'select', '#datePickerMonthYearInput'], ['verification.inputDate']],
			[['action.selectMonthAndYear', 'menor', 'select', '#datePickerMonthYearInput'], ['verification.inputDate']],
			[['action.selectMonthAndYear', 'mayor', 'YearAndMonth', '#datePickerMonthYearInput'], ['verification.inputDate']],
			[['action.selectMonthAndYear', 'menor', 'YearAndMonth', '#datePickerMonthYearInput'], ['verification.inputDate']],
			[['verification.inputDateAndTime']],
			[['verification.selectMonthTime']],
			[['action.selectMonthAndYear', 'mayor', 'select', '#dateAndTimePickerInput'], ['verification.inputDateAndTime']],
			[['action.selectMonthAndYear', 'menor', 'select', '#dateAndTimePickerInput'], ['verification.inputDateAndTime']],
			[['action.selectMonthAndYear', 'mayor', 'YearAndMonth', '#dateAndTimePickerInput'], ['verification.inputDateAndTime']],
			[['action.selectMonthAndYear', 'menor', 'YearAndMonth', '#dateAndTimePickerInput'], ['verification.inputDateAndTime']],
		];
	}

	run() {
		this.preCondition();

		for (let numberTestSuite = 0; numberTestSuite < this.testSuite.length; numberTestSuite++) {
			it(this.testSuite[numberTestSuite], () => {
				let date = undefined;
				const action = new Action();
				const verification = new Verification();
				for (let numberStep = 0; numberStep < this.testCases[numberTestSuite].length; numberStep++) {
					cy.log(this.testCases[numberTestSuite][numberStep][0]);
					switch (this.testCases[numberTestSuite][numberStep][0]) {
						case 'clic':
							action.clic(this.testCases[numberTestSuite][numberStep][1]);
							break;
						case 'verification.inputDate':
							verification.inputDate(date);
							break;
						case 'verification.selectMonth':
							verification.selectMonth();
							break;
						case 'verification.selectYear':
							verification.selectYear();
							break;
						case 'action.selectMonthAndYear':
							date = action.selectMonthAndYear(
								this.testCases[numberTestSuite][numberStep][1],
								this.testCases[numberTestSuite][numberStep][2],
								this.testCases[numberTestSuite][numberStep][3]
							);
							break;
						case 'verification.inputDateAndTime':
							verification.inputDateAndTime(date);
							break;
						case 'verification.selectMonthTime':
							verification.selectMonthTime();
							break;
					}
				}
			});
		}
	}

	preCondition() {
		beforeEach('acceder a la pagina https://demoqa.com/automation-practice-form', () => {
			cy.visit('https://demoqa.com/date-picker');
		});
	}
}

export default TestSuite;
