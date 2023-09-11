import data from '../../../fixtures/data/GX-31869-paypal.json';
import { paypal } from '@pages/paypal/GX-31869-PaypalPage';
const commission = data.percentage;
const fee = data.fee;

describe('31869|✅Paypal | Comisiones | Calcular las comisiones para enviar y recibir ', () => {
	beforeEach(() => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');
	});

	it('31870 | TC1: Validar monto a recibir', () => {
		paypal.elements.toGet().clear();
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const toGet = parseFloat(data.toGet);
		const toGetStr = String(data.toGet).replace('.', ',');
		paypal.elements.toGet().type(toGetStr);
		const calculatedValue = paypal.calculateToGet(toGet, fee, commission);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');
		cy.log(calculatedValue);
		cy.wait(2000);
		paypal.elements.readonly({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('31870 | TC2: Validar monto a enviar', () => {
		paypal.elements.toGet().clear();
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const amountSent = parseFloat(data.amountSent);
		const amountSentStr = String(data.amountSent).replace('.', ',');
		paypal.elements.amountSent().type(amountSentStr);
		const calculatedValue = paypal.calculateAmountSent(amountSent, fee, commission);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');
		cy.log(calculatedValue);
		cy.wait(2000);
		paypal.elements.recibe({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('31870 | TC3: Validar que el inputValue NO está entre 0 a 306 Caracteres y Infinito', () => {
		const numerostr = data.toGetInfinito;
		const toGetMax = parseFloat(data.toGetInfinito);
		if (numerostr.length > 306) {
			paypal.elements.toGet().type(numerostr);
			const calculatedValue = paypal.calculateToGet(toGetMax, fee, commission);
			const calculatedValueComa = calculatedValue.toString().replace('.', ',');
			cy.log(calculatedValue);
			cy.wait(2000);
			paypal.elements.toCharge({ timeout: 10000 }).should('be.visible').invoke('val').should('equal', 'Infinity');
		} else {
			paypal.elements.toCharge({ timeout: 10000 }).should('be.visible').invoke('val').should('equal', 'NaN');
		}
	});

	it('31870 | TC4: Validar que el input Para recibir acepta valores numéricos negativos (-1)', () => {
		paypal.elements.toGet().clear();
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const toGetNegativo = parseFloat(data.toGetNeg);
		const toGetStr = String(data.toGetNeg).replace('.', ',');
		paypal.elements.toGet().type(toGetStr);
		const calculatedValue = paypal.calculateToGet(toGetNegativo, fee, commission);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');
		cy.wait(2000);
		paypal.elements.toCharge({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('31870 | TC5: Validar que el imput si se envían acepta valores numéricos (-1)', () => {
		paypal.elements.toGet().clear();
		paypal.elements.message().should('be.visible').should('have.text', 'Indica cuánto vas a Recibir');
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		const toGetNegativo = parseFloat(data.toGetNeg);
		const toGetStr = String(data.toGetNeg).replace('.', ',');
		paypal.elements.amountSent().type(toGetStr);
		const calculatedValue = paypal.calculateAmountSent(toGetNegativo, fee, commission);
		const calculatedValueComa = calculatedValue.toString().replace('.', ',');
		cy.wait(2000);
		paypal.elements.recibe({ timeout: 10000 }).should('be.visible').invoke('val').should('eq', calculatedValueComa);
	});

	it('31870 | TC6: Validar que el inputValue si se envían NO está entre 0 a 306 Caracteres y es NaN', () => {
		paypal.elements.amountSent().clear();
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		paypal.elements.message1().should('be.visible').should('have.text', 'Indica cuánto vas a Enviar');
		const numerostr = data.amountSentInfinito;
		const toGet = parseFloat(data.amountSentInfinito);
		if (numerostr.length > 306) {
			paypal.elements.amountSent().type(numerostr);
			const calculatedValue = paypal.calculateAmountSent(toGet, fee, commission);
			const calculatedValueComa = calculatedValue.toString().replace('.', ',');
			cy.wait(2000);
			paypal.elements.recibe({ timeout: 10000 }).should('be.visible').invoke('val').should('equal', 'NaN');
		} else {
			paypal.elements.recibe({ timeout: 10000 }).should('be.visible').invoke('val').should('equal', 'Infinity');
		}
	});

	it('31870 | TC7: Validar que el inputValue si se envían NO se pueden ingresar caracteres especiales', () => {
		paypal.elements.toGet().type(data.special);
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		paypal.elements.message().should('be.visible').should('have.text', 'Solo puedes introducir Números');
	});
	it('31870 | TC8: Validar que el inputValue para recibir NO se pueden ingresar caracteres especiales', () => {
		paypal.elements.amountSent().type(data.special);
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false;
		});
		paypal.elements.recibe().should('be.visible').should('have.value', 'NaN');
	});
});
