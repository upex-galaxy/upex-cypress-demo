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
		paypal.elements.toCharge({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
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
		const numerostr = String(data.toGetInfinito);
		const toGetMax = parseFloat(data.toGetInfinito);

		if (numerostr.length > 306) {
			paypal.elements.toGet().type(numerostr);
			const calculatedValue = paypal.calculateToGet(toGetMax, fee, commission);
			const calculatedValueComa = calculatedValue.toString().replace('.', ',');
			cy.log(calculatedValue);
			cy.wait(2000);
			paypal.elements.toCharge({ timeout: 10000 }).should('be.visible').invoke('val').should('equal', 'Infinity');
		}
	});

	it('TC4: Validar que el input Para recibir acepta valores numéricos negativos (-1)', () => {
		paypal.elements.toGet().type('-');
		paypal.elements.message().should('be.visible').should('have.text', 'Solo puedes introducir Números');
		paypal.elements.toGet().clear();
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');

		const toGet = String(data.toGetNegativo);
		const toGetNegativo = parseFloat(data.toGetNegativo);
		cy.log(toGet);
		paypal.elements.toGet().type(toGet);
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const calculatedValue = paypal.calculateToGet(toGetNegativo, fee, commission);
		cy.log(calculatedValue);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');

		cy.wait(2000);
		paypal.elements.toCharge({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('TC5: Validar que el imput si se envían acepta valores numéricos (-1)', () => {
		paypal.elements.amountSent().type('-');
		cy.wait(2000);
		paypal.elements.commissionSent().eq(1).should('be.visible').should('have.value', 'NaN');
		paypal.elements.amountSent().clear();
		paypal.elements.message1().should('be.visible').should('have.text', 'Indica cuánto vas a Enviar');

		const amountStr = String(data.amountSentNeg);
		const value = data.amountSentNeg;
		const amountSent = parseFloat(value).toFixed(2);

		paypal.elements.amountSent().type(amountStr);
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const calculatedValue = paypal.calculateamountSent(amountSent, fee, commission);
		cy.log(calculatedValue);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');

		cy.wait(2000);
		paypal.elements.recibe({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('TC6: Validar que el inputValue si se envían NO está entre 0 a 306 Caracteres y Infinito', () => {
		paypal.elements.amountSent().clear();
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		paypal.elements.message1().should('be.visible').should('have.text', 'Indica cuánto vas a Enviar');

		const numerostr = String(data.amountSentInfinito);
		const toGet = parseFloat(data.amountSentInfinito);

		if (numerostr.length > 306) {
			paypal.elements.amountSent().type(numerostr);

			cy.log(toGet);
			cy.log(fee);
			cy.log(commission);
			const calculatedValue = paypal.calculateamountSent(toGet, fee, commission);
			const calculatedValueComa = calculatedValue.toString().replace('.', ',');
			cy.log(calculatedValue);
			cy.wait(2000);
			paypal.elements.recibe({ timeout: 10000 }).should('be.visible').invoke('val').should('equal', 'NaN');
		}
	});
});
