import { calculatorPage } from '@pages/paypal/GX-30984_CalculatorPage';
import data from '../../../fixtures/data/GX-30984_CalculatorPaypal.json';

describe('US GX-30984 | TS: Paypal | Comisiones | Calcular las comisiones para enviar y recibir ', () => {
	beforeEach('Precondition: para usar la Calculadora Paypal', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

		// *descructuración:
		//estoy diciendo que me cree una constante y que guarde la clase calculatorPage.get
		const { Rate, Commision } = calculatorPage.get;

		Commision().should('have.value', data.Precondiciones.comision); //validando tasa(comision)
		Rate().should('have.value', data.Precondiciones.rate); //validando tarifa (rate )
	});

	it.only('30985 | TC1: Validar cálculo de "Hay que Enviar" cuando el monto es válido', () => {
		const { toGetInput, toSendInput, InputComision, InputEnviar } = calculatorPage.get;
		//estoy diciendo que me cree una constante que se llame expectedHayqueEnviar y en tengo la formula
		let valueToSend = (100 + 0.3) / (1 - 0.054).toFixed(12);
		let reducirValue = valueToSend.toFixed(2);
		let ObtValue = reducirValue.replace('.', ',');
		console.log(ObtValue);
		//esta tipeando el monto 100 en recibir
		toGetInput().type(data.CalculoRecibir.montoParaRecibir);
		//aca se debe validar que el resultado de la formula se igual al resultado de páypal en el campo "Hay que Enviar"

		toSendInput()
			.invoke('val')
			.then(toSendInput => {
				expect(toSendInput).to.equal(ObtValue);
			});
		toGetInput().should('have.value', data.CalculoRecibir.montoParaRecibir);
		InputEnviar().should('have.value', ObtValue);
		InputComision().should('have.value', '6,03');
	});
	it.skip('30985 | TC2:Validar cálculo de Se Reciben cuando el monto es válido', () => {});
});
