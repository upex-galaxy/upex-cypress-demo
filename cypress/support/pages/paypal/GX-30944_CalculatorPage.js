//* Arrange (Declaraciones de Variables y Atributos) => Constructor == instanciar el Driver / declarar variables.

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

	//* Act/Methods (Definen las interacciones del Usuario y Algoritmos de la página)
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

	getInputValue(InputLocator) {
		return InputLocator.invoke('val').then(val => {
			const valRefined = val.replaceAll('.', '');
			const stringValue = valRefined.replaceAll(',', '.');
			const numberValue = parseFloat(stringValue);
			return numberValue;
		});
	}

	getRandomString(givenLength, onlyNumbers, decimalNumbers, specialChars) {
		const numChars = '0123456789';
		const textChars = 'abcdefghijklmnñopqrstuvwxyz';
		const specialChars = '=?¡*¨][_:#"$$&%/';
		const upperTextChars = textChars.toUpperCase();

		let randomString = '';

		if (onlyNumbers === true) {
			for (i = 0; i < givenLength; i++) {
				const randomIndex = Math.floor(Math.random() * numChars.length);
				randomString += numChars[randomIndex];
			}
			return randomString;
		}
	}
}

export const calculatorPage = new CalculatorPage();
