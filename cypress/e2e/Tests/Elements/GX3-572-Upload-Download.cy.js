import { DownUp } from '@pages/Elements/GX3-572-Upload-Download.Page';
import { removeLogs } from '@helper/RemoveLogs';

describe('GX3-572 GX3-572 ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Precondicion: Usuario debe situarse en la web', () => {
		cy.visit('/upload-download');
		DownUp.get.headerTitle().should('have.text', 'Upload and Download');
		removeLogs();
	});

	it('573 | TC1: Validar poder realizar una Descarga de Archivo cuando se hace clic en el Botón "Download".', () => {
		DownUp.downloadButton();
		cy.wait(2000);
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});

	it('573 | TC2: Validar poder realizar una Subida de Archivo cuando se hace clic en el Botón "Choose file".', () => {
		DownUp.selectFile1Title();
		cy.wait(1000);
		DownUp.get.uploadFileButtonText().should('contain.text', 'upexgalaxy.gif');

		DownUp.selectFile2Title();
		cy.wait(1000);
		DownUp.get.uploadFileButtonText().should('contain.text', 'upexlogo.png');
	});
});
