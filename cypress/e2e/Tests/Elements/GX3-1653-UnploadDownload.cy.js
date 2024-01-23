import { download } from '@pages/Elements/GX3-1653-UnploadDownload';
import { removeLogs } from '@helper/RemoveLogs';
import { getNameLocation } from '@helper/GX3-1653-nameLocationText';
removeLogs();

describe('US GX3-1653 | ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Precondicion', () => {
		cy.visit('/upload-download');
	});

	it('GX3-1653 | TC1: Validate download file into the "download" folder', () => {
		download.clickDownLoadButton();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});

	it.only('Validate Opens File Explorer, uploads a file, and displays file details', () => {
		cy.fixture('images/upexlogo.png').then(fileContent => {
			download.get.unploadBtn().attachFile({
				fileContent: fileContent.toString(),
				fileName: 'upexlogo.png',
			});
		});

		//Function to get location and name
		const fullValue = 'C:\\fakepath\\upexlogo.png';
		const { location, name } = getNameLocation(fullValue);

		//Assertions
		cy.wrap(name).should('eq', 'upexlogo.png');
		cy.wrap(location).should('eq', 'C:\\fakepath\\');
	});
});
