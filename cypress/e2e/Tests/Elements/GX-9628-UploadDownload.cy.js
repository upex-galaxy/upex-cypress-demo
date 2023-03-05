//importar el Page
import { loadPage } from '@pages/uploadDownload.Page.js'

describe('ToolsQA | loadPage | Upload and Download', () => {
	beforeEach('Precondition: Be located in Upload and Download', () => {
		cy.visit('https://demoqa.com/upload-download')
		cy.url().should('contain', 'download')
	})
	it.only('9629 | TC1: Validar download in tho download PC folder.', () => {
        // Modificado con POM y Feature(Data para los relative Path):
		// // cy.fixture('data/downloadUpload').then((the) => {
		// 	// loadPage.clickDownload()
		// 	// cy.should('have.attr', 'href')
		// 	// cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
		// 	// cy.readFile(the.relativePathDownloadFile).should('exist')
		// // })
		//! Hola Lili! es ELy, puedes hacer una mejor assertion:
		//* para saber que el archivo guardado es el mismo que el descargado.
		loadPage.getDownloadFileName().then((fileName)=>{
			cy.log(fileName)
			loadPage.clickDownload()
			cy.readFile(`cypress/downloads/${fileName}`).should('exist')
		})
		//* Lo que ves con este código, nos ayuda a evitar que el nombre del archivo cambie en el futuro.
		//* también aplicarías un principio del testing para evitar hardcodear misma data siempre.
	})
	it('9629 | TC2: Validar uploaded from PC File Explorer.', () => {
		//cy.get('#uploadFile').selectFile('cypress/fixtures/images/upexlogo.png');
		//cy.get('#uploadedFilePath').should("contain", "upexlogo");

		//Modificado con POM y Feature(Data para los relative Path):
		cy.fixture('data/downloadUpload').then((the) => {
			loadPage.clickUploaded()
			loadPage.selectUploadedFile(the.relativePathUploadFile)
			loadPage.get.generatedFilePath().should('contain', 'Business-Analyst')
		})
		//* Aquí sí está bien! porque el archivo que subimos, es de prueba, y la data que usas puede ser fija,
		//* Pero si es un archivo que fuese obtenido de una fuente externa, debemos iterar entre diff valores.
	})
})

import { removeLogs } from '@helper/RemoveLogs'
removeLogs()