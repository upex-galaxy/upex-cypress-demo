import data  from '../../../fixtures/data/GX-30984_CalculatorPaypal.json';

//* Arrange (Declaraciones de Variables y Atributos) => Constructor == instanciar el Driver / declarar variables.
class CalculatorPage {
	//*propiedades

	get = {
		// obtener "Locators"
		//input 0.30usd
		paypalFee: () => this.cy.get(data.Precondiciones.Inputs.inputfee), //*propiedad y el metodo que arroja un elemento
		paypalCommission: () => this.cy.get(data.Precondiciones.Inputs.inputPercentage),
		PaypalCommissionsTitle: () => this.cy.get(data.Precondiciones.ElementTitle).eq(0),
		PaypalCalculatorReceiveTitle: () => this.cy.get(data.Precondiciones.ElementTitle).eq(1),
		PaypalCalculatorSendTitle: () => this.cy.get(data.Precondiciones.ElementTitle).eq(2),
		toGetInput: () => this.cy.get(data.CalculoRecibir.Inputs.InputRecibir),
		toSendInput: () => this.cy.get(data.CalculoEnviar.Inputs.inputEnviar),
		InputEnviarPaypal: () => this.cy.get(data.CalculoRecibir.Input.InputEnviar),
	};

	//* Act/Methods (Definen las interacciones del Usuario y Algoritmos de la página)
}

export const calculatorPage = new CalculatorPage();