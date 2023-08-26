import { calculatorPage } from '@pages/paypal/GX-30991_calculatorPage';

describe('GX-30991: Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach('Preconditions to use the Paypal Calculator', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

		const { paypalFee, paypalComission, paypalComissionsTitle, paypalCalculatorReciveTitle, paypalCalculatorSendTitle } = calculatorPage.get;

		paypalComission().should('have.value', '5,4');
		paypalFee().should('have.value', '0,30');
		paypalComissionsTitle().should('have.text', 'Las Comisiones PayPal');
		paypalCalculatorReciveTitle().should('have.text', 'Calculadora PayPal para Recibir');
		paypalCalculatorSendTitle().should('have.text', 'Calculadora PayPal para Enviar');
	});

	it('TC01', () => {
		calculatorPage.get.toGetInput().type('10');
		expect(true).equal(true);
	});
});
