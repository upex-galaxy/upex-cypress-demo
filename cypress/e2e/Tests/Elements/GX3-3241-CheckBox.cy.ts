import { checkbox } from '../../../support/pages/GX3-3241-Checkbox.page';

describe('GX3-3241 | ToolsQA | Elements | Checkbox', () => {
	const successTags: string[] = ['home', 'desktop', 'notes', 'commands', 'documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private', 'classified', 'general', 'downloads', 'wordFile', 'excelFile'];

	beforeEach('Precon: Go to DemoQA webpage', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});
	it('GX3-3242 | TC1 | Verify that the user can expand all folders and then collapse all except "Home"', () => {
		checkbox.clickExpandAll();
		checkbox.fetchAndStoreFolderNames();
		cy.get<string[]>('@folderNames').then((folderNames: string[]) => {
			folderNames.forEach((name: string) => {
				cy.contains('.rct-title', name).should('be.visible');
			});
		});
		checkbox.clickCollapseAll();
		checkbox.fetchAndStoreFolderNames();
		cy.get<string[]>('@folderNames').then((folderNames: string[]) => {
			expect(folderNames.length).to.eq(1);
			expect(folderNames[0]).to.eq('Home');
			cy.contains('.rct-title', folderNames[0]).should('be.visible');
		});
	});
	it('GX3-3242 | TC2 | Verify that all folders are selected when the user clicks the "Home" folder', () => {
		cy.contains('.rct-title', 'Home').click();
		checkbox.getResultsNames();
		cy.get<string[]>('@resultNames').then((resultNames: string[]) => {
			resultNames.forEach((resultName: string) => {
				expect(successTags).to.include(resultName);
			});
		});
	});
	it('GX3-3242 | TC3: Verify that unchecking a parent checkbox(Home folder) unchecks all its child checkboxes', () => {
		cy.contains('.rct-title', 'Home').click();
		checkbox.getResultsNames();
		cy.get<string[]>('@resultNames').then((resultNames: string[]) => {
			resultNames.forEach((resultName: string) => {
				expect(successTags).to.include(resultName);
			});
		});
		cy.contains('.rct-title', 'Home').click();
		checkbox.get.result().should('not.exist');
	});
	it.only('GX3-3242 | TC4: Verify that checking a mid-level parent checkbox(Desktop, Documents or Downloads) checks all its child checkboxes and parent.', () => {
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
