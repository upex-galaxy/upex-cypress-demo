import data  from '../../../fixtures/data/GX-30984_CalculatorPaypal.json';

//* Arrange (Declaraciones de Variables y Atributos) => Constructor == instanciar el Driver / declarar variables.
class CalculatorPage {
	//*propiedades

	get = {
		// obtener "Locators"
		//input 0.30usd
		Rate: () => this.cy.get(data.Precondiciones.Inputs.inputRate), //*propiedad y el metodo que arroja un elemento
		Commision: () => this.cy.get(data.Precondiciones.Inputs.inputComision),
		CommissionsTitle: () => this.cy.get(data.Precondiciones.ElementTitle).eq(0),
		CalculatorRecibirTitle: () => this.cy.get(data.Precondiciones.ElementTitle).eq(1),
		CalculatorSendTitle: () => this.cy.get(data.Precondiciones.ElementTitle).eq(2),
		toGetInput: () => this.cy.get(data.CalculoRecibir.Inputs.InputRecibir),
		toSendInput: () => this.cy.get(data.CalculoRecibir.Inputs.inputEnviar),
		InputEnviar: () => this.cy.get(data.CalculoEnviar.Inputs.InputEnviar),
	};
	// obtValor() {
	// 	let valueToSend = (data.CalculoRecibir.montoParaRecibir + data.Precondiciones.rate) / (1 - data.Precondiciones.comisionFormula).toFixed(2);
	// 	cy.log(valueToSend);
	// 	return (valueToSend);
	// }

	//* Act/Methods (Definen las interacciones del Usuario y Algoritmos de la página)
}

export const calculatorPage = new CalculatorPage();