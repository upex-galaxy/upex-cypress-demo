//* Creación del POM
//* PARTE 1: Arranges (declaración de variables y atributos) >> Constructor == instanciar el Driver

class CalculatorPage {
	get = {
		//obtener "Locators"
		paypalFee: () => cy.get('#fee'),
		paypalComission: () => cy.get('#percentage'),
		paypalComissionsTitle: () => cy.get('h2').eq(0),
		paypalCalculatorReciveTitle: () => cy.get('h2').eq(1),
		paypalCalculatorSendTitle: () => cy.get(h2).eq(2),
		toGetInput: () => cy.get('[name="toGet"]'),
		toSendInout: () => cy.get('[name="amountSent"]'),
	};

	//* PARTE 2: Act/Methods - Definen las interacciones del Usuario y los Algoritmos de la página
}

export const calculatorPage = new CalculatorPage();
