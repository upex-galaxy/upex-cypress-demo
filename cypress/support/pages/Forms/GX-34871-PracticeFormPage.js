class PracticeForm {
	get = {
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		email: () => cy.get('#userEmail'),
		maleGender: () => cy.get('#gender-radio-1'),
		femaleGender: () => cy.get('#gender-radio-2'),
		otherGender: () => cy.get('#gender-radio-3'),
		mobile: () => cy.get('#userNumber'),
		//dateBirth: () cy.get(''),
		subjects: () => cy.get('[class="value-container subjects-auto-complete"]'),
		sportsHobbies: () => cy.get('#hobbies-checkbox-1'),
		readingHobbies: () => cy.get('#hobbies-checkbox-2'),
		musicHobbies: () => cy.get('#hobbies-checkbox-3'),
	};
}
export const pForm = new PracticeForm();
