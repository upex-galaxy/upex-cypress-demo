//1.ARRANGE. declaraciones(primero declaro todo), variables y atributos => constructor => declarar variables

class CalculatorPage {
	get = {
		//obtener locators(elemento html)
		paypalFee: () => cy.get('#fee'),
		paypalCommission: () => cy.get('#percentage'),
		paypalCommissionTitle: () => cy.get('h2').eq(0),
		paypalCalculatorReceiveTitle: () => cy.get('h2').eq(1),
		paypalCalculatorSendTitle: () => cy.get('h2').eq(2),
		toGetInput: () => cy.get('[name="toGet"]'),
		toSendInput: () => cy.get('[name="amountSent"]'),
	};
	//2.ACT: Methods (definen las interacciones del usuario y algoritmos de la página)
}
export const calculatorPage = new CalculatorPage();
