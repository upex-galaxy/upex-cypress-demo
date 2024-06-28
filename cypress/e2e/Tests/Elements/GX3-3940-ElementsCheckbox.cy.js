describe('GX-3 3941 | ToolsQA | Elements | Checkbox', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA',() => {
			cy.visit('https://demoqa.com/checkbox');
			cy.url().should('contain','checkbox')
		});
	
});