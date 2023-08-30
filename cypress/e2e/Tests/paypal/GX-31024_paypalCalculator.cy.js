import { calculatorPage } from '@pages/paypal/GX-31024_CalculatorPage';

describe('GX- : Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach(() => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

		const { paypalFee, paypalCommission, PaypalCommissionsTitle, PaypalCalculatorReceiveTitle, PaypalCalculatorSendTitle } = calculatorPage.get;

		paypalCommission().should('have.value', '5,4');
		paypalFee().should('have.value', '0,30');
		PaypalCommissionsTitle().should('have.text', 'Las Comisiones PayPal');
		PaypalCalculatorReceiveTitle().should('have.text', 'Calculadora PayPal para Recibir');
		PaypalCalculatorSendTitle().should('have.text', 'Calculadora PayPal para Enviar');
	});

	it('TC1', () => {
		const { toGetInput, toChargeInput } = calculatorPage.get;

		//toGetInput().type('10');

		const getValueInput = toGetInput().type('10');
		console.log(getValueInput);
		//toChargeInput.should().('10,89');

		expect(true).equal(true);
	});
});

describe('Select a item from PLP', () => {

	it('Practicar CSS Slectors/WebElements', () => { 
		const username = 'standard_user';
		const password = 'secret_sauce';

		cy.visit('')
	});

});
