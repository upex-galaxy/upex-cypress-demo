import { Down, load } from '@pages/Elements/GX3-1217-Upload-And-Download';

describe('GX3-1217 | ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Usuario debe ingresar a la pagina solicitada. ', () => {
		cy.visit('/upload-download');
	});
	it('GX3-1218 | TC1: Validar poder realizar una descarga de Archivo cuando se hace clic en el Botón "Download".', () => {
		Down.downloadButton();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});
	it('GX3-1218 | TC2: Validar poder subir un archivo al seleccionar el Botón "Select a file".', () => {
		load.loadFile();
		cy.get('#uploadFile').selectFile('cypress/fixtures/images/upexgalaxy.gif');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();	
