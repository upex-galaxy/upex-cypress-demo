//1.ARRANGE. declaraciones(primero declaro todo), variables y atributos => constructor => declarar variables

class CalculatorPage {
	get = {
		//obtener locators(elemento html)
		paypalFee: () => cy.get('#fee'),
		paypalCommission: () => cy.get('#percentage'),
		paypalCommissionTitle: () => cy.get('h2').eq(0),
	};
	//2.ACT: Methods (definen las interacciones del usuario y algoritmos de la página)
}
export const calculatorPage = new CalculatorPage();
