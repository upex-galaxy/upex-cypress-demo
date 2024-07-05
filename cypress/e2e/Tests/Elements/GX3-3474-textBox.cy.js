import newFixture from 'cypress/fixtures/data/Elements/GX3-3474-textBox.json';

describe('GX3-3475 | TS:ToolsQA | Elements | Text Box: Fill form and Submit', () =>
{
	beforeEach('User have to be positioned in the Form Page',() =>
	{
		cy.visit('https://demoqa.com/text-box');
		cy.url('https://demoqa.com/text-box').should('contain', '/text-box');
	});
	it('GX3-3475 | TC1: Validate form submission successfully', () =>
	{
		cy.get(newFixture.username.input).type(newFixture.username.data.valid);
		cy.get(newFixture.email.input).type(newFixture.email.data.validEmail);
		cy.get(newFixture.currentAddress.input).type(newFixture.currentAddress.data.valid);
		cy.get(newFixture.permanentAddress.input).type(newFixture.permanentAddress.data.valid);
		cy.get(newFixture.submit.input).click();
		//Validating the outcome
		cy.get('#name').should('contain.text', newFixture.username.data.valid);
		cy.get('#email').should('contain.text', newFixture.email.data.validEmail);
		cy.get('#output #currentAddress').should('contain.text',newFixture.currentAddress.data.valid);
		cy.get('#output #permanentAddress').should('contain.text', newFixture.permanentAddress.data.valid);
	});
	it ('GX3-3475 | TC2: Validate the form CANNOT be submitted when the email field DOES NOT contain an “@”', () =>
	{
		cy.get(newFixture.username.input).type(newFixture.username.data.valid);
		cy.get(newFixture.email.input).type(newFixture.email.data.emailTC2);
		cy.get(newFixture.currentAddress.input).type(newFixture.currentAddress.data.valid);
		cy.get(newFixture.permanentAddress.input).type(newFixture.permanentAddress.data.valid);
		cy.get(newFixture.submit.input).click();

		//Validating the outcome
		cy.get('#name').should('not.exist'); //Label's existence VALIDATION is the main focus of these asserts
		cy.get('#email').should('not.exist');
		cy.get('#output #currentAddress').should('not.exist');
		cy.get('#output #permanentAddress').should('not.exist');
	});
	it('GX3-3475 | TC3: Validate the form CANNOT be submitted when the email field DOES NOT contain an alphanumeric character before the “@”', () =>
	{
		cy.get(newFixture.username.input).type(newFixture.username.data.valid);
		cy.get(newFixture.email.input).type(newFixture.email.data.emailTC3);
		cy.get(newFixture.currentAddress.input).type(newFixture.currentAddress.data.valid);
		cy.get(newFixture.permanentAddress.input).type(newFixture.permanentAddress.data.valid);
		cy.get(newFixture.submit.input).click();

		//Validating the outcome
		cy.get('#name').should('not.exist'); //Label's existence VALIDATION is the main focus of these asserts
		cy.get('#email').should('not.exist');
		cy.get('#output #currentAddress').should('not.exist');
		cy.get('#output #permanentAddress').should('not.exist');
	});
	it('GX3-3475 | TC4: Validate the form CANNOT be submitted when the email field DOES NOT contain an alphanumeric character after the “@”', () =>
	{
		cy.get(newFixture.username.input).type(newFixture.username.data.valid);
		cy.get(newFixture.email.input).type(newFixture.email.data.emailTC4);
		cy.get(newFixture.currentAddress.input).type(newFixture.currentAddress.data.valid);
		cy.get(newFixture.permanentAddress.input).type(newFixture.permanentAddress.data.valid);
		cy.get(newFixture.submit.input).click();

		//Validating the outcome
		cy.get('#name').should('not.exist'); //Label's existence VALIDATION is the main focus of these asserts
		cy.get('#email').should('not.exist');
		cy.get('#output #currentAddress').should('not.exist');
		cy.get('#output #permanentAddress').should('not.exist');
	});
	it('GX3-3475 | TC5: Validate the form CANNOT be submitted when the email field DOES NOT contain a “.” after an alphanumeric character following the “@', () =>
	{
		cy.get(newFixture.username.input).type(newFixture.username.data.valid);
		cy.get(newFixture.email.input).type(newFixture.email.data.emailTC5);
		cy.get(newFixture.currentAddress.input).type(newFixture.currentAddress.data.valid);
		cy.get(newFixture.permanentAddress.input).type(newFixture.permanentAddress.data.valid);
		cy.get(newFixture.submit.input).click();

		//Validating the outcome
		cy.get('#name').should('not.exist'); //Label's existence VALIDATION is the main focus of these asserts
		cy.get('#email').should('not.exist');
		cy.get('#output #currentAddress').should('not.exist');
		cy.get('#output #permanentAddress').should('not.exist');
	});
	it('GX3-3475 | TC6: Validate the form CANNOT be submitted when the email field DOES NOT contain at least two alphanumeric characters after the “@”', () =>
	{
		cy.get(newFixture.username.input).type(newFixture.username.data.valid);
		cy.get(newFixture.email.input).type(newFixture.email.data.emailTC6);
		cy.get(newFixture.currentAddress.input).type(newFixture.currentAddress.data.valid);
		cy.get(newFixture.permanentAddress.input).type(newFixture.permanentAddress.data.valid);
		cy.get(newFixture.submit.input).click();

		//Validating the outcome
		cy.get('#name').should('not.exist'); //Label's existence VALIDATION is the main focus of these asserts
		cy.get('#email').should('not.exist');
		cy.get('#output #currentAddress').should('not.exist');
		cy.get('#output #permanentAddress').should('not.exist');
	});
	it('GX3-3475 | TC7: Validate the form CAN be submitted when only one field is filled out correctly', () =>
	{
		cy.get(newFixture.username.input).type(newFixture.username.data.valid); //there's only one field with data on it because the rest of fields are empty by default
		cy.get(newFixture.submit.input).click();

		//Validating the outcome
		cy.get('#name').should('contain.text', newFixture.username.data.valid); //Label's existence VALIDATION is the main focus of these asserts
		cy.get('#email').should('not.exist');
		cy.get('#output #currentAddress').should('not.exist');
		cy.get('#output #permanentAddress').should('not.exist');
	});
	it('GX3-3475 | TC8: Validate the form CANNOT be submitted when all fields are empty', () =>
	{
		cy.get(newFixture.submit.input).click(); //All fields are empty by default

		//Validating newFixture outcome
		cy.get('#name').should('not.exist'); //Label's existence VALIDATION is the main focus of these asserts
		cy.get('#email').should('not.exist');
		cy.get('#output #currentAddress').should('not.exist');
		cy.get('#output #permanentAddress').should('not.exist');
	});
});