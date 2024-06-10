class TextBox {
	get={
		nameInput:()=> cy.get('[placeholder="Full Name"]'),
		emailInput:()=> cy.get('#userEmail'),
		currentAdressInput:()=> cy.get ('#currentAddress'), 
		permanentAdressInput:()=> cy.get('#permanentAddress'),
		submitBtn:()=> cy.get('#submit'),
		uploadData:()=> cy.get('#output'),
		outputName:()=> cy.get('#name'),
		outputEmail:()=> cy.get('#email'),
		outputCurrentAddress:()=> cy.get('#output #currentAddress'),
		outputPermanAddress:()=> cy.get('#output #permanentAddress')
	}

	inputName(name){
		this.get.nameInput().type(name)
	}

	inputEmail(email){
		this.get.emailInput().type(email)
	}

	inputCurrentAdress(currentAdress){
		this.get.currentAdressInput().type(currentAdress)
	}

	inputPermanentAdress(permanenAdress){
		this.get.permanentAdressInput().type(permanenAdress)
	}

	clickSubmit(){
		this.get.submitBtn().click()
	}

}

export const textBox = new TextBox 