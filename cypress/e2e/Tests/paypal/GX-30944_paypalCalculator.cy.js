import { calculatorPage } from '@pages/paypal/GX-30944_CalculatorPage';

describe('GX-30944: Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
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

	it('TC1: Verificar poder Calcular la comisión cuando se introduce 1 caracter', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;
		const commission = 0.054;
		const fee = 0.3;

		const givenValueToGet = 5;
		inputParaRecibir().type(givenValueToGet.toString());

		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			cy.log(calculatedValueToSend);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToGet(givenValueToGet, commission, fee);
			expect(calculatedValueToSend).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommision(calculatedValueToSend, givenValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});

		const givenValueToSend = 9;
		inputParaEnviar().type(givenValueToSend.toString());

		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, commission, fee);
			expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommision(givenValueToSend, calculatedValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
	});

	it.only('TC2: Verificar poder Calcular la comisión cuando se introduce 306 caracteres', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;
		const commission = 0.054;
		const fee = 0.3;

		const stringValueToGet =
			'345645645666666666666666666666666663456345634563456435645364563456453645634563456345634563546345634566346766767465746874787685678567856785678567856785678657856786578567856786786578678678547567463456345634563563456345634565643563456456346435634566546634566736736767653746574567847567847878675485678755877777';
		inputParaRecibir().type(stringValueToGet);

		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			cy.log(calculatedValueToSend);
			const givenValueToGet = parseFloat(stringValueToGet);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToGet(givenValueToGet, commission, fee);
			expect(calculatedValueToSend).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommision(calculatedValueToSend, givenValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});

		const stringValueToSend =
			'345645645666666666666666666666666663456345634563456435645364563456453645634563456345634563546345634566346766767465746874787685678567856785678567856785678657856786578567856786786578678678547567463456345634563563456345634565643563456456346435634566546634566736736767653746574567847567847878675485678755877777';
		inputParaEnviar().type(stringValueToSend);

		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			const givenValueToSend = parseFloat(stringValueToSend);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, commission, fee);
			expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommision(givenValueToSend, calculatedValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
	});
});
