describe('GX3-4258 | ToolsQA | Elements | Upload and Download', () => {
	beforeEach('PRC: El Usuario debe estar situado en  DemoQA', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.url().should('contain','upload-download');
	});
	it ('4259 | TC1: Validar que se visualice la descarga de un archivo cuando de presione el boton DOWNLOAD', () => {

	});
	it ('4259 | TC1: Validar que se pueda cargar un archivo cuando se presione el boton elegir archivo', () => {

	});
});