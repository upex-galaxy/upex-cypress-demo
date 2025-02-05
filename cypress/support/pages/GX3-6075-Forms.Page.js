class FormsPage {
	Elementos = {
		firstName: () => cy.get('#firstName'),
		larstName: () => cy.get('#lastName'),
		emai: () => cy.get('#userEmail-wrapper'),
		gender1: () => cy.get('#gender-radio-1'),
		gender2: () => cy.get('#gender-radio-2'),
		gender3: () => cy.get('#gender-radio-3'),
		mobilNumber: () => cy.get('#userNumber'),
		dateOfBirth: () => cy.get('#dateOfBirthInput')
	};
}
