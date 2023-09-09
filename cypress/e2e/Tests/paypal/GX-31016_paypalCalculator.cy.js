import { calculatorPage } from '@pages/paypal/GX-31016_CalculatorPage';
import data from '@data/paypal/GX-31016_PayPalCalculator.json';
import { faker } from '@faker-js/faker';
import { removeLogs } from '@helper/RemoveLogs';

describe('GX-31016: Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach('Precondición: Para usar la calculadora PayPal', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');
		cy.url().should('contain', 'calculadora-comisiones-paypal');

		const { commission, fee, headerTitle, commissionsTitle, calculatorReceiveTitle, calculatorSendTitle } = calculatorPage.get;

		const convertCommission = (data.commission * 100).toString().replace('.', ',');
		const convertFee = data.fee.toString().replace('.', ',') + '0';

		commission().should('have.value', convertCommission);
		fee().should('have.value', convertFee);
		headerTitle().should('have.text', data.headersTitle);
		commissionsTitle().should('have.text', data.commissionsTitle);
		calculatorReceiveTitle().should('have.text', data.calculatorReceiveTitle);
		calculatorSendTitle().should('have.text', data.calculatorSendTitle);
	});

	it('31017 | TC1: Validar poder calcular la comisión cuando se introduce 1 caracter.', () => {
		const { inputToReceive, inputToSend, inputHayQueEnviar, inputCommissionToReceive, inputSeReciben, inputCommissionToSend } =
			calculatorPage.get;

		//* Generar un número aleatorio en el input "Para Recibir" entre 0 y 9.
		const amountToReceive = Cypress._.random(0, 9);

		inputToReceive().type(amountToReceive.toString());

		calculatorPage.getInputNumber(inputHayQueEnviar()).then(calculatedValueToSend => {
			//* calculateFormulaToReceive(inputValue, commission, fee)
			const expectedCalculatedValue = calculatorPage.calculateFormulaToReceive(amountToReceive, data.commissionForCalculate, data.fee);

			expect(calculatedValueToSend).eql(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionToReceive()).then(calculatedCommission => {
				const expectedCommission = calculatorPage.getOutputCommission(calculatedValueToSend, amountToReceive);

				expect(calculatedCommission.toString()).eql(expectedCommission.toFixed(2));
			});
		});

		const amountToSend = Cypress._.random(0, 9);

		inputToSend().type(amountToSend.toString());

		calculatorPage.getInputNumber(inputSeReciben()).then(calculatedValueToGet => {
			//* calculateFormulaToSend(inputValue, commission, fee)
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(amountToSend, data.commissionForCalculate, data.fee);

			expect(calculatedValueToGet).eql(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionToSend()).then(calculatedCommission => {
				const expectedCommission = calculatorPage.getOutputCommission(amountToSend, calculatedValueToGet);

				expect(calculatedCommission.toString()).eql(expectedCommission.toFixed(2));
			});
		});
	});

	it('31017 | TC2: Validar NO poder calcular la comisión cuando el campo queda vacío.', () => {
		const { inputToReceive, messageToReceive, inputToSend, messageToSend } = calculatorPage.get;
		const amountToReceive = Cypress._.random(0, 9);
		const amountToSend = Cypress._.random(0, 9);

		inputToReceive().type(amountToReceive.toString()).clear();
		messageToReceive().should('have.text', data.message.clearedFieldParaRecibir);

		inputToSend().type(amountToSend.toString()).clear();
		messageToSend().should('have.text', data.message.clearedFieldParaEnviar);
	});

	it('31017 | TC5: Validar poder calcular la comisión cuando se introduce 306 caracteres.', () => {
		const { inputToReceive, inputToSend, inputHayQueEnviar, inputCommissionToReceive, inputSeReciben, inputCommissionToSend } =
			calculatorPage.get;

		const stringValueToGet = faker.random.numeric(306);
		inputToReceive().type(stringValueToGet);

		calculatorPage.getInputNumber(inputHayQueEnviar()).then(calculatedValueToSend => {
			const givenValueToGet = parseFloat(stringValueToGet);

			const expectedCalculatedValue = calculatorPage.calculateFormulaToReceive(givenValueToGet, data.commissionForCalculate, data.fee);

			expect(calculatedValueToSend).eql(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionToReceive()).then(calculatedCommission => {
				expect(calculatedCommission.toString()).eql(Cypress.env('FeeTotal'));
			});
		});

		const stringValueToSend = faker.random.numeric(306);
		inputToSend().type(stringValueToSend);

		calculatorPage.getInputNumber(inputSeReciben()).then(calculatedValueToGet => {
			const givenValueToSend = parseFloat(stringValueToSend);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, data.commissionForCalculate, data.fee);

			expect(calculatedValueToGet).eql(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionToSend()).then(calculatedCommission => {
				expect(calculatedCommission.toString()).eql(Cypress.env('SendTotalFees'));
			});
		});
	});

	it('31017 | TC7: Validar NO poder calcular la comisión cuando se introduce 306 carácteres y sólo se inserta "+" o "-".', () => {
		const { inputToReceive, inputToSend, inputHayQueEnviar, inputCommissionToReceive, inputSeReciben, inputCommissionToSend } =
			calculatorPage.get;

		const stringValueToGet = faker.random.numeric(306);
		inputToReceive().type(stringValueToGet);
	});
});

removeLogs();
