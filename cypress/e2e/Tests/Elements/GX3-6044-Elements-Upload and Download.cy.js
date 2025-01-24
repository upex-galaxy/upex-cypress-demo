import { uploadPage } from '@pages/GX3-6044-upload.Page.js';
describe('GX3-6044 | Elementos-Cargar y descargar', () => {
	beforeEach('PRC visitar la pagina', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.get('h1').should('contain.text', 'Upload and Download');
	});

	it('Validar seleccionar download para descargar una imagen', () => {
		uploadPage.clickDownload();
		cy.readFile('cypress/downloads/sampleFile.jpeg').then(file => {
			expect(file).to.exist;
		});

		// 	it.only('Validar poder seleccionar selectFile y subir una imagen', () => {
		// 		uploadPage.subirArchivo();
		// 		uploadPage.element.uploadedFilePath().should('contain.text', 'upexlogo.png');
		// 	});
		// });

		it('Validar la subida de un archivo local', () => {
			cy.get('#uploadFile').click().selectFile('cypress/fixtures/images/upexlogo.png');
			cy.contains('fakepath').should('be.visible');
			cy.contains('fakepath')
				.invoke('text')
				.then(text => {
					expect(text).to.contain('upexlogo.png');
				});
		});
	});
});
