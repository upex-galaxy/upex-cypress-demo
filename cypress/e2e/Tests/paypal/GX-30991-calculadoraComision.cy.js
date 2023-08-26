import { calculatorPage } from '@pages/paypal/GX-30991_calculatorPage';

describe('GX-30991: Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach('Precondition: para usar la Calculadora Paypal', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

		//* Destruccturación (porque está dentro de un objeto), no aplica para métodos
		const { paypalFee, paypalCommission, PaypalCommissionsTitle, PaypalCalculatorReceiveTitle, PaypalCalculatorSendTitle } = calculatorPage.get;

		paypalCommission().should('have.value', '5,4');
		paypalFee().should('have.value', '0,30');
		PaypalCommissionsTitle().should('have.text', 'Las Comisiones PayPal');
		PaypalCalculatorReceiveTitle().should('have.text', 'Calculadora PayPal para Recibir');
		PaypalCalculatorSendTitle().should('have.text', 'Calculadora PayPal para Enviar');
	});

	it('30993 | TC01: Validar la fórmula que calcula el monto que hay que Enviar dado el Recibido', () => {
		calculatorPage.get.toGetInput().type('10');
		expect(true).equal(true);
		//continuar
	});
});
