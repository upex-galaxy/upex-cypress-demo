describe('GX3 4228 |  ToolsQA | Elements | Dynamic Properties',() => {
	beforeEach('PRC: El usuario deberia visitar la pagina',() => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('contain', 'dynamic');
	});
});