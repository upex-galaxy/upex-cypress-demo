import { DaU } from '@pages/Elements/GX-23192-download-upload';
describe('US GX-23192 | TS: ✅ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Precondition: Having access to SUT', () => {
		cy.visit('/upload-download');
		DaU.get.mainTitle().should('have.text', 'Upload and Download');
	});

	it('23193 | TC1: Validate button “download” after click downloads an image file to the pc.', () => {
		DaU.downloadButton();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});

	it('23193 | TC2: Validate button “Choose file” after click allows you to update a file.', () => {
		DaU.uploadButton();
		DaU.get.uploadButtonText().should('contain.text', 'upexlogo.png');
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
