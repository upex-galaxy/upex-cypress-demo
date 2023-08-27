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

	it('30993 | TC01: Validar que la cantidad a Recibir solo admita valores valor numéricos', () => {
		const { toGetInput, message } = calculatorPage.get;

		toGetInput().type(1);
		message().should('not.have.text', 'Indica cuánto vas a Recibir');
		message().should('not.have.text', 'Solo puedes introducir Números');
		toGetInput().clear();

		toGetInput().type(-20);
		message().should('not.have.text', 'Indica cuánto vas a Recibir');
		message().should('not.have.text', 'Solo puedes introducir Números');
		toGetInput().clear();

		toGetInput().type(+81);
		message().should('not.have.text', 'Indica cuánto vas a Recibir');
		message().should('not.have.text', 'Solo puedes introducir Números');
		toGetInput().clear();

		toGetInput().type(15.8);
		message().should('not.have.text', 'Indica cuánto vas a Recibir');
		message().should('not.have.text', 'Solo puedes introducir Números');
		toGetInput().clear();

		toGetInput().type('Hola mundo');
		toGetInput().should('not.have.text', null);
		message().should('have.text', 'Indica cuánto vas a Recibir');

		toGetInput().type('!#$%&*(((())+-+');
		toGetInput().should('not.have.text', null);
		message().should('have.text', 'Solo puedes introducir Números');
	});

	it('30993 | TC02: Validar que la cantidad a Enviar solo admita valores valor numéricos', () => {
		const { toSendInput, message1 } = calculatorPage.get;

		toSendInput().type(1);
		message1().should('not.have.text', 'Indica cuánto vas a Enviar');
		message1().should('not.have.text', 'Solo puedes introducir Números');
		toSendInput().clear();

		toSendInput().type(-20);
		message1().should('not.have.text', 'Indica cuánto vas a Enviar');
		message1().should('not.have.text', 'Solo puedes introducir Números');
		toSendInput().clear();

		toSendInput().type(+81);
		message1().should('not.have.text', 'Indica cuánto vas a Enviar');
		message1().should('not.have.text', 'Solo puedes introducir Números');
		toSendInput().clear();

		toSendInput().type(15.8);
		message1().should('not.have.text', 'Indica cuánto vas a Enviar');
		message1().should('not.have.text', 'Solo puedes introducir Números');
		toSendInput().clear();

		/*
		toSendInput().type('Hola mundo');
		toSendInput().should('not.have.text', null);
		message1().should('have.text', 'Indica cuánto vas a Enviar');

		toSendInput().type('!#$%&*(((())+-+"');
		toSendInput().should('not.have.text', null);
		message1().should('have.text', 'Solo puedes introducir Números');
		*/
	});

	//BR: Límite de Input Value = 0
	it('30993 | TC03: Validar fórmula al insertar valor = 0 en ambas calculadoras: "para Recibir" y "para Enviar"', () => {
		calculatorPage.get.toGetInput().type('0');
		calculatorPage.get.amountToSend().should('have.value', '0,32');
		calculatorPage.get.fee1ToRecive().should('have.value', '0,32');

		calculatorPage.get.toSendInput().type('0');
		calculatorPage.get.fee2ToSend().should('have.value', '0,3');
		calculatorPage.get.amountToRecive().should('have.value', '-0,3');
	});

	/*	
	// "comission": 5,4% = 0.054  y  "rate": 0,30 USD
	it.skip('30993 | TC02: Validar fórmula: ("ParaRecibir" + "rate") / (1 - "commission")', () => {
		const toRecive = calculatorPage.get.toGetInput().type('10');
		const dividendo = toRecive + calculatorPage.get.paypalFee();
		const divisor = 1 - calculatorPage.get.paypalCommission();
		const resultReciveFormula = dividendo / divisor;

		const cadena1 = resultReciveFormula.toString();
		calculatorPage.get.toGetInput().clear();
		calculatorPage.get.toGetInput().type(cadena1);
		expect(true).equal(true);
		//calculatorPage.get.amountToSend().should('have.value', valorDecimal);

		//const valorDecimal = parseFloat(resultReciveFormula).toFixed(2); //convertir a decimal con 2 valores después de la coma
		//calculatorPage.get.amountToSend().should('have.value', valorDecimal);
		//calculatorPage.get.toGetInput().clear();
	});

	it.skip('30993 | TC0: ', () => {
		calculatorPage.get.toGetInput().type('10');
		expect(true).equal(true);
		//continuar
	});


	*/
});
