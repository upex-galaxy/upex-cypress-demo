describe('✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Should be in the DemoQA page for Text-box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.contains('Text Box').should('be.visible');
		cy.url().should('contain', 'text-box');
    });
    
	it('14982 | TC1: Validate submit the form with ALL fields with valid information', () => {
        cy.fixture('data/TextBoxForm').then((the) =>
        {
            cy.get(the.)
        })
	});
});

it('14982 | TC2: Validate do not submit the form when is missing “@” in the Email field.', () => {});
it('14982 | TC3: Validate do not  submit the form when the Email field do not contain a minimum of 1 Alphanumeric character before “@”', () => {});
it('14982 | TC4: Validate do not  submit the form when the Email field do not contain a minimum of 1 Alphanumeric character after “@”', () => {});
it('14982 | TC5: Validate do not submit the form when the Email field does not contain “.” after “@” and a minimum of 1 Alphanumeric Character.', () => {});
it('14982 | TC6: Validate do not submit the form when the Email field does not contain 2 Alphanumeric characters as a minimum after the “.”', () => {});
it('14982 | TC7: Validate do not submit the form when the Email field contains more than 3 Alphanumeric characters after the “.”', () => {});
it('14982 | TC8: Validate do not submit the form when all fields are Empty', () => {});
