import the from '@data/GX3-1699-TextBox.json';

describe('GX3-1699 | ToolsQA | Elements | Text Box: Fill form and Submit', () => { 
	beforeEach('Visit ToolsQa web, TextBox section', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('1700 | TC1: Check that the user can fill the form with valid data.', () => {
		//Fill out the form
		cy.get(the.input.fullName).type(the.data.fullName);
		cy.get(the.input.email).type(the.data.validEmail);
		cy.get(the.input.currentAddress).type(the.data.currentAddress);
		cy.get(the.input.permanentAddress).type(the.data.permanentAddress);

		// Submit data
		cy.get(the.submitButton).click();

		//Assertions
		cy.get(the.output.name).should('include.text', the.data.fullName);
		cy.get(the.output.email).should('include.text', the.data.validEmail);
		cy.get(the.output.currentAddress).should('include.text', the.data.currentAddress);
		cy.get(the.output.permanentAddress).should('include.text', the.data.permanentAddress);
	});
});