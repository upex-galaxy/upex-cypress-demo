class POM {
	get = {
		inputName: () => cy.get('[class*=" form-control"]').first(),
		inputLastName: () => cy.get('[class*=" form-control"]').eq(1),
		inputMail: () => cy.get('[class*=" form-control"]').eq(2),
		inputNumber: () => cy.get('[class*=" form-control"]').eq(3),
		buttonGenero: () => cy.get('div[class*="custom-control-inline"]'),
	};

	typeName(randomName) {
		randomName && this.get.inputName().type(randomName);
	}
	typeLastName(randomLastName) {
		randomLastName && this.get.inputLastName().type(randomLastName);
	}    
	typeEmail(randomEmail) { 
		randomEmail && this.get.inputMail().type(randomEmail); 
	}
	typeNumber(randomNumber) {
		randomNumber && this.get.inputNumber().type(randomNumber); }
	clickGenero(num){
		this.get.buttonGenero().eq(num).click();
	}
}
export const pom = new POM ();
