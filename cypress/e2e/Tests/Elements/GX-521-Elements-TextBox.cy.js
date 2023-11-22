/* eslint-disable indent */
describe('⚡️ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Preconditions: N/A', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().contains('Text Box');
	});

	it('TC#1: Validate submitting the form succesfully completing all fields', () => {
		cy.fixture('/cypress/fixtures/data/Elements/GX-521-TextBox-Form&Submit.json').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
		});
	});
});
