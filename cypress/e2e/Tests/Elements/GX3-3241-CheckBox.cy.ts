import { checkbox } from '../../../support/pages/GX3-3241-Checkbox.page';

describe('GX3-3241 | ToolsQA | Elements | Checkbox', () => {
	// const successTags: string[] = ['home', 'desktop', 'notes', 'commands', 'documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private', 'classified', 'general', 'downloads', 'wordFile', 'excelFile'];

	beforeEach('Precon: Go to DemoQA webpage', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});
	it('GX3-3242 | TC1 | Verify that the user can expand all folders and then collapse all except "Home"', () => {
		checkbox.clickExpandAll();
		checkbox.get.folders().should('have.length', 17);
		checkbox.clickCollapseAll();
		checkbox.get.folders().should('have.length', 1).and('have.text', 'Home');
	});
	it('GX3-3242 | TC2 | Verify that all folders are selected when the user clicks the "Home" folder', () => {
		checkbox.clickExpandAll();
		cy.contains('.rct-title', 'Home').click();
		checkbox.fetchAndStoreFolderNames();
		checkbox.getResultsNames();
		cy.get<string[]>('@resultNames').then((resultNames: string[]) => {
			cy.get<string[]>('@resultNames').then((folderNames: string[]) => {
				resultNames.forEach((resultName: string) => {
					expect(folderNames).to.include(resultName);
				});
			});
		});
		checkbox.get.result().should('have.css', 'color').and('eq', 'rgb(40, 167, 69)');
	});
	it('GX3-3242 | TC3: Verify that unchecking a parent checkbox(Home folder) unchecks all its child checkboxes', () => {
		checkbox.clickExpandAll();
		cy.contains('.rct-title', 'Home').click();
		checkbox.get.folders().should('have.length', 17);
		checkbox.get.checkedElement().should('have.length', 17);
		cy.contains('.rct-title', 'Home').click();
		checkbox.get.checkedElement().should('not.exist');
		checkbox.get.result().should('not.exist');
	});
	it('GX3-3242 | TC4: Verify that checking a mid-level parent checkbox(Desktop, Documents or Downloads) checks all its child checkboxes and parent.', () => {
		checkbox.clickToggleButton();
		checkbox.fetchAndStoreFolderNames();
		cy.get<string[]>('@folderNames').then((folderNames: string[]) => {
			const randomFolder = Math.floor(Math.random() * (folderNames.length - 1) + 1);
			cy.contains('.rct-title', folderNames[randomFolder]).click();
		});
		checkbox.getResultsNames();
		cy.get<string[]>('@resultNames').then((resultNames: string[]) => {
			resultNames.forEach((resultName: string) => {
				expect(successTags).to.include(resultName);
			});
		});
	});
});
