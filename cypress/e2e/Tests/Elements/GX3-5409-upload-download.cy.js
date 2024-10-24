describe('ToolsQA | Elements | Upload and Download', () => {
	beforeEach('User is on the website DemoQA', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.url().should('contain', 'upload-download');
		cy.get('h1').should('have.text', 'Upload and Download');
	});
	it('5414 | TC1: Validate user can download file when clicking the Download Button', () => {
		cy.get('#downloadButton').click();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});
	it('5414 | TC2: Validate user can upload a file', () => {
		cy.get('#uploadFile').click().selectFile('cypress/fixtures/images/upexlogo.png');
		cy.get('#uploadedFilePath').should('contain.text', 'upexlogo.png');
	});
	it('5414 | TC3: Validate user can update the file uploaded for a different one', () => {
		cy.get('#uploadFile').click().selectFile('cypress/fixtures/images/upexlogo.png');
		cy.get('#uploadFile').click().selectFile('cypress/fixtures/images/upexgalaxy.gif');
		cy.get('#uploadedFilePath').should('contain.text', 'upexgalaxy.gif');
	});
});
