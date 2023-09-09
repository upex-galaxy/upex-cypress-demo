import data from '../../../fixtures/data/GX-31869-paypal.json';
import { paypal } from '@pages/paypal/GX-31869-PaypalPage';
const commission = 0.054;
const fee = 0.3;

describe('This is your test project title', () => {
	beforeEach(() => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');
	});

	it('TC1: Validar monto a recibir', () => {
		paypal.elements.toGet().clear();
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const toGet = parseFloat(data.toGet);

		if (!isNaN(toGet)) {
			paypal.elements.toGet().type(toGet);
			//const toGet = paypal.elements.toGet().type(parseFloat(data.toGet));
		}
		cy.log(toGet);
		cy.log(fee);
		cy.log(commission);
		const calculatedValue = paypal.calculateToGet(toGet, fee, commission);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');
		cy.log(calculatedValue);
		cy.wait(2000);
		paypal.elements.readonly({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('TC2: Validar monto a enviar', () => {
		paypal.elements.toGet().clear();
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const amountSent = parseFloat(data.amountSent);
		if (!isNaN(amountSent)) {
			paypal.elements.amountSent().type(amountSent);
		}
		const calculatedValue = paypal.calculateamountSent(amountSent, fee, commission);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');
		cy.log(calculatedValue);
		cy.wait(2000);
		paypal.elements.recibe({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('TC3: Validar que el inputValue NO está entre 0 a 306 Caracteres y Infinito', () => {
		paypal.elements.toGet().clear();
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');
		paypal.elements.toGet().type('+');
		paypal.elements.message().should('be.visible').should('have.text', 'Solo puedes introducir Números');

		const numerostr = String(data.toGetMaximo);
		const toGet = parseFloat(data.toGet);

		if (numerostr.length > 306) {
			paypal.elements.toGet().type(data.toGetMaximo);

			cy.log(toGet);
			cy.log(fee);
			cy.log(commission);
			const calculatedValue = paypal.calculateToGet(toGet, fee, commission);
			const calculatedValueComa = calculatedValue.toString().replace('.', ',');
			cy.log(calculatedValue);
			cy.wait(2000);
			paypal.elements.readonly({ timeout: 10000 }).should('be.visible').invoke('val').should('equal', 'Infinity');
		}
	});

	it('TC4: Validar que el input Para recibir acepta valores numéricos negativos (-1)', () => {
		paypal.elements.toGet().type('-');
		paypal.elements.message().should('be.visible').should('have.text', 'Solo puedes introducir Números');
		paypal.elements.toGet().clear();
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');

		const toGet = parseFloat(data.toGetNegativo);
		cy.log(toGet);
		paypal.elements.toGet().type(toGet);
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const calculatedValue = paypal.calculateToGet(toGet, fee, commission);
		cy.log(calculatedValue);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');

		cy.wait(2000);
		paypal.elements.readonly({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('TC5: Validar que el imput si se envían acepta valores numéricos (-1)', () => {
		paypal.elements.amountSent().clear();
		paypal.elements.message1().should('be.visible').should('have.text', 'Indica cuánto vas a Enviar');
		const amountSent = parseFloat(data.amountSentNeg);
		cy.log(amountSent);
		paypal.elements.amountSent().type(amountSent, { force: true });
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const calculatedValue = paypal.calculateamountSent(amountSent, fee, commission);
		cy.log(calculatedValue);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');
		//cy.log(calculatedValueComa);
		cy.wait(2000);
		paypal.elements.recibe({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('TC8: Validar que los signos de puntuación o cualquier carácter especial no numérico se eliminen automáticamente.', () => {});
});
