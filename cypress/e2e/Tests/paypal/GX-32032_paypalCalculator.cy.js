import { calculatorPage } from '@pages/paypal/GX-31032-calculatorPage';

describe('31032 | Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach('precondición: para usar la calculadora');

	cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');
	//cy.get('selector').should(have.text, '5,4')
	calculatorPage.get.paypalCommission().should('have.value', '5,4');

	it('31033|TC1...', () => {});
});
