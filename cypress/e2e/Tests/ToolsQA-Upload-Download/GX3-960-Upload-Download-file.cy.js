describe(' GX3-960 | Elements | Upload and Download', () => {
	beforeEach('PRC: User must be at the web site section upload-download', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.url().should('contain', 'upload-download');
	});
	it('GX3-963 | TC1: Validate download the file successfully', () => {
		cy.get('.btn.btn-primary').click();
	});
	it('GX3-963 | TC2: Validate upload the file successfully', () => {
		cy.get('[type="file"]').selectFile('cypress/fixtures/images/upexlogo.png');
		cy.get('#uploadedFilePath').should('be.visible');
	});
});
