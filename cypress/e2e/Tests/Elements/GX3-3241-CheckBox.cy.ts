/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { checkboxPage } from '../../../support/pages/GX3-3241-Checkbox.page';
import data from '../../../fixtures/data/Elements/GX3-3241-checkbox.json';

describe('GX3-3241 | ToolsQA | Elements | Checkbox', () => {

	beforeEach('Precon: Go to DemoQA webpage', () => {
		cy.visit(`${data.baseUrl}${data.checkoxEndpoint}`);
		cy.url().should('contain', data.checkoxEndpoint);
	});
	it('GX3-3242 | TC1 | Verify that the user can expand all folders and then collapse all except "Home"', () => {
		checkboxPage.clickExpandAll();
		checkboxPage.get.folders().should('have.length', data.elementCounts.totalFolders);
		checkboxPage.clickCollapseAll();
		checkboxPage.get.folders().should('have.length', data.elementCounts.visibleFoldersAfterCollapse).and('have.text', data.texts.homeFolder);
	});
	it('GX3-3242 | TC2 | Verify that all folders are selected when the user clicks the "Home" folder', () => {
		checkboxPage.clickExpandAll();
		cy.contains(data.selectorContainsText, data.texts.homeFolder).click();
		checkboxPage.fetchFoldersNames(true);
		checkboxPage.getResultsNames();
		checkboxPage.get.getAlias('@resultNames').then((resultNames: string[]) => {
			checkboxPage.get.getAlias('@allFoldersNames').then((folderNames: string[]) => {
				resultNames.forEach((resultName: string) => {
					expect(folderNames).to.include(resultName);
				});
			});
		});
		checkboxPage.get.result().should('have.css', 'color', data.colors.textSuccess);
	});
	it('GX3-3242 | TC3: Verify that unchecking a parent checkbox(Home folder) unchecks all its child checkboxes', () => {
		checkboxPage.clickExpandAll();
		cy.contains(data.selectorContainsText, data.texts.homeFolder).click();
		checkboxPage.get.folders().should('have.length', data.elementCounts.totalFolders);
		checkboxPage.get.checkedElement().should('have.length', data.elementCounts.totalFolders);
		cy.contains(data.selectorContainsText, data.texts.homeFolder).click();
		checkboxPage.get.checkedElement().should('not.exist');
		checkboxPage.get.result().should('not.exist');
	});
	it('GX3-3242 | TC4: Verify that the user can select a random checkbox', () => {
		checkboxPage.clickExpandAll();
		checkboxPage.selectRandomCheckbox();
		checkboxPage.fetchFoldersNames(false);
		checkboxPage.getResultsNames();
		checkboxPage.get.getAlias('@resultNames').then((resultNames) => {
			checkboxPage.get.getAlias('@randomFolderNames').then((randomFolderNames) => {
				resultNames.forEach((resultName) => {
					expect(randomFolderNames).to.include(resultName);
				});
			});
		});
		checkboxPage.get.result().should('have.css', 'color', data.colors.textSuccess);
	});
});
