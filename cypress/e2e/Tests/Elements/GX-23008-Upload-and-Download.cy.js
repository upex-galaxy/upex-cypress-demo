import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { Elements } from '@pages/Elements/GX-23008-Upload-and-Download.Page';

describe('✅-tools-qa-elements-upload-and-download', () => {
	beforeEach('Usuario se encuentra dentro del Sut', () => {
		cy.visit('/upload-download');
	});
	it('23009 | TC1: Validar que al seleccionar el botón “Download” se descarga un archivo al ordenador', () => {
		Elements.get.ButtonDownload().click();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});
	it('23009 | TC2: Validar subir un archivo con el botón “Seleccionar archivo”', () => {
		Elements.UploadFile('images/upexlogo.png');
		Elements.get.ValidationFile().should('contain.text', 'upexlogo.png');
	});
});
