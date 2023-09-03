class CalculatorPage {
	get = {
		// * ---- Headers -----
		PaypalCommissionsTitle: () => cy.get('h2').eq(0),
		PaypalCalculatorReceiveTitle: () => cy.get('h2').eq(1),
		PaypalCalculatorSendTitle: () => cy.get('h2').eq(2),
		paypalCommission: () => cy.get('input[id="percentage"]'),
		paypalFee: () => cy.get('input[id="fee"]'),
		// * ---- inputs -----
		inputParaRecibir: () => cy.get('input[name=toGet]'),
		inputParaEnviar: () => cy.get('input[name=amountSent]'),
		inputHayQueEnviar: () => cy.get('input[name=toCharge]'),
		inputSeReciben: () => cy.get('input[name=amountAfterFees]'),
		inputCommissionParaRecibir: () => cy.get('input[name=fees1]'),
		inputCommissionParaEnviar: () => cy.get('input[name=fees]'),
		// * ---- Log Messages -----
		logMessageParaRecibir: () => cy.get('#mensaje'),
		logMessageParaEnviar: () => cy.get('#mensaje1'),
	};

	//* Act/Methods (Definen las interacciones del Usuario y Algoritmos de la página)
	getInputValue(InputLocator) {
		return InputLocator.invoke('val');
	}
	getInputNumber(InputLocator) {
		return this.getInputValue(InputLocator).then(val => {
			const valRefined = val.replaceAll('.', '');
			const stringValue = valRefined.replaceAll(',', '.');
			const numberValue = parseFloat(stringValue);
			return numberValue;
		});
	}

	calculateFormulaToGet(inputValue, commission, fee) {
		const value = (inputValue + fee) / (1 - commission);
		return parseFloat(value.toFixed(2));
	}
	calculateFormulaToSend(inputValue, commission, fee) {
		const com = inputValue * commission;
		const value = inputValue - (com + fee);
		return parseFloat(value.toFixed(2));
	}

	getOutputCommision(ToSend, ToGet) {
		const value = ToSend - ToGet;
		return parseFloat(value.toFixed(2));
	}
}

export const calculatorPage = new CalculatorPage();

/*//* Creación del POM

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

//recibe el web element e invoca su valor

export const calculatorPage = new CalculatorPage();
*/
