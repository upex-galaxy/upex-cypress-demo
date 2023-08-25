import { calculatorPage } from '@pages/paypal/GX-30944_CalculatorPage';

describe('GX-30944: Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach('Precondition: para usar la Calculadora Paypal', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

		// *descructuración:
		const { paypalFee, paypalCommission, PaypalCommissionsTitle, PaypalCalculatorReceiveTitle, PaypalCalculatorSendTitle } = calculatorPage.get;

		paypalCommission().should('have.value', '5,4');
		paypalFee().should('have.value', '0,30');
		PaypalCommissionsTitle().should('have.text', 'Las Comisiones PayPal');
		PaypalCalculatorReceiveTitle().should('have.text', 'Calculadora PayPal para Recibir');
		PaypalCalculatorSendTitle().should('have.text', 'Calculadora PayPal para Enviar');
	});

	it('TC1', () => {
		calculatorPage.get.toGetInput().type('10');
		expect(true).equal(true);
	});
});
