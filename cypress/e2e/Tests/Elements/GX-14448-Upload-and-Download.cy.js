describe('ToolsQA | Elements | Upload and Download ', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/upload-download');
		cy.url().should('contain', 'upload-download');
	});

	it('14449 | TC1: Validar que al seleccionar el botón "descarga" el archivo se descargue en la carpeta de la PC "descargas".', () => {
		cy.get('#downloadButton').click();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});

	it.only('14449 | TC2: Validar que al seleccionar y cargar un archivo, el mismo muestre el nombre y la ubicación.', () => {
		cy.get('#uploadFile').click().attachFile('fixtureRegisterStudent.json');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
