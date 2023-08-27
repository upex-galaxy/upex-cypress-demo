import { calculatorPage } from '@pages/paypal/GX-30984_CalculatorPage';
import data from '../../../fixtures/data/GX-30984_CalculatorPaypal.json';

describe('US GX-30984 | TS: Paypal | Comisiones | Calcular las comisiones para enviar y recibir ', () => {
	beforeEach('Precondition: para usar la Calculadora Paypal', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

		// *descructuración:
		//estoy diciendo que me cree una constante y que guarde la clase calculatorPage.get
		// const { Rate, Commision, CommissionsTitle, CalculatorRecibirTitle, CalculatorSendTitle } = calculatorPage.get;

		calculatorPage.get.Commision().should('have.value', data.Precondiciones.comision); //validando tasa(comision)
		calculatorPage.get.Rate().should('have.value', data.Precondiciones.rate); //validando tarifa (rate )
		calculatorPage.get.CommissionsTitle().should('have.text', data.Precondiciones.Title.TitleComision); //validando que tenga text titulo de comisiones
		calculatorPage.get.CalculatorRecibirTitle().should('have.text', data.Precondiciones.Title.TitleRecibir); //validando que tenga texto titulo para recibir
		calculatorPage.get.CalculatorSendTitle().should('have.text', data.Precondiciones.Title.TitleEnviar); //validando que tenga texto titulo para enviar
	});

	it('30985 | TC1: Validar cálculo de "Hay que Enviar" cuando el monto es válido', () => {
		// const { toGetInput, toSendInput } = calculatorPage.get;
		//estoy diciendo que me cree una constante que se llame expectedHayqueEnviar y en tengo la formula
		let valueToSend = (data.CalculoRecibir.montoParaRecibir + data.Precondiciones.rate) / (1 - data.Precondiciones.comisionFormula).toFixed(2);
		//esta tipeando el monto 100 en recibir
		calculatorPage.get.toGetInput().type(data.CalculoRecibir.montoParaRecibir);
		calculatorPage.get.toGetInput().should('have.value', data.CalculoRecibir.montoParaRecibir);
		//aca se debe validar que el resultado de la formula se igual al resultado de páypal en el campo "Hay que Enviar"
		calculatorPage.get
			.toSendInput()
			.invoke('val')
			.then(toSendInput => {
				expect(toSendInput).to.equal(valueToSend);
			});
	});
	it.skip('30985 | TC2:Validar cálculo de Se Reciben cuando el monto es válido', () => {});
});
