import { DaU } from '@pages/Elements/GX-23192-download-upload';
describe('US GX-23033 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondition: Having access to SUT', () => {
		cy.visit('/upload-download');
		DaU.get.mainTitle().should('have.text', 'Upload and Download');
	});

	it('GX-23193 | TC1: Validate button “download” after click downloads an image file to the pc.', () => {
		DaU.downloadButton();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
