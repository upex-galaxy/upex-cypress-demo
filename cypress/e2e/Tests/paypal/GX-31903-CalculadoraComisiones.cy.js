import { calculatorPage } from '@pages/paypal/GX-31903-CalculadorComsiones.Page';
import { faker } from '@faker-js/faker';
import data from '@data/paypal/GX-31903-CalculadoraComision.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

const urlCalculadorPaypal = 'https://vendercomprardolares.com/calculadora-comisiones-paypal.php';

describe('GX-31903-�-paypal-comisiones-calcular-las-comisiones-para-enviar-y-recibir', () => {
	beforeEach('Precondition: para usar la Calculadora Paypal', () => {
		cy.visit(urlCalculadorPaypal);
		// * Destructuración:
		const { paypalFee, paypalCommission, PaypalCommissionsTitle, PaypalCalculatorReceiveTitle, PaypalCalculatorSendTitle } = calculatorPage.get;
		paypalCommission().should('have.value', data.commissionDefault);
		paypalFee().should('have.value', data.feeDefault);
		PaypalCommissionsTitle().should('have.text', data.Title.commission);
		PaypalCalculatorReceiveTitle().should('have.text', data.Title.paraRecibir);
		PaypalCalculatorSendTitle().should('have.text', data.Title.paraEnviar);
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
	it.skip('31904 | TC3: Verificar NO poder Calcular la comisión hay que Recibir cuando se introduce 307 caracteres', () => {
		//! Aquí tenemos un defecto: Cuando se ingresan 307 caracteres no aparece "NaN" en el campo Fee aparece "Infinity"
		const { inputParaRecibir, inputHayQueEnviar, inputCommissionParaRecibir } = calculatorPage.get;
		const stringValueToGet = faker.random.numeric(307);
		inputParaRecibir().type(stringValueToGet);
		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			cy.log(calculatedValueToSend);
			expect(calculatedValueToSend.toString()).equal(data.MaxCaracteres.CommissionError);
			calculatorPage.getInputValue(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				expect(calculatedCommission.toString()).to.equal(data.MaxCaracteres.FeeError);
			});
		});
		//! Tener en cuenta que el calculo no se hace con cantidad de caracteres sino con un valor muy grande que luego de cierto
		//! valor esté ya no se calcula, ejemplo de cantidad de caracteres:
		//! Si ingreso un número flotante que tenga 306 caracteres antes de la coma y luego 10 caracteres luego de la coma esté
		//! será calculado y nos mostrara los valores de comisión y fee
	});
	it.skip('31904 | TC4: Verificar NO poder Calcular la comisión hay que Enviar cuando se introduce 307 caracteres', () => {
		//! Aquí tenemos un defecto: Cuando se ingresan 307 caracteres no aparece "NaN" en el campo Fee sino que se hace el calculo
		const { inputParaEnviar, inputSeReciben, inputCommissionParaEnviar } = calculatorPage.get;
		const stringValueToSend = faker.random.numeric(307);
		inputParaEnviar().type(stringValueToSend);
		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			expect(calculatedValueToGet.toString()).equal(data.MaxCaracteres.CommissionError);
			calculatorPage.getInputValue(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				expect(calculatedCommission.toString()).to.equal(data.MaxCaracteres.FeeError);
			});
		});
	});
	it('31904 | TC5: Verificar poder Calcular la comisión cuando se introduce un numero negativo', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;
		calculatorPage.CommissionAndFeeDefault();
		//* Para Valores Enteros
		let givenValueToGet = Cypress._.random(-1000, 0);
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
		const givenValueToSend = Cypress._.random(-1000, 0);
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
		//* Para Valores Float
		let givenValueToGetFloat = Cypress._.random(-100, 0, true).toFixed(2);
		cy.log(givenValueToGetFloat);
		inputParaRecibir().clear().type(givenValueToGetFloat.toString().replace('.', ','));
		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			const expectedCalculatedValue = calculatorPage.calculateFormulaToGet(
				parseFloat(givenValueToGetFloat),
				Cypress.env('Commission'),
				Cypress.env('Fee')
			);
			expect(calculatedValueToSend).equal(expectedCalculatedValue);
			calculatorPage.getInputValue(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommission(calculatedValueToSend, givenValueToGetFloat);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
		const givenValueToSendFloat = Cypress._.random(-100, 0, true).toFixed(2);
		inputParaEnviar().clear().type(givenValueToSendFloat.toString().replace('.', ','));
		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(
				givenValueToSendFloat,
				Cypress.env('Commission'),
				Cypress.env('Fee')
			);
			expect(calculatedValueToGet).equal(expectedCalculatedValue);
			calculatorPage.getInputValue(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommission(givenValueToSendFloat, calculatedValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
	});
	it('31904 | TC6: Verificar poder Calcular la comisión cuando se introduce el caracter "+" y luego un número', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir, inputSeReciben, inputCommissionParaEnviar } =
			calculatorPage.get;
		calculatorPage.CommissionAndFeeDefault();
		//* Para Valores Enteros
		let givenValueToGet = Cypress._.random(0, 100);
		inputParaRecibir().type('+' + givenValueToGet.toString());
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
		const givenValueToSend = Cypress._.random(0, 100);
		inputParaEnviar().type('+' + givenValueToSend.toString());
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
		//* Para Valores Float
		let givenValueToGetFloat = Cypress._.random(0, 100, true).toFixed(2);
		cy.log(givenValueToGetFloat);
		inputParaRecibir()
			.clear()
			.type('+' + givenValueToGetFloat.toString().replace('.', ','));
		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			const expectedCalculatedValue = calculatorPage.calculateFormulaToGet(
				parseFloat(givenValueToGetFloat),
				Cypress.env('Commission'),
				Cypress.env('Fee')
			);
			expect(calculatedValueToSend).equal(expectedCalculatedValue);
			calculatorPage.getInputValue(inputCommissionParaRecibir()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommission(calculatedValueToSend, givenValueToGetFloat);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
		const givenValueToSendFloat = Cypress._.random(0, 100, true).toFixed(2);
		inputParaEnviar()
			.clear()
			.type('+' + givenValueToSendFloat.toString().replace('.', ','));
		calculatorPage.getInputValue(inputSeReciben()).then(calculatedValueToGet => {
			cy.log(calculatedValueToGet);
			const expectedCalculatedValue = calculatorPage.calculateFormulaToSend(
				givenValueToSendFloat,
				Cypress.env('Commission'),
				Cypress.env('Fee')
			);
			expect(calculatedValueToGet).equal(expectedCalculatedValue);
			calculatorPage.getInputValue(inputCommissionParaEnviar()).then(calculatedCommission => {
				cy.log(calculatedCommission);
				const expectedCom = calculatorPage.getOutputCommission(givenValueToSendFloat, calculatedValueToGet);
				expect(calculatedCommission).equal(expectedCom);
			});
		});
	});
	it('31904 | TC7: Validar que se muestre el mensaje de la BR cuando el input se envía vació', () => {
		const { inputParaRecibir, inputParaEnviar, LogMsgRecibir, LogMsgEnviar } = calculatorPage.get;
		inputParaRecibir().type('{enter}');
		LogMsgRecibir().should('contain.text', data.LogMsg.Recibir);
		inputParaEnviar().type('{enter}');
		LogMsgEnviar().should('contain.text', data.LogMsg.Enviar);
	});
	it('31904 | TC8: Validar que se muestre el mensaje de la BR cuando el input se borra el contenido', () => {
		const { inputParaRecibir, inputParaEnviar, LogMsgRecibir, LogMsgEnviar } = calculatorPage.get;
		let randomInput = Cypress._.random(0, 100);
		inputParaRecibir().type(randomInput).clear();
		LogMsgRecibir().should('contain.text', data.LogMsg.Recibir);
		inputParaEnviar().type(randomInput).clear();
		LogMsgEnviar().should('contain.text', data.LogMsg.Enviar);
	});

	it.skip('prueba de Fee y commision (Fuera de Scope)', () => {
		// * estába probando que se pudiera cambiar las comisiones y el fee
		const { paypalFee, paypalCommission } = calculatorPage.get;
		const randomCommission = Cypress._.random(0, 50, true).toFixed(2).toString().replace('.', ',');
		const randomFee = (Cypress._.random(0, 100, true) / 10).toFixed(2).toString().replace('.', ',');
		paypalCommission().clear().type(randomCommission);
		paypalCommission().should('have.value', randomCommission);
		paypalFee().clear().type(randomFee);
		paypalFee().should('have.value', randomFee);
	});
});
