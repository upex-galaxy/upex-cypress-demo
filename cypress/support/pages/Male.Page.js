

class Male{

	selectMale (){
		cy.get('label[for="gender-radio-1"]').click();
	}
}

export const male = new Male;