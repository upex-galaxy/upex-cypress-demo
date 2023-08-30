import { calculatorPage } from '@pages/paypal/GX-31903-CalculadorComsiones.Page';
const CalculadoraCommission = 'https://vendercomprardolares.com/calculadora-comisiones-paypal.php';
import { faker } from '@faker-js/faker';

describe('GX-31903-�-paypal-comisiones-calcular-las-comisiones-para-enviar-y-recibir', () => {
	beforeEach('Precondition: para usar la Calculadora Paypal', () => {
		cy.visit(CalculadoraCommission);
		// * Destructuración:
		const { paypalFee, paypalCommission, PaypalCommissionsTitle, PaypalCalculatorReceiveTitle, PaypalCalculatorSendTitle } = calculatorPage.get;
		paypalCommission().should('have.value', '5,4');
		paypalFee().should('have.value', '0,30');
		PaypalCommissionsTitle().should('have.text', 'Las Comisiones PayPal');
		PaypalCalculatorReceiveTitle().should('have.text', 'Calculadora PayPal para Recibir');
		PaypalCalculatorSendTitle().should('have.text', 'Calculadora PayPal para Enviar');
	});
	it('31904 | TC1: Verificar poder Calcular la comisión cuando se introduce 1 caracter', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;
		calculatorPage.CommissionAndFeeDefault();

		let givenValueToGet = Cypress._.random(0, 9);
		inputParaRecibir().type(givenValueToGet.toString());

		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			cy.log(givenValueToGet, Cypress.env('Commission'), Cypress.env('Fee'));
			const expectedCalculatedValue = calculatorPage.calculateFormulaToGet(givenValueToGet, Cypress.env('Commission'), Cypress.env('Fee'));
			expect(calculatedValueToSend).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommission(calculatedValueToSend, givenValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});

		const givenValueToSend = Cypress._.random(0, 9);
		inputParaEnviar().type(givenValueToSend.toString());

		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, Cypress.env('Commission'), Cypress.env('Fee'));
			expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommission(givenValueToSend, calculatedValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
	});

	it('31904 | TC2: Verificar poder Calcular la comisión cuando se introduce 306 caracteres', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;
		calculatorPage.CommissionAndFeeDefault();

		const stringValueToGet = faker.random.numeric(306);
		inputParaRecibir().type(stringValueToGet);

		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			cy.log(calculatedValueToSend);
			const givenValueToGet = parseFloat(stringValueToGet);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToGet(givenValueToGet, Cypress.env('Commission'), Cypress.env('Fee'));
			expect(calculatedValueToSend).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				expect(calculatedCommission.toString()).to.equal(Cypress.env('FeeTotal'));
			});
		});

		const stringValueToSend = faker.random.numeric(306);
		inputParaEnviar().type(stringValueToSend);

		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			const givenValueToSend = parseFloat(stringValueToSend);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, Cypress.env('Commission'), Cypress.env('Fee'));
			expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				expect(calculatedCommission.toString()).to.equal(Cypress.env('SendTotalFees'));
			});
		});
	});
});
