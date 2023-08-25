//* Arrange (Declaraciones de Variables y Atributos) => Constructor == instanciar el Driver / declarar variables.

class CalculatorPage {
	get = {
		// obtener "Locators"
		paypalFee: () => cy.get('#fee'),
		paypalCommission: () => cy.get('#percentage'),
		PaypalCommissionsTitle: () => cy.get('h2').eq(0),
		PaypalCalculatorReceiveTitle: () => cy.get('h2').eq(1),
		PaypalCalculatorSendTitle: () => cy.get('h2').eq(2),
		toGetInput: () => cy.get('[name="toGet"]'),
		toSendInput: () => cy.get('[name="amountSent"]'),
	};

	//* Act/Methods (Definen las interacciones del Usuario y Algoritmos de la página)
}

export const calculatorPage = new CalculatorPage();
