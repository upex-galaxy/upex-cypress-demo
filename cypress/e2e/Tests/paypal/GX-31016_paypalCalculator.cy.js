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

	it.only('31017 | TC5: Validar poder calcular la comisión cuando se introduce 306 caracteres.', () => {
		const { inputToReceive, inputToSend, inputHayQueEnviar, inputCommissionToReceive, inputSeReciben, inputCommissionToSend } =
			calculatorPage.get;

		const stringValueToGet = faker.random.numeric(306);
		inputToReceive().type(stringValueToGet);

		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			cy.log(calculatedValueToSend);
			cy.log(parseFloat(calculatedValueToSend).toFixed(2));

			const givenValueToGet = parseFloat(stringValueToGet);

			const expectedCalculatedValue = calculatorPage.calculateFormulaToReceive(givenValueToGet, data.commission, data.fee);

			//expect(calculatedValueToSend).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionToReceive()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				cy.log(parseFloat(calculatedCommission).toFixed(2));
				//expect(calculatedCommission.toString()).to.equal(Cypress.env('FeeTotal'));
			});
		});

		const stringValueToSend = faker.random.numeric(306);
		inputToSend().type(stringValueToSend);

		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			//cy.log(calculatedValueToGet);

			const givenValueToSend = parseFloat(stringValueToSend);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(givenValueToSend, data.commission, data.fee);

			//expect(calculatedValueToGet).equal(expectedCalculatedValue);

			calculatorPage.getInputValue(inputCommissionToSend()).then(calculatedCommission => {
				//cy.log(calculatedCommission);
				//expect(calculatedCommission.toString()).to.equal(Cypress.env('SendTotalFees'));
			});
		});
	});

	it.skip('', () => {
		var numeroEnNotacionCientifica = '1,1.531.137.903.689.702e+43';
		var numeroCompleto = parseFloat(numeroEnNotacionCientifica.replace(',', '').replace('e+', 'e'));
		cy.log(numeroEnNotacionCientifica);
		cy.log(numeroCompleto); // 11.531
	});
});

removeLogs();
