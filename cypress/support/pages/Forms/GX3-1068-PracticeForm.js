class Datos{
	get = {
		Radiobutton: () => cy.get('div[class*=\'custom-control-inline\']'),
		number: () => cy.get('#userNumber'),
		CheckHobbies: () => cy.get('[for="hobbies-checkbox"]')
        
	};
	selectHobbies(RandomHobbies) {
		this.get.CheckHobbies().eq(RandomHobbies).click();

	}

}
export const FormPage = new Datos();
