class POM {
	get = {
		inputName: () => cy.get('input[class*=" form-control"]').first(),
        inputLastName: () => cy.get('input[class*=" form-control"]').eq(1),
        inputMail: () => cy.get('input[class*=" form-control"]').eq(2),
        inputNumber: () => cy.get('input[class*=" form-control"]').eq(3),
        buttonGenero: () => cy.get('input[name="gender"]').first(),
	};

    typeName(randomName) {
        this.get.inputName().type(randomName);
    }
    typeLastName(randomLastName) {
        this.get.inputLastName().type(randomLastName);
    }    
    typeEmail(randomEmail) { 
        this.get.inputMail().type(randomEmail); 
    }
    typeNumber(randomNumber) {
        this.get.inputNumber().type(randomNumber);
}
    clickGenero(){
        this.get.buttonGenero().click({ force: true });
    }
}
export const pom = new POM ();
