describe('GX3-6020 ToolsQA - Interactions - Selectable', () => {
	beforeEach('PRC El usuario debe visitar la pagina de Demo QA', () => {
		get.visit('https://demoqa.com/selectable');
		get.url().shoul('contain', Selectable);
	});

	// it('TC01 Validar que la lista de seleccion funcione correctamente', () => {
	// 	cy.get('#demo-tab-list').click();
	// });
});
