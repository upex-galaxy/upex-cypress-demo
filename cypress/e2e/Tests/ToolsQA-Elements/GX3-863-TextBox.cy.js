describe('GX3-863 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: El usuario debe estar situado en la página en la sección text-box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
});
