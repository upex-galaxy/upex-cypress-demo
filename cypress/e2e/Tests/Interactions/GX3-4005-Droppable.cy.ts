describe('GX3 4006 | ToolsQA | Interactions | Droppable', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/droppable');
		cy.url().should('contain', 'droppable');
	});
	//it('4006 | TC1: Validar que las pestañas "Simple", "Accept", "Prevent Propogation" y "Revert Drggable" sean visibles , donde “Simple” se muestra de forma predeterminada', () => {

	//});
});