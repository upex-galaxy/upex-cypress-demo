import { calculatorPage } from '@pages/paypal/GX-31032-calculatorPage';

describe('31032 | Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach('precondición: para usar la calculadora');

	cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

	//destructuración con constantes
	const (paypalFee, paypalCommission, paypalCommissionTitle, paypalCalculatorReceiveTitle, paypalCalculatorSendTitle) = calculatorPage.get;

	paypalCommission().should('have.value', '5,4');
	paypalFee().should('have.value', '0,30');
	paypalCommissionTitle().should('have.text', 'Las Comisiones Paypal');
	paypalCalculatorReceiveTitle().should('have.text', 'Calculadora Paypal para recibir');
	paypalCalculatorSendTitle().should('have.text', 'Calculadora Paypal para Enviar');

	//cy.get('selector').should(have.text, '5,4')
	//calculatorPage.get.paypalCommission().should('have.value', '5,4');
	//calculatorPage.get.paypalFee().should('have.value', '0,30');

	//assertions
	it('31033|TC1 | Verificar poder calcular la comisión cuando se introduce un carácter', () => {
		const { inputParaRecibir, inputParaEnviar, inputHayQueEnviar, inputCommissionParaRecibir } = calculatorPage.get;
		const givenValueToGet = 9;
		const commission = 0.054;
		const fee = 0.3;

		inputParaRecibir().type(givenValueToGet.toString());
		calculatorPage.getInputValue(inputHayQueEnviar()).then(calculatedValueToSend => {
			
		})
	
	});
});

