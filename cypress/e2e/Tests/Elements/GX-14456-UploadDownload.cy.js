describe('✅ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Usuario debe tener acceso a la página', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.wait(5000);
		cy.url().should('contain', 'upload-download');
	});


	
	it('14457 | TC1: Validar al hacer click en el botón "Download" que el archivo se descargue correctamente en la pc.".', () => {
		cy.get('#downloadButton').click();
		
	});

	it('14457 | TC2: Validar al hacer click en el  botón "Seleccionar archivo" la selección y la carga del mismo.".', () => {
		cy.get('#uploadFile').click();
		cy.get('#uploadFile')
			.attachFile('images/Business-Analyst.png');
	});



});
    


import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

