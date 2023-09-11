import { calculatorPage } from '@pages/paypal/GX-30991_calculatorPage';
import data from '@data/paypal/paypalCalculator.json';
import { faker } from '@faker-js/faker';

describe('GX-30991: Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach('Precondition: para usar la Calculadora Paypal', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

		// * Descructuración:
		const { paypalFee, paypalCommission, PaypalCommissionsTitle, PaypalCalculatorReceiveTitle, PaypalCalculatorSendTitle } = calculatorPage.get;

		paypalCommission().should('have.value', '5,4');
		paypalFee().should('have.value', '0,30');
		PaypalCommissionsTitle().should('have.text', 'Las Comisiones PayPal');
		PaypalCalculatorReceiveTitle().should('have.text', 'Calculadora PayPal para Recibir');
		PaypalCalculatorSendTitle().should('have.text', 'Calculadora PayPal para Enviar');
	});

	it('GX-30993 | TC1: Verificar No poder Calcular la comisión cuando el campo queda vacío.', () => {
		const { inputParaRecibir, logMessageParaRecibir, inputParaEnviar, logMessageParaEnviar } = calculatorPage.get;
		//const givenValueToSend = Cypres._.random(0, 9);
		//const givenValueToGet = Cypress._.random(0, 9);
		const givenValueToGet = 5;
		const givenValueToSend = 9;

		inputParaRecibir().type(givenValueToGet.toString());
		inputParaRecibir().clear();
		logMessageParaRecibir().should('have.text', data.logMessage.clearedFieldParaRecibir);

		inputParaEnviar().type(givenValueToSend.toString());
		inputParaEnviar().clear();
		logMessageParaEnviar().should('have.text', data.logMessage.clearedFieldParaEnviar);
	});

	it('GX-30993 | TC2: Verificar poder Calcular la comisión cuando se introduce de cero a 306 caracteres.', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;
		const givenValueToGet = Cypress._.random(0, 306);
		const givenValueToSend = Cypress._.random(0, 306);

		inputParaRecibir().type(givenValueToGet.toString());
		calculatorPage.getInputNumber(inputHayQueEnviar()).then(calculatedValueToSend => {
			cy.log(calculatedValueToSend);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToGet(givenValueToGet, data.commission, data.fee);
			expect(calculatedValueToSend).equal(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommision(calculatedValueToSend, givenValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});

		inputParaEnviar().type(givenValueToSend.toString());
		calculatorPage.getInputNumber(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, data.commission, data.fee);
			expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommision(givenValueToSend, calculatedValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
	});

	it.skip('GX-30993 | TC3: Verificar poder Calcular la comisión cuando se introduce 306 caracteres.', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;
		const commission = 0.054;
		const fee = 0.3;

		const stringValueToGet = faker.random.numeric(5);
		inputParaRecibir().type(stringValueToGet);

		calculatorPage.getInputNumber(inputHayQueEnviar()).then(calculatedValueToSend => {
			cy.log(calculatedValueToSend);
			const givenValueToGet = parseFloat(stringValueToGet);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToGet(givenValueToGet, commission, fee);
			expect(calculatedValueToSend).equal(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommision(calculatedValueToSend, givenValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});

		const stringValueToSend = faker.random.numeric(306);
		expect(stringValueToSend).lengthOf(306);
		inputParaEnviar().type(stringValueToSend);

		calculatorPage.getInputNumber(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			const givenValueToSend = parseFloat(stringValueToSend);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, commission, fee);
			expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommision(givenValueToSend, calculatedValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
	});

	it.skip('GX-30993 | TC4: Verificar No poder Calcular la comisión cuando se introduce 307 o más caracteres.', () => {
		const { inputParaRecibir, inputHayQueEnviar, inputCommissionParaRecibir } = calculatorPage.get;
		const stringValueToGet = faker.random.numeric(308);
		inputParaRecibir().type(stringValueToGet.toString());

		calculatorPage.getInputValue(inputHayQueEnviar()).then(value => {
			const valueHayQueEnviar = value;
			calculatorPage.getInputValue(inputCommissionParaRecibir()).then(value => {
				const valueCommission = value;

				expect(valueHayQueEnviar).equal('Infinity');
				expect(valueCommission).equal('NaN'); //! Bug
			});
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
