class POM {
	get = {
		inputName: () => cy.get('[id="firstName"]'),
		inputLastName: () => cy.get('[id="lastName"]'),
		inputMail: () => cy.get('[id="userEmail"]'),
		inputNumber: () => cy.get('[id="userNumber"]'),
		buttonGenero: () => cy.get('div[class*="custom-control-inline"]'),
		inputSubject: () => cy.get('[id="subjectsContainer"]'),
		buttonHobbie: () => cy.get('div[class*="custom-control-inline"]'),
		buttonUpload: () => cy.get('[class="form-control-file"]', { timeout: 10000 }),
		inputAddress: () => cy.get('[id="currentAddress"]'),
		inputState: () => cy.get('[class=" css-1hwfws3"]').first(),
		inputCity: () => cy.get('[class=" css-1hwfws3"]').eq(1),
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
	typeSubject(randomSubject) { 
		randomSubject && this.get.inputSubject().type(randomSubject + '{enter}'); 
	}
	clickHobbie(num){
		this.get.buttonHobbie().eq(num).click();
	}
	clickUpload(){
		this.get.buttonUpload().click();
	}
	typeAddress(randomAddress) { 
		randomAddress && this.get.inputAddress().type(randomAddress); 
	}
	typeState(state){
		this.get.inputState().type(state + '{enter}');
	}
	typeCity(city){
		this.get.inputCity().type(city + '{enter}');
	}
}
export const pom = new POM ();
