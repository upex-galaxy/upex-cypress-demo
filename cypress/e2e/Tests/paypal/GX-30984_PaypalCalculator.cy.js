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
//const { toGetInput, toSendInput, InputComision, InputEnviar } = calculatorPage.get;


		
	});
	it.skip('30985 | TC2:Validar cálculo de Se Reciben cuando el monto es válido', () => {
		

		
	});
});
