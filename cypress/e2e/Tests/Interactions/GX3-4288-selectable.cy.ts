describe('GX3 4288|ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRD: Usuario Deberia Visitar la Pagina Demo QA',() => {
		cy.visit('https://demoqa.com/interaction');
		cy.url().should('contain','interaction');

	});
});