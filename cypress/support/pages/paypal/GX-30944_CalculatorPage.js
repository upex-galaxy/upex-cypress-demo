//* Arrange (Declaraciones de Variables y Atributos) => Constructor == instanciar el Driver / declarar variables.

class CalculatorPage {
	get = {
		// * ---- Headers -----
		PaypalCommissionsTitle: () => cy.get('h2').eq(0),
		PaypalCalculatorReceiveTitle: () => cy.get('h2').eq(1),
		PaypalCalculatorSendTitle: () => cy.get('h2').eq(2),
		paypalFee: () => cy.get('#fee'),
		paypalCommission: () => cy.get('#percentage'),
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
		return InputLocator.invoke('val').then(val => {
			return val;
		});
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
