import the from '@data/GX3-1699-TextBox.json';

describe('GX3-1699 | ToolsQA | Elements | Text Box: Fill form and Submit', () => { 
	const inputsSelectors = [the.input.fullName, the.input.email, the.input.currentAddress,the.input.permanentAddress];
	const outputSelectors = [the.output.name, the.output.email, the.output.currentAddress, the.output.permanentAddress];
	const dataToFillOutForm = [the.data.fullName, the.data.validEmail, the.data.currentAddress,the.data.permanentAddress];

	beforeEach('Visit ToolsQa web, TextBox section', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('1700 | TC1: Check that the user can fill the form with valid data.', () => {
		//Fill out the form
		inputsSelectors.forEach((input, index) => {
			cy.get(input).type(dataToFillOutForm[index]);
		});

		// Submit data
		cy.get(the.submitButton).click();

		//Assertions
		outputSelectors.forEach((output, index) => {
			cy.get(output).should('include.text', dataToFillOutForm[index]);
		});
	});

	it('1700 | TC2: Check that no message is displayed when leaving fields empty.', () => {
		//Check that each field is empty
		inputsSelectors.forEach(field => {
			cy.get(field).clear();
		});

		// Submit empty form
		cy.get(the.submitButton).click();

		//Assertions
		outputSelectors.forEach(outputSelector => {
			cy.get(outputSelector).should('not.exist');
		});
	});
});