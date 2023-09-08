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
		return value;
	}

	calculateFormulaToReceive(inputValue, commission, fee) {
		const toCharge = (100 * (fee + inputValue)) / (100 - commission);
		const totalCharge = parseFloat(toCharge.toFixed(2));
		const dif = totalCharge - inputValue;
		const totalFee = parseFloat(dif.toFixed(2)).toString();

		Cypress.env('FeeTotal', totalFee);

		return parseFloat(totalCharge);
	}

	/*calculateFormulaToReceive(inputValue, commission, fee) {
		const result = (inputValue + fee) / (1 - commission);
		return parseFloat(result.toFixed(2));
	}*/

	/**
	 * Calculates the amount to send after applying a commission and a fee.
	 *
	 * @param {number} inputValue - The initial amount
	 * @param {number} commission - The commission rate in percentage
	 * @param {number} fee - The flat fee
	 * @returns {number} - The amount to send, rounded to 2 decimal places
	 */
	calculateFormulaToSend(inputValue, commission, fee) {
		// Validate input arguments
		if (typeof inputValue !== 'number' || typeof commission !== 'number' || typeof fee !== 'number') {
			throw new Error('All arguments must be numbers.');
		}

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
