describe('GX3-1699 | ToolsQA | Elements | Text Box: Fill form and Submit', () => { 
    beforeEach('Visit ToolsQa web, TextBox section', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
 })