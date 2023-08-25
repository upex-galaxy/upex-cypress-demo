//*Arrange (Declaraciones de Variables y Atributos)=> Constructor== instanciar el driver / declarar variables

class CalculatorPage {
	get = {
		// Obtener "locators"
		paypalFee: () => cy.get('#fee'),
		paypalComission: () => cy.get('#percentage'),
	};

	//*Act/Methods (Definen las interacciones del Usuario y Algoritmo de la pagina)
}
export const calculatorPage = new CalculatorPage();
