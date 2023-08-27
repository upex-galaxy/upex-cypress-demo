//* Creación del POM

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

		amountToSend: () => cy.get('[name="toCharge"]'),
		fee1ToRecive: () => cy.get('[name="fees1"]'),
		fee2ToSend: () => cy.get('[name="fees"]').eq(1),
		amountToRecive: () => cy.get('[name="amountAfterFees"]'),
		message: () => cy.get('#mensaje'),
		message1: () => cy.get('#mensaje1'),
	};
}

export const calculatorPage = new CalculatorPage();
