class CalculatorPage {
	get = {
		// * Headers:
		commission: () => cy.get('input[id="percentage"]'),
		fee: () => cy.get('input[id="fee"]'),
		headerTitle: () => cy.get('h1'),
		commissionsTitle: () => cy.get('h2').eq(0),
		calculatorReceiveTitle: () => cy.get('h2').eq(1),
		calculatorSendTitle: () => cy.get('h2').eq(2),

		// * Inputs:
		inputToReceive: () => cy.get('input[name=toGet]'),
		inputToSend: () => cy.get('input[name=amountSent]'),
		inputHayQueEnviar: () => cy.get('input[name=toCharge]'),
		inputSeReciben: () => cy.get('input[name=amountAfterFees]'),
		inputCommissionToReceive: () => cy.get('input[name=fees1]'),
		inputCommissionToSend: () => cy.get('input[name=fees]'),

		// * Messages:
		messageToReceive: () => cy.get('#mensaje'),
		messageToSend: () => cy.get('#mensaje1'),
	};

	getInputValue(inputLocator) {
		return inputLocator.invoke('val');
	}

	getInputNumber(inputLocator) {
		return this.getInputValue(inputLocator).then(val => {
			const valRefined = val.replaceAll('.', '');
			const stringValue = valRefined.replaceAll(',', '.');
			const numberValue = parseFloat(stringValue);
			return numberValue;
		});
	}

	getOutputCommission(ToSend, ToGet) {
		const value = parseFloat(ToSend) - parseFloat(ToGet);
		//return parseFloat(value.toFixed(2));
		return value;
	}

	calculateFormulaToReceive(inputValue, commission, fee) {
		const result = (inputValue + fee) / (1 - commission);
		return parseFloat(result.toFixed(2));
	}

	calculateFormulaToSend(inputValue, commission, fee) {
		const com = inputValue * commission;
		const result = inputValue - (com + fee);
		return parseFloat(result.toFixed(2));
	}
}

export const calculatorPage = new CalculatorPage();
