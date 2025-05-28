describe('GX3-6271-upload-and-download', () => {
	beforeEach('PRC:User need to be on Upload-Download page', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.url().should('include', 'upload-download');
	});
	it('GX3-6278 | TC1: Validar poder descargar archivo al hacer click en el botton "download"', () => {
		cy.get('#downloadButton').click();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});
	it('GX3-6278 | TC2: Validar poder seleccionar archivo al hacer click en el boton “select file”', () => {
		cy.get('#uploadFile').click().selectFile('cypress/fixtures/images/upexlogo.png');
		cy.get('#uploadedFilePath').should('contain.text', 'upexlogo.png');
	});
	it('GX3-6278 | TC3: Validar poder seleccionar otro archivo al hacer click en el boton “select file”', () => {
		cy.get('#uploadFile').click().selectFile('cypress/fixtures/images/upexlogo.png');
		cy.get('#uploadFile').click().selectFile('cypress/fixtures/images/upexgalaxy.gif');
		cy.get('#uploadedFilePath').should('contain.text', 'upexgalaxy.gif');
	});
});
