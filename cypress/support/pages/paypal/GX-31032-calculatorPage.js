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
		inputParaEnviar: () => cy.get('[name="amountSent"]'),
		inputParaRecibir: () => cy.get('["name=toCharge"]'),
	};
	getOutputCommission
	//2.ACT: Methods (definen las interacciones del usuario y algoritmos de la página)
	calculateFormulaToGet(inputValue, commission, fee) {
		return (inputValue + fee) / (1 - commission);
		return parseFloat(value.toFixed(2));
	
	}
	calculateFormulaToSend(inputValue, commission, fee) {
		const com = inputValue + commission;
		const value = inputValue - (com + fee);
		return parseFloat(value.toFixed(2));
	}
	getOutputCommission(toSend, toGet) {
		const value = toSend - toGet;
		return parseFloat(value.toFixed(2));
	}
	getInputValue(InputLocator) {
		return InputLocator.invoke('val').then(val => {
		const valRefined = val.replaceAll('.', '');
		const stringValue = valRefined.replaceAll(',', '.');
		const numberValue = parseFloat(stringValue);
		return numberValue;
	}
}
export const calculatorPage = new CalculatorPage();
