class Practiceform {
	get = {
		firtname : () => cy.get('#firstName'),
		lastName : () => cy.get('#lastName'),
		dataemail : () => cy.get('#userEmail'),
		genderButton : () => cy.get('[name="gender"]'),
		genderContainer : () => cy.get('.col-md-9.col-sm-12'),
		labelbutton : () => cy.get(`label[for="${labelForButton}"]`),
		numberMobile : () => cy.get('#userNumber'),
		birth : () => cy.get('#dateOfBirthInput'),
		subjectscontainer : () => cy.get('#subjectsContainer'),
		subjectsmenu : () => cy.get('.subjects-auto-complete__menu'),
		hobbies : () => cy.get('input[type="checkbox"]'),
		currentaddress : () => cy.get('#currentAddress'),
		picture : () => cy.get('#uploadPicture'),
		containerIndacator: () => cy.get('.css-tlfecz-indicatorContainer'),
		menurandom: () => cy.get('.css-11unzgr'),
		submit : () => cy.get('#submit'),
		state : () => cy.get('#state'),
		modalcontent: () => cy.get('.modal-content'),

	};
	inputscomplete(name, lastName, email, number, address) {
		this.get.firtname().type(name);
		this.get.lastName().type(lastName);
		this.get.dataemail().type(email);
		this.get.numberMobile().type(number);
		return this.get.currentaddress().type(address);
	}
	genderSelect() {
		this.get.gender().then($gender => {
			const $gender = Cypress._.random(0, 2);
		 this.get.genderContainer().click($gender);
		});
	}
	clickSubmit() {
		this.get.submit().click();
	}
}
export const formpractice = new Practiceform();