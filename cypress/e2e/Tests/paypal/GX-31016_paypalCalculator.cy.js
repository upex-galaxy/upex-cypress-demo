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

	it.skip('31017 | TC1: Validar poder calcular la comisión cuando se introduce 1 caracter.', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionToReceive, inputSeReciben, inputCommissionToSend } =
			calculatorPage.get;

		//* Generar un número aleatorio en el input "Para Recibir" entre 0 y 9.
		const amountToReceive = Cypress._.random(0, 9);

		inputParaRecibir().type(amountToReceive.toString());

		calculatorPage.getInputNumber(inputHayQueEnviar()).then(calculatedValueToSend => {
			//* calculateFormularioToSend(inputValue, commission, fee)
			const expectedCalculatedValue = calculatorPage.calculateFormulaToReceive(amountToReceive, data.commission, data.fee);

			expect(calculatedValueToSend).equal(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionToReceive()).then(calculatedCommission => {
				const expectedCommission = calculatorPage.getOutputCommission(calculatedValueToSend, amountToReceive);

				expect(calculatedCommission).eql(expectedCommission);
			});
		});

		const amountToSend = Cypress._.random(0, 9);

		inputParaEnviar().type(amountToSend.toString());

		calculatorPage.getInputNumber(inputSeReciben()).then(calculatedValueToGet => {
			//* calculateFormularioToSend(inputValue, commission, fee)
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(amountToSend, data.commission, data.fee);

			expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputNumber(inputCommissionToSend()).then(calculatedCommission => {
				const expectedCom = calculatorPage.getOutputCommission(amountToSend, calculatedValueToGet);

				expect(calculatedCommission).eql(expectedCom);
			});
		});
	});

	it.skip('31017 | TC2: Validar NO poder calcular la comisión cuando el campo queda vacío.', () => {
		const { inputToReceive, messageToReceive, inputToSend, messageToSend } = calculatorPage.get;
		const amountToReceive = Cypress._.random(0, 9);
		const amountToSend = Cypress._.random(0, 9);

		inputToReceive().type(amountToReceive.toString()).clear();
		messageToReceive().should('have.text', data.message.clearedFieldParaRecibir);

		inputToSend().type(amountToSend.toString()).clear();
		messageToSend().should('have.text', data.message.clearedFieldParaEnviar);
	});

	it.skip('31017 | TC3: Validar NO poder calcular la comisión cuando se introduce 1 carácter y se inserta carácter no numérico.', () => {});

	it.only('31017 | TC5: Validar poder calcular la comisión cuando se introduce 306 caracteres.', () => {
		const { inputToReceive, inputToSend, inputHayQueEnviar, inputCommissionToReceive, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;

		// Generar 306 números aleatorios.
		const amountToReceive = faker.random.numeric(306);

		inputToReceive().type(amountToReceive);

		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			const givenValueToGet = parseFloat(amountToReceive);

			const expectedCalculatedValue = calculatorPage.calculateFormulaToReceive(givenValueToGet, data.commission, data.fee);

			//cy.log(calculatedValueToSend.toString().replace(/[,\.]/g, ''));
			//cy.log(calculatedValueToSend);
			expect(calculatedValueToSend.toString().replace(/[,\.]/g, '')).to.include(expectedCalculatedValue.toString().replace(/[,\.]/g, ''));

			calculatorPage.getInputValue(inputCommissionToReceive()).then(calculatedCommission => {
				const expectedCommission = calculatorPage.getOutputCommission(calculatedValueToSend, amountToReceive);

				cy.log(expectedCommission);

				//expect(calculatedCommission).eql(expectedCommission);
			});
		});

		// Generar 306 números aleatorios.
		/*const amountToSend = faker.random.numeric(306);

		inputToSend().type(amountToSend);

		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			const givenValueToSend = parseFloat(amountToSend);

			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, data.commission, data.fee);

			expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionParaEnviar()).then(calculatedCommission => {
				const expectedCom = calculatorPage.getOutputCommission(amountToSend, calculatedValueToGet);

				expect(calculatedCommission).eql(expectedCom);
			});
		});*/
	});
});

removeLogs();
