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

	//* Para números grandes.
	getInputNumber(inputLocator) {
		return this.getInputValue(inputLocator).then(val => {
			const valRefined = val.replaceAll('.', '');
			const stringValue = valRefined.replaceAll(',', '.');
			const numberValue = parseFloat(stringValue);
			return numberValue;
		});
	}

	getOutputCommission(toSend, toReceive) {
		return parseFloat(toSend) - parseFloat(toReceive);
	}

	// Validate input arguments.
	validateInputs(inputValue, commission, fee) {
		if (typeof inputValue !== 'number' || typeof commission !== 'number' || typeof fee !== 'number') {
			throw new Error('All arguments must be numbers.');
		}
	}

	calculateFormulaToReceive(inputValue, commission, fee) {
		this.validateInputs(inputValue, commission, fee);

		const toCharge = (100 * (fee + inputValue)) / (0 - commission + 100);

		const totalCharge = Math.round(toCharge * 100) / 100;

		let dif = parseFloat(totalCharge - inputValue);

		let totalFee = Math.round(dif * 100) / 100;

		totalFee = parseFloat(totalFee).toString();

		Cypress.env('FeeTotal', totalFee);

		return parseFloat(totalCharge);
	}

	calculateFormulaToSend(inputValue, commission, fee) {
		this.validateInputs(inputValue, commission, fee);

		// Calculate the total fees
		const totalFees = (commission * inputValue) / 100 + fee;

		// Calculate the amount to send
		const sendAmount = inputValue - totalFees;

		// Round to 2 decimal places
		const roundToTwoDecimalPlaces = num => Math.round(num * 100) / 100;

		// Update the environment variable and return the final amount
		Cypress.env('SendTotalFees', roundToTwoDecimalPlaces(totalFees).toString());

		return roundToTwoDecimalPlaces(sendAmount);
	}
}

export const calculatorPage = new CalculatorPage();
