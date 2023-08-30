class CalculatorPage {
	get = {
		// obtener Locators
		paypalFee: () => cy.get('#fee'),
		paypalCommission: () => cy.get('#percentage'),
		PaypalCommissionsTitle: () => cy.get('h2').eq(0),
		PaypalCalculatorReceiveTitle: () => cy.get('h2').eq(1),
		PaypalCalculatorSendTitle: () => cy.get('h2').eq(2),
		inputParaRecibir: () => cy.get('input[name=toGet]'),
		inputParaEnviar: () => cy.get('input[name=amountSent]'),
		inputHayQueEnviar: () => cy.get('input[name=toCharge]'),
		inputSeReciben: () => cy.get('input[name=amountAfterFees]'),
		inputCommissionParaRecibir: () => cy.get('input[name=fees1]'),
		inputCommissionParaEnviar: () => cy.get('input[name=fees]'),
	};
	CommissionAndFeeDefault() {
		this.get
			.paypalFee()
			.invoke('val')
			.then(val => {
				const fee = Number(val.replaceAll(',', '.'));
				cy.log(fee);
				Cypress.env('Fee', fee);
			});
		this.get
			.paypalCommission()
			.invoke('val')
			.then(val => {
				const commission = Number(val.replaceAll(',', '.'));
				cy.log(commission);
				Cypress.env('Commission', commission);
			});
	}
	calculateFormulaToGet(inputValue, commission, fee) {
		const toCharge = (100 * (fee + inputValue)) / (0 - commission + 100);
		const TotalCharge = Math.round(toCharge * 100) / 100;
		var Dif = TotalCharge - inputValue;
		Dif = parseFloat(Dif);

		var TotalFee = Math.round(Dif * 100) / 100;
		TotalFee = parseFloat(TotalFee).toString();
		Cypress.env('FeeTotal', TotalFee);
		return parseFloat(TotalCharge);
	}
	calculateFormulaToSend(inputValue, commission, fee) {
		const getAmount = inputValue - ((commission * inputValue) / 100 + fee);
		const sendAmount = Math.round(getAmount * 100) / 100;
		const totalFees = (commission * inputValue) / 100 + fee;

		let sendTotalFees = Math.round(totalFees * 100) / 100;
		sendTotalFees = parseFloat(sendTotalFees).toString();
		Cypress.env('SendTotalFees', sendTotalFees);
		return parseFloat(sendAmount);
	}

	getOutputCommission(ToSend, ToGet) {
		const value = ToSend - ToGet;
		return parseFloat(value.toFixed(2));
	}
	getInputValue(InputLocator) {
		return InputLocator.invoke('val').then(val => {
			const valRefined = val.replaceAll('.', '');
			const stringValue = valRefined.replaceAll(',', '.');
			const numberValue = parseFloat(stringValue);
			return numberValue;
		});
	}
}

export const calculatorPage = new CalculatorPage();
