import { removeLogs } from '@helper/RemoveLogs';
import { calculatorPage } from '@pages/paypal/GX-30944_CalculatorPage';
import data from '../../../fixtures/data/GX-30984_CalculatorPaypal.json';

describe('GX-30944: Paypal | Comisiones | Calcular las comisiones para enviar y recibir', () => {
	beforeEach('Precondition: para usar la Calculadora Paypal', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');

		// *descructuración:
		//estoy diciendo que me cree una constante y que guarde la clase calculatorPage.get
		const { paypalFee, paypalCommission, PaypalCommissionsTitle, PaypalCalculatorReceiveTitle, PaypalCalculatorSendTitle } = calculatorPage.get;

		paypalCommission().should('have.value', data.Precondiciones.tasa); //validando tasa(comision)
		paypalFee().should('have.value', data.Precondiciones.tarifa); //validando tarifa (rate )
		PaypalCommissionsTitle().should('have.text', data.Precondiciones.Title.TitleComision); //validando que tenga text titulo de comisiones
		PaypalCalculatorReceiveTitle().should('have.text', data.Precondiciones.TitleRecibir); //validando que tenga texto titulo para recibir
		PaypalCalculatorSendTitle().should('have.text', data.Precondiciones.Title.TitleEnviar); //validando que tenga texto titulo para enviar
	});

	it('30985 | TC1: Validar cálculo de "Hay que Enviar" cuando el monto es válido', () => {
		const { toGetInput, InputEnviarPaypal } = calculatorPage.get;
		//estoy diciendo que me cree una constante que se llame expectedHayqueEnviar y en tengo la formula
		const expectedHayQueEnviar = (data.CalculoRecibir.montoParaRecibir + data.Precondiciones.tarifa) / (1 - data.Precondiciones.tasa);
		//esta tipeando el monto 100 en recibir
		toGetInput().type(data.CalculoRecibir.montoParaRecibir);
		//aca se debe validar que la resultado de la formula se igual en el campo "Hay que Enviar"
		InputEnviarPaypal().should('have',expectedHayQueEnviar);
		
	});
});

removeLogs();
