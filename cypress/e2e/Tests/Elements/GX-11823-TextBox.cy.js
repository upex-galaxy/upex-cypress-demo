const fullName = 'Marcos';
const currentAddress = 'AV Moreno';
const permanentAddress = 'Pilar 33';
const userEmail = 'css@mail.com';

describe('US GX-11823 | TS: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondition: be located in text-box', () => {
		cy.visit('https://demoqa.com/text-box');
		//cy.url().should('contain', 'text-box');
	});

	it('11823 | TC1: Validate string is displayed below as a paragraph after submitting if Full Name is filled', () => {
		//const fullName = 'Marcos';
		cy.get('#userName').type(fullName);
		cy.get('#submit').click();
		cy.get('#output').should('contain', 'fullName');
	});
	it('11823 | TC2: Validate string is displayed below as a paragraph after submitting if Current Address is filled', () => {
		cy.get('#currentAddress').type(currentAddress);
		cy.get('#submit').click();
		cy.get('#output').should('contain', 'currentAddress');
	});
	it('11823 | TC3: Validate string is displayed below as a paragraph after submitting if Permanet Address is filled', () => {
		cy.get('#permanentAddress').type(permanentAddress);
		cy.get('#submit').click();
		cy.get('#output').should('contain', 'permanentAddress');
	});
	it('11823 | TC4: Validate no log message is displayed after submitting if Full Name is empty', () => {
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'fullName');
	});
	it('11823 | TC5: Validate no log message is displayed after submitting if Current Address is empty', () => {
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'currentAddress');
	});
	it('11823 | TC6: Validate no log message is displayed after submitting if Permanent Address is empty', () => {
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'permanentAddress');
	});
	it('11823 | TC7: Validate string is displayed below as a paragraph after submitting if Email is successfully filled', () => {
		cy.get('#userEmail').type(userEmail);
		cy.get('#submit').click();
		cy.get('#output').should('contain', 'userEmail');
	});
	it('11823 | TC8: Validate no log message is displayed after submitting if Email is empty', () => {
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'userEmail');
	});
	it('11823 | TC9: Validate email field is displayed as a red border if it do not contain “@”', () => {
		const userEmail = 'cssmail.com';
		cy.get('#userEmail').type(userEmail);
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'userEmail');
	});
	it('11823 | TC10: Validate email field is displayed as a red border if it do not contain (minimum) 1 alphanumeric character before “@”', () => {
		const userEmail = '@mail.com';
		cy.get('#userEmail').type(userEmail);
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'userEmail');
	}); 
	it('11823 | TC11: Validate email field is displayed as a red border if it do not contain (minimum) 1 alphanumeric character after “@”', () => {
		const userEmail = 'css@.com';
		cy.get('#userEmail').type(userEmail);
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'userEmail');
	});
	it('11823 | TC12: Validate email field is displayed as a red border if it do not contain “.” after: 1 alphanumeric character after “@”', () => {
		const userEmail = 'css@mailcom';
		cy.get('#userEmail').type(userEmail);
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'userEmail');
	});
	it('11823 | TC13: Validate email field is displayed as a red border if it don not contain (minimum) 2 alphanumeric characters after “.”', () => {
		const userEmail = 'css@mail.c';
		cy.get('#userEmail').type(userEmail);
		cy.get('#submit').click();
		cy.get('#output').should('not.contain', 'userEmail');
	}); 
});