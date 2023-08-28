import data from '../../../fixtures/data/GX-30984_CalculatorPaypal.json';

//* Arrange (Declaraciones de Variables y Atributos) => Constructor == instanciar el Driver / declarar variables.
class CalculatorPage {
	//*propiedades

	get = {
		// obtener "Locators"
		//input 0.30usd
		Rate: () => cy.get(data.Precondiciones.Inputs.inputRate), //*propiedad y el metodo que arroja un elemento
		Commision: () => cy.get(data.Precondiciones.Inputs.inputComision),
		CommissionsTitle: () => cy.get(data.Precondiciones.ElementTitle).eq(0),
		CalculatorRecibirTitle: () => cy.get(data.Precondiciones.ElementTitle).eq(1),
		CalculatorSendTitle: () => cy.get(data.Precondiciones.ElementTitle).eq(2),
		toGetInput: () => cy.get(data.CalculoRecibir.Inputs.InputRecibir),
		toSendInput: () => cy.get('[name="toCharge"]'),
		InputEnviar: () => cy.get(data.CalculoRecibir.Inputs.InputEnviar),
		InputComision:()=> cy.get(data.CalculoRecibir.Inputs.InputComision)
	};

	//* Act/Methods (Definen las interacciones del Usuario y Algoritmos de la página)
}

export const calculatorPage = new CalculatorPage();
