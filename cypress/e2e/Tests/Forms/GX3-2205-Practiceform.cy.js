import { faker } from '@faker-js/faker';
describe('2205 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});
	it('2084 |TC01 Validar rellenar el formulario con datos validos', () => {
		const name = faker.person.firstName();
		const lastname = faker.person.lastName();
		const email = faker.internet.email();
		const number = faker.string.numeric(10);
		const month = faker.date.month();
		const year = new Date().getFullYear();
		const day = faker.number.int({ min: 0, max: 31 });
		const date = `${year}-${month}-${day}`;
		const subjects = ['English', 'History', 'Hindi'];
		const address = faker.location.streetAddress();
		cy.get('#firstName').type(name).should('have.value', name); // firstName

		cy.get('#lastName').type(lastname).should('have.value', lastname); // lastname

		cy.get('#userEmail').type(email).should('have.value', email); // email

		cy.get('[name="gender"]').then($buttons => {
			const randomIndex = Cypress._.random(0, 2);
			 const labelForButton = $buttons[randomIndex].id;
			cy.get(`label[for="${labelForButton}"]`).click(); // genero
		});
		cy.get('#userNumber').type(number).should('have.value', number); // numero telefonico

		cy.get('#dateOfBirthInput').type(date); // fecha

		cy.wrap(subjects).each(subject => {
			cy.get('#subjectsContainer').type(subject);
			cy.get('.subjects-auto-complete__menu').within(() => {
				cy.contains(subject).click();// subject
			});
	    });
		cy.get('input[type="checkbox"]').each($checkbox => {
			cy.wrap($checkbox).check({ force: true }); // hobbies
		});
		cy.get('#currentAddress').type(address); // address

		cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexgalaxy.gif'); // picture

		cy.get('.css-tlfecz-indicatorContainer').eq(1).click();
		const randomMenu = Cypress._.random(0, 4); // state
		cy.get('.css-11unzgr').click(randomMenu);
		cy.get('.css-tlfecz-indicatorContainer').eq(1).click(); // city

		cy.get('.css-11unzgr').each($city => {
			cy.wrap($city).click();
		});
		cy.get('#submit').click(); // submit
	});
});
