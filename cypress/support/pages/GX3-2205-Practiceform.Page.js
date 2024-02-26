class Practiceform {
	get = {
		firtname : () => cy.get('#firstName'),
		lastName : () => cy.get('#lastName'),
		dataemail : () => cy.get('#userEmail'),
		gender : () => cy.get('[name="gender"]'),
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
		this.get.gender().then($buttons => {
			const randomIndex = Cypress._.random(0, 2);
			const labelForButton = $buttons[randomIndex].id;
			this.get.labelbutton().click();
		});
	}
	selectDatebirth() {
		this.get.birth().type(date);
	}
	subjectsInput() {
		cy.wrap(subjects).each(subject => {
			this.get.subjectscontainer().type(subject);
			this.get.subjectsmenu().within(() => {
				cy.contains(subject).click();
		    });
		});
	}
	hobbiesCheckbox() {
		this.get.hobbies().each($checkbox => {
			cy.wrap($checkbox).check({ force: true });
		});
	}
	pictureSelect() {
		this.get.picture().selectFile('cypress/fixtures/images/upexgalaxy.gif');
	}
	stateRandom() {
		this.get.containerIndacator.eq(1).click();
		const randomStateIndex = Cypress._.random(0, 4);
		const menuState = ['NCR','Uttar Pradesh','Haryana','Rajasthan'];
		const randomState = menuState[randomStateIndex];
		this.get.menurandom().contains(randomState).click();

	}
	cityRandom() {
		this.get.menurandom().each($city => {
			cy.wrap($city).click();
		});
	}
	clickSubmit() {
		this.get.submit().click();
	}
}
export const formpractice = new Practiceform();