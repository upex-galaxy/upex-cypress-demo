import { checkboxPage } from '../../../support/pages/GX3-3241-Checkbox.page';

describe('GX3-3241 | ToolsQA | Elements | Checkbox', () => {

	beforeEach('Precon: Go to DemoQA webpage', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});
	it('GX3-3242 | TC1 | Verify that the user can expand all folders and then collapse all except "Home"', () => {
		checkboxPage.clickExpandAll();
		checkboxPage.get.folders().should('have.length', 17);
		checkboxPage.clickCollapseAll();
		checkboxPage.get.folders().should('have.length', 1).and('have.text', 'Home');
	});
	it('GX3-3242 | TC2 | Verify that all folders are selected when the user clicks the "Home" folder', () => {
		checkboxPage.clickExpandAll();
		cy.contains('.rct-title', 'Home').click();
		checkboxPage.fetchFoldersNames(true);
		checkboxPage.getResultsNames();
		cy.get<string[]>('@resultNames').then((resultNames: string[]) => {
			cy.get<string[]>('@allFoldersNames').then((folderNames: string[]) => {
				resultNames.forEach((resultName: string) => {
					expect(folderNames).to.include(resultName);
				});
			});
		});
		checkboxPage.get.result().should('have.css', 'color').and('eq', 'rgb(40, 167, 69)');
	});
	it('GX3-3242 | TC3: Verify that unchecking a parent checkbox(Home folder) unchecks all its child checkboxes', () => {
		checkboxPage.clickExpandAll();
		cy.contains('.rct-title', 'Home').click();
		checkboxPage.get.folders().should('have.length', 17);
		checkboxPage.get.checkedElement().should('have.length', 17);
		cy.contains('.rct-title', 'Home').click();
		checkboxPage.get.checkedElement().should('not.exist');
		checkboxPage.get.result().should('not.exist');
	});
	it('GX3-3242 | TC4: Verify that the user can select a random checkbox', () => {
		checkboxPage.clickExpandAll();
		checkboxPage.selectRandomCheckbox();
		checkboxPage.fetchFoldersNames(false);
		checkboxPage.getResultsNames();
		cy.get<string[]>('@resultNames').then((resultNames: string[]) => {
			cy.get<string[]>('@randomFolderNames').then((randomFolderNames: string[]) => {
				resultNames.forEach((resultName: string) => {
					expect(randomFolderNames).to.include(resultName);
				});
			});
		});
		checkboxPage.get.result().should('have.css', 'color').and('eq', 'rgb(40, 167, 69)');
	});
});
